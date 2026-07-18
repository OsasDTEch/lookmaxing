 # Stack Cost Calculator

A small, zero-dependency tool for looksmaxxing.guide's Fitness readers. The site's own supplement guide already makes the case for a realistic $40/month stack over a bloated $300/month one, this tool just does the arithmetic so a reader can plug in what they're actually taking and see where they land.

## What it does

- Add each supplement and its monthly cost
- Get a monthly and yearly total
- Get a plain benchmark comparison against the site's own $40 (realistic) and $300 (bloated) reference points

## What it deliberately does not do

No efficacy claims, no "this supplement works" or "this one doesn't" scoring. That requires real evidence review, which is editorial content the site's writers own, not something a calculator should fake. This tool sticks to cost math only, on purpose.

## Why built this way

Deliberate technical choice: no backend, no database, no accounts. A reader's supplement list is personal and mildly sensitive; the honest move is to never send it anywhere; everything runs and stays in the browser tab. That also means zero hosting cost and instant static deploy.

## Files

- `index.html` — structure
- `style.css` — styling
- `script.js` — row management and calculation logic
- `README.md` — this file
