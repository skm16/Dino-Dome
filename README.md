# Dino Dome

A turn-based dinosaur battle game for kids. 22 fighters, 1 or 2 players, power-ups, and an original soundtrack. It's a plain static site: no build step, no server code, no database.

## What's inside

```
dino-dome/
  index.html              The whole game (HTML, CSS, JS in one file)
  manifest.webmanifest    Lets tablets and phones install it to the home screen
  sw.js                   Offline support (caches everything after the first visit)
  assets/
    audio/dino-battle-march.mp3
    fonts/                Lilita One + Nunito, self-hosted (no Google calls)
    icons/                App icons and favicon
```

## Deploy it

Upload the **contents** of this folder to any static host. All paths are relative, so it works at a domain root or in a subfolder.

**Netlify (fastest):** go to app.netlify.com/drop and drag the `dino-dome` folder onto the page. You get a live HTTPS link in seconds.

**Vercel:** run `npx vercel` inside the folder, or import it from a Git repo. Choose "Other" as the framework, no build command, output directory `.`.

**Cloudflare Pages / GitHub Pages:** push the folder to a repo and point the host at it. No build settings needed.

**On a WordPress site:** upload the folder by SFTP next to WordPress (for example `public_html/dino-dome/`). It will load at `yoursite.com/dino-dome/`. WordPress's default rewrite rules pass real folders straight through, so no plugin or config is needed.

HTTPS is required for the offline and install features. Every host above provides it.

## Test it locally

Opening `index.html` by double-clicking will mostly work, but browsers block the music and offline features on `file://` pages. Run a tiny local server instead:

```
cd dino-dome
npx serve .            # or: python3 -m http.server 8000
```

Then open the address it prints.

## Install on a tablet

Visit the site once, then:
- **iPad / iPhone (Safari):** Share button, then "Add to Home Screen."
- **Android (Chrome):** menu, then "Install app" or "Add to Home screen."

It opens full screen like an app and works offline after that first visit.

## Updating

After you change any file, open `sw.js` and bump `VERSION` (for example `dino-dome-v1` to `dino-dome-v2`). That tells installed copies to fetch the new files.

## Privacy

No analytics, no ads, no cookies, no accounts, and no outside network requests. Nothing a player does leaves the device.

## Before you share it publicly

The soundtrack file credits the artist as "kobyteith." If you didn't create it, confirm you have permission to publish it. To ship without music, delete the MP3 and its line in `sw.js`; the game plays fine without it and the music button just stays quiet.

## How to play

1. Tap **1 Player** (you vs the computer) or **2 Players** (pass-and-play on one device).
2. Pick fighters. Tap any card to hear its roar.
3. Take turns picking moves. Grab glowing power-ups when they drop in; grabbing doesn't use your turn.
4. Knock the other fighter's health to zero to win.

Keyboard: 1 to 6 for moves, G to grab a power-up.
