import Link from "next/link";

export default function Resources() {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow px-6 lg:px-72 py-8">
          
          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Other Resources</h2>
            <ul className="list-disc list-outside pl-6 mt-2 space-y-1">
              <li>
                Introduction to Expanded Access{" "}
                <Link href="https://www.dropbox.com/scl/fi/rmfh6l5ztsn1v5okl7f21/Introduction-to-EAP.pdf?rlkey=5ok76ch6x0quqyznanx8ibsao&e=1&dl=0" className="underline">[ppt]</Link>
              </li>
              <li>
                Introduction to FDA's Expedited Programs{" "}
                <Link href="https://www.dropbox.com/s/ojy882ush37crbw/Introduction%20to%20FDA%27s%20Expedited%20Programs.pdf?dl=0" className="underline">[ppt]</Link>
              </li>
              <li>
                Introduction to U.S. Laws, Policies, and Regulations of Pharmaceuticals{" "}
                <Link href="https://www.dropbox.com/s/8ws5o7gdqdompwo/Introduction%20to%20Laws%2C%20Policies%2C%20and%20Regulations%20of%20Pharmaceuticals.pdf?dl=0" className="underline">[ppt]</Link>
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Conference Organization</h2>
            <ul className="list-disc list-outside pl-6 mt-2 space-y-1">
              <li>
                Strategy and Innovation in Biopharmaceutical Industry, AOM2022{" "}
                <Link href="https://journals.aom.org/doi/10.5465/AMBPP.2022.10823symposium" className="underline">[abstract]</Link>
              </li>
              <li>
                Science and Firm Strategy, AOM2021{" "}
                <Link href="https://journals.aom.org/doi/abs/10.5465/AMBPP.2021.12682symposium" className="underline">[abstract]</Link>
              </li>
              <li>
                Where do Ecosystems Come From? The Origins of Ecosystem Structure and Performance, AOM2021{" "}
                <Link href="https://journals.aom.org/doi/abs/10.5465/AMBPP.2021.13345symposium" className="underline">[abstract]</Link>
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Useful Consortia / Workshops for Strategy PhD</h2>
            <ul className="list-disc list-outside pl-6 mt-2 space-y-1">
              <li>
                Trans-Atlantic Doctoral Conference{" "}
                <Link href="https://www.tadclbs.com/" className="underline">[link]</Link>
              </li>
              <li>
                West Coast Research Symposium{" "}
                <Link href="https://thewcrs.wordpress.com/" className="underline">[link]</Link>
              </li>
              <li>
                Wharton Innovation Doctoral Symposium{" "}
                <Link href="https://mackinstitute.wharton.upenn.edu/events-and-programs/wharton-innovation-doctoral-symposium/" className="underline">[link]</Link>
              </li>
              <li>
                East Coast Doctoral Conference{" "}
                <Link href="https://www.eastcoastdoctoralconference.com/home" className="underline">[link]</Link>
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Consulting, Advising, and Speaking</h2>
            <ul className="list-disc list-outside pl-6 mt-2 space-y-1">
              <li>
                Sukhun engages in a variety of different consulting, advising, and speaking activities. 
                This includes advising startups on entrepreneurial strategy, consulting with firms on their 
                strategy, and speaking to a variety of different audiences on a variety of topics around 
                strategy, innovation, and entrepreneurship. Contact Sukhun via his e-mail.
              </li>
            </ul>
          </section>

        </main>
      </div>
    );
}
