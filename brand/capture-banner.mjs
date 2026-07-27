// Capture haute fidélité de la bannière LinkedIn depuis brand/preview.html
// (rend les vraies polices Google Fonts, contrairement à une rasterisation SVG statique)
import { chromium } from 'playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = path.dirname(fileURLToPath(import.meta.url));
const target = 'file://' + path.join(dir, 'preview.html');
const out = path.join(dir, 'exports', 'banner-linkedin-1584x396.png');

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1700, height: 700 },
  deviceScaleFactor: 2,
});
await page.goto(target);

// force l'état verrouillé (palette / typo / logo), masque le repère de zone photo
// et neutralise la mise à l'échelle CSS du banc d'essai (sinon on capture la
// version réduite affichée à l'écran, pas les 1584×396 réels)
await page.evaluate(() => {
  document.body.classList.add('hideSafe');
  state.pal = 'retenue';
  state.font = 'bricolage';
  state.logo = 'sealTenshoBroken';
  state.mode = 'dark';
  apply();
  const wrap = document.getElementById('bannerWrap');
  wrap.style.width = '1584px';
  wrap.style.height = '396px';
  wrap.style.overflow = 'visible';
  document.getElementById('bannerScale').style.transform = 'scale(1)';
});

await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(200);

const banner = page.locator('.banner');
await banner.screenshot({ path: out });
await browser.close();
console.log('écrit:', out);
