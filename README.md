# .github

Org-level assets for [**3sln**](https://github.com/3sln) — Stubbs Software Solutions LLC.

| Path | What it is |
|---|---|
| `profile/README.md` | The org profile, rendered at [github.com/3sln](https://github.com/3sln). |
| `docs/` | The landing page, ready for GitHub Pages. |
| `logo/` | Logo assets. |

## Logo

| File | Use |
|---|---|
| `logo/3sln-lockup.svg` | The lockup. Letters are `currentColor`, so it takes the colour of whatever it sits in. Use this on the web. |
| `logo/3sln-lockup-ondark.svg` | Letters baked off-white, for dark backgrounds. GitHub renders README images in an `<img>`, where `currentColor` cannot resolve — so markdown needs a baked variant. |
| `logo/3sln-lockup-onlight.svg` | The same, baked deep slate for light backgrounds. |
| `logo/3sln-mark.svg` | The mark alone on a rounded plate. Avatars, app icons. |
| `logo/3sln-avatar.png` | 512×512 raster of the mark — GitHub's org avatar upload wants a bitmap. |

The `3` is drawn as a single stroked centreline with uniform weight, so it stays even at
any size. The wordmark is [Inter](https://rsms.me/inter/) Semibold, converted to outlines
so the file needs no font to render. Inter is licensed under the SIL Open Font License.

**Palette** — deep slate `#0F172A`, off-white `#F8FAFC`, and a sky→violet ramp
(`#38BDF8` → `#3B82F6` → `#8B5CF6`) carried across the products.

## Running the page locally

```sh
bun install     # or npm install
bun run dev     # or npm run dev
```

`@web/dev-server` serves `docs/` at <http://localhost:8000> with live reload, and opens a
browser. There is no build step and no bundler: what is served is exactly what ships.

## Publishing

`docs/` is a single self-contained page — no external requests, nothing to compile. Point
GitHub Pages at the `docs/` folder, or serve the directory with anything at all.

`docs/CNAME` claims **3sln.com**, so Pages serves the apex rather than the default
`3sln.github.io/.github/`. That needs the DNS records to match: `A`/`AAAA` on the apex
pointing at GitHub's Pages addresses (or `ALIAS`/`ANAME` where the registrar supports it).
