# PROJECT_STATUS — Central Carpentry demo site

## Purpose
- Demo marketing site for Amish construction co. (pitch to owners). Static, responsive, fast.
- Co: Central Carpentry · 7341 S. Athey Ave, Clare, MI 48617 · 989-487-5792
- ZIP CONFIRMED 48617 (user's original 48632 was an error).

## Current version
- V1.0.1 — 2026-11-25 staged: roofing = ribbed steel ONLY (no standing seam) + status notes. Awaiting commit msg. V1.0.0 PUSHED to github.com/jayman48632/CentralCarpentry-Demo main (commit e56a82e).
- Pages: session proxy blocks Pages API → user enables manually (Settings → Pages → main / root). URL: https://jayman48632.github.io/CentralCarpentry-Demo/
- Repo creation also blocked from session (user must create repos; then add_repo push).
- Preview artifact: https://claude.ai/artifact/S1Pociin6AF4EYp5NMLwzy (src scratchpad/preview/site.html = index.html minus doc wrapper)

## Decisions
- Layout ref: onepagelove.com/marsden-lite (layout yes, orange no).
- COLOR: F1 Navy & Copper — primary #1F3A5F, bg #F8F6F2, text #2F3338, accent #B87333 (accent text #9A5E26, on-dark #D49563), tint #EEF0F3.
- FONTS: #4 Libre Baskerville 700 (headings) + Lato 400/700 (body). Self-hosted woff2, ~67 KB.
- Q1–Q10 defaults accepted: one-page; no-face stock photos; text logo; drafted tagline; "Clare County & surrounding areas"; "call or leave msg"; phone only/tap-to-call; no form; no map embed (address → Google Maps link); GitHub Pages.
- Stack: plain HTML/CSS/vanilla JS, no build. Total ≈136 KB.
- Hosting: GitHub Pages, repo Jayman48632/CentralCarpentry-Demo (public), branch main, root.
- Versioning: version.js "Vx.x.x"+date, shown in footer. Bump on every push; commit msg prefixed w/ version; ALWAYS prompt user for msg.

## V1.1.0 — 2026-11-25 (pushed)
- Real job photos from user (lake home: before/after collage, porch ceiling, framing w/ lake view, finished exterior, flooring). Originals in scratchpad/images (1.webp–5.jpg).
- Hero = 3 slides (lakehouse, framing, porch; worker cropped out of porch). New 'Project spotlight' section (#work) w/ 2016/2018/2026 collage + tags. About img = flooring (4:5). Placeholder SVGs removed.
- WebP lg/sm via srcset; ~950 KB all images, first view ≈150 KB desktop / ≈70 KB phone + fonts.
- Photos APPROVED by user for public use.
- V1.1.1 PUSHED: spotlight copy corrected — Central Carpentry did ONLY the 2026 addition/remodel (not 2016 build, not 2018 reno/steel roof). Tags: Addition, Remodel, Framing, Siding, Windows, Flooring.

## Blockers / pending
- Repo does not exist yet → user creates empty repo on GitHub; then add_repo (push) + push.
- Photos: Claude in Chrome N/A in cloud session (needs user's local Chrome). Unsplash bot wall (401 'checking your browser') blocks curl + headless Chromium — do NOT bypass. Plan: user downloads picks → uploads to repo photos-raw/ (or chat) → Claude converts to WebP + wires in.
- (old) Unsplash hosts allowed in env (unsplash.com, images.unsplash.com) but auto-mode denied scraping Unsplash search endpoint. Current hero/about images = drawn SVG placeholders (img/work-1..4.svg). Options: user supplies photos / picks Unsplash URLs / approves fetch.
- Copy is draft (tagline, about, facts strip) — owners to review; no unverified claims (no "free estimates", no years in business).

## Files
- index.html, css/site.css, js/main.js (slideshow 6s, pause on hover/focus, reduced-motion = no auto), version.js
- fonts/ (woff2 + README license note), img/ (placeholder SVGs), .nojekyll, README.md
- design/color-options.html (https://claude.ai/artifact/PM2Ary5AfeBd3LFhR1pai1), design/font-options.html (https://claude.ai/artifact/JR3qUKCtVnthWtew4JD449)
