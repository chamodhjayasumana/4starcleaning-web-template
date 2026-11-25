# Four Star General Cleaning Service — Private Sales Demo

Frontend-only Angular concept site for **Four Star General Cleaning Service**, an NYC commercial cleaning company. Use it for private sales walkthroughs. It does **not** send emails, call production APIs, or accept real bookings.

Reference business site: [4starcleaning.com](https://4starcleaning.com/)

## Stack

- Angular 19 (standalone components)
- TypeScript
- SCSS
- Angular Router
- Reactive Forms

## Requirements

- Node.js 18+ (Node 20 or 22 recommended)
- npm 9+

## Setup

```bash
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200).

### Production build

```bash
npm run build
```

Output is written to `dist/four-star-demo/browser`.

## What’s included

| Route | Page |
| --- | --- |
| `/` | Home (services, facilities, awards, process, service area, offers) |
| `/services` | Core + specialty services |
| `/services/:slug` | Individual service (office, janitorial, retail, medical, green, COVID-19, carpet, stripping, high dusting, spring) |
| `/facilities` | Facilities list |
| `/facilities/:slug` | Facility detail (retail, offices, medical, spas, dental, schools, banks, etc.) |
| `/service-area` | Borough notes + Manhattan ZIP sample list |
| `/about` | About |
| `/reviews` | Reviews (placeholders) |
| `/articles` | Articles (placeholders) |
| `/articles/:slug` | Article detail |
| `/special-offers` | Special offers (expiry-aware) |
| `/quote` | Two-step free quote + privacy/terms checkbox |
| `/privacy-policy` | Demo privacy placeholder |
| `/terms-and-conditions` | Demo terms placeholder |

### Quote flow

1. Service, building type, ZIP, frequency (+ optional size / preferred time)
2. Contact details, optional notes, walkthrough request
3. Clearly labeled **demo confirmation** (in-memory only)

Tips for demos:

- Open a service page and click **Get a Quote** — the service is prefilled (`?service=office`, etc.).
- Use **Load sample entry** on the quote page for a ready-made walkthrough.
- Go **Back** from step 2 — entries are preserved.
- ZIP coverage preview is **illustrative sample data**, not live routing.

### Special offers

Offers in `src/app/core/data/offers.data.ts` include an `expiresAt` date. Expired offers are hidden automatically. The demo includes expired samples so you can show that behavior.

### Branding

- Text wordmark until approved brand assets arrive
- Unsplash commercial interior photography (licensed stock)
- Navy + warm gold palette
- Discreet **Website concept · Demo** label in the header/footer
- Sticky **Call / Get a Quote** bar on mobile viewports

### Shared data

Service names and quote options stay aligned via:

- `src/app/core/data/services.data.ts`
- `src/app/core/data/quote-options.data.ts`

## Privacy / demo constraints

- `noindex, nofollow` in `index.html`
- Submissions stored only in a root `QuoteStateService` (memory)
- Click-to-call uses the published number `(212) 741-9400` for realism; quote submit does not create tickets or emails

## Project scripts

| Command | Description |
| --- | --- |
| `npm start` | Dev server on port 4200 |
| `npm run build` | Production build |
| `npm run deploy` | Build + Cloudflare Workers static deploy |
| `npm run preview` | Build + local Wrangler preview |
| `npm test` | Unit tests (Karma; optional) |

## Two design demos

| Demo | App | Local | Cloudflare Worker name |
| --- | --- | --- | --- |
| **A** (original) | `four-star-demo` | `npm start` → :4200 | `4starcleaning-web-template` |
| **B** (alternate mockup) | `four-star-alt` | `npm run start:alt` → :4201 | `4starcleaning-web-template-v2` |

Demo B lives in `projects/four-star-alt` with a diagonal navy hero, Poppins typography, yellow progress-bar quote form, and “Spaces we clean” cards — matching the fresh alternate design concept.

## Cloudflare deploy

### Demo A (existing — keep as-is)

| Field | Value |
| --- | --- |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |

Config: `wrangler.toml` → `dist/four-star-demo/browser`

### Demo B (new Cloudflare app)

Create a **second** Cloudflare app connected to the same repo:

| Field | Value |
| --- | --- |
| Build command | `npm run build:alt` |
| Deploy command | `npx wrangler deploy -c wrangler.alt.toml` |

Config: `wrangler.alt.toml` → `dist/four-star-alt/browser`

Or from your machine:

```bash
npm run deploy      # Demo A
npm run deploy:alt  # Demo B
```
