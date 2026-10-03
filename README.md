# Ella Erika Lou R. Tabell — Career Portfolio

A static, responsive career portfolio ready to deploy on Vercel.

## Files
- `index.html` — portfolio content and sections
- `styles.css` — responsive styling
- `script.js` — mobile navigation
- `vercel.json` — Vercel configuration

## Deploy with Vercel
### Option A — GitHub (recommended)
1. Create a new GitHub repository, e.g. `ella-career-portfolio`.
2. Upload `index.html`, `styles.css`, `script.js`, and `vercel.json`.
3. In Vercel, choose **Add New → Project**.
4. Import the GitHub repository.
5. Framework Preset: **Other** (or let Vercel detect the static site).
6. Build Command: leave blank.
7. Output Directory: leave blank / root.
8. Click **Deploy**.

### Option B — Vercel CLI
From this folder:
```bash
npm i -g vercel
vercel login
vercel
```
Follow the prompts. For a production deployment, run `vercel --prod`.

## Adding future files
The current portfolio intentionally leaves Letters of Recommendation, Artifacts/Evidences, Professional Goals, Work Samples, and Career Readiness Assessment empty because no final content was provided. Add the content later in `index.html` and, for downloadable PDFs, place them in an `assets/` folder and link them from the relevant section.
