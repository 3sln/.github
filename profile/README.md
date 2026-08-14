<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/3sln/.github/main/logo/3sln-lockup-ondark.svg">
    <img alt="3sln" src="https://raw.githubusercontent.com/3sln/.github/main/logo/3sln-lockup-onlight.svg" width="300">
  </picture>
</p>

<p align="center">
  <strong>A small software lab.</strong><br>
  Minimal libraries, self-hostable products, and tools that outlive their dependencies.
</p>

---

Bootstrapped and independent: no investors, no roadmap written by somebody else, and no
product that stops working when a funding round doesn't land.

Everything here is built on the same foundation. A handful of small libraries — a virtual
DOM, a dependency-injection engine, a docs tool — are the substrate the products are
built from, and they are open source because they are more useful shared than hoarded.

## Products

Software that pays for itself, so that it keeps existing.

| | | |
|---|---|---|
| **[Storia](https://storia.3sln.com)** | Audiobook hosting for independent authors — publish without going through Audible. Every publication gets its own URL, its own installable PWA, and a service worker so the player works offline. Listeners can always download. | [storia.3sln.com](https://storia.3sln.com) |
| **Construe** | A deterministic natural-language → structured-constraint transform. A person types a sentence; you get a constraint object back. No model runs in the request path — parsing is deterministic code, evolved offline behind gates. | *coming soon* |

## Free software

Built because it should exist. No accounts to upsell, no telemetry, no price.

| | | |
|---|---|---|
| **[Donki](https://donki.3sln.com)** | Local-first spaced-repetition flashcards. Markdown cards, built-in text to speech, portable `.donki` decks — and everything you study stays on your device. | [donki.3sln.com](https://donki.3sln.com) |
| **[Bridle](https://bridle.3sln.com)** | Tether an AI agent CLI running on your desktop to your phone, over WebRTC, with voice and chat. Speech is transcribed on-device and only text crosses the wire — no API keys anywhere. | [bridle.3sln.com](https://bridle.3sln.com) |

## Open source

The substrate. Small, dependency-light, and used in production by the products above.
All MIT licensed.

| Project | What it is |
|---|---|
| **[dodo](https://github.com/3sln/dodo)** | A minimal, configurable virtual DOM — with its own reactive cells. |
| **[ngin](https://github.com/3sln/ngin)** | State management by dependency injection: providers, actions, and queries. |
| **[deck](https://github.com/3sln/deck)** | Zero-config, Markdown-based component playgrounds and documentation sites. |
| **[trove](https://github.com/3sln/trove)** | A self-hostable Google Drive, with semantic search and pluggable storage. |
| **[bridle](https://github.com/3sln/bridle)** | Tether an AI agent CLI on your desktop to your phone, over WebRTC. |
| **[bab](https://github.com/3sln/bab)** | A small, pluggable localization library. The source text is the key. |
| **[cerp](https://github.com/3sln/cerp)** | A `CustomElementRegistry` proxy: hot reloading and delayed disconnects. |
| **[js-tools](https://github.com/3sln/js-tools)** | A builder and dev server for apps that ship unbundled ES modules. |
| **[stack](https://github.com/3sln/stack)** | How the pieces fit together — architecture and conventions. |

## How things get built

- **Own the substrate.** The products are built on libraries written here, so a breaking
  change upstream is never somebody else's decision to make.
- **Few dependencies, chosen slowly.** Every dependency is a promise someone else has to keep.
- **Platform-independent by construction.** External capabilities are wrapped behind
  interfaces with a real implementation and a mock, so nothing is welded to one vendor.
- **Self-hostable where it matters.** If your data lives in it, you should be able to run it.
- **Documentation is part of the work**, not a thing that happens afterwards.

---

<p align="center">
  <sub><a href="https://3sln.com">3sln.com</a> · Stubbs Software Solutions LLC</sub>
</p>
