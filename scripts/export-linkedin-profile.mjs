#!/usr/bin/env bun

import { createServer } from 'node:http';
import { randomBytes } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);
const callbackPath = '/auth/linkedin/callback';
const defaultRedirectUri = `http://localhost:3000${callbackPath}`;
const outputPath = resolve('linkedin-profile.md');

function parseDotenv(content) {
  return Object.fromEntries(
    content
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith('#'))
      .map((line) => {
        const separator = line.indexOf('=');
        if (separator === -1) return [line, ''];

        const key = line.slice(0, separator).trim();
        let value = line.slice(separator + 1).trim();
        if (
          (value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))
        ) {
          value = value.slice(1, -1);
        }
        return [key, value];
      })
  );
}

async function loadConfig() {
  const envPath = resolve('.env');
  const fileEnv = existsSync(envPath)
    ? parseDotenv(await readFile(envPath, 'utf8'))
    : {};
  const config = { ...fileEnv, ...process.env };

  if (!config.LINKEDIN_CLIENT_ID || !config.LINKEDIN_CLIENT_SECRET) {
    throw new Error(
      'LINKEDIN_CLIENT_ID et LINKEDIN_CLIENT_SECRET doivent être définis dans .env.'
    );
  }

  const redirectUri = config.LINKEDIN_REDIRECT_URI ?? defaultRedirectUri;
  const redirectUrl = new URL(redirectUri);
  if (redirectUrl.pathname !== callbackPath) {
    throw new Error(
      `LINKEDIN_REDIRECT_URI doit utiliser le chemin ${callbackPath}.`
    );
  }

  return {
    clientId: config.LINKEDIN_CLIENT_ID,
    clientSecret: config.LINKEDIN_CLIENT_SECRET,
    redirectUri,
    redirectUrl,
  };
}

function markdown(profile) {
  const displayName =
    profile.name ??
    [profile.given_name, profile.family_name].filter(Boolean).join(' ');
  const lines = ['# Profil LinkedIn', ''];

  if (profile.picture)
    lines.push(
      `![${displayName || 'Photo de profil'}](${profile.picture})`,
      ''
    );
  if (displayName) lines.push(`## ${displayName}`, '');

  lines.push('## Informations accessibles via LinkedIn', '');
  const fields = [
    ['Identifiant LinkedIn', profile.sub],
    ['Prénom', profile.given_name],
    ['Nom', profile.family_name],
    ['E-mail', profile.email],
    ['E-mail vérifié', profile.email_verified],
    ['Langue', profile.locale],
  ];

  for (const [label, value] of fields) {
    if (value !== undefined && value !== null && value !== '') {
      lines.push(`- **${label} :** ${String(value)}`);
    }
  }

  lines.push('', `> Export généré le ${new Date().toISOString()}.`);
  return `${lines.join('\n')}\n`;
}

async function exchangeCode(config, code) {
  const body = new URLSearchParams({
    grant_type: 'authorization_code',
    code,
    redirect_uri: config.redirectUri,
    client_id: config.clientId,
    client_secret: config.clientSecret,
  });
  const response = await fetch(
    'https://www.linkedin.com/oauth/v2/accessToken',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    }
  );
  const payload = await response.json();
  if (!response.ok) {
    throw new Error(
      `Échec de l’échange OAuth : ${payload.error_description ?? payload.error ?? response.status}`
    );
  }
  return payload;
}

async function getProfile(accessToken) {
  const endpoints = [
    {
      url: 'https://api.linkedin.com/rest/userinfo',
      headers: {
        'LinkedIn-Version': '202401',
        'X-Restli-Protocol-Version': '2.0.0',
      },
    },
    { url: 'https://api.linkedin.com/v2/userinfo', headers: {} },
  ];
  const errors = [];

  for (const endpoint of endpoints) {
    const response = await fetch(endpoint.url, {
      headers: { Authorization: `Bearer ${accessToken}`, ...endpoint.headers },
    });
    const payload = await response.json();
    if (response.ok) return payload;
    errors.push(
      payload.message ?? payload.error_description ?? String(response.status)
    );
  }

  throw new Error(`Échec de la récupération du profil : ${errors.join(' ; ')}`);
}

async function openBrowser(url) {
  try {
    await execFileAsync('xdg-open', [url]);
  } catch {
    // The authorization URL is also printed for environments without a desktop session.
  }
}

const config = await loadConfig();
const state = randomBytes(32).toString('hex');
const authorizationUrl = new URL(
  'https://www.linkedin.com/oauth/v2/authorization'
);
authorizationUrl.search = new URLSearchParams({
  response_type: 'code',
  client_id: config.clientId,
  redirect_uri: config.redirectUri,
  state,
  scope: 'openid profile email',
}).toString();

const server = createServer(async (request, response) => {
  const requestUrl = new URL(request.url ?? '/', config.redirectUri);
  if (requestUrl.pathname !== config.redirectUrl.pathname) {
    response.writeHead(404).end('Not found');
    return;
  }

  const returnedState = requestUrl.searchParams.get('state');
  const code = requestUrl.searchParams.get('code');
  const error = requestUrl.searchParams.get('error');

  if (error || !code || returnedState !== state) {
    response.writeHead(400, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(
      '<h1>Autorisation LinkedIn refusée ou invalide.</h1><p>Vous pouvez fermer cette page.</p>'
    );
    server.close();
    process.exitCode = 1;
    return;
  }

  try {
    const token = await exchangeCode(config, code);
    const profile = await getProfile(token.access_token);
    await writeFile(outputPath, markdown(profile), 'utf8');

    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(
      `<h1>Export terminé</h1><p>Le fichier <code>${outputPath}</code> a été créé. Vous pouvez fermer cette page.</p>`
    );
    console.log(`Profil exporté dans ${outputPath}`);
    console.log(
      `Jeton obtenu (expire dans ${token.expires_in} secondes). Il n’a pas été enregistré.`
    );
  } catch (error) {
    response.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(
      '<h1>Échec de l’export</h1><p>Consultez le terminal pour le détail.</p>'
    );
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  } finally {
    server.close();
  }
});

server.listen(
  Number(config.redirectUrl.port || 80),
  config.redirectUrl.hostname,
  async () => {
    console.log('Ouvrez et autorisez cette URL LinkedIn :');
    console.log(authorizationUrl.toString());
    console.log('\nEn attente du callback OAuth…');
    await openBrowser(authorizationUrl.toString());
  }
);
