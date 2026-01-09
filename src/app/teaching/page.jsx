import Image from "next/image";
import Link from "next/link";

export default function Teaching() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow px-6 lg:px-72 py-8">
        <section className="mt-8">
          <h1 className="text-3xl font-bold mb-4">Teaching</h1>
          <p className="text-gray-700 leading-relaxed">
            My teaching focuses on helping students understand{" "}
            <strong>
              how firms create and capture value through strategy, innovation,
              and entrepreneurship
            </strong>
            . I emphasize critical thinking through real-world applications using case studies and
            interactive discussions, drawing on my experience as both a
            researcher and former entrepreneur and engineer. Feel free to reach out if you
            would like to discuss any of these materials.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">Case Studies</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            I develop case studies that explore strategic challenges facing firms.
            These cases are designed for use in
            strategy, corporate strategy, and entrepreneurship courses.
          </p>

          <div className="border-l-2 border-gray-200 pl-4 mb-4">
            <h3 className="font-semibold text-gray-900">
              Behind the Scenes of a YouTube Mega-Hit: Baby Shark, The Pinkfong
              Company, and What's Next
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Harvard Business Publishing · 2024
            </p>
            <p className="text-gray-700 mt-2 text-sm leading-relaxed">
              How did The Pinkfong Company transform a viral video into a global
              multimedia brand? This case examines strategic questions around
              leveraging viral IP, digital platform dependence, and
              entrepreneurial growth.
            </p>
            <p className="text-sm mt-2">
              <Link
                href="https://store.hbr.org/product/behind-the-scenes-of-a-youtube-mega-hit-baby-shark-the-pinkfong-company-and-what-s-next/B6077"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                [Harvard Business Publishing]
              </Link>
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-6">Courses</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">
              TMP 412: Technology Strategy
            </h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              Master's course at UC Santa Barbara (2025–Present)
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Why do some technology-intensive firms outperform others? This course
              examines strategy in industries shaped by rapid innovation, intellectual
              property, and platform dynamics. Topics include S-curves and technology
              evolution, value capture and appropriability, IP strategy, platform and
              ecosystem design, corporate venture capital, and technology's role in
              addressing grand societal challenges. The course uses the case method
              with guest speakers from industry.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">
              TMP 120: Fundamentals of Business Strategy
            </h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              Undergraduate course at UC Santa Barbara (2023–Present)
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              An introduction to strategic management for technology management
              students. The course covers frameworks for analyzing competitive
              advantage, industry profitability, and innovation. Students apply
              these concepts through case discussions and a group project. 
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">Past Teaching</h2>
          <ul className="space-y-3 text-gray-700">
            <li>
              <span className="font-medium">
                Developing Strategy for Value Creation
              </span>
              <br />
              <span className="text-sm text-gray-600">
                London Business School Executive Education · Fall 2021 ·
                Teaching Assistant
              </span>
            </li>
            <li>
              <span className="font-medium">Case Studies in Innovation</span>
              <br />
              <span className="text-sm text-gray-600">
                USC Iovine and Young Academy · Fall 2015
              </span>
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">Student Feedback</h2>
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
              "I learned more in this course about businesses and the way they
              succeed than in my entire life."
            </blockquote>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">In the Classroom</h2>
          <div className="flex overflow-x-scroll snap-x snap-mandatory space-x-4 pb-4">
            <img
              src="class1.jpg"
              alt="Classroom photo"
              className="w-full max-w-lg flex-shrink-0 snap-center shadow-md"
            />
            <img
              src="class2.jpg"
              alt="Classroom photo"
              className="w-full max-w-lg flex-shrink-0 snap-center shadow-md"
            />
            <img
              src="class3.jpeg"
              alt="Classroom photo"
              className="w-full max-w-lg flex-shrink-0 snap-center shadow-md"
            />
            <img
              src="class4.jpeg"
              alt="Classroom photo"
              className="w-full max-w-lg flex-shrink-0 snap-center shadow-md"
            />
            <img
              src="class5.jpeg"
              alt="Classroom photo"
              className="w-full max-w-lg flex-shrink-0 snap-center shadow-md"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
