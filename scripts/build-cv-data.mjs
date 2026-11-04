// build-cv-data.mjs: turn the CV source (../CV/cv.qmd, beside this repo) into
// src/app/data/cv.json, which the /cv page renders. The PDF and the page are
// made from the same file, so they cannot drift apart.
//
// Strict by design. A construct this script does not know stops it with the
// line number, and nothing is written. Each construct's count in the source is
// checked against what the script consumed, and no output text may still hold
// Typst markup or a money amount, so an entry cannot go missing, garbled, or
// leaked without an error.
//
// Usage (from the repo root):
//   node scripts/build-cv-data.mjs                      reads ../CV/cv.qmd, writes src/app/data/cv.json
//   node scripts/build-cv-data.mjs --in X.qmd --out Y.json
//   node scripts/build-cv-data.mjs --dry-run            reports whether cv.json would change; writes nothing
//
// Run by scripts/sync-cv.ps1, which publishes the CV by hand after a render.

import { createHash } from "node:crypto";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const argv = process.argv.slice(2);
const argValue = (flag, fallback) => {
  const k = argv.indexOf(flag);
  return k >= 0 && argv[k + 1] ? resolve(argv[k + 1]) : fallback;
};
const inPath = argValue("--in", resolve(repoRoot, "..", "CV", "cv.qmd"));
const outPath = argValue("--out", resolve(repoRoot, "src", "app", "data", "cv.json"));
const dryRun = argv.includes("--dry-run");

let SRC = readFileSync(inPath, "utf8").replace(/^﻿/, "").replace(/\r\n/g, "\n");

class CvError extends Error {}
const lineOf = (offset) => SRC.slice(0, offset).split("\n").length;
function fail(msg, offset) {
  throw new CvError(offset == null ? msg : `cv.qmd line ${lineOf(offset)}: ${msg}`);
}
function expectChar(j, ch) {
  if (SRC[j] !== ch) fail(`expected "${ch}" but found "${SRC.slice(j, j + 20)}"`, j);
  return j;
}

// ---------------------------------------------------------------- balancing

// SRC[i] is "[" (markup) or "(" (code). Returns the index just past its match.
// In markup, parentheses are plain text unless they open a #call(...); in
// code, "..." is a string whose brackets do not count.
function readBalanced(i) {
  const stack = [SRC[i]];
  let j = i + 1;
  while (j < SRC.length) {
    const c = SRC[j];
    const top = stack[stack.length - 1];
    if (c === "\\") {
      j += 2;
      continue;
    }
    if (top === "(" && c === '"') {
      j++;
      while (j < SRC.length && SRC[j] !== '"') j += SRC[j] === "\\" ? 2 : 1;
      j++;
      continue;
    }
    if (top === "[" && c === "#") {
      const m = /^#[a-z]+(?=\()/.exec(SRC.slice(j, j + 30));
      if (m) {
        j += m[0].length + 1;
        stack.push("(");
        continue;
      }
    }
    if (c === "[") stack.push("[");
    else if (c === "(" && top === "(") stack.push("(");
    else if (c === "]" || (c === ")" && top === "(")) {
      if ((c === "]" ? "[" : "(") !== top) fail(`unbalanced "${c}"`, j);
      stack.pop();
      if (stack.length === 0) return j + 1;
    }
    j++;
  }
  return fail(`unclosed "${SRC[i]}"`, i);
}

const endOfLine = (i) => {
  const e = SRC.indexOf("\n", i);
  return e < 0 ? SRC.length : e;
};
const restOfLineBlank = (i) => /^[ \t]*$/.test(SRC.slice(i, endOfLine(i)));

// ---------------------------------------------------------------- arguments

function parseValue(i) {
  const c = SRC[i];
  if (c === "[") {
    const e = readBalanced(i);
    return [{ type: "markup", a: i + 1, b: e - 1 }, e];
  }
  if (c === '"') {
    let j = i + 1;
    while (j < SRC.length && SRC[j] !== '"') j += SRC[j] === "\\" ? 2 : 1;
    return [{ type: "str", value: SRC.slice(i + 1, j) }, j + 1];
  }
  if (c === "(") {
    const e = readBalanced(i);
    const inner = parseArgs(i + 1, e - 1);
    return [{ type: "array", items: inner.positional }, e];
  }
  const m = /^(?:[0-9.]+(?:em|pt|fr|%)?|[a-z]+)/.exec(SRC.slice(i, i + 20));
  if (m) return [{ type: "atom", value: m[0] }, i + m[0].length];
  return fail(`unexpected argument "${SRC.slice(i, i + 20)}"`, i);
}

function parseArgs(a, b) {
  const named = {};
  const positional = [];
  let i = a;
  while (i < b) {
    if (/[\s,]/.test(SRC[i])) {
      i++;
      continue;
    }
    const m = /^([a-z]+)\s*:\s*/.exec(SRC.slice(i, i + 40));
    let key = null;
    if (m) {
      key = m[1];
      i += m[0].length;
    }
    const [value, next] = parseValue(i);
    if (key) {
      if (key in named) fail(`argument "${key}" given twice`, i);
      named[key] = value;
    } else positional.push(value);
    i = next;
  }
  return { named, positional };
}

// ---------------------------------------------------------------- statements

const consumed = {};
const bump = (kind) => (consumed[kind] = (consumed[kind] || 0) + 1);

// Parses the Typst statements in SRC[a, b) into a flat list.
function parseStatements(a, b, out) {
  let i = a;
  while (i < b) {
    if (/\s/.test(SRC[i])) {
      i++;
      continue;
    }
    if (SRC[i] === "#") {
      const m = /^#([a-z]+)/.exec(SRC.slice(i, i + 30));
      if (!m) fail(`unexpected "#"`, i);
      const name = m[1];
      let j = i + m[0].length;
      switch (name) {
        case "set": {
          // A style rule, e.g. #set text(...): layout only. Anything after it
          // on the same line would be skipped unseen, so it is refused.
          const call = /^\s+[a-z]+/.exec(SRC.slice(j, j + 30));
          if (!call) fail("#set without a target", i);
          const e = readBalanced(expectChar(j + call[0].length, "("));
          if (!restOfLineBlank(e)) fail("text after a #set rule on the same line", e);
          i = e;
          continue;
        }
        case "v":
        case "line": // vertical space, a rule: layout only
          i = readBalanced(expectChar(j, "("));
          continue;
        case "block":
        case "align": {
          // a layout wrapper: #block(...)[body], #align(right)[body]
          if (SRC[j] === "(") j = readBalanced(j);
          const e = readBalanced(expectChar(j, "["));
          parseStatements(j + 1, e - 1, out);
          i = e;
          continue;
        }
        case "text": {
          // Only the "Last Updated" stamp is a bare #text(...)[...].
          const k = readBalanced(expectChar(j, "("));
          const e = readBalanced(expectChar(k, "["));
          out.push({ kind: "stamp", body: { a: k + 1, b: e - 1 }, at: i });
          i = e;
          continue;
        }
        case "cventry":
        case "eduentry":
        case "publication":
        case "workingpaper":
        case "yearblock":
        case "grid": {
          const e = readBalanced(expectChar(j, "("));
          out.push({ kind: name, args: parseArgs(j + 1, e - 1), at: i });
          i = e;
          continue;
        }
        case "bulletitem":
        case "subitem":
        case "subbullet": {
          const e = readBalanced(expectChar(j, "["));
          out.push({ kind: name, body: { a: j + 1, b: e - 1 }, at: i });
          i = e;
          continue;
        }
        default:
          fail(`unknown construct "#${name}"; teach scripts/build-cv-data.mjs about it`, i);
      }
    }
    if (SRC[i] === "*") {
      // a subheading on its own line: *Editorial Review Board:*
      const e = SRC.indexOf("*", i + 1);
      if (e < 0 || e > endOfLine(i)) fail("unclosed * subheading", i);
      if (!restOfLineBlank(e + 1)) fail("text after a * subheading on the same line", e + 1);
      out.push({ kind: "subhead", body: { a: i + 1, b: e }, at: i });
      i = e + 1;
      continue;
    }
    fail(`unexpected text "${SRC.slice(i, i + 40).split("\n")[0]}"`, i);
  }
  return out;
}

// ---------------------------------------------------------------- inline text

const ESCAPES = new Set(["$", "*", "@", "_", "#", "[", "]", "\\", '"', "'", "~", "`", "/", "-", ".", "<"]);

// Typst markup that renders differently from its characters (a non-breaking
// space, a dash, an ellipsis, raw text, a comment, a label). None is in the CV
// today; if one arrives, teach inline() what it means rather than copy it.
const UNHANDLED_MARKUP = [
  ["~", "~ (non-breaking space)"],
  ["`", "` (raw text)"],
  ["//", "// (comment)"],
  ["/*", "/* (comment)"],
  ["--", "-- (dash shorthand)"],
  ["...", "... (ellipsis shorthand)"],
  ["<", "< (label)"],
];

// Arguments a styling call may carry; anything else (a fill that hides text,
// a zero size) could make the PDF and the page differ, so it is refused.
const STYLE_ARGS = { text: ["style", "size", "weight", "fill"], box: ["width"] };

// Typst markup in SRC[a, b) to segments { t, i, b, href }.
function inline(a, b, style = { i: false, b: false, href: undefined }) {
  const segs = [];
  const st = { ...style };
  let buf = "";
  const flush = () => {
    if (buf) segs.push({ t: buf, i: st.i, b: st.b, href: st.href });
    buf = "";
  };
  let i = a;
  while (i < b) {
    const c = SRC[i];
    if (c === "\\") {
      const n = SRC[i + 1];
      if (!ESCAPES.has(n)) fail(`unknown escape "\\${n}"`, i);
      buf += n;
      i += 2;
      continue;
    }
    if (c === "#") {
      const m = /^#([a-z]+)/.exec(SRC.slice(i, i + 20));
      if (!m) fail(`unexpected "#"`, i);
      let j = i + m[0].length;
      switch (m[1]) {
        case "h": // horizontal space: an indent at the start, a space mid-text
          if (buf || segs.length) buf += " ";
          i = readBalanced(expectChar(j, "("));
          continue;
        case "strong":
        case "emph": {
          const e = readBalanced(expectChar(j, "["));
          flush();
          segs.push(...inline(j + 1, e - 1, { ...st, [m[1] === "strong" ? "b" : "i"]: true }));
          i = e;
          continue;
        }
        case "box":
        case "text": {
          if (SRC[j] === "(") {
            const e = readBalanced(j);
            const { named, positional } = parseArgs(j + 1, e - 1);
            const bad = Object.keys(named).filter((k) => !STYLE_ARGS[m[1]].includes(k));
            if (bad.length || positional.length) fail(`#${m[1]} with unsupported arguments ${bad.join(", ")}`, i);
            if (named.size && /^0(?:\.0*)?(?:pt|em)?$/.test(named.size.value)) fail(`#${m[1]} with zero size`, i);
            j = e;
          }
          const e = readBalanced(expectChar(j, "["));
          flush();
          segs.push(...inline(j + 1, e - 1, st));
          i = e;
          continue;
        }
        case "link": {
          const k = readBalanced(expectChar(j, "("));
          const [url] = parseValue(j + 1);
          if (url.type !== "str") fail("#link needs a URL string", j);
          const e = readBalanced(expectChar(k, "["));
          flush();
          segs.push(...inline(k + 1, e - 1, { ...st, href: url.value }));
          i = e;
          continue;
        }
        default:
          fail(`unknown inline construct "#${m[1]}"`, i);
      }
    }
    const unhandled = UNHANDLED_MARKUP.find(([s]) => SRC.startsWith(s, i));
    if (unhandled) fail(`Typst markup ${unhandled[1]} that scripts/build-cv-data.mjs does not handle`, i);
    if (c === "_" || c === "*") {
      flush();
      if (c === "_") st.i = !st.i;
      else st.b = !st.b;
      i++;
      continue;
    }
    if (c === "[" || c === "]") fail(`stray "${c}"`, i);
    buf += c;
    i++;
  }
  flush();
  if (st.i !== style.i || st.b !== style.b) fail("unclosed _ or *", a);
  return segs;
}

// A quote opens at the start or after a space, a bracket, a slash, or a dash,
// as in Typst. The em-dash is built from its code point (house style bans the
// glyph in source files).
const QUOTE_OPENER = new RegExp(`[\\s([{/–${String.fromCharCode(0x2014)}]`);

// Collapse whitespace, merge like segments, set typographic quotes (Typst's
// smart quotes do the same in the PDF).
function finish(segs) {
  let out = [];
  for (const s of segs) {
    const t = s.t.replace(/\s+/g, " ");
    const last = out[out.length - 1];
    if (last && last.i === s.i && last.b === s.b && last.href === s.href) last.t += t;
    else out.push({ ...s, t });
  }
  for (let k = 1; k < out.length; k++) {
    if (/\s$/.test(out[k - 1].t) && out[k].t.startsWith(" ")) out[k].t = out[k].t.slice(1);
  }
  if (out.length) {
    out[0].t = out[0].t.replace(/^ /, "");
    out[out.length - 1].t = out[out.length - 1].t.replace(/ $/, "");
  }
  out = out.filter((s) => s.t.length);
  let prev = "";
  for (const s of out) {
    let r = "";
    for (const ch of s.t) {
      const opening = !prev || QUOTE_OPENER.test(prev);
      if (ch === '"') r += opening ? "“" : "”";
      else if (ch === "'") r += opening ? "‘" : "’";
      else r += ch;
      prev = ch;
    }
    s.t = r;
  }
  return out;
}

// Compact form for the JSON: a plain string, or a list of styled segments.
function compact(segs) {
  if (segs.length === 0) return "";
  if (segs.length === 1 && !segs[0].i && !segs[0].b && !segs[0].href) return segs[0].t;
  return segs.map(({ t, i, b, href }) => ({
    t,
    ...(i ? { i: true } : {}),
    ...(b ? { b: true } : {}),
    ...(href ? { href } : {}),
  }));
}

const rich = (range) => finish(inline(range.a, range.b));
const plain = (segs) => segs.map((s) => s.t).join("");

// A trailing year or year range ("2026", "2026–2029", "2025–Present",
// "2023, 2024, 2025") moves to the date column. A parenthetical after it (a
// grant amount) and a co-investigator star stay with the text, as does a
// closing quote the comma sat inside of.
const YEAR = "(?:19|20)\\d{2}(?:–(?:(?:19|20)\\d{2}|Present))?";
const TRAILING_DATE = new RegExp(
  `,([”]?)\\s+(${YEAR}(?:, ${YEAR})*)(\\s*\\([^()]*\\))?(\\*?)$`,
);

function splitDate(segs) {
  const last = segs[segs.length - 1];
  if (!last || last.href) return { segs };
  const m = TRAILING_DATE.exec(last.t);
  if (!m) return { segs };
  const kept = last.t.slice(0, m.index) + m[1] + (m[3] || "") + m[4];
  const head = segs.slice(0, -1);
  if (kept) head.push({ ...last, t: kept });
  return { segs: head, date: m[2] };
}

// ---------------------------------------------------------------- statements to nodes

function needKeys(stmt, allowed, required) {
  for (const k of Object.keys(stmt.args.named)) {
    if (!allowed.includes(k)) fail(`#${stmt.kind} has an unknown argument "${k}"`, stmt.at);
  }
  for (const k of required) {
    if (!(k in stmt.args.named)) fail(`#${stmt.kind} is missing "${k}"`, stmt.at);
  }
  if (stmt.args.positional.length) fail(`#${stmt.kind} takes named arguments only`, stmt.at);
}
const markupArg = (stmt, k) => {
  const v = stmt.args.named[k];
  if (!v) return null;
  if (v.type !== "markup") fail(`#${stmt.kind} "${k}" should be [ ... ]`, stmt.at);
  return rich(v);
};
const stringArg = (stmt, k) => {
  const v = stmt.args.named[k];
  if (!v) return null;
  if (v.type !== "str") fail(`#${stmt.kind} "${k}" should be a "string"`, stmt.at);
  return v.value;
};

const doc = { lastUpdated: null, sections: [] };

function addStatement(section, stmt) {
  const items = section.items;
  switch (stmt.kind) {
    case "cventry": {
      needKeys(stmt, ["title", "date", "description"], ["title", "date"]);
      const desc = markupArg(stmt, "description");
      items.push({
        type: "entry",
        title: compact(markupArg(stmt, "title")),
        date: plain(markupArg(stmt, "date")),
        lines: desc ? [{ text: compact(desc) }] : [],
      });
      break;
    }
    case "eduentry": {
      needKeys(stmt, ["school", "date", "degrees"], ["school", "date", "degrees"]);
      const degrees = stmt.args.named.degrees;
      if (degrees.type !== "array") fail("#eduentry degrees should be ( [..], [..] )", stmt.at);
      items.push({
        type: "entry",
        title: compact(markupArg(stmt, "school")),
        date: plain(markupArg(stmt, "date")),
        lines: degrees.items.map((d) => {
          if (d.type !== "markup") fail("#eduentry degree should be [ ... ]", stmt.at);
          return { text: compact(rich(d)) };
        }),
      });
      break;
    }
    case "grid": {
      // Hand-built rows: the USC entry in Education, the Grants header.
      const cells = stmt.args.positional;
      if (cells.length !== 2 || cells.some((c) => c.type !== "markup")) {
        fail("#grid should have exactly two [ ... ] cells", stmt.at);
      }
      const [left, right] = cells.map(rich);
      if (section.title === "Education") {
        // Two exclusive roles: a bold school name with an empty date cell
        // opens an entry; a plain degree with a date joins the entry above.
        // Anything in between is refused rather than guessed.
        if (right.length === 0) {
          if (!left.length || !left.every((s) => s.b)) {
            fail("an Education #grid row with no date must be a bold school name", stmt.at);
          }
          items.push({
            type: "entry",
            title: compact(left.map((s) => ({ ...s, b: false }))),
            date: "",
            lines: [],
            fromGrid: true,
          });
          bump("schoolheader");
        } else {
          if (left.some((s) => s.b)) fail("a bold Education #grid row with a date: a school or a degree?", stmt.at);
          const entry = items[items.length - 1];
          if (!entry || entry.type !== "entry" || !entry.fromGrid) {
            fail("a degree #grid row with no #grid school name above it", stmt.at);
          }
          entry.lines.push({ text: compact(left), date: plain(right) });
        }
      } else if (section.title === "Awards & Honors" && plain(left) === "GRANTS") {
        // The PDF draws Grants as its own section heading inside this one.
        doc.sections.push({ title: "Grants", note: compact(right), items: [] });
      } else {
        fail(`no rule for a #grid row in "${section.title}"`, stmt.at);
      }
      break;
    }
    case "publication": {
      needKeys(stmt, ["number", "title", "authors", "venue", "year", "url", "note"], ["title", "venue"]);
      const number = stmt.args.named.number;
      if (number && (number.type !== "atom" || !/^\d+$/.test(number.value))) {
        fail("#publication number should be a whole number", stmt.at);
      }
      const note = markupArg(stmt, "note");
      items.push({
        type: "publication",
        ...(number ? { number: Number(number.value) } : {}),
        title: compact(markupArg(stmt, "title")),
        ...(stmt.args.named.authors ? { authors: compact(markupArg(stmt, "authors")) } : {}),
        venue: compact(markupArg(stmt, "venue")),
        ...(stmt.args.named.year ? { year: plain(markupArg(stmt, "year")) } : {}),
        ...(stringArg(stmt, "url") ? { url: stringArg(stmt, "url") } : {}),
        ...(note ? { note: compact(note) } : {}),
      });
      break;
    }
    case "workingpaper": {
      needKeys(stmt, ["title", "authors", "status", "notes", "url"], ["title"]);
      const notes = stmt.args.named.notes;
      if (notes && notes.type !== "array") fail("#workingpaper notes should be ( [..], [..] )", stmt.at);
      items.push({
        type: "paper",
        title: compact(markupArg(stmt, "title")),
        ...(stmt.args.named.authors ? { authors: compact(markupArg(stmt, "authors")) } : {}),
        ...(stmt.args.named.status ? { status: plain(markupArg(stmt, "status")) } : {}),
        ...(stringArg(stmt, "url") ? { url: stringArg(stmt, "url") } : {}),
        notes: notes
          ? notes.items.map((n) => {
              if (n.type !== "markup") fail("#workingpaper note should be [ ... ]", stmt.at);
              bump("note");
              return compact(rich(n));
            })
          : [],
      });
      break;
    }
    case "yearblock": {
      const [year, venues] = stmt.args.positional;
      if (stmt.args.positional.length !== 2 || year.type !== "markup" || venues.type !== "markup") {
        fail("#yearblock should be ([year:], [venue; venue])", stmt.at);
      }
      const v = rich(venues);
      if (v.some((s) => s.i || s.b || s.href)) fail("styled text in a #yearblock venue list", stmt.at);
      const list = plain(v).split(";").map((s) => s.trim());
      if (list.some((s) => !s)) fail("an empty venue in a #yearblock", stmt.at);
      items.push({ type: "talks", year: plain(rich(year)).replace(/:$/, ""), venues: list });
      break;
    }
    case "bulletitem":
    case "subitem":
    case "subbullet": {
      // An item indented with #h(...) belongs under the item above it
      // (a course's rating, a panel under "Speaker").
      const sub = /^\s*#h\(/.test(SRC.slice(stmt.body.a, stmt.body.b));
      const { segs, date } = splitDate(rich(stmt.body));
      if (!segs.length) fail("an empty item", stmt.at);
      items.push({
        type: "item",
        kind: stmt.kind,
        text: compact(segs),
        ...(date ? { date } : {}),
        ...(sub ? { sub: true } : {}),
      });
      break;
    }
    case "subhead": {
      const segs = rich(stmt.body);
      const last = segs[segs.length - 1];
      if (last) last.t = last.t.replace(/:$/, "");
      items.push({ type: "subhead", text: compact(segs.filter((s) => s.t)) });
      break;
    }
    case "stamp": {
      const m = /^Last Updated: (.+)$/.exec(plain(rich(stmt.body)));
      if (!m) fail("a #text(...)[...] that is not the Last Updated line", stmt.at);
      if (doc.lastUpdated) fail("a second Last Updated line", stmt.at);
      doc.lastUpdated = m[1];
      break;
    }
    default:
      fail(`internal: unhandled statement ${stmt.kind}`, stmt.at);
  }
  bump(stmt.kind);
}

// ---------------------------------------------------------------- document

function build() {
  let pos = 0;
  if (SRC.startsWith("---\n")) {
    const e = SRC.indexOf("\n---\n", 4);
    if (e < 0) fail("unclosed front matter", 0);
    pos = e + 5;
  }
  let headings = 0;
  while (pos < SRC.length) {
    const eol = endOfLine(pos);
    const line = SRC.slice(pos, eol);
    if (/^\s*$/.test(line)) {
      pos = eol + 1;
      continue;
    }
    const h = /^# (.+)$/.exec(line);
    if (h) {
      doc.sections.push({ title: h[1].trim(), items: [] });
      headings++;
      pos = eol + 1;
      continue;
    }
    if (line.trim() === "```{=typst}") {
      const close = SRC.indexOf("\n```", eol);
      if (close < 0) fail("unclosed ```{=typst} block", pos);
      if (!doc.sections.length) fail("Typst block before the first section heading", pos);
      // Always the newest section: the Grants header opens one mid-block.
      for (const stmt of parseStatements(eol + 1, close + 1, [])) {
        addStatement(doc.sections[doc.sections.length - 1], stmt);
      }
      pos = endOfLine(close + 1) + 1;
      continue;
    }
    fail(`unexpected line outside a Typst block: "${line.slice(0, 50)}"`, pos);
  }
  for (const s of doc.sections) for (const it of s.items) delete it.fromGrid;
  return headings;
}

// ---------------------------------------------------------------- web-only cuts

// The page leaves out what only the PDF should carry (user, 2026-11-03): the
// Personal section (languages, citizenship, memberships) and grant amounts.
// They are cut here, not in the page, because cv.json is public in the repo.
// A section named here that is missing stops the script, so a renamed heading
// cannot slip onto the page.
const OMIT_SECTIONS = ["Personal"];
const CURRENCY = String.raw`(?:US\$|CA\$|A\$|\$|€|£|¥|₩|₹|(?:USD|EUR|GBP|KRW|JPY|CHF|CAD|AUD)(?![A-Za-z]))`;
const AMOUNT = new RegExp(String.raw`\s*\(\s*${CURRENCY}[^()]*\)`, "g");
// Anything still money-like after the cut fails the run (the leak guard).
const MONEY_LEFT = new RegExp(
  String.raw`[$€£¥₩₹]|\b(?:USD|EUR|GBP|KRW|JPY|CHF|CAD|AUD)\b|\b(?:dollars?|euros?|pounds sterling)\b|\b\d+(?:\.\d+)?\s?[KkMm]\b`,
);

let omitted = 0;
function webOnly() {
  const before = doc.sections.length;
  doc.sections = doc.sections.filter((s) => !OMIT_SECTIONS.includes(s.title));
  omitted = before - doc.sections.length;
  if (omitted < OMIT_SECTIONS.length) {
    fail(`a section meant to be left off the page (${OMIT_SECTIONS.join(", ")}) was not found; renamed?`);
  }
  let amounts = 0;
  const cut = (t) =>
    t.replace(AMOUNT, () => {
      amounts++;
      return "";
    });
  for (const s of doc.sections) {
    for (const it of s.items) {
      if (it.type !== "item") continue;
      it.text = typeof it.text === "string" ? cut(it.text) : it.text.map((seg) => ({ ...seg, t: cut(seg.t) }));
    }
  }
  return amounts;
}

// ---------------------------------------------------------------- checks

// Every key the page renders, per node type (src/app/cv/page.jsx). A key the
// generator emits beyond these would be dropped by the page, so it fails here.
// (item.kind is kept for the record; the page draws no bullets.)
const RENDERED_KEYS = {
  section: ["title", "note", "items"],
  entry: ["type", "title", "date", "lines"],
  line: ["text", "date"],
  publication: ["type", "number", "title", "authors", "venue", "year", "url", "note"],
  paper: ["type", "title", "authors", "status", "url", "notes"],
  item: ["type", "kind", "text", "date", "sub"],
  talks: ["type", "year", "venues"],
  subhead: ["type", "text"],
};

function check(headings) {
  const problems = [];
  const counts = {
    cventry: /#cventry\(/g,
    eduentry: /#eduentry\(/g,
    publication: /#publication\(/g,
    workingpaper: /#workingpaper\(/g,
    yearblock: /#yearblock\(/g,
    grid: /#grid\(/g,
    bulletitem: /#bulletitem\[/g,
    subitem: /#subitem\[/g,
    subbullet: /#subbullet\[/g,
    subhead: /^[ \t]*\*[^*\n]+\*[ \t]*$/gm,
  };
  for (const [kind, re] of Object.entries(counts)) {
    const inSource = (SRC.match(re) || []).length;
    if ((consumed[kind] || 0) !== inSource) {
      problems.push(`${kind}: ${inSource} in cv.qmd, ${consumed[kind] || 0} consumed`);
    }
  }
  if (!doc.lastUpdated) problems.push("no Last Updated line");
  const grants = doc.sections.some((s) => s.title === "Grants") ? 1 : 0;
  const expected = headings + grants - omitted;
  if (doc.sections.length !== expected) {
    problems.push(`${headings} headings, +${grants} Grants, -${omitted} omitted, but ${doc.sections.length} sections`);
  }
  const titles = doc.sections.map((s) => s.title);
  const dupes = titles.filter((t, k) => titles.indexOf(t) !== k);
  if (dupes.length) problems.push(`duplicate section titles: ${dupes.join(", ")}`);
  for (const s of doc.sections) {
    if (!s.items.length) problems.push(`section "${s.title}" is empty`);
    const numbers = s.items.filter((it) => it.number != null).map((it) => it.number);
    if (new Set(numbers).size !== numbers.length) problems.push(`duplicate publication numbers in "${s.title}"`);
  }

  // Education: one entry per #eduentry and per #grid school name, and every
  // entry has at least one degree.
  const education = doc.sections.find((s) => s.title === "Education");
  if (education) {
    const want = (consumed.eduentry || 0) + (consumed.schoolheader || 0);
    if (education.items.length !== want) problems.push(`Education: ${education.items.length} entries, expected ${want}`);
    for (const e of education.items) if (!e.lines.length) problems.push(`Education entry with no degree: ${JSON.stringify(e.title)}`);
  }

  // The page's letterhead takes the position from here (src/app/cv/page.jsx).
  const appointment = doc.sections.find((s) => s.title === "Academic Appointment")?.items[0];
  if (!appointment || appointment.type !== "entry" || !appointment.lines.length) {
    problems.push('no "Academic Appointment" entry with a position line (the page letterhead needs it)');
  }

  // Every key must be one the page renders.
  const keysOk = (obj, kind, where) => {
    const extra = Object.keys(obj).filter((k) => !RENDERED_KEYS[kind].includes(k));
    if (extra.length) problems.push(`${where}: key(s) the page does not render: ${extra.join(", ")}`);
  };
  for (const s of doc.sections) {
    keysOk(s, "section", `section "${s.title}"`);
    for (const it of s.items) {
      if (!RENDERED_KEYS[it.type]) problems.push(`section "${s.title}": node type "${it.type}" the page does not render`);
      else keysOk(it, it.type, `${it.type} in "${s.title}"`);
      for (const l of it.lines || []) keysOk(l, "line", `line in "${s.title}"`);
    }
  }

  // Text rules. Markup: per segment. Spacing and money: per whole field, since
  // the spaces around an italic or a link live in the plain segments beside it.
  const segments = [];
  const fields = [];
  const isRich = (v) => Array.isArray(v) && v.length > 0 && v.every((s) => s && typeof s.t === "string");
  const walk = (v) => {
    if (typeof v === "string") {
      segments.push(v);
      fields.push(v);
    } else if (isRich(v)) {
      v.forEach((s) => segments.push(s.t));
      fields.push(v.map((s) => s.t).join(""));
    } else if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === "object") {
      for (const [k, x] of Object.entries(v)) if (k !== "href" && k !== "url" && k !== "type" && k !== "kind") walk(x);
    }
  };
  walk(doc.sections);
  for (const t of segments) {
    if (/[[\]\\]/.test(t)) problems.push(`leftover markup in "${t}"`);
  }
  for (const t of fields) {
    if (/\s\s|^\s|\s$/.test(t)) problems.push(`stray spacing in "${t}"`);
    // Amounts stay in the PDF only; one written another way must not leak.
    if (MONEY_LEFT.test(t)) problems.push(`a money amount left in "${t}"`);
  }
  if (problems.length) throw new CvError(`checks failed:\n  ${problems.join("\n  ")}`);
}

try {
  const headings = build();
  const amounts = webOnly();
  check(headings);
  const body = { lastUpdated: doc.lastUpdated, sections: doc.sections };
  // A fingerprint of the content: the page carries it in its HTML, so the
  // publish script can tell when the live page shows this version.
  const version = createHash("sha256").update(JSON.stringify(body)).digest("hex").slice(0, 12);
  const out = {
    _generated: "by scripts/build-cv-data.mjs from ../CV/cv.qmd; edit cv.qmd, not this file",
    version,
    ...body,
  };
  const text = JSON.stringify(out, null, 2) + "\n";
  const current = existsSync(outPath) ? readFileSync(outPath, "utf8").replace(/\r\n/g, "\n") : null;
  const changed = current !== text;
  const summary = Object.entries(consumed)
    .sort()
    .map(([k, n]) => `${k} ${n}`)
    .join(", ");
  // Written only when the content changed, so its timestamp means something.
  if (changed && !dryRun) writeFileSync(outPath, text, "utf8");
  const verb = dryRun ? (changed ? "would change" : "unchanged") : changed ? "written" : "unchanged";
  console.log(`cv.json ${verb} (version ${version}): ${doc.sections.length} sections; ${summary}; last updated ${doc.lastUpdated}`);
  console.log(`left off the page: section ${OMIT_SECTIONS.join(", ")}; ${amounts} amounts`);
} catch (err) {
  if (err instanceof CvError) {
    console.error(`build-cv-data: ${err.message}\nNothing written.`);
    process.exit(1);
  }
  throw err;
}
