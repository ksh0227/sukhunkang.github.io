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
│   ├── NavBar.jsx      # Navigation with responsive mobile menu
│   ├── Footer.jsx      # Social links & contact
│   ├── LinkCarousel.jsx # Announcement carousel
│   └── ProfileCard.jsx  # Lab member cards
├── about/page.jsx      # Biography and awards
├── research/page.jsx   # Publications and working papers
├── teaching/page.jsx   # Courses, cases, testimonials
├── resources/page.jsx  # Educational materials
└── lab/
    ├── hil/page.jsx    # Health Innovation Lab
    └── hiwg/page.jsx   # HIWG Seminar
```

## Key Files Reference

| Task | File to Edit |
|------|--------------|
| Update CV | Replace `/public/Sukhun-Kang-CV.pdf` |
| Add publication | `src/app/research/page.jsx` |
| Update bio/awards | `src/app/about/page.jsx` |
| Modify announcements | `src/app/components/LinkCarousel.jsx` |
| Add lab member | `src/app/lab/hil/page.jsx` |
| Update courses | `src/app/teaching/page.jsx` |
| Change navigation | `src/app/components/NavBar.jsx` |
| Update SEO metadata | `src/app/metadata.js` |
| Global styles | `src/app/globals.css` |

## Common Tasks

### Adding a New Publication

Edit `src/app/research/page.jsx`. Publications are stored inline as JSX. Add new entries in the publications section following the existing pattern:

```jsx
<li className="mb-6">
  <button onClick={() => togglePaper('paper-id')} ...>
    <span className="font-medium">Paper Title</span>
    <span className="italic">Journal Name</span>
    <span>Year</span>
  </button>
  {expandedPapers['paper-id'] && (
    <div className="mt-2 ...">
      <p>Abstract text...</p>
      <a href="link-to-pdf">PDF</a>
    </div>
  )}
</li>
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

### Updating Announcements

Edit `src/app/components/LinkCarousel.jsx`. The `links` array contains announcement items:

```jsx
const links = [
  { text: 'Announcement text', url: '/path' },
  // Add new announcements here
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
- `LinkCarousel.jsx` - Auto-rotating carousel
- `research/page.jsx` - Expandable paper abstracts
- `about/page.jsx` - Interactive links

## Styling Conventions

- Tailwind CSS utility classes (no custom CSS beyond globals.css)
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
