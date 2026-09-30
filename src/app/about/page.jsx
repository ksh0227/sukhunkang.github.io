import Link from "next/link";

const inlineLink =
  "text-accent underline decoration-accent/30 underline-offset-2 hover:decoration-accent transition-colors duration-200";

// Year first, laid out like the News list on the home page.
const awards = [
  { year: "2026", text: "Sebastian Hoenen Research Prize, SEI Consortium" },
  { year: "2026–2029", text: "Swildens Family Faculty Fellowship, UCSB" },
  { year: "2026", text: "TIM Best Conference Paper Award, Finalist, AOM" },
  { year: "2026", text: "Babbage Best Paper in Industrial Innovation Policy Award, Runner-up, ISA" },
  { year: "2026", text: "Best Paper in Innovation and Entrepreneurship Award, ISA" },
  { year: "2025", text: "Sumantra Ghoshal Research and Practice Award, AOM" },
  { year: "2025", text: "STR Distinguished Paper Award in Corporate and International Strategy, AOM" },
  { year: "2025", text: "University of California Regents' Junior Faculty Fellowship" },
  { year: "2024", text: "Giarratani Rising Star Award, Runner-up, ISA" },
];

const media = [
  {
    year: "2026",
    title:
      "Clinical Trials That Are Actually Marketing Ploys Targeting Doctors: How Seeding Trials Put Profit over Patients",
    outlet: "The Conversation",
    url: "https://theconversation.com/clinical-trials-that-are-actually-marketing-ploys-targeting-doctors-how-seeding-trials-put-profit-over-patients-280398",
  },
  {
    year: "2025",
    title: "Measuring Biopharmaceutical Innovation in the Modern Era",
    outlet: "The Incidental Economist",
    url: "https://theincidentaleconomist.com/wordpress/measuring-biopharmaceutical-innovation-in-the-modern-era/",
  },
  {
    year: "2025",
    title: "Conversation with Sukhun Kang on access to medicines",
    outlet: "PI-Squared Initiative Podcast (Northeastern University)",
    url: "https://www.youtube.com/watch?v=XoXJaQyXbKU",
  },
  {
    year: "2023",
    title: "Why should collaboration enhance oncology drug innovation?",
    outlet: "Think at London Business School (The Why Podcast)",
    url: "https://www.london.edu/think/why-should-collaboration-enhance-oncology-drug-innovation",
  },
];

const rowClass = "py-3 flex flex-col sm:flex-row gap-1 sm:gap-6";
const yearClass = "sm:w-24 flex-shrink-0 text-sm text-gray-500 tabular-nums sm:pt-0.5";
const headingClass = "text-2xl font-semibold text-gray-900 border-b border-gray-200 pb-3";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow max-w-4xl mx-auto px-6 py-8">
        <section className="mt-8">
          <h1 className="text-3xl font-bold mb-4">About</h1>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              I am an Assistant Professor of Technology Management at the
              University of California, Santa Barbara. I co-direct the{" "}
              <Link href="/lab/hil" className={inlineLink}>
                Health Innovation Lab
              </Link>{" "}
              with{" "}
              <Link
                href="https://www.barbosu.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={inlineLink}
              >
                Sandra Barbosu
              </Link>{" "}
              and{" "}
              <Link
                href="https://www.sungyongchang.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={inlineLink}
              >
                Sungyong Chang
              </Link>
              , and organize the{" "}
              <Link href="/lab/hiwg" className={inlineLink}>
                Health Innovation Working Group (HIWG) Research Chat
              </Link>
              . I serve on the Editorial Review Board of Organization Science,
              on the Research Committee of AOM's STR Division, and as
              Rep-at-Large for the Knowledge and Innovation Interest Group and
              the Research Methods Community at SMS.
            </p>

            <p>
              I study how technology shapes innovation and firm strategy,
              especially in the biopharmaceutical industry. I am interested in
              what drives and what holds back the adoption of new technologies,
              and in how they change the way firms compete and make decisions.
              Much of my work looks at the forces around innovation, such as
              regulation, science, and capital, and at how they shape which
              ideas firms pursue and how quickly those ideas reach patients. My
              goal is to understand how technology can be used to foster
              innovation that benefits firms and society.
            </p>

            <p>
              Before academia, I was a semiconductor engineer at Samsung
              Electronics and a research engineer at I&C Technology. In 2010, I
              founded an Internet startup in Seoul. I hold a PhD in Strategy and
              Entrepreneurship from London Business School, a BS in Computer
              Engineering from the University of Illinois,
              and Master's degrees from USC in Computer Engineering and
              Entrepreneurship & Innovation. These experiences inform my
              research on how firms innovate and commercialize new technologies.
            </p>

            <p>
              I am a member of the{" "}
              <Link
                href="https://med.nyu.edu/departments-institutes/population-health/divisions-sections-centers/medical-ethics/research/working-group-compassionate-use-preapproval-access"
                target="_blank"
                rel="noopener noreferrer"
                className={inlineLink}
              >
                Working Group on Compassionate Use & Preapproval Access (CUPA)
              </Link>{" "}
              at NYU and have served on the International Rare Diseases Research
              Consortium (IRDiRC) Task Force on Funding Models. I mentored
              startups through the CancerX Accelerator, and I mentor researchers
              through AOM's STR Dissertation Consortium and UCSB's McNair
              Scholars Program.
            </p>

            <p>
              I also advise startups on entrepreneurial strategy, consult with
              firms on their strategy, and speak on strategy, innovation, and
              entrepreneurship.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className={headingClass}>Selected Awards</h2>
          <ul className="divide-y divide-gray-100">
            {awards.map((award) => (
              <li key={award.text} className={rowClass}>
                <span className={yearClass}>{award.year}</span>
                <span className="text-gray-800">{award.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className={headingClass}>Media & Outreach</h2>
          <ul className="divide-y divide-gray-100">
            {media.map((item) => (
              <li key={item.url} className={rowClass}>
                <span className={yearClass}>{item.year}</span>
                <span className="text-gray-800">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-gray-300 underline-offset-4 hover:text-accent hover:decoration-accent transition-colors duration-200"
                  >
                    “{item.title}”
                  </a>
                  , {item.outlet}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
