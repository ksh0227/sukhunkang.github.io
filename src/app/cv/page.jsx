import { Fragment } from "react";
import cv from "../data/cv.json";
import {
  gridClass,
  sectionLabelClass,
  pageTitleClass,
  textLinkClass,
  bulletListClass,
} from "../components/grid";

// The CV as a page. Every word comes from ../data/cv.json, which
// scripts/build-cv-data.mjs generates from ../CV/cv.qmd, the file the PDF is
// rendered from; never edit the JSON or retype CV text here.

const PDF = "/Sukhun-Kang-CV.pdf";
const newTab = { target: "_blank", rel: "noopener noreferrer" };

// The letterhead. The address is not in cv.qmd; it came from the user
// (2026-11-03). The position comes from the CV's Academic Appointment, so a
// new title there reaches this page with the next sync.
const ADDRESS = "2323 Phelps Hall, UC Santa Barbara, Santa Barbara, CA 93106";
const EMAIL = "sukhunkang@ucsb.edu";
const WEBSITE = "https://sukhunkang.com";
// The generator refuses a CV without this entry (build-cv-data.mjs, check()),
// so the throw below is a last guard, not the first.
const appointment = cv.sections.find((s) => s.title === "Academic Appointment")?.items[0];
if (!appointment || appointment.type !== "entry" || !appointment.lines.length) {
  throw new Error("cv.json: no Academic Appointment entry for the CV letterhead");
}

// A CV runs long, so sections sit closer than on Home or Research.
const cvSectionClass = "mt-7 border-t border-gray-200 pt-7";
const metaClass = "text-[0.95rem] text-gray-600";

// Tailwind's preflight removes list styling, and Safari then stops announcing
// such lists as lists; role="list" restores that.
const listRole = { role: "list" };

const plainText = (value) => (typeof value === "string" ? value : value.map((s) => s.t).join(""));

// Text from cv.json: a plain string, or segments { t, i, b, href }.
function Rich({ value }) {
  if (typeof value === "string") return value;
  return value.map((s, k) => {
    let node = s.t;
    if (s.i) node = <em>{node}</em>;
    if (s.b) node = <strong className="font-medium">{node}</strong>;
    if (s.href) {
      node = (
        <a href={s.href} {...newTab} className={textLinkClass}>
          {node}
        </a>
      );
    }
    return <Fragment key={k}>{node}</Fragment>;
  });
}

// A middle dot between parts; screen readers hear a comma instead.
function Sep() {
  return (
    <>
      <span aria-hidden="true" className="text-gray-400">
        {" · "}
      </span>
      <span className="sr-only">, </span>
    </>
  );
}

// Parts joined by middle dots (coauthors, journal, status, a link).
function Joined({ parts }) {
  return parts.filter(Boolean).map((part, k) => (
    <Fragment key={k}>
      {k > 0 && <Sep />}
      {part}
    </Fragment>
  ));
}

// A line with its date at the right edge. Below sm the date drops beneath, or
// comes first when it heads a long block (a year of talks); then it is also
// first in reading order, and row-reverse moves it right from sm up.
function Dated({ date, dateFirst = false, className = "", children }) {
  const dateEl = date && <div className={`${metaClass} shrink-0 tabular-nums sm:text-right`}>{date}</div>;
  const body = <div className="min-w-0">{children}</div>;
  if (dateFirst) {
    return (
      <div className={`sm:flex sm:flex-row-reverse sm:items-baseline sm:justify-between sm:gap-x-8 ${className}`}>
        {dateEl}
        {body}
      </div>
    );
  }
  return (
    <div className={`sm:flex sm:items-baseline sm:justify-between sm:gap-x-8 ${className}`}>
      {body}
      {dateEl}
    </div>
  );
}

function Entries({ items }) {
  return (
    <div className="space-y-4">
      {items.map((item, k) => (
        <div key={k}>
          <Dated date={item.date}>
            <p className="font-medium text-gray-900">
              <Rich value={item.title} />
            </p>
          </Dated>
          {item.lines.map((line, n) => (
            <Dated key={n} date={line.date} className="mt-0.5">
              <p className="text-gray-600">
                <Rich value={line.text} />
              </p>
            </Dated>
          ))}
        </div>
      ))}
    </div>
  );
}

// Journal articles, numbered as in the PDF (newest has the highest number).
function NumberedPublications({ items }) {
  return (
    <ol className="list-decimal pl-6 space-y-4 marker:text-gray-500">
      {items.map((p, k) => (
        <li key={k} value={p.number} className="pl-1">
          <p className="font-medium text-gray-900">
            <Rich value={p.title} />
          </p>
          <p className={`${metaClass} mt-0.5`}>
            <Joined
              parts={[
                p.authors && <Rich value={p.authors} />,
                <>
                  <em>
                    <Rich value={p.venue} />
                  </em>
                  {p.year && `, ${p.year}`}
                </>,
                p.url && (
                  <a
                    href={p.url}
                    {...newTab}
                    className={textLinkClass}
                    aria-label={`Journal: ${plainText(p.title)}`}
                  >
                    Journal
                  </a>
                ),
                p.note && <Rich value={p.note} />,
              ]}
            />
          </p>
        </li>
      ))}
    </ol>
  );
}

// Other publications, cases, and media: the title links to the piece.
function OtherPublications({ items }) {
  return (
    <ul className="space-y-4" {...listRole}>
      {items.map((p, k) => (
        <li key={k}>
          <p className="font-medium text-gray-900">
            {p.url ? (
              <a href={p.url} {...newTab} className={textLinkClass}>
                <Rich value={p.title} />
              </a>
            ) : (
              <Rich value={p.title} />
            )}
          </p>
          <p className={`${metaClass} mt-0.5`}>
            <Joined
              parts={[
                p.authors && <Rich value={p.authors} />,
                <>
                  <em>
                    <Rich value={p.venue} />
                  </em>
                  {p.year && `, ${p.year}`}
                </>,
                p.note && <Rich value={p.note} />,
              ]}
            />
          </p>
        </li>
      ))}
    </ul>
  );
}

// Working papers and work in progress: status in italics, awards bulleted.
function Papers({ items }) {
  return (
    <ul className="space-y-4" {...listRole}>
      {items.map((p, k) => (
        <li key={k}>
          <p className="font-medium text-gray-900">
            <Rich value={p.title} />
          </p>
          {(p.authors || p.status || p.url) && (
            <p className={`${metaClass} mt-0.5`}>
              <Joined
                parts={[
                  p.authors && <Rich value={p.authors} />,
                  p.status && <em>{p.status}</em>,
                  p.url && (
                    <a
                      href={p.url}
                      {...newTab}
                      className={textLinkClass}
                      aria-label={`${p.url.includes("ssrn.com") ? "SSRN" : "Paper"}: ${plainText(p.title)}`}
                    >
                      {p.url.includes("ssrn.com") ? "SSRN" : "Paper"}
                    </a>
                  ),
                ]}
              />
            </p>
          )}
          {p.notes.length > 0 && (
            <ul className={`${metaClass} mt-1 ${bulletListClass}`} aria-label="Awards">
              {p.notes.map((note, n) => (
                <li key={n}>
                  <Rich value={note} />
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

// One-line items (awards, grants, service). An item marked `sub` (a course
// rating, a panel under "Speaker") sits under the item above it.
function Items({ items }) {
  const rows = [];
  for (const item of items) {
    if (item.sub && rows.length) rows[rows.length - 1].subs.push(item);
    else rows.push({ ...item, subs: [] });
  }
  return (
    <ul className="space-y-1.5" {...listRole}>
      {rows.map((row, k) => (
        <li key={k}>
          <Dated date={row.date}>
            <Rich value={row.text} />
          </Dated>
          {row.subs.map((sub, n) => (
            <Dated key={n} date={sub.date} className="pl-4">
              <span className={metaClass}>
                <Rich value={sub.text} />
              </span>
            </Dated>
          ))}
        </li>
      ))}
    </ul>
  );
}

// Invited presentations: one row per academic year.
function Talks({ items }) {
  return (
    <div className="space-y-3">
      {items.map((t, k) => (
        <Dated key={k} date={t.year} dateFirst>
          <p className="text-gray-900">
            <Joined parts={t.venues} />
          </p>
        </Dated>
      ))}
    </div>
  );
}

function Subhead({ item }) {
  return (
    <h3 className="font-medium text-gray-900 mb-2">
      <Rich value={item.text} />
    </h3>
  );
}

// Consecutive items of one kind render as one list.
function groupRuns(items) {
  const runs = [];
  for (const item of items) {
    const key =
      item.type === "publication" ? (item.number != null ? "numbered" : "other") : item.type;
    const last = runs[runs.length - 1];
    if (last && last.key === key && key !== "subhead") last.items.push(item);
    else runs.push({ key, items: [item] });
  }
  return runs;
}

const RUN = {
  entry: Entries,
  numbered: NumberedPublications,
  other: OtherPublications,
  paper: Papers,
  item: Items,
  talks: Talks,
};

function Run({ run }) {
  if (run.key === "subhead") return <Subhead item={run.items[0]} />;
  const Component = RUN[run.key];
  return <Component items={run.items} />;
}

function CvSection({ section }) {
  const runs = groupRuns(section.items);
  return (
    <section className={`${gridClass} ${cvSectionClass}`}>
      <h2 className={`${sectionLabelClass} mb-4 md:mb-0`}>{section.title}</h2>
      <div>
        {section.note && (
          <p className={`${metaClass} mb-3`}>
            <Rich value={section.note} />
          </p>
        )}
        {runs.map((run, k) => {
          // A subhead opens a group, so the space goes above it, not below.
          const space =
            k === 0 ? "" : run.key === "subhead" ? "mt-6" : runs[k - 1].key === "subhead" ? "" : "mt-4";
          return (
            <div key={k} className={space}>
              <Run run={run} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default function Cv() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow w-full max-w-4xl mx-auto px-6 pt-8 pb-8 sm:pt-12">
        {/* Letterhead. "Curriculum Vitae" sits in the label column on the
            name's baseline; below md it stacks above the name. */}
        {/* data-cv-version: cv.json's content fingerprint, which
            scripts/sync-cv.ps1 looks for on the live page after a deploy. */}
        <header className={gridClass} data-cv-version={cv.version}>
          <p className="mb-1 md:mb-0 italic text-[0.95rem] text-gray-600 md:text-[1.05rem] md:text-gray-900 md:text-right">
            Curriculum Vitae
          </p>
          <div>
            <h1 className={pageTitleClass}>Sukhun Kang</h1>
            <p className="mt-2 text-gray-900 leading-snug">
              <Rich value={appointment.lines[0].text} />
              <br />
              <Rich value={appointment.title} />
            </p>
            <address className={`${metaClass} not-italic mt-3 leading-relaxed`}>
              {ADDRESS}
              <br />
              <a href={`mailto:${EMAIL}`} className={textLinkClass}>
                {EMAIL}
              </a>
              <Sep />
              <a href={WEBSITE} className={textLinkClass}>
                {WEBSITE.replace(/^https:\/\//, "")}
              </a>
            </address>
            <p className={`${metaClass} mt-4`}>
              <a href={PDF} {...newTab} className={textLinkClass}>
                Download PDF
              </a>
              <Sep />
              Last updated {cv.lastUpdated}
            </p>
          </div>
        </header>

        {cv.sections.map((section, k) => (
          <CvSection key={`${section.title}-${k}`} section={section} />
        ))}
      </main>
    </div>
  );
}
