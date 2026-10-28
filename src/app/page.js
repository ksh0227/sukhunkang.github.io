import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { publications, workingPapers, formatCoauthors } from "./data/papers";
import { news, formatNewsDate } from "./data/news";
import {
  gridClass,
  sectionLabelClass,
  sectionClass,
  textLinkClass,
  bulletListClass,
} from "./components/grid";

// Papers featured on the home page, by id from data/papers.js.
const FEATURED = ["wp-3", "wp-4", "pub-3"];

const profileLinks = [
  { label: "Email", href: "mailto:sukhunkang@ucsb.edu" },
  { label: "CV", href: "/Sukhun-Kang-CV.pdf" },
  {
    label: "Google Scholar",
    href: "https://scholar.google.co.uk/citations?user=FMHJcysAAAAJ",
  },
  {
    label: "SSRN",
    href: "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=2596230",
  },
];

const quietLink =
  "hover:text-gray-900 hover:underline underline-offset-2 transition-colors duration-200";

// Opens off-site links (and the CV PDF) in a new tab; mailto and site pages stay put.
const newTab = (href) =>
  href.startsWith("http") || href.endsWith(".pdf")
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

export default function Home() {
  const papers = [...publications, ...workingPapers];
  const featured = FEATURED.map((id) => papers.find((p) => p.id === id)).filter(Boolean);

  return (
    <main className="max-w-4xl mx-auto px-6 pt-8 pb-8 sm:pt-12">
      {/* Hero. The portrait sits in the label column, the text in the content
          column. Below md: photo beside the name, text full width below. md and
          up: the photo stretches from the top of the name to the bottom of the links. */}
      <section className="grid grid-cols-[5.5rem_minmax(0,1fr)] sm:grid-cols-[7rem_minmax(0,1fr)] md:grid-cols-[11rem_minmax(0,1fr)] items-center md:items-stretch gap-x-5 sm:gap-x-8 md:gap-x-11 gap-y-5">
        <div className="relative aspect-[3/4] md:aspect-auto overflow-hidden md:row-span-2">
          <Image
            src="/sukhun.jpg"
            alt="Sukhun Kang"
            fill
            sizes="(min-width: 768px) 198px, (min-width: 640px) 126px, 94px"
            className="object-cover"
            priority
          />
        </div>
        <div>
          <h1 className="text-[2.1rem] sm:text-[2.4rem] leading-tight text-gray-900">
            Sukhun Kang
          </h1>
          <p className="mt-2 text-[0.95rem] text-gray-600 leading-snug">
            Assistant Professor of{" "}
            <Link href="https://tmp.ucsb.edu/" target="_blank" rel="noopener noreferrer" className={quietLink}>
              Technology Management
            </Link>
            <br />
            <Link href="https://engineering.ucsb.edu/" target="_blank" rel="noopener noreferrer" className={quietLink}>
              Robert Mehrabian College of Engineering
            </Link>
            ,{" "}
            <Link href="https://www.ucsb.edu" target="_blank" rel="noopener noreferrer" className={quietLink}>
              UC Santa Barbara
            </Link>
          </p>
        </div>
        <div className="col-span-2 md:col-span-1 md:col-start-2">
          <p className="leading-relaxed text-gray-900">
            I study how technology shapes innovation and firm strategy, especially in the
            biopharmaceutical industry.
          </p>
          <p className="mt-4 leading-relaxed text-gray-900">
            Before academia, I was a semiconductor engineer at Samsung and founded an Internet
            startup. I hold a PhD from London Business School and degrees in computer engineering
            from UIUC and USC.{" "}
            <Link href="/about" className={textLinkClass}>
              More about me
            </Link>
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-[0.95rem]">
            {profileLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} {...newTab(href)} className={textLinkClass}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Selected research. Each paper shows its title and coauthors, then
          sentences quoted verbatim from its abstract (papers.js `excerpt`). */}
      <section className={`${gridClass} ${sectionClass}`}>
        <div className="mb-2 md:mb-0 flex md:flex-col items-baseline md:items-end justify-between md:justify-start gap-1">
          <h2 className={sectionLabelClass}>Selected research</h2>
          <Link href="/research" className={`text-[0.95rem] text-gray-600 ${textLinkClass}`}>
            All research
          </Link>
        </div>
        <ul className="divide-y divide-gray-200">
          {featured.map((paper) => {
            const coauthors = formatCoauthors(paper.authors);
            const meta = [
              paper.venue && (
                <>
                  <span className="italic">{paper.venue}</span>, {paper.year}
                </>
              ),
              coauthors,
            ].filter(Boolean);
            return (
              <li key={paper.id} className="py-8 first:pt-0">
                <p className="text-[0.9rem] italic text-gray-500">
                  {paper.venue ? "Research Article" : "Working Paper"}
                </p>
                <h3 className="mt-1 text-[1.4rem] sm:text-[1.5rem] font-medium leading-snug tracking-[-0.01em] text-gray-900">
                  <Link
                    href={`/research#${paper.id}`}
                    className="hover:underline decoration-accent decoration-1 underline-offset-4"
                  >
                    {paper.title}
                  </Link>
                </h3>
                {meta.length > 0 && (
                  <p className="mt-1 text-[0.95rem] text-gray-600">
                    {meta.map((part, i) => (
                      <Fragment key={i}>
                        {i > 0 && " · "}
                        {part}
                      </Fragment>
                    ))}
                  </p>
                )}
                <p className="mt-3 leading-relaxed text-gray-900">{paper.excerpt || paper.hook}</p>
                {paper.awards && paper.awards.length > 0 && (
                  <ul className={`mt-2 text-[0.9rem] text-gray-500 ${bulletListClass}`} aria-label="Awards">
                    {paper.awards.map((award, i) => (
                      <li key={i}>{award}</li>
                    ))}
                  </ul>
                )}
                {paper.links && paper.links.length > 0 && (
                  <p className="mt-3 flex flex-wrap gap-x-5 text-[0.95rem]">
                    {paper.links.map((link) => (
                      <a
                        key={link.url}
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
              </li>
            );
          })}
        </ul>
      </section>

      {/* News */}
      <section className={`${gridClass} ${sectionClass}`}>
        <h2 className={`${sectionLabelClass} mb-2 md:mb-0`}>News</h2>
        <ul className="divide-y divide-gray-200">
          {news.map((item) => (
            <li key={item.text} className="py-3 first:pt-0 flex flex-col sm:flex-row gap-1 sm:gap-6">
              <time
                dateTime={item.date}
                className="sm:w-20 flex-shrink-0 text-[0.95rem] text-gray-500 tabular-nums sm:pt-px"
              >
                {formatNewsDate(item.date)}
              </time>
              <a href={item.url} {...newTab(item.url)} className={`text-gray-900 ${textLinkClass}`}>
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
