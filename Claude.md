# Claude.md - Website Maintenance Guide

## Project Overview

**Sukhun Kang's Personal Academic Website**
URL: https://sukhunkang.com
Repository: sukhunkang.github.io

A Next.js 15 academic portfolio website showcasing research, teaching, and the Health Innovation Lab.

The CV project (`../CV/`) sits beside this repo. For a new item that belongs on both (a paper, an award, a board seat, a student placement), start the session in the parent folder (`Personal Website/`); its CLAUDE.md says where each kind of item goes on each side.

## Tech Stack

- **Framework:** Next.js 15.3.5 (App Router)
- **React:** 19.0.0
- **Styling:** Tailwind CSS 3.4.1
- **Analytics:** Google Analytics (G-5XRGPSLYNT)
- **Hosting:** GitHub Pages

## Project Structure

```
src/app/
├── layout.js           # Root layout (navbar, footer, schema.org, analytics)
├── page.js             # Home page
├── globals.css         # Global styles
├── metadata.js         # Centralized SEO metadata for all pages
├── components/
│   ├── NavBar.jsx      # Navigation (menu button below 1024 px), CV link
│   ├── Footer.jsx      # Copyright line & profile icons
│   ├── icons.jsx       # Footer profile icons (matching tiles)
│   ├── grid.js         # Shared label-column grid classes (Home, Research, Teaching)
│   └── ProfileCard.jsx  # Lab member cards
├── data/
│   ├── papers.js       # All papers: Research page, JSON-LD, llms.txt
│   ├── news.js         # Home-page News list
│   └── hiwg.js         # HIWG Research Chat schedule
├── about/page.jsx      # Biography, awards, media
├── research/page.jsx   # Publications and working papers
├── teaching/page.jsx   # Courses, cases, testimonials
├── resources/page.jsx  # Educational materials
└── lab/
    ├── hil/page.jsx    # Health Innovation Lab
    └── hiwg/page.jsx   # HIWG Research Chat
```

## Key Files Reference

| Task | File to Edit |
|------|--------------|
| Update CV | Edit `../CV/cv.qmd` and render; `scripts/sync-cv.ps1` copies the PDF to `/public/Sukhun-Kang-CV.pdf` daily |
| Add publication | `src/app/data/papers.js` |
| Update bio/awards | `src/app/about/page.jsx` |
| Update home-page news | `src/app/data/news.js` |
| Change featured papers | `FEATURED` in `src/app/page.js` |
| Add lab member | `src/app/lab/hil/page.jsx` |
| Update courses | `src/app/teaching/page.jsx` |
| Change navigation | `src/app/components/NavBar.jsx` |
| Update SEO metadata | `src/app/metadata.js` |
| Global styles | `src/app/globals.css` |

## Common Tasks

### Adding a New Publication

Add an entry to `publications` or `workingPapers` in `src/app/data/papers.js`. The Research page, the JSON-LD in `layout.js`, and `llms.txt` are all derived from it. Link labels name the destination (`"Journal"`, `"SSRN"`):

```js
{
  id: "wp-9",
  title: "Paper Title",
  venue: "Journal Name",          // omit for working papers
  year: "2026",
  authors: ["Sukhun Kang", "Coauthor"],
  hook: "One-sentence summary.",  // shown only when there is no abstract
  excerpt: "Two or three whole sentences copied verbatim from the abstract.",
  abstract: "...",
  awards: ["2026 Award Name"],
  links: [{ label: "SSRN", url: "https://..." }],
},
```

`excerpt` is the paragraph under the title on Research (and on Home for papers in `FEATURED`). Copy whole sentences from the abstract exactly; never paraphrase or write a summary claim. Pick sentences that stand alone (skip ones that start "This tension", "Such regulations"). A paper with no abstract shows its `hook`.

### Adding a Lab Member

Edit `src/app/lab/hil/page.jsx`. Add member photo to `/public/lab/` and create a ProfileCard:

```jsx
<ProfileCard
  image="/lab/firstname.jpg"
  name="Full Name"
  title="PhD Student"
  university="University Name"
  link="https://linkedin.com/in/..."
/>
```

### Updating Home-Page News

Edit `src/app/data/news.js`. Items are newest first; `date` is `"YYYY-MM"` and displays as "Oct 2026". Take dates from the source, not memory:

```js
export const news = [
  { date: "2026-10", text: "News item text.", url: "/path-or-https-url" },
  // ...
];
```

### Updating the Home Page Bio

Edit `src/app/page.js`. The main bio is in paragraph elements within the content section.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (localhost:3000)
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
```

## Content Notes

- **No CMS/Markdown:** All content is hardcoded in React components
- **Images:** Store in `/public/` directory
- **PDFs:** External links (Dropbox, SSRN) or `/public/` for local files
- **Path aliases:** Use `@/` to import from `src/` (e.g., `@/app/components/NavBar`)

## Client Components

These files use `"use client"` directive for interactivity:
- `NavBar.jsx` - Mobile menu toggle, dropdown
- `AITrafficTracker.jsx` - AI-referral analytics

Everything else is a server component. The Research page's "Abstract" toggle needs no JS: a label around a visually hidden checkbox, with the abstract shown by `group-has-[:checked]/paper:block`, so it sits on one line with the Journal and SSRN links.

## Styling Conventions

- Tailwind CSS utility classes (no custom CSS beyond globals.css)
- Font: Newsreader (serif, normal and italic) everywhere, loaded through `next/font` in `layout.js` (self-hosted at build). Root size 18px (17px below 640px) in `globals.css`, so rem sizes scale with it. Headings are regular or medium weight, not bold.
- UCSB colors only, in `tailwind.config.mjs`:
  - Text is UCSB navy: the `gray` scale is retinted toward `#003660` (900 is the navy itself), so every `text-gray-*` reads as navy or navy-gray. Text shades stop at 500 (contrast 5.1:1); 400 and lighter are for rules and markers.
  - `accent` is UCSB navy `#003660` (the navy in the TM logo); `gold` (`#FEBC11`) marks the current page in the nav.
- Links are underlined in navy; hover thickens the line:
  - Links inside sentences: `text-accent underline decoration-accent underline-offset-2 hover:decoration-2`
  - Standalone links (SSRN, Journal, Syllabus): `textLinkClass` in `components/grid.js`, plain words, no brackets
- Home, Research, and Teaching use the label-column grid in `components/grid.js`: from `md` up, an 11rem column of right-aligned italic labels (section names, journal and year, course level) beside the content; below `md` the labels stack above. Use its exported classes rather than retyping them. Label and content align on their first text baseline (`gridClass` carries `md:items-baseline`); never nudge a label with padding to line it up. A row whose content has no text (photos) uses `gridTopClass`. Side-by-side rows elsewhere (News, About's year lists, the nav) use `items-baseline` the same way.
- Awards are bulleted lists (`bulletListClass`), placed below the paper's summary.
- Responsive breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Container: `max-w-4xl mx-auto px-6`

## Deployment

Site is deployed to GitHub Pages. After pushing to main:
1. GitHub Actions builds the site
2. Deploys to GitHub Pages
3. CNAME file routes to sukhunkang.com

## SEO

Metadata is centralized in `src/app/metadata.js`. Each page imports its metadata in its `layout.js`:

```javascript
import { aboutMetadata } from '../metadata';
export const metadata = aboutMetadata;
```

Schema.org JSON-LD is in the root `layout.js`.

## Git Workflow

**IMPORTANT: Always sync before starting new work:**
```bash
git pull origin main
```

Then commit changes with descriptive messages:
```bash
git add .
git commit -m "Description of changes"
git push origin main
```
