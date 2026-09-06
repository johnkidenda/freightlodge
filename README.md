# Freight Lodge

Marketing landing page for **Freight Lodge** — door-to-door LTL, quoted and booked without the broker chase.

This repository is **marketing only**. It explains the offer and captures quote interest. It is **not** the quote/book app and is separate from the `ltl-quote` mock.

## Pages URL

GitHub Pages should serve the site from the `main` branch, repository root (`index.html`) — same pattern as `ltl-quote`.

**https://johnkidenda.github.io/freightlodge/**

If that URL 404s, enable Pages once: GitHub → Settings → Pages → Deploy from a branch → `main` / `/` (root). The token used to open this PR cannot flip that switch.

`freightlodge.com` is parked for now. Point DNS here when branding is ready.

## Local preview

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`. The quote form validates in the browser and shows a success state. There is no backend on v1.

## Brand

Nav and hero use Option B (lodge + container). Vector lockup lives in `/assets/`.

## Status

Prototype for visual review. `noindex` is set until the page is ready to publish.
