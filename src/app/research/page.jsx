import Link from "next/link";

export default function Research() {
  // publications
  const publications = [
    {
      authors: "Yongwook Paik, Sukhun Kang, and Robert Seamans",
      title: "Entrepreneurship, Innovation, and Political Competition: How the Public Sector Helps the Sharing Economy Create Value",
      journal: "Strategic Management Journal",
      year: "2019",
      volume: "40",
      pages: "503-532",
      pdfLink: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2925077"
    },
    {
      authors: "Sukhun Kang, Sungyong Chang, Joseph Ross, and Jennifer Miller",
      title: "Implementation of 21st Century Cures Act Expanded Access Policies Requirement",
      journal: "Clinical Pharmacology & Therapeutics",
      year: "2021",
      volume: "110",
      issue: "6",
      pages: "1579-1584",
      pdfLink: "https://ascpt.onlinelibrary.wiley.com/doi/10.1002/cpt.2401"
    }
  ];

  // working papers
  const workingPapers = [
    {
      authors: "Sukhun Kang and Sungyong Chang",
      title: "When Do Firms Provide Early Access to Investigational Drugs? Evidence from Expanded Access in the Oncology Drug Market 1990-2020",
      pdfLink: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4885005"
    },
    {
      authors: "Sarath Balachandran, Sungyong Chang, and Sukhun Kang",
      title: "How Do Investors Shape Startups' Response to New Market Opportunities?",
      notes: [
        "2025 AOM Best Paper Proceedings",
        "2025 Sumantra Ghoshal Research and Practice Award",
        "2025 AOM STR's Distinguished Best Paper Award"
      ],
      pdfLink: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4993926"
    },
    {
      authors: "Sukhun Kang",
      title: "From Outward to Inward: Reframing Search with New Mapping Criteria",
      notes: [
        "2023 AOM Best Paper Proceedings",
        "Runner-up for ISA Giarrantani Rising Star Award"
      ]
    },
    {
      authors: "Sukhun Kang, Olenka Kacperczyk, and Yongwook Paik",
      title: "Shattering Ceilings While Opening Doors: The Symbolic Effect of the First Female Political Leader on the Mobility Outcomes of Female Employees"
    },
    {
      authors: "Gary Dushnitsky and Sukhun Kang",
      title: "Orchestrating an Ecosystem of Innovative Startups: Ex-Ante and Ex-post Actions and Orchestrator's Performance"
    },
   {
      authors: "Sukhun Kang and Jennifer Kao",
      title: "Data Privacy Regulation and Innovation: The Role of Cost and Trust in Collaborative R&D"
    },
   {
      authors: "Wesley Greenblatt, Young Hou, and Sukhun Kang",
      title: "Do Biomedical Researchers Study Topics Related to Their Own Ethnicities? Evidence from NIH"
    },
    {
      authors: "Sukhun Kang, Sandra Barbosu, Sungyong Chang, Fan Ye",
      title: "Whitespace in Drug Development: Quantifying the Inter-trial Intervals Between Clinical Trials"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow px-6 lg:px-72 py-8">

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Research Interests</h2>
          <ul className="list-disc list-outside pl-6 mt-2 space-y-1">
            <li>Innovation and Entrepreneurship; Strategic Management; Business and Public Policy</li>
            <li>Organizational Search; Exploration and Exploitation; Behavioral Strategy</li>
            <li>Biopharmaceutical and High-tech industry</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Peer-Reviewed Publications</h2>
          <ul className="list-disc list-outside pl-6 mt-2 space-y-4">
            {publications.map((pub, index) => (
              <li key={index}>
                <strong>[{index+ 1}]</strong> {pub.authors}. {pub.year}.{" "}
                <em><strong>"{pub.title}"</strong></em>{" "}
                <span className="italic">{pub.journal}</span>, {pub.volume}{pub.issue ? `; ${pub.issue}` : ''}: {pub.pages}.{" "}
                {pub.pdfLink && (
                  <Link href={pub.pdfLink} className="text-blue-600 underline" target="_blank">[link]</Link>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Working Papers / Works in Progress </h2>
          <ul className="list-disc list-outside pl-6 mt-2 space-y-4">
            {workingPapers.map((paper, index) => (
              <li key={index}>
                {paper.authors},{" "}
                <em><strong>"{paper.title}"</strong></em>{" "}
                {paper.pdfLink && (
                  <Link href={paper.pdfLink} className="text-blue-600 underline" target="_blank">[link]</Link>
                )}
                {paper.notes && (
                  <ul className="list-disc pl-8 mt-1">
                    {paper.notes.map((note, i) => (
                      <li key={i}>{note}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </section>


      </main>
    </div>
  );
}
