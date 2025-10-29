# SHIFT · Breathing Tools (PWA)

Instant anxiety intervention with calm/box breathing visuals, voice prompts, and optional Spotify embed.
This repo is ready for **GitHub Pages** deployment.

## Quick Start

1. **Create a new GitHub repo** (public is fine).
2. Upload the files in this folder to the root of your repo.
3. Go to **Settings → Pages**:
   - **Source**: *Deploy from a branch*
   - **Branch**: `main` (or your default) and **/ (root)**
4. Save. After a minute, your PWA will be live at `https://<your-username>.github.io/<repo-name>/`.

> If you prefer using the `/docs` folder approach, move all files into a `docs/` directory and set the Pages Source to `main` → `/docs`.

## Install as an App
- **Android/Chrome**: Menu → *Install app*
- **iOS/Safari**: Share → *Add to Home Screen*
- **Desktop Chrome/Edge**: URL bar *Install* icon

## Files
- `index.html` – The app (ES5 only for maximum compatibility)
- `manifest.webmanifest` – PWA manifest (icons + screenshots)
- `sw.js` – Service worker for offline support
- Icons: `icon-192-transparent-flat.png`, `icon-512-transparent-flat.png`
- Favicons: `favicon-16x16.png`, `favicon-32x32.png`, `favicon-48x48.png`, `favicon-64x64.png`, `favicon.ico`
- Splash: `splash-512x1024.png`, `splash-1024x512.png`, `splash-1024x1024.png`
- `.nojekyll` – Prevents GitHub Pages from Jekyll-processing your files

## Custom Domain (optional)
If using a custom domain, create a `CNAME` file at repo root with your domain name (e.g. `shift.example.com`), then point DNS (CNAME) to `<your-username>.github.io`.

## Notes
- Autoplay policies: one user gesture is required for audio (voice/Spotify).
- You can change icons/splash images anytime; update `manifest.webmanifest` accordingly.
