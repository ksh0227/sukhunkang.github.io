// check-cv-page.mjs: does the built /cv page say what the CV PDF says?
//
// Three checks, all against the rendered PDF (pdftotext), section by section
// (the PDF is split at its uppercase headings, the page at its <section>s):
//
// 1. Words. The words of each page section and of the matching PDF section
//    are compared as multisets, so a dropped, extra, or garbled word fails.
//    The page's letterhead (<header>) is left out. On the PDF side, the parts
//    the page omits on purpose (the Personal section, grant amounts), the
//    header, page numbers, and the Last Updated stamp are cut first. The
//    remaining intended differences (the PDF's "[link]" markers and
//    publication numbers; the page's Journal/SSRN link words) are derived
//    from cv.json.
// 2. Order. Every text field in cv.json (a title, a venue, an award line)
//    must occur word for word, in order, in its PDF section, so words moved
//    between fields fail even when the word counts balance.
// 3. Dates. A date the generator split off an item, and a year of talks,
//    must sit next to its text in the PDF's reading order. Entry dates (an
//    entry's own, then its degrees') must appear in page order, since the
//    PDF's reading order lists a section's entry titles and then all their
//    dates row by row; this catches two degrees' years swapped.
//    (pdftotext -layout cannot place them: it draws the CV's italic dates one
//    line above their rows, measured 2026-11-03.)
//
// Usage, after `npx next build`, from the repo root:
//   node scripts/check-cv-page.mjs [--pdf ../CV/Sukhun Kang - CV.pdf] [--html out/cv/index.html]
//                                  [--json src/app/data/cv.json]
// Needs pdftotext on the PATH (Git for Windows ships it).

import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const argv = process.argv.slice(2);
const argValue = (flag, fallback) => {
  const k = argv.indexOf(flag);
  return k >= 0 && argv[k + 1] ? resolve(argv[k + 1]) : fallback;
};
const pdfPath = argValue("--pdf", resolve(repoRoot, "..", "CV", "Sukhun Kang - CV.pdf"));
const htmlPath = argValue("--html", resolve(repoRoot, "out", "cv", "index.html"));
const cvPath = argValue("--json", resolve(repoRoot, "src", "app", "data", "cv.json"));

const cv = JSON.parse(readFileSync(cvPath, "utf8"));
const problems = [];

// ---------------------------------------------------------------- words

function tokens(text) {
  return (
    text
      .normalize("NFKC") // ligatures (fi, fl) to letters
      .replace(/[‘’']/g, "")
      .toLowerCase()
      .match(/[a-z0-9]+/g) || []
  );
}
function bag(text) {
  const counts = new Map();
  for (const w of tokens(text)) counts.set(w, (counts.get(w) || 0) + 1);
  return counts;
}
const plain = (v) => (v == null ? "" : typeof v === "string" ? v : v.map((s) => s.t).join(""));
const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// ---------------------------------------------------------------- the PDF side

// pdftotext writes CRLF on Windows; normalize so line patterns hold everywhere.
const pdftotext = (args) => execFileSync("pdftotext", args, { encoding: "utf8" }).replace(/\r\n?/g, "\n");
const rawPdf = pdftotext([pdfPath, "-"]);

function preparePdf(text) {
  // Page numbers: a line holding only a number, just before each page break.
  const pages = (text.match(/\f/g) || []).length;
  const numbered = (text.match(/^\d+\n+(?=\f)/gm) || []).length;
  if (numbered !== pages) throw new Error(`PDF text: ${pages} pages but ${numbered} page-number lines; layout changed?`);
  text = text.replace(/^\d+\n+(?=\f)/gm, "");
  // The form feed itself starts the next page's first line, so a section
  // heading at the top of a page would read "\fHEADING" and miss the ^HEADING
  // match below (first seen 2026-11-13, when OTHER PUBLICATIONS opened page 4).
  text = text.replace(/\f/g, "\n");

  // The page omits the Personal section, which runs from its heading to the
  // Last Updated stamp, and everything after the stamp (stamp, page end).
  const personal = text.search(/^PERSONAL$/m);
  const stamp = text.search(/^Last Updated:/m);
  if (personal < 0 || stamp < personal) throw new Error("PDF text: no PERSONAL section before Last Updated");
  const personalWords = tokens(text.slice(personal, stamp)).length;
  text = text.slice(0, personal);

  // Grant amounts, such as "($4K/year)".
  const amounts = text.match(/\(\$[^)]*\)/g) || [];
  text = text.replace(/\(\$[^)]*\)/g, " ");
  console.log(
    `cut from the PDF side: ${pages} page numbers; Personal (${personalWords} words); ` +
      `${amounts.length} amounts ${amounts.join(" ")}; the header and the Last Updated stamp`,
  );
  return text;
}
const pdfText = preparePdf(rawPdf);

// ---------------------------------------------------------------- the page side

function decode(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ");
}
const stripTags = (html) => decode(html.replace(/<!-- -->/g, "").replace(/<[^>]+>/g, " "));

function pageSections(html) {
  const main = /<main[\s\S]*?<\/main>/.exec(html);
  if (!main) throw new Error(`no <main> in ${htmlPath}`);
  let m = main[0].replace(/<script[\s\S]*?<\/script>/g, " ");
  if ((m.match(/<header\b/g) || []).length !== 1) throw new Error("expected one <header> (the letterhead) in <main>");
  m = m.replace(/<header\b[\s\S]*?<\/header>/, " ");
  const out = [];
  for (const s of m.matchAll(/<section\b[^>]*>([\s\S]*?)<\/section>/g)) {
    const h2 = /<h2\b[^>]*>([\s\S]*?)<\/h2>/.exec(s[1]);
    if (!h2) throw new Error("a <section> without an <h2> on the page");
    out.push({ title: stripTags(h2[1]).trim(), text: stripTags(s[1]) });
  }
  // Everything in <main> outside the header must sit in a section.
  const outside = m.replace(/<section\b[\s\S]*?<\/section>/g, " ");
  if (tokens(stripTags(outside)).length) problems.push(`page text outside any section: "${stripTags(outside).trim().slice(0, 80)}"`);
  return out;
}
const page = pageSections(readFileSync(htmlPath, "utf8"));

// ---------------------------------------------------------------- pair the sections

if (page.length !== cv.sections.length) problems.push(`page has ${page.length} sections, cv.json ${cv.sections.length}`);

const starts = [];
let from = 0;
for (const s of page) {
  const re = new RegExp(`^${escapeRe(s.title.toUpperCase())}(?=\\s|$)`, "m");
  const at = pdfText.slice(from).search(re);
  if (at < 0) throw new Error(`no PDF heading for page section "${s.title}" (in order)`);
  starts.push(from + at);
  from += at + s.title.length;
}
const pdfChunk = (k) => pdfText.slice(starts[k], k + 1 < starts.length ? starts[k + 1] : pdfText.length);

// ---------------------------------------------------------------- 1. words

function surplus(a, b) {
  const out = {};
  for (const [w, n] of a) {
    const d = n - (b.get(w) || 0);
    if (d > 0) out[w] = d;
  }
  return out;
}
const add = (map, w, n = 1) => (map[w] = (map[w] || 0) + n);
function unexpected(found, allowed) {
  const out = {};
  for (const [w, n] of Object.entries(found)) if (n !== (allowed[w] || 0)) out[w] = n;
  for (const [w, n] of Object.entries(allowed)) if (!(w in found)) out[w] = `0 (expected ${n})`;
  return out;
}

let pdfWordTotal = 0;
page.forEach((ps, k) => {
  const section = cv.sections[k];
  if (!section || section.title !== ps.title) {
    problems.push(`section ${k + 1}: page "${ps.title}", cv.json "${section && section.title}"`);
    return;
  }
  const chunk = pdfChunk(k);
  const pdfBag = bag(chunk);
  pdfWordTotal += [...pdfBag.values()].reduce((a, b) => a + b, 0);

  // Intended differences in this section.
  const pdfOnly = {};
  const pageOnly = {};
  for (const it of section.items) {
    if ((it.type === "publication" || it.type === "paper") && it.url) {
      add(pdfOnly, "link");
      if (it.type === "publication" && it.number != null) add(pageOnly, "journal");
      if (it.type === "paper") add(pageOnly, it.url.includes("ssrn.com") ? "ssrn" : "paper");
    }
    if (it.type === "publication" && it.number != null) add(pdfOnly, String(it.number));
  }
  const badPdf = unexpected(surplus(pdfBag, bag(ps.text)), pdfOnly);
  const badPage = unexpected(surplus(bag(ps.text), pdfBag), pageOnly);
  if (Object.keys(badPdf).length || Object.keys(badPage).length) {
    problems.push(`words in "${ps.title}": PDF only ${JSON.stringify(badPdf)}; page only ${JSON.stringify(badPage)}`);
  }
});

// ---------------------------------------------------------------- 2 and 3. order and dates

// Index of the first contiguous occurrence of needle in hay at or after
// `from` (and, if given, ending before `to`), or -1.
function indexOf(hay, needle, from = 0, to = hay.length) {
  if (!needle.length) return from;
  outer: for (let i = from; i + needle.length <= to; i++) {
    for (let j = 0; j < needle.length; j++) if (hay[i + j] !== needle[j]) continue outer;
    return i;
  }
  return -1;
}
const contains = (hay, needle) => indexOf(hay, needle) >= 0;

let fieldsChecked = 0;
let datesChecked = 0;
cv.sections.forEach((section, k) => {
  if (k >= starts.length) return;
  const hay = tokens(pdfChunk(k));
  const field = (label, v) => {
    const t = tokens(plain(v));
    if (!t.length) return;
    fieldsChecked++;
    if (!contains(hay, t)) problems.push(`order in "${section.title}": ${label} "${plain(v)}" is not in the PDF word for word`);
  };
  const nextTo = (label, before, after) => {
    datesChecked++;
    if (!contains(hay, [...before, ...after])) problems.push(`date in "${section.title}": ${label} is not next to its text in the PDF`);
  };
  if (section.note) field("note", section.note);
  // Entry dates: in reading order the PDF gives a section's entry titles
  // first and then all their dates, row by row ("2016 2015 2012–2014 ..."),
  // so the page's dates, in page order, must appear in that order after the
  // first entry's title.
  const entries = section.items.filter((it) => it.type === "entry");
  if (entries.length) {
    let cursor = indexOf(hay, tokens(plain(entries[0].title)));
    for (const e of entries) {
      for (const date of [e.date, ...e.lines.map((l) => l.date)].filter(Boolean)) {
        datesChecked++;
        const at = cursor < 0 ? -1 : indexOf(hay, tokens(date), cursor);
        if (at < 0) {
          problems.push(`date in "${section.title}": "${date}" (${plain(e.title)}) is out of order against the PDF`);
          cursor = -1;
          break;
        }
        cursor = at + tokens(date).length;
      }
    }
  }
  for (const it of section.items) {
    switch (it.type) {
      case "entry":
        field("entry", it.title);
        it.lines.forEach((l) => field("line", l.text));
        break;
      case "publication":
        for (const f of ["title", "authors", "venue", "year", "note"]) if (it[f]) field(f, it[f]);
        break;
      case "paper":
        for (const f of ["title", "authors", "status"]) if (it[f]) field(f, it[f]);
        it.notes.forEach((n) => field("award", n));
        break;
      case "item":
        field("item", it.text);
        if (it.date) nextTo(`"${it.date}" after "${plain(it.text)}"`, tokens(plain(it.text)).slice(-3), tokens(it.date));
        break;
      case "talks":
        it.venues.forEach((v) => field("venue", v));
        nextTo(`"${it.year}"`, tokens(it.year), tokens(it.venues[0]).slice(0, 3));
        break;
      case "subhead":
        field("subhead", it.text);
        break;
      default:
        problems.push(`unknown node type "${it.type}" in "${section.title}"`);
    }
  }
});

// ---------------------------------------------------------------- report

console.log(
  `${page.length} sections; ${pdfWordTotal} PDF words compared; ${fieldsChecked} fields checked for order; ${datesChecked} dates checked`,
);
if (problems.length) {
  console.error(`FAILED:\n  ${problems.join("\n  ")}`);
  process.exit(1);
}
console.log("OK: the page and the PDF differ only where the design says they do.");
