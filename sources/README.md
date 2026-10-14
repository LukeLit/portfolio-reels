# sources/

Capture masters from Luke's PC, for the cloud sessions that cut the reels (they can't reach the live sites).
Outside `public/`, so never served. 2560x1440 (1280x720 at dpr 2), 30 fps, near-lossless H.264 (CRF 10),
from `tools/reel/capture.mjs` (frame-stepped on a virtual clock) and `tools/reel/encode.sh frames`.
Plans live in the portfolio repo, branch `reel/pc-captures`, under `docs/reels/<section>/plans/`.

## lab/

| File | Length | What's in it | QA (freeze / unique) |
|---|---|---|---|
| `dcb-prod.mp4` | 18.0 s | Den Crawler Bear, live site, AI answering live. Fresh crawler vs a **Goblin Sapper**: 0-0.5 the COMBAT splash, the drone scene and the AI's opening narration typing, Roll initiative (18, you move first), Attack, Roll: d20 19 + 5 = 24 vs AC 13, HIT 6 dmg; the sapper misses; MORE INCOMING (Goblin Sapper B); the AI narrates the hit. Best stretch 0-9 s; after 9 s it's mostly narration typing. Plan: `dcb-prod-take1.json`. | fail (typing reads as holds) / 0.747 |
| `dcb-prod-take2.mp4` | 15.0 s | Same, quicker player pacing (taps to skip narration), vs a **Sewer Rat Swarm**: Roll initiative, Attack, the game's Roll button, HIT 10 dmg, a rat misses, MORE INCOMING. **The live AI leaked a raw `[[FIGHT]]` tag into the narration (about 1-8 s, right panel)**, so prefer take 1, or crop/avoid it. Stalls 11-15 s. Plan: `dcb-prod.json`. | fail / 0.714 |

## design/

| File | Length | What's in it | Scheme | QA (freeze / unique) |
|---|---|---|---|---|
| `live-popz.mp4` | 6.0 s | popzgames.com: Garden of Wonder hero, one slow continuous scroll into "Tap. Plant. Turn the year." and below. | light | pass / 0.923 |
| `live-gamejam.mp4` | 6.0 s | gamejam.metalgames.xyz/gamejam (JAMforge discovery queue): the featured carousel turns on its own while the page scrolls into Rankings. Alt for the live-brief slot. | dark | pass / 0.856 |
| `live-brief.mp4` | 5.0 s | /gamejam/brief?new=1, Brief Light's first question: pick Action, filter the chips by "rpg", pick RPG, clear, then the page's Dice (a live AI reroll: "Mnemosyne proposed this from 2 brief fields", "Rerolling..."). Static form, so it holds between beats: best moments 0.3-1.4 s and the reroll. Nothing submitted. | dark | fail (0.6-1.1, 1.4-5.0) / 0.457 |
| `live-skyburn.mp4` | 6.0 s | skyburn.w3.d.inksrv.com/#game: logo hero, one slow scroll past the announcement-trailer header into What is Skyburn / key features. The site sets its own colours. | light | pass / 0.901 |
| `live-metasin.mp4` | 6.0 s | metasingames.com: Cursebound hero ("Wishlist on Steam"), one slow scroll into What is Cursebound. | light | pass / 0.856 |

Note for the Design reel: Popz, Skyburn and MetaSin are game sites, so these frames are mostly game art
(the /creative "no game imagery" rule in docs/reels/README.md); the slots were already chosen in edl-v3-slots.json.
