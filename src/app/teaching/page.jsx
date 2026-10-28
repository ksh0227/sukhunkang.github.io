import Image from "next/image";
import Link from "next/link";

import {
  gridClass,
  gridTopClass,
  sectionLabelClass,
  entryLabelClass,
  sectionClass,
  sectionHeadClass,
  pageTitleClass,
  entryTitleClass,
  textLinkClass,
} from "../components/grid";

// The first entry under a section label has no rule above it.
const entryFirstClass = `${gridClass} pb-7`;
const entryClass = `${gridClass} py-7 border-t border-gray-200`;

export default function Teaching() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow w-full max-w-4xl mx-auto px-6 pt-8 pb-8 sm:pt-12">
        <section className={gridClass}>
          <div className="md:col-start-2">
            <h1 className={`${pageTitleClass} mb-4`}>Teaching</h1>
            <p className="text-gray-900 leading-relaxed">
              My teaching focuses on helping students understand{" "}
              <strong className="font-semibold">
                how firms create and capture value through strategy, innovation,
                and entrepreneurship
              </strong>
              . I emphasize critical thinking through real-world applications using case studies and
              interactive discussions, drawing on my experience as both a
              researcher and former entrepreneur and engineer. Feel free to reach out if you
              would like to discuss any of these materials.
            </p>
          </div>
        </section>

        <section className={sectionClass}>
          <div className={`${gridClass} ${sectionHeadClass}`}>
            <h2 className={sectionLabelClass}>Case Studies</h2>
            <p className="mt-3 md:mt-0 text-gray-900 leading-relaxed">
              I develop case studies that explore strategic challenges facing firms.
              These cases are designed for use in
              strategy, corporate strategy, and entrepreneurship courses.
            </p>
          </div>

          <article className={entryFirstClass}>
            <p className={entryLabelClass}>
              <span className="italic md:block">UC Berkeley Haas Case</span>
              <span className="md:hidden">, </span>
              <span className="tabular-nums">2025</span>
            </p>
            <div>
              <h3 className={entryTitleClass}>
                Behind the Scenes of a YouTube Mega-Hit: Baby Shark, The Pinkfong
                Company, and What's Next
              </h3>
              <p className="text-[0.95rem] text-gray-600 mt-1">with Abhishek Nagaraj</p>
              <p className="text-gray-900 mt-2 leading-relaxed">
                How did The Pinkfong Company transform a viral video into a global
                multimedia brand? This case examines strategic questions around
                leveraging viral IP, digital platform dependence, and
                entrepreneurial growth.
              </p>
              <p className="text-[0.95rem] mt-3">
                <Link
                  href="https://store.hbr.org/product/behind-the-scenes-of-a-youtube-mega-hit-baby-shark-the-pinkfong-company-and-what-s-next/B6077"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={textLinkClass}
                >
                  Harvard Business Publishing
                </Link>
              </p>
            </div>
          </article>
        </section>

        <section className={sectionClass}>
          <div className={`${gridClass} ${sectionHeadClass}`}>
            <h2 className={sectionLabelClass}>Courses</h2>
            <p className="mt-3 md:mt-0 text-gray-700">UC Santa Barbara</p>
          </div>

          <article className={entryFirstClass}>
            <p className={entryLabelClass}>
              <span className="italic md:block">Master's course</span>
              <span className="md:hidden">, </span>
              <span className="tabular-nums">2025–Present</span>
            </p>
            <div>
              <h3 className={entryTitleClass}>
                TMP 412: Technology Strategy
              </h3>
              <p className="text-gray-900 mt-2 leading-relaxed">
                Why do some technology-intensive firms outperform others? This course
                examines strategy in industries shaped by rapid innovation, intellectual
                property, and platform dynamics. Topics include S-curves and technology
                evolution, value capture and appropriability, IP strategy, platform and
                ecosystem design, corporate venture capital, and technology's role in
                addressing grand societal challenges. The course uses the case method
                with guest speakers from industry.
              </p>
              <p className="text-[0.95rem] mt-3">
                <Link
                  href="/syllabi/TMP412-syllabus.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={textLinkClass}
                >
                  Syllabus
                </Link>
              </p>
            </div>
          </article>

          <article className={entryClass}>
            <p className={entryLabelClass}>
              <span className="italic md:block">Undergraduate course</span>
              <span className="md:hidden">, </span>
              <span className="tabular-nums">2023–Present</span>
            </p>
            <div>
              <h3 className={entryTitleClass}>
                TMP 120: Fundamentals of Business Strategy
              </h3>
              <p className="text-gray-900 mt-2 leading-relaxed">
                An introduction to strategic management for technology management
                students. The course covers frameworks for analyzing competitive
                advantage, industry profitability, and innovation. Students apply
                these concepts through case discussions and a group project.
              </p>
              <p className="text-[0.95rem] mt-3">
                <Link
                  href="/syllabi/TMP120-syllabus.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={textLinkClass}
                >
                  Syllabus
                </Link>
              </p>
            </div>
          </article>
        </section>

        <section className={sectionClass}>
          <div className={`${gridClass} ${sectionHeadClass}`}>
            <h2 className={sectionLabelClass}>Past Teaching</h2>
          </div>

          <article className={entryFirstClass}>
            <p className={entryLabelClass}>
              <span className="tabular-nums">Fall 2021</span>
            </p>
            <div>
              <h3 className="font-medium text-gray-900">
                Developing Strategy for Value Creation
              </h3>
              <p className="text-[0.95rem] text-gray-600 mt-1">
                London Business School Executive Education · Teaching Assistant
              </p>
            </div>
          </article>

          <article className={entryClass}>
            <p className={entryLabelClass}>
              <span className="tabular-nums">Fall 2015</span>
            </p>
            <div>
              <h3 className="font-medium text-gray-900">Case Studies in Innovation</h3>
              <p className="text-[0.95rem] text-gray-600 mt-1">USC Iovine and Young Academy</p>
            </div>
          </article>
        </section>

        <section className={`${gridClass} ${sectionClass}`}>
          <h2 className={`${sectionLabelClass} mb-4 md:mb-0`}>Student Feedback</h2>
          <div className="space-y-4">
            <blockquote className="border-l-2 border-gray-300 pl-4 text-gray-700 italic">
              "One of my favorite professors I have had! Was very engaging and
              up to date on real-world knowledge that I can apply outside of the
              classroom. I enjoyed going to class and participating, and feel I
              will use this knowledge beyond this course."
            </blockquote>
            <blockquote className="border-l-2 border-gray-300 pl-4 text-gray-700 italic">
              "I really learned a lot in this course overall! Professor Kang
              clearly has a very strong background in business, and it showed
              through his teaching."
            </blockquote>
            <blockquote className="border-l-2 border-gray-300 pl-4 text-gray-700 italic">
              "Super passionate guy. Really well-structured as an intro to
              business class. If you show up and pay attention in class I
              promise you'll do well."
            </blockquote>
            <blockquote className="border-l-2 border-gray-300 pl-4 text-gray-700 italic">
              "His class has been my favorite at UCSB thus far. He is very
              supportive and inspirational."
            </blockquote>
            <blockquote className="border-l-2 border-gray-300 pl-4 text-gray-700 italic">
              "I can confidently say that Sukhun Kang has been the best
              professor I have had in my four years of college education...
              From guest lecturers to case studies to frameworks, every single
              lecture he taught was super engaging."
            </blockquote>
            <blockquote className="border-l-2 border-gray-300 pl-4 text-gray-700 italic">
              "Professor Kang is very approachable and enjoys challenging
              students' critical thinking skills."
            </blockquote>
          </div>
        </section>

        <section className={`${gridTopClass} ${sectionClass}`}>
          <h2 className={`${sectionLabelClass} mb-4 md:mb-0`}>In the Classroom</h2>
          <div className="flex overflow-x-scroll snap-x snap-mandatory space-x-4 pb-4">
            <img
              src="/class8.jpg"
              alt="Group photo of students in Professor Kang's Technology Management class in a UC Santa Barbara lecture hall"
              width={1280}
              height={734}
              loading="lazy"
              decoding="async"
              className="w-full max-w-lg flex-shrink-0 snap-center shadow-md"
            />
            <img
              src="/class7.jpg"
              alt="Professor Kang's Technology Management students gathered in a UC Santa Barbara lecture hall"
              width={1280}
              height={651}
              loading="lazy"
              decoding="async"
              className="w-full max-w-lg flex-shrink-0 snap-center shadow-md"
            />
            <img
              src="/class6.jpg"
              alt="A large group of students in Professor Kang's Technology Management class in a tiered UC Santa Barbara lecture hall"
              width={1280}
              height={635}
              loading="lazy"
              decoding="async"
              className="w-full max-w-lg flex-shrink-0 snap-center shadow-md"
            />
            <img
              src="/class5.jpeg"
              alt="Professor Kang's class posing at the end of the quarter beside a 'Thank you for an amazing quarter' slide"
              width={1280}
              height={960}
              loading="lazy"
              decoding="async"
              className="w-full max-w-lg flex-shrink-0 snap-center shadow-md"
            />
            <img
              src="/class4.jpeg"
              alt="Students in Professor Kang's Technology Management class standing in a UC Santa Barbara lecture hall"
              width={1280}
              height={960}
              loading="lazy"
              decoding="async"
              className="w-full max-w-lg flex-shrink-0 snap-center shadow-md"
            />
            <img
              src="/class3.jpeg"
              alt="Group photo of Professor Kang's Technology Management class, with students standing and kneeling in front"
              width={1280}
              height={960}
              loading="lazy"
              decoding="async"
              className="w-full max-w-lg flex-shrink-0 snap-center shadow-md"
            />
            <img
              src="/class2.jpg"
              alt="Professor Kang's Technology Management class gathered in a UC Santa Barbara classroom"
              width={1280}
              height={960}
              loading="lazy"
              decoding="async"
              className="w-full max-w-lg flex-shrink-0 snap-center shadow-md"
            />
            <img
              src="/class1.jpg"
              alt="Group photo of students in Professor Kang's Technology Management class at UC Santa Barbara"
              width={1280}
              height={960}
              loading="lazy"
              decoding="async"
              className="w-full max-w-lg flex-shrink-0 snap-center shadow-md"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
