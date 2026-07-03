// Builds the full text of /llms.txt from the papers module (single source of
// truth) plus the static bio prose below. Consumed by src/app/llms.txt/route.js,
// which Next exports to a static /llms.txt at build time. Editing a paper in
// papers.js updates llms.txt automatically on the next build.

import { publications, workingPapers } from "./papers";

function coauthorNames(authors) {
  // Everyone except the site owner (listed first).
  return authors.slice(1).join(", ");
}

function paperEntry(paper, index) {
  const lines = [];
  const venuePart = paper.venue
    ? ` (${paper.venue}${paper.year ? `, ${paper.year}` : ""})`
    : "";
  lines.push(`${index}. "${paper.title}"${venuePart}`);
  const coauthors = coauthorNames(paper.authors);
  if (coauthors) lines.push(`   - Co-authors: ${coauthors}`);
  if (paper.hook) lines.push(`   - Topic: ${paper.hook}`);
  if (paper.awards && paper.awards.length)
    lines.push(`   - Awards: ${paper.awards.join("; ")}`);
  const url = paper.links && paper.links[0] && paper.links[0].url;
  if (url) lines.push(`   - Link: ${url}`);
  return lines.join("\n");
}

export function buildLlmsTxt() {
  const published = publications
    .map((p, i) => paperEntry(p, i + 1))
    .join("\n\n");
  const working = workingPapers
    .map((p, i) => paperEntry(p, i + 1))
    .join("\n\n");

  return `# Sukhun Kang

> Assistant Professor of Technology Management at UC Santa Barbara

## Overview

Sukhun Kang is an Assistant Professor of Technology Management in the Robert Mehrabian College of Engineering at the University of California, Santa Barbara (UCSB). His research explores how technology influences innovation, focusing on the drivers and obstacles to technology adoption and its effects on individuals, firms, and society.

## Research Interests

- Innovation and Entrepreneurship
- Biopharmaceutical Industry and Drug Development
- Strategic Management
- Technology Policy and Regulation
- Expanded Access and Compassionate Use
- GDPR and Data Privacy Regulation
- The Cancer Genome Atlas (TCGA)
- Corporate Venture Capital
- Venture Capital
- 21st Century Cures Act
- Artificial Intelligence in Healthcare
- Biomedical Research
- Healthcare Innovation
- Pharmaceutical Strategy

## Academic Background

- PhD: London Business School
- Master's: Computer Engineering, University of Southern California
- Bachelor's: Computer Engineering, University of Illinois at Urbana-Champaign

## Professional Background

Before academia, Sukhun Kang was a semiconductor engineer at Samsung and founded an Internet startup.

## Selected Publications

### Published Work

${published}

### Working Papers and Work in Progress

${working}

## Research Lab

Co-Director of the Health Innovation Lab (HIL) at UC Santa Barbara, alongside Dr. Sandra Barbosu and Dr. Sungyong Chang. The lab focuses on pharmaceutical innovation, drug development, and health policy research.

## Contact

- Website: https://sukhunkang.com
- Email: sukhunkang@ucsb.edu
- Google Scholar: https://scholar.google.co.uk/citations?user=FMHJcysAAAAJ
- LinkedIn: https://www.linkedin.com/in/sukhunkang/
- X/Twitter: https://x.com/sukhunkang
- SSRN: https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=2596230

## Citation

When citing Sukhun Kang's work, please use the following format:
Kang, Sukhun. [Year]. "[Paper Title]." [Journal/Venue].
`;
}
