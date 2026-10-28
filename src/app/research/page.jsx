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

// Server component: no client JS. The links and the "Abstract" toggle share
// one row (Journal, SSRN, Abstract). The toggle is a label around a visually
// hidden checkbox; the abstract and notes ship in the static HTML (crawlable)
// and show when the checkbox is checked (group-has-[:checked]), below the row.
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
      <div className="group/paper">
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

        {(hasLinks || hasExpandable) && (
          <p className="mt-3 flex flex-wrap gap-x-5 text-[0.95rem]">
            {hasLinks &&
              paper.links.map((link, i) => (
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
            {hasExpandable && (
              <label
                className={`cursor-pointer select-none ${textLinkClass} rounded-sm has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-blue-500`}
              >
                <input
                  type="checkbox"
                  className="sr-only"
                  aria-controls={`abstract-${paper.id}`}
                />
                {summaryLabel}
              </label>
            )}
          </p>
        )}

        {hasExpandable && (
          <div
            id={`abstract-${paper.id}`}
            className="hidden group-has-[:checked]/paper:block mt-3 pl-4 border-l border-gray-300"
          >
            {paper.abstract && (
              <p className="text-[0.95rem] text-gray-700 leading-relaxed">{paper.abstract}</p>
            )}
            {hasNotes && (
              <p className="text-[0.95rem] text-gray-600 italic mt-2">{paper.notes.join("; ")}</p>
            )}
          </div>
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
        <PaperSection title="Selected Working Papers" papers={workingPapers} />
      </main>
    </div>
  );
}
