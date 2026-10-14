# portfolio-reels

The video CDN for portfolio.ironreach.xyz. Vercel serves `public/`; the media lives under
`public/v/<section>/` with content-hashed names (cached for a year), and `public/manifest.json` is built
from `entries/*.json` on every deploy (cached at the edge for a minute). The portfolio reads the manifest
at load time (`js/reel-cdn.js` there), so publishing a new cut here updates the site within a minute,
with no redeploy of the portfolio.

Publish with `tools/reel/publish.mjs` from the portfolio repo; don't hand-edit `entries/`.
The index page lists every cut with a player and links.
