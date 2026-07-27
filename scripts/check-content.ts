import { en } from '../src/data/languages/en';
import { fr } from '../src/data/languages/fr';

const languages = { en, fr };
const approvedEmail = 'pro@julienchapuy.fr';
const removedClaims = [
  'AI Engineer @ Galadrim',
  'Software Engineer @ Galadrim',
  'June 2025 - Present',
  'Juin 2025 - Présent',
  'Paris, France / Remote',
];
const errors: string[] = [];

const assert = (condition: boolean, message: string) => {
  if (!condition) errors.push(message);
};

const shape = (value: unknown): string => {
  if (Array.isArray(value)) return `[${value.map(shape).sort().join(',')}]`;
  if (value && typeof value === 'object') {
    return `{${Object.entries(value as Record<string, unknown>)
      .map(([key, child]) => `${key}:${shape(child)}`)
      .sort()
      .join(',')}}`;
  }
  return typeof value;
};

assert(
  shape(fr) === shape(en),
  'French and English catalogs have different structures.'
);

for (const [lang, data] of Object.entries(languages)) {
  const freelance = data.experience.jobs[0];
  assert(
    freelance?.company === (lang === 'fr' ? 'Indépendant' : 'Freelance'),
    `${lang}: freelance work must be the first experience.`
  );
  assert(
    !freelance?.url,
    `${lang}: freelance work must not have a company URL.`
  );
  assert(
    freelance?.roles[0]?.period.includes(
      lang === 'fr' ? 'Mai 2026' : 'May 2026'
    ),
    `${lang}: freelance work must start in May 2026.`
  );

  const leadRole = data.experience.jobs
    .find((job) => job.company === 'Galadrim')
    ?.roles.find((role) => role.role === 'Lead AI Engineer');
  assert(
    leadRole?.period ===
      (lang === 'fr' ? 'Juin 2025 - Mai 2026' : 'June 2025 - May 2026'),
    `${lang}: Lead AI Engineer must end in May 2026.`
  );
  assert(
    Boolean(data.intro.ctaHref.trim()),
    `${lang}: CTA destination is required.`
  );
  assert(
    data.contact.email === approvedEmail,
    `${lang}: public contact email is incorrect.`
  );

  const serialized = JSON.stringify(data);
  for (const claim of removedClaims) {
    assert(
      !serialized.includes(claim),
      `${lang}: removed claim remains: ${claim}`
    );
  }
}

for (const [lang, data] of Object.entries(languages)) {
  assert(
    !('stats' in data),
    `${lang}: unsupported stats content must not be present.`
  );
}

if (errors.length) {
  throw new Error(errors.map((error) => `- ${error}`).join('\n'));
}

console.log('Content checks passed.');
