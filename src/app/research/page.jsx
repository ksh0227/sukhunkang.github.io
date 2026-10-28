import { publications, workingPapers, formatCoauthors } from "../data/papers";
import {
  gridClass,
  sectionLabelClass,
  entryLabelClass,
  sectionClass,
  sectionHeadClass,
  pageTitleClass,
  entryTitleClass,
  textLinkClass,
  bulletListClass,
} from "../components/grid";

// Server component: no client JS. The abstract and notes live inside a native
// <details>, so they ship in the static HTML (crawlable) while staying
// collapsed by default. Links and awards stay visible, outside the <summary>,
// so clicking a link never toggles the disclosure.
function PaperItem({ paper, first }) {
  const coauthors = formatCoauthors(paper.authors);
  const hasAwards = paper.awards && paper.awards.length > 0;
  const hasLinks = paper.links && paper.links.length > 0;
  const hasNotes = paper.notes && paper.notes.length > 0;
  const hasExpandable = Boolean(paper.abstract) || hasNotes;
  const summaryLabel = paper.abstract ? "Abstract" : "Notes";

  return (
    <article
      id={paper.id}
      className={`${gridClass} ${first ? "pb-7" : "py-7 border-t border-gray-200"} scroll-mt-8`}
    >
      <p className={entryLabelClass}>
        {paper.venue ? (
          <>
            <span className="italic md:block">{paper.venue}</span>
            {paper.year && (
              <>
                <span className="md:hidden">, </span>
                <span className="tabular-nums">{paper.year}</span>
              </>
            )}
          </>
        ) : (
          <span className="italic">Working Paper</span>
        )}
      </p>
      <div>
        <h3 className={entryTitleClass}>{paper.title}</h3>
        {coauthors && <p className="text-[0.95rem] text-gray-600 mt-1">{coauthors}</p>}
        {/* Verbatim abstract sentences; a paper with no abstract shows its hook. */}
        {(paper.excerpt || paper.hook) && (
          <p className="text-gray-900 mt-2 leading-relaxed">{paper.excerpt || paper.hook}</p>
        )}
        {hasAwards && (
          <ul className={`mt-2 text-[0.95rem] text-gray-600 ${bulletListClass}`} aria-label="Awards">
            {paper.awards.map((award, i) => (
              <li key={i}>{award}</li>
            ))}
          </ul>
        )}

        {hasLinks && (
          <p className="mt-3 flex flex-wrap gap-x-5 text-[0.95rem]">
            {paper.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={textLinkClass}
                aria-label={`${link.label} for ${paper.title}`}
              >
                {link.label}
              </a>
            ))}
          </p>
        )}

        {hasExpandable && (
          <details className={hasLinks ? "mt-1" : "mt-3"}>
            <summary className={`text-[0.95rem] cursor-pointer select-none w-fit ${textLinkClass}`}>
              {summaryLabel}
            </summary>
            <div className="mt-3 pl-4 border-l border-gray-300">
              {paper.abstract && (
                <p className="text-[0.95rem] text-gray-700 leading-relaxed">
                  {paper.abstract}
                </p>
              )}
              {hasNotes && (
                <p className="text-[0.95rem] text-gray-600 italic mt-2">
                  {paper.notes.join("; ")}
                </p>
              )}
            </div>
          </details>
        )}
      </div>
    </article>
  );
}

function PaperSection({ title, papers }) {
  return (
    <section className={sectionClass}>
      <div className={`${gridClass} ${sectionHeadClass}`}>
        <h2 className={sectionLabelClass}>{title}</h2>
      </div>
      {papers.map((paper, i) => (
        <PaperItem key={paper.id} paper={paper} first={i === 0} />
      ))}
    </section>
  );
}

export default function Research() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow w-full max-w-4xl mx-auto px-6 pt-8 pb-8 sm:pt-12">
        <section className={gridClass}>
          <div className="md:col-start-2">
            <h1 className={`${pageTitleClass} mb-4`}>Research</h1>
            <p className="text-gray-900 leading-relaxed">
              My research focuses on{" "}
              <strong className="font-semibold">
                the intersection of innovation and entrepreneurship, especially
                within the biopharmaceutical and high-tech industries
              </strong>
              . My work explores the intricate ways in which technology influences
              innovation, aiming to identify the key drivers and obstacles to
              technology adoption and its effects on individuals, firms, and our
              society.
            </p>
          </div>
        </section>

        <PaperSection title="Publications" papers={publications} />
        <PaperSection title="Working Papers" papers={workingPapers} />
      </main>
    </div>
  );
}
