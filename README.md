# Pixelias landing page

A Next.js implementation of the Pixelias studio preview. The home page uses separate React components for the header, hero, services, experience, process, founder, contact, and footer. Artwork and fonts are served locally from `public/preview/assets`.

## Run locally

Install dependencies with `npm ci`, then run `npm run dev`. The page is available at http://localhost:3000. For the contact form, configure `NEXT_PUBLIC_FORM_SUBMIT_TOKEN` in `.env.local` with the existing FormSubmit destination token. Never commit this file. The form is disabled with an explanatory message when the setting is missing. The GitHub Pages build already receives this setting from the repository secret.

Run `npm test -- --runInBand` for the existing tests and the preview's translation and validation test. Run `npm run build` followed by `npx next export` to check the static export used by the existing Pages workflow. Form submissions use the existing FormSubmit POST; validation is local, and FormSubmit handles the response. No real message is needed to test validation.

## Preview behavior

English and Portuguese copy is held in `src/components/preview/Locale.tsx` and `portuguese.js`. The default English copy is colocated with its components. The decorative SVG and Lottie artwork is hidden from assistive technology; reduced motion, failed animation loading, and disabled JavaScript retain the static SVG artwork. Motion pauses offscreen and when the page is hidden.

This branch reproduces the studio preview. Unlike the previous production page, the preview does not currently include the prior cookie banner or Google Analytics integration. Those need a separate product decision and implementation before replacing production. The form endpoint is controlled by the existing environment configuration.

## Styles

Styles live in `src/styles/preview/`: `base.css` contains tokens, typography and shared controls; the other files are named for page sections. Shared keyframes and Lottie fallback states live in `motion.css`. Imports in `src/pages/_app.tsx` define their cascade order. Keep responsive and motion rules with the section they affect, and check reduced motion and the still SVG fallback when changing illustration styles.
