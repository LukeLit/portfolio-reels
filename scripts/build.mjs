// Builds public/manifest.json from entries/*.json (one file per reel cut, written by
// tools/reel/publish.mjs in the portfolio repo). One file per cut means two sessions publishing
// different reels never touch the same file, so their pushes never conflict.
import fs from 'node:fs';
import path from 'node:path';
const dir = 'entries';
const reels = {};
let newest = '';
for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.json')).sort()) {
  const e = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
  const [section, cut] = e.key.split('.');
  (reels[section] ||= {})[cut] = { ...e.files, updated: e.updated, note: e.note || undefined };
  if (e.updated > newest) newest = e.updated;
}
const manifest = { version: newest || new Date(0).toISOString(), reels };
fs.writeFileSync('public/manifest.json', JSON.stringify(manifest, null, 2));
console.log(`manifest: ${Object.keys(reels).length} sections, version ${manifest.version}`);
