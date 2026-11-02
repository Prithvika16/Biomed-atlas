# BioMed Atlas

A responsive static educational website about biomedical engineering, built with HTML, CSS and vanilla JavaScript.

## Project structure

```text
biomed-atlas/
├── index.html
├── styles.css
├── script.js
├── robots.txt
├── sitemap.xml
├── netlify.toml
├── assets/
│   └── favicon.svg
└── articles/
    ├── mri-basics.html
    ├── biomechanics.html
    ├── ai-healthcare.html
    ├── ecg-technology.html
    ├── biomaterials.html
    ├── 3d-bioprinting.html
    ├── pulse-oximeter.html
    ├── prosthetics.html
    ├── biosensors.html
    ├── tissue-engineering.html
    └── biomedical-careers.html
```

## Run locally

Open `index.html` in a browser, or use VS Code Live Server.

## Before launch

1. Deploy once to Netlify and choose a site name.
2. Replace every `https://YOUR-SITE-NAME.netlify.app/` placeholder in `index.html`, `robots.txt`, `sitemap.xml`, and article canonical/structured-data URLs with your actual URL.
3. Review all educational content and add author/reviewer information where appropriate.
4. Confirm that image licences and attribution requirements are satisfied before public/commercial use.
5. Submit the sitemap in Google Search Console.
6. Test the contact form with a real deployment. Netlify Forms detects forms during deploy; enable form detection in the Netlify dashboard if needed.

## Wireframe

```text
┌──────────────────────────────────────────────────────────────┐
│ LOGO        Explore  Devices  Innovations  Learn  Careers     │
├──────────────────────────────────────────────────────────────┤
│ HERO: headline + description + CTA       | medical image      │
├──────────────────────────────────────────────────────────────┤
│ INTRO: What is biomedical engineering?                        │
├──────────────────────────────────────────────────────────────┤
│ FOUR TOPIC CARDS: Imaging | Biomechanics | Biomaterials | Neuro│
├──────────────────────────────────────────────────────────────┤
│ MEDICAL DEVICES: MRI | Patient monitors | Prosthetics          │
├──────────────────────────────────────────────────────────────┤
│ INNOVATIONS: AI in healthcare | Bioprinting | Robotics         │
├──────────────────────────────────────────────────────────────┤
│ LEARNING HUB: search + filters + six article cards             │
├──────────────────────────────────────────────────────────────┤
│ CAREER PATHWAYS                                                │
├──────────────────────────────────────────────────────────────┤
│ FAQ                                                           │
├──────────────────────────────────────────────────────────────┤
│ CONTACT FORM                                                  │
├──────────────────────────────────────────────────────────────┤
│ FOOTER                                                        │
└──────────────────────────────────────────────────────────────┘
```

## Netlify deployment

### Recommended: GitHub-connected deployment

1. Create a GitHub repository, for example `biomed-atlas`.
2. Upload/push the contents of this folder to the repository root.
3. Sign in at https://app.netlify.com/.
4. Choose **Add new project → Import an existing project**.
5. Connect GitHub and select `biomed-atlas`.
6. Set the publish directory to `.` (there is no build command).
7. Deploy the site.
8. Copy the generated `*.netlify.app` URL and replace the placeholders in the files.
9. Commit and push the updated files; Netlify will redeploy automatically.

### Alternative: Netlify Drop

1. Sign in at https://app.netlify.com/drop.
2. Extract the ZIP file.
3. Drag the `biomed-atlas` folder into Netlify Drop.
4. Open the generated URL.

## SEO checklist

- Unique page title and meta description on every page.
- One descriptive H1 per page; logical H2/H3 hierarchy.
- Descriptive image alt text.
- Descriptive internal links between related pages.
- Canonical URLs use the real deployed domain.
- `robots.txt` and XML sitemap are reachable.
- Structured data is valid and accurately describes the site.
- Images are compressed and pages are responsive.
- Check accessibility, broken links and mobile layout.
- Use Google Search Console for indexing and query performance.
- Use PageSpeed Insights and Lighthouse for performance/accessibility checks.

## Important

This is an educational demonstration site, not a medical advice service. Have biomedical/clinical claims reviewed by a qualified subject-matter expert before presenting them as authoritative guidance.


## Learning Hub and project credits

The Learning Hub includes searchable topic cards, category filters, a suggested learning path, a quick glossary and eleven introductory articles. The About section links to the Biomedical Innovation Hub blog and the LinkedIn profiles supplied for Mahalakshmi S and Prithvika V. Please verify the About copy with Mahalakshmi before publishing; the profile link may require a signed-in LinkedIn session.

## Analytics setup for the Digital Marketing assignment

1. Create a GA4 property and a web data stream for the deployed Netlify URL.
2. Add the Google tag (Measurement ID beginning `G-`) to every page, or use Google Tag Manager. Do not publish a made-up ID.
3. Verify the domain in Google Search Console and submit `/sitemap.xml`.
4. Wait for real visits and search data; use GA4 reports for users, sessions, views, engagement and acquisition, and Search Console for impressions, clicks, CTR, average position and queries.
5. Capture dated screenshots. If the site is new, explicitly report that data is limited and use Lighthouse/PageSpeed/Screaming Frog observations without inventing traffic figures.

Replace `YOUR-SITE-NAME` in canonical URLs, structured data, `robots.txt` and `sitemap.xml` after choosing the Netlify site name.
