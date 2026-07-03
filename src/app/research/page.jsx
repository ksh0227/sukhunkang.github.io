import Link from "next/link";
import { publications, workingPapers, formatCoauthors } from "../data/papers";

// Server component: no client JS. The abstract/awards/notes live inside a
// native <details>, so they ship in the static HTML (crawlable) while staying
// collapsed by default. Links stay in the always-visible header, not in the
// <summary>, so clicking a link never toggles the disclosure.
function PaperItem({ paper }) {
  const coauthors = formatCoauthors(paper.authors);
  const hasAwards = paper.awards && paper.awards.length > 0;
  const hasExpandable = Boolean(paper.abstract) || hasAwards;
  const summaryLabel = paper.abstract ? "Read abstract" : "Awards & recognition";

  return (
    <article
      id={paper.id}
      className="py-4 border-b border-gray-200 last:border-b-0 scroll-mt-20"
    >
      <h3 className="font-semibold text-gray-900">{paper.title}</h3>
      <p className="text-sm text-gray-600 mt-1">
        {paper.venue && <span className="italic">{paper.venue}</span>}
        {paper.venue && paper.year && <span> · </span>}
        {paper.year && <time dateTime={paper.year}>{paper.year}</time>}
        {paper.volume && <span> · {paper.volume}</span>}
        {coauthors && <span> · {coauthors}</span>}
      </p>
      {paper.links && paper.links.length > 0 && (
        <p className="text-sm mt-1">
          {paper.links.map((link, i) => (
            <span key={i}>
              {i > 0 && " · "}
              <Link
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                aria-label={`${link.label} for ${paper.title}`}
              >
                [{link.label}]
              </Link>
            </span>
          ))}
        </p>
      )}
      {paper.hook && <p className="text-gray-700 mt-2 italic">{paper.hook}</p>}

      {hasExpandable && (
        <details className="mt-2">
          <summary className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer select-none w-fit">
            {summaryLabel}
          </summary>
          <div className="mt-3 pl-4 border-l-2 border-gray-200">
            {hasAwards && (
              <div className="mb-3" role="list" aria-label="Awards">
                {paper.awards.map((award, i) => (
                  <p key={i} className="text-sm text-gray-600" role="listitem">
                    <span aria-hidden="true">🏆</span> {award}
                  </p>
                ))}
              </div>
            )}
            {paper.abstract && (
              <p className="text-sm text-gray-700 leading-relaxed">
                {paper.abstract}
              </p>
            )}
            {paper.notes && paper.notes.length > 0 && (
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
            society. My{" "}
            <Link
              href="/Sukhun-Kang-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
            >
              CV can be viewed here [PDF]
            </Link>
            .
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
