# Runway Command

Runway Command is a **local-first**, phone-focused Progressive Web App (PWA) for daily BCIT preparation.

## Stack

- Vite
- React
- TypeScript
- Plain CSS
- vite-plugin-pwa
- localStorage (no backend, no API, no auth)

## Features

- Today page auto-selects the current weekday.
- Week page with all day themes and mentor quotes.
- Edit page to modify any day's plan and schedule blocks.
- Settings page for global bad-night list and full reset.
- Daily checkbox state that auto-resets each day.
- Broken Day Mode fallback.
- Night Blade quick jump.
- Offline installable PWA.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Storage

All data is stored in browser `localStorage` on-device:

- `runway-command:plans:v1`
- `runway-command:checks:v1`
- `runway-command:checks-date:v1`
- `runway-command:settings:v1`

For mobile install, open the deployed/local site in your phone browser and choose **Add to Home Screen**.
