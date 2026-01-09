import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import LinkCarousel from "./components/LinkCarousel";

export default function Home() {
  const keywords = [
    "Innovation",
    "Entrepreneurship",
    "Biopharma",
    "Strategy",
    "Technology Policy",
  ];

  return (
    <main className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-12 xl:px-48 py-10">
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-5XRGPSLYNT`}
      ></Script>
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-5XRGPSLYNT');
        `}
      </Script>

      <div className="max-w-2xl mx-auto">
        {/* Announcements */}
        <div className="mb-8">
          <LinkCarousel />
        </div>

        {/* Centered Header */}
        <div className="text-center mb-8">
          <div className="w-44 h-44 relative rounded-full mx-auto mb-5 overflow-hidden shadow-lg">
            <Image
              src="/sukhun.jpg"
              alt="Sukhun Kang"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Sukhun Kang</h1>
          <p className="text-gray-600 mb-4">
            Assistant Professor of Technology Management
            <br />
            <Link
              href="https://www.tmp.ucsb.edu/"
              target="_blank"
              className="hover:underline"
            >
              UC Santa Barbara
            </Link>
          </p>

          {/* Keyword Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-5">
            {keywords.map((keyword) => (
              <span
                key={keyword}
                className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
              >
                {keyword}
              </span>
            ))}
          </div>

          {/* CV Button */}
          <Link
            href="/Sukhun-Kang-CV.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:border-gray-400 transition"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Curriculum Vitae
          </Link>
        </div>

        {/* Bio */}
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
          My research explores the intricate ways in which technology influences innovation, 
          aiming to identify the key drivers and obstacles to technology adoption and its 
          effects on individuals, firms, and our society.
          
          My research also investigates the broader implications of technology and innovation, 
          with an emphasis on how technology alters firm strategy and behavior. 
          My goal is to deepen our understanding of how to effectively use technology to foster 
            innovation within a business context.
          </p>
          <p>
            Before academia, I was a semiconductor engineer at Samsung and
            founded an Internet startup. I hold a PhD from London Business
            School and Bacherlor's and Master's degrees in Computer Engineering from UIUC and USC.
          </p>
        </div>

      </div>
    </main>
  );
}
