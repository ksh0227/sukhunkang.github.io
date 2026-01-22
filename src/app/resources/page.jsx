import Link from "next/link";

export default function Resources() {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow max-w-4xl mx-auto px-6 py-8">
          
          <section className="mt-8">
            <h1 className="text-3xl font-bold mb-4">Resources</h1>
            <h2 className="text-2xl font-semibold mb-3">Educational Materials</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Slide decks covering key topics in pharmaceutical regulation and drug development policy.
            </p>
            <div className="space-y-4">
              <div className="border-l-2 border-gray-200 pl-4">
                <h3 className="font-semibold text-gray-900">Introduction to Expanded Access</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Overview of FDA's expanded access (compassionate use) program, including eligibility criteria, application processes, and key considerations for patients and sponsors.
                </p>
                <p className="text-sm mt-2">
                  <Link href="/resources/Introduction-to-Expanded-Access.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200">[PDF]</Link>
                </p>
              </div>
              <div className="border-l-2 border-gray-200 pl-4">
                <h3 className="font-semibold text-gray-900">Introduction to FDA's Expedited Programs</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Guide to FDA's four expedited pathways: Fast Track, Breakthrough Therapy, Accelerated Approval, and Priority Review. Covers eligibility, benefits, and strategic considerations.
                </p>
                <p className="text-sm mt-2">
                  <Link href="/resources/Introduction-to-FDA-Expedited-Programs.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200">[PDF]</Link>
                </p>
              </div>
              <div className="border-l-2 border-gray-200 pl-4">
                <h3 className="font-semibold text-gray-900">Introduction to U.S. Pharmaceutical Laws and Regulations</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Overview of the U.S. regulatory framework for pharmaceuticals, including the FDA's role, drug approval process, and key legislation shaping the industry.
                </p>
                <p className="text-sm mt-2">
                  <Link href="/resources/Introduction-to-Pharmaceutical-Regulations.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200">[PDF]</Link>
                </p>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Conference Organization</h2>
            <ul className="list-disc list-outside pl-6 mt-2 space-y-1">
               <li>
                Rethinking Strategy & Innovation in Biopharmaceutical and Healthcare Industries, SMS2025{" "}
                <Link href="https://www.strategicmanagement.net/event/rethinking-strategy-innovation-in-biopharmaceutical-and-healthcare-industries/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200">[registration]</Link>
              </li>
              <li>
                Strategy and Innovation in Biopharmaceutical Industry, AOM2022{" "}
                <Link href="https://journals.aom.org/doi/10.5465/AMBPP.2022.10823symposium" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200">[abstract]</Link>
              </li>
              <li>
                Science and Firm Strategy, AOM2021{" "}
                <Link href="https://journals.aom.org/doi/abs/10.5465/AMBPP.2021.12682symposium" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200">[abstract]</Link>
              </li>
              <li>
                Where do Ecosystems Come From? The Origins of Ecosystem Structure and Performance, AOM2021{" "}
                <Link href="https://journals.aom.org/doi/abs/10.5465/AMBPP.2021.13345symposium" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200">[abstract]</Link>
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Useful Consortia / Workshops for Strategy PhD</h2>
            <ul className="list-disc list-outside pl-6 mt-2 space-y-1">
              <li>
                Trans-Atlantic Doctoral Conference{" "}
                <Link href="https://www.tadclbs.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200">[link]</Link>
              </li>
              <li>
                West Coast Research Symposium{" "}
                <Link href="https://thewcrs.wordpress.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200">[link]</Link>
              </li>
              <li>
                Wharton Innovation Doctoral Symposium{" "}
                <Link href="https://mackinstitute.wharton.upenn.edu/events-and-programs/wharton-innovation-doctoral-symposium/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200">[link]</Link>
              </li>
              <li>
                East Coast Doctoral Conference{" "}
                <Link href="https://www.eastcoastdoctoralconference.com/home" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200">[link]</Link>
              </li>
            </ul>
          </section>

        </main>
      </div>
    );
}
