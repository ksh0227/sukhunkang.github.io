import Link from "next/link";

export default function Resources() {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow px-6 lg:px-64 py-8">
          
          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Other Resources</h2>
            <ul className="list-disc list-outside pl-6 mt-2 space-y-1">
              <li>
                Introduction to Expanded Access{" "}
                <Link href="/" className="underline">[ppt]</Link>
              </li>
              <li>
                Introduction to FDA's Expedited Programs{" "}
                <Link href="/" className="underline">[ppt]</Link>
              </li>
              <li>
                Introduction to U.S. Laws, Policies, and Regulations of Pharmaceuticals{" "}
                <Link href="/" className="underline">[ppt]</Link>
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Conference Organization</h2>
            <ul className="list-disc list-outside pl-6 mt-2 space-y-1">
              <li>
                Strategy and Innovation in Biopharmaceutical Industry, AOM2022{" "}
                <Link href="/" className="underline">[abstract]</Link>
              </li>
              <li>
                Science and Firm Strategy, AOM2021{" "}
                <Link href="/" className="underline">[abstract]</Link>
              </li>
              <li>
                Where do Ecosystems Come From? The Origins of Ecosystem Structure and Performance, AOM2021{" "}
                <Link href="/" className="underline">[abstract]</Link>
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Useful Consortia / Workshops for Strategy PhD</h2>
            <ul className="list-disc list-outside pl-6 mt-2 space-y-1">
              <li>
                Trans-Atlantic Doctoral Conference{" "}
                <Link href="/" className="underline">[link]</Link>
              </li>
              <li>
                West Coast Research Symposium{" "}
                <Link href="/" className="underline">[link]</Link>
              </li>
              <li>
                Wharton Innovation Doctoral Symposium{" "}
                <Link href="/" className="underline">[link]</Link>
              </li>
              <li>
                East Coast Doctoral Conference{" "}
                <Link href="/" className="underline">[link]</Link>
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
