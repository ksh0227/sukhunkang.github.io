import { Fragment } from "react";
import Link from "next/link";
import { publications, workingPapers, formatCoauthors } from "../data/papers";

// Server component: no client JS. The abstract and notes live inside a native
// <details>, so they ship in the static HTML (crawlable) while staying
// collapsed by default. Links (beside the title) and awards stay visible,
// outside the <summary>, so clicking a link never toggles the disclosure.
function PaperItem({ paper }) {
  const coauthors = formatCoauthors(paper.authors);
  const hasAwards = paper.awards && paper.awards.length > 0;
  const hasNotes = paper.notes && paper.notes.length > 0;
  const hasExpandable = Boolean(paper.abstract) || hasNotes;
  const summaryLabel = paper.abstract ? "Read abstract" : "Notes";
  // Only the parts a paper has, joined with " · ", so a working paper with no
  // venue or year reads "with X" rather than "· with X".
  const meta = [
    paper.venue && <span className="italic">{paper.venue}</span>,
    paper.year && <time dateTime={paper.year}>{paper.year}</time>,
    paper.volume,
    coauthors,
  ].filter(Boolean);

  return (
    <article
      id={paper.id}
      className="py-4 border-b border-gray-200 last:border-b-0 scroll-mt-20"
    >
      <div>
        <h3 className="inline font-semibold text-gray-900">{paper.title}</h3>
        {paper.links &&
          paper.links.map((link, i) => (
            <Fragment key={i}>
              {" "}
              <Link
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:underline underline-offset-2 whitespace-nowrap transition-colors duration-200"
                aria-label={`${link.label} for ${paper.title}`}
              >
                [{link.label}]
              </Link>
            </Fragment>
          ))}
      </div>
      {meta.length > 0 && (
        <p className="text-sm text-gray-600 mt-1">
          {meta.map((part, i) => (
            <Fragment key={i}>
              {i > 0 && " · "}
              {part}
            </Fragment>
          ))}
        </p>
      )}
      {hasAwards && (
        <div className="mt-1" role="list" aria-label="Awards">
          {paper.awards.map((award, i) => (
            <p key={i} className="text-sm text-gray-700" role="listitem">
              <span aria-hidden="true">🏆</span> {award}
            </p>
          ))}
        </div>
      )}
      {paper.hook && <p className="text-gray-700 mt-2 italic">{paper.hook}</p>}

      {hasExpandable && (
        <details className="mt-2">
          <summary className="text-sm text-accent hover:underline underline-offset-2 cursor-pointer select-none w-fit">
            {summaryLabel}
          </summary>
          <div className="mt-3 pl-4 border-l-2 border-gray-200">
            {paper.abstract && (
              <p className="text-sm text-gray-700 leading-relaxed">
                {paper.abstract}
              </p>
            )}
            {hasNotes && (
              <p className="text-sm text-gray-500 italic mt-2">
                {paper.notes.join("; ")}
              </p>
            )}
          </div>
        </details>
      )}
    </article>
  );
}

export default function Research() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow max-w-4xl mx-auto px-6 py-8">
        <section className="mt-8">
          <h1 className="text-3xl font-bold mb-4">Research</h1>
          <p className="text-gray-700 leading-relaxed">
            My research focuses on{" "}
            <strong>
              the intersection of innovation and entrepreneurship, especially
              within the biopharmaceutical and high-tech industries
            </strong>
            . My work explores the intricate ways in which technology influences
            innovation, aiming to identify the key drivers and obstacles to
            technology adoption and its effects on individuals, firms, and our
            society.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-2">Publications</h2>
          <div>
            {publications.map((paper) => (
              <PaperItem key={paper.id} paper={paper} />
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-2">
            Working Papers / Work in Progress
          </h2>
          <div>
            {workingPapers.map((paper) => (
              <PaperItem key={paper.id} paper={paper} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
