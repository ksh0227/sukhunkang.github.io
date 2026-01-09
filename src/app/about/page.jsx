"use client";

import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow px-6 lg:px-72 py-8">
        <section className="mt-8 max-w-3xl">
          <h1 className="text-3xl font-bold mb-6">About</h1>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              I am an{" "}
              <strong>
                Assistant Professor of Technology Management at the University
                of California, Santa Barbara
              </strong>
              . I co-direct the{" "}
              <Link href="/lab/hil" className="underline">
                Health Innovation Lab
              </Link>{" "}
              with{" "}
              <Link
                href="https://www.barbosu.com/"
                target="_blank"
                className="underline"
              >
                Sandra Barbosu
              </Link>{" "}
              and{" "}
              <Link
                href="https://www.sungyongchang.com/"
                target="_blank"
                className="underline"
              >
                Sungyong Chang
              </Link>
              , and organize the{" "}
              <Link href="/lab/hiwg" className="underline">
                Health Innovation Working Group Seminar
              </Link>
              . I serve on the{" "}
              <strong>Editorial Review Board of Organization Science</strong>{" "}
              and on research committees for AOM's STR Division and as the Rep-at-Large at Innovation & Knowledge and Research Methods Community at SMS.
            </p>

            <p>
              I hold a{" "}
              <strong>
                PhD in Strategy and Entrepreneurship from London Business School
              </strong>{" "}
              . My dissertation, "Essays on
              Innovation Commercialization," was recognized as a finalist for
              the AOM STR/TIM Outstanding Dissertation Award and the
              Organization Science/INFORMS Dissertation Proposal Competition,
              and was runner-up for the ISA Giarrantani Rising Star Award.
            </p>

            <p>
              My research explores the intricate ways in which{" "}
              <strong>
                technology influences innovation, aiming to identify the key drivers and obstacles to technology adoption and its effects on individuals, firms, and our society
              </strong>
              . My research also investigates the broader implications of technology and innovation, with an emphasis on how technology alters firm strategy and behavior. My goal is to deepen our understanding of how to effectively use technology to foster innovation within a business context.
            </p>

            <p>
              Before academia, I was a{" "}
              <strong>semiconductor engineer at Samsung Electronics</strong>{" "}
              and a research engineer at I&C Technology. In 2010, I
              founded an Internet startup in Seoul. I
              hold a BS in Computer Engineering from the University of Illinois
              and Master's degrees from USC in Computer Engineering and
              Entrepreneurship & Innovation. These experiences inform my
              research on how firms innovate and commercialize new technologies.
            </p>

            <p>
              I am a member of the{" "}
              <Link
                href="https://med.nyu.edu/centers-programs/medical-ethics/access-programs"
                target="_blank"
                className="underline"
              >
                Working Group on Compassionate Use & Preapproval Access (CUPA)
              </Link>{" "}
              at NYU and have served on the International Rare Diseases Research
              Consortium (IRDiRC) Task Force on Funding Models. I mentor
              startups through the CancerX Accelerator.
            </p>

            <p>
              I can be reached at{" "}
              <Link href="mailto:sukhunkang@ucsb.edu" className="underline">
                sukhunkang@ucsb.edu
              </Link>
              . You can also find me on{" "}
              <Link
                href="https://scholar.google.co.uk/citations?user=FMHJcysAAAAJ"
                target="_blank"
                className="underline"
              >
                Google Scholar
              </Link>
              ,{" "}
              <Link
                href="https://www.linkedin.com/in/sukhunkang/"
                target="_blank"
                className="underline"
              >
                LinkedIn
              </Link>
              , and{" "}
              <Link
                href="https://x.com/sukhunkang"
                target="_blank"
                className="underline"
              >
                X/Twitter
              </Link>
              .
            </p>
          </div>

          {/* Awards Section */}
          <section className="mt-10">
            <h2 className="text-xl font-semibold mb-4">Selected Awards</h2>
            <ul className="space-y-2 text-gray-700">
              <li>Sumantra Ghoshal Research and Practice Award, AOM, 2025</li>
              <li>STR Distinguished Paper Award in Corporate and International Strategy, AOM, 2025</li>
              <li>ISA Giarrantani Rising Star Award, Runner-up, 2024</li>
              <li>TIM Dissertation Award, Finalist, AOM, 2024</li>
              <li>STR Dissertation Award, Finalist, AOM, 2024</li>
              <li>Sir James Ball PhD Award, London Business School, 2022</li>
              <li>Organization Science/INFORMS Dissertation Proposal Competition, Finalist, 2022</li>
            </ul>
          </section>

          {/* Media & Outreach */}
          <section className="mt-10">
            <h2 className="text-xl font-semibold mb-4">Media & Outreach</h2>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link
                  href="https://theincidentaleconomist.com/wordpress/measuring-biopharmaceutical-innovation-in-the-modern-era/"
                  target="_blank"
                  className="underline"
                >
                  "Measuring Biopharmaceutical Innovation in the Modern Era"
                </Link>
                , The Incidental Economist, 2025
              </li>
              <li>
                <Link
                  href="https://www.youtube.com/watch?v=XoXJaQyXbKU"
                  target="_blank"
                  className="underline"
                >
                  "Conversation with Sukhun Kang on access to medicines"
                </Link>
                , PI-Squared Initiative Podcast (Northeastern University), 2025
              </li>
              <li>
                <Link
                  href="https://www.london.edu/think/why-should-collaboration-enhance-oncology-drug-innovation"
                  target="_blank"
                  className="underline"
                >
                  "Why should collaboration enhance oncology drug innovation?"
                </Link>
                , Think at London Business School (The Why Podcast), 2023
              </li>
            </ul>
          </section>
        </section>
      </main>
    </div>
  );
}
