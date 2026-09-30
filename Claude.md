# Claude.md - Website Maintenance Guide

## Project Overview

**Sukhun Kang's Personal Academic Website**
URL: https://sukhunkang.com
Repository: sukhunkang.github.io

A Next.js 15 academic portfolio website showcasing research, teaching, and the Health Innovation Lab.

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
| Update CV | Replace `/public/Sukhun-Kang-CV.pdf` |
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
  hook: "One-sentence summary.",
  abstract: "...",
  awards: ["2026 Award Name"],
  links: [{ label: "SSRN", url: "https://..." }],
},
```

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

Everything else is a server component; the Research page's abstracts use native `<details>`.

## Styling Conventions

- Tailwind CSS utility classes (no custom CSS beyond globals.css)
- Font: Inter everywhere, loaded through `next/font` in `layout.js` (self-hosted at build)
- One accent color, `accent` (UCSB navy `#003660`, in `tailwind.config.mjs`), for every link:
  - Links inside sentences: `text-accent underline decoration-accent/30 underline-offset-2 hover:decoration-accent`
  - Standalone bracketed links (`[SSRN]`, `[PDF]`): `text-accent hover:underline underline-offset-2`
- Responsive breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Common patterns:
  - Container: `max-w-4xl mx-auto px-4`
  - Spacing: `gap-4`, `mb-6`, `py-12`
  - Typography: `text-gray-900`, `font-medium`, `text-lg`

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
