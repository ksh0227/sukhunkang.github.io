import Image from "next/image";
import Link from "next/link";
import { publications, workingPapers, formatCoauthors } from "./data/papers";
import { news, formatNewsDate } from "./data/news";

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
  "hover:text-accent hover:underline underline-offset-2 transition-colors duration-200";
const accentLink =
  "text-accent underline decoration-accent/30 underline-offset-2 hover:decoration-accent transition-colors duration-200";

// Opens off-site links (and the CV PDF) in a new tab; mailto and site pages stay put.
const newTab = (href) =>
  href.startsWith("http") || href.endsWith(".pdf")
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

export default function Home() {
  const papers = [...publications, ...workingPapers];
  const featured = FEATURED.map((id) => papers.find((p) => p.id === id)).filter(Boolean);

  return (
    <main className="max-w-4xl mx-auto px-6 pt-10 pb-8 sm:pt-16">
      {/* Hero. Below lg: photo beside the name, text full width below.
          lg and up: photo in its own column, stretched from the top of the
          name to the bottom of the links. */}
      <section className="grid grid-cols-[6rem_1fr] sm:grid-cols-[8rem_1fr] lg:grid-cols-[18rem_1fr] items-center lg:items-stretch gap-x-5 sm:gap-x-8 lg:gap-x-12 gap-y-6">
        <div className="relative aspect-[3/4] lg:aspect-auto overflow-hidden rounded-lg shadow-md lg:row-span-2">
          <Image
            src="/sukhun.jpg"
            alt="Sukhun Kang"
            fill
            sizes="(min-width: 1024px) 288px, (min-width: 640px) 128px, 96px"
            className="object-cover"
            priority
          />
        </div>
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900">
            Sukhun Kang
          </h1>
          <p className="mt-2 lg:mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
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
        <div className="col-span-2 lg:col-span-1 lg:col-start-2">
          <p className="sm:text-lg leading-relaxed text-gray-800">
            I study how technology shapes innovation and firm strategy, especially in the
            biopharmaceutical industry.
          </p>
          <p className="mt-4 sm:text-lg leading-relaxed text-gray-800">
            Before academia, I was a semiconductor engineer at Samsung and founded an Internet
            startup. I hold a PhD from London Business School and degrees in computer engineering
            from UIUC and USC.{" "}
            <Link href="/about" className={accentLink}>
              More about me
            </Link>
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium">
            {profileLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  {...newTab(href)}
                  className="text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Selected research */}
      <section className="mt-16">
        <div className="flex items-baseline justify-between gap-4 border-b border-gray-200 pb-3">
          <h2 className="text-2xl font-semibold text-gray-900">Selected research</h2>
          <Link
            href="/research"
            className="text-sm font-medium text-accent hover:underline underline-offset-4"
          >
            All research →
          </Link>
        </div>
        <ul className="divide-y divide-gray-100">
          {featured.map((paper) => {
            const coauthors = formatCoauthors(paper.authors);
            const meta = [
              paper.venue ? `${paper.venue}, ${paper.year}` : "Working paper",
              coauthors,
            ].filter(Boolean);
            return (
              <li key={paper.id} className="py-6">
                <h3 className="text-lg font-semibold leading-snug text-gray-900">
                  <Link
                    href={`/research#${paper.id}`}
                    className="hover:text-accent transition-colors duration-200"
                  >
                    {paper.title}
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-gray-600">{meta.join(" · ")}</p>
                {paper.awards && paper.awards.length > 0 && (
                  <div className="mt-2" role="list" aria-label="Awards">
                    {paper.awards.map((award, i) => (
                      <p key={i} className="flex gap-1.5 text-sm text-gray-700" role="listitem">
                        <span aria-hidden="true">🏆</span>
                        <span>{award}</span>
                      </p>
                    ))}
                  </div>
                )}
                {paper.hook && <p className="mt-2 text-gray-700">{paper.hook}</p>}
              </li>
            );
          })}
        </ul>
      </section>

      {/* News */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-900 border-b border-gray-200 pb-3">
          News
        </h2>
        <ul className="divide-y divide-gray-100">
          {news.map((item) => (
            <li key={item.text} className="py-4 flex flex-col sm:flex-row gap-1 sm:gap-6">
              <time
                dateTime={item.date}
                className="sm:w-24 flex-shrink-0 text-sm text-gray-500 tabular-nums sm:pt-0.5"
              >
                {formatNewsDate(item.date)}
              </time>
              <a
                href={item.url}
                {...newTab(item.url)}
                className="text-gray-800 underline decoration-gray-300 underline-offset-4 hover:text-accent hover:decoration-accent transition-colors duration-200"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
