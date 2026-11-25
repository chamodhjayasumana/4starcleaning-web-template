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
| `/` | Home |
| `/services` | Services list |
| `/services/:slug` | Individual service |
| `/facilities` | Facilities we clean |
| `/about` | About |
| `/reviews` | Reviews (placeholders) |
| `/articles` | Articles (placeholders) |
| `/articles/:slug` | Article detail |
| `/special-offers` | Special offers (expiry-aware) |
| `/quote` | Two-step free quote form |

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
| `npm test` | Unit tests (Karma; optional) |
