"use client";

import Link from "next/link";
import { useState } from "react";

export default function Research() {
  const [expandedAbstracts, setExpandedAbstracts] = useState({});

  const toggleAbstract = (index) => {
    setExpandedAbstracts(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // publications
  const publications = [
    {
      authors: "Yongwook Paik, Sukhun Kang, and Robert Seamans",
      title: "Entrepreneurship, Innovation, and Political Competition: How the Public Sector Helps the Sharing Economy Create Value",
      journal: "Strategic Management Journal",
      year: "2019",
      volume: "40",
      pages: "503-532",
      pdfLink: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2925077",
      abstract: "With the recent growth of the sharing economy, regulators must frequently strike the right balance between private and public interests to maximize value creation. In this article, we argue that political competition is a critical ingredient that explains whether cities accommodate or ban ridesharing platforms and that this relationship is moderated in more populous cities and in cities with higher unemployment rates. We test our arguments using archival data covering ridesharing bans in various U.S. cities during the 2011–2015 period. We supplement these data with semistructured interviews. We find broad support for our arguments while mitigating potential endogeneity concerns. Our study has important implications for nonmarket strategy, entrepreneurship and innovation, and public-private partnership literatures. In addition, our findings inform policy debates on the sharing economy."
    },
    {
      authors: "Sukhun Kang, Sungyong Chang, Joseph Ross, and Jennifer Miller",
      title: "Implementation of 21st Century Cures Act Expanded Access Policies Requirement",
      journal: "Clinical Pharmacology & Therapeutics",
      year: "2021",
      volume: "110",
      issue: "6",
      pages: "1579-1584",
      pdfLink: "https://ascpt.onlinelibrary.wiley.com/doi/10.1002/cpt.2401",
      abstract: "The US Food and Drug Administration (FDA) expanded access pathway allows patients with life-threatening or serious conditions to access investigational drugs outside of trials, under certain conditions. The 21st Century Cures Act (“Cures Act”) requires certain drug companies to publicly disclose their expanded access policies. We characterized the proportion of applicable US biopharmaceutical companies, with an oncology related drug, implementing Cures Act requirements for expanded access policies and whether available policies contain the information described in the Act. We found about one-third of applicable biopharmaceutical companies (32%, 140/423) implemented the Cures Act requirement to have a public expanded access policy. Less than one-third of public policies contained all described information (31%, 44/140). Larger companies and those with at least one drug receiving an FDA expedited designation (59% vs. 21%; P < 0.001), or at least one FDA-approved drug (57% vs. 28%; P < 0.001) were more likely to have a public policy. Our results suggest the Cures Act may be having a limited impact on its goals of supporting timely medical decisions and closing informational gaps for patients and doctors around expanded access to investigational oncology therapies, especially for products sponsored by smaller and newer companies."
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
      title: "Data Privacy Regulation and Innovation"
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

  // Schema markup
  const publicationsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Publications by Sukhun Kang",
    "itemListElement": [
      {
        "@type": "ScholarlyArticle",
        "position": 1,
        "name": "Entrepreneurship, Innovation, and Political Competition: How the Public Sector Helps the Sharing Economy Create Value",
        "author": [
          {"@type": "Person", "name": "Yongwook Paik"},
          {"@type": "Person", "name": "Sukhun Kang"},
          {"@type": "Person", "name": "Robert Seamans"}
        ],
        "datePublished": "2019",
        "isPartOf": {
          "@type": "Periodical",
          "name": "Strategic Management Journal",
          "volumeNumber": "40"
        },
        "pageStart": "503",
        "pageEnd": "532",
        "url": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2925077"
      },
      {
        "@type": "ScholarlyArticle",
        "position": 2,
        "name": "Implementation of 21st Century Cures Act Expanded Access Policies Requirement",
        "author": [
          {"@type": "Person", "name": "Sukhun Kang"},
          {"@type": "Person", "name": "Sungyong Chang"},
          {"@type": "Person", "name": "Joseph Ross"},
          {"@type": "Person", "name": "Jennifer Miller"}
        ],
        "datePublished": "2021",
        "isPartOf": {
          "@type": "Periodical",
          "name": "Clinical Pharmacology & Therapeutics",
          "volumeNumber": "110",
          "issueNumber": "6"
        },
        "pageStart": "1579",
        "pageEnd": "1584",
        "url": "https://ascpt.onlinelibrary.wiley.com/doi/10.1002/cpt.2401"
      },
      {
        "@type": "ScholarlyArticle",
        "position": 3,
        "name": "When Do Firms Provide Early Access to Investigational Drugs? Evidence from Expanded Access in the Oncology Drug Market 1990-2020",
        "author": [
          {"@type": "Person", "name": "Sukhun Kang"},
          {"@type": "Person", "name": "Sungyong Chang"}
        ],
        "url": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4885005"
      },
      {
        "@type": "ScholarlyArticle",
        "position": 4,
        "name": "How Do Investors Shape Startups' Response to New Market Opportunities?",
        "author": [
          {"@type": "Person", "name": "Sarath Balachandran"},
          {"@type": "Person", "name": "Sungyong Chang"},
          {"@type": "Person", "name": "Sukhun Kang"}
        ],
        "datePublished": "2025",
        "award": [
          "2025 AOM Best Paper Proceedings",
          "2025 Sumantra Ghoshal Research and Practice Award",
          "2025 AOM STR's Distinguished Best Paper Award"
        ],
        "url": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4993926"
      },
      {
        "@type": "ScholarlyArticle",
        "position": 5,
        "name": "From Outward to Inward: Reframing Search with New Mapping Criteria",
        "author": [
          {"@type": "Person", "name": "Sukhun Kang"}
        ],
        "award": [
          "2023 AOM Best Paper Proceedings",
          "Runner-up for ISA Giarrantani Rising Star Award"
        ]
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(publicationsSchema) }}
      />
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
                <strong>[{index + 1}]</strong> {pub.authors}. {pub.year}.{" "}
                <em><strong>"{pub.title}"</strong></em>{" "}
                <span className="italic">{pub.journal}</span>, {pub.volume}{pub.issue ? `; ${pub.issue}` : ''}: {pub.pages}.{" "}
                {pub.pdfLink && (
                  <Link href={pub.pdfLink} className="text-blue-600 underline" target="_blank">[link]</Link>
                )}
                {pub.abstract && (
                  <div className="mt-1">
                    <button
                      onClick={() => toggleAbstract(index)}
                      className="text-gray-600 hover:text-gray-900 text-sm flex items-center gap-1"
                    >
                      <span
                        className="inline-block transition-transform duration-200"
                        style={{ transform: expandedAbstracts[index] ? 'rotate(90deg)' : 'rotate(0deg)' }}
                      >
                        ▶
                      </span>
                      Abstract
                    </button>
                    {expandedAbstracts[index] && (
                      <p className="mt-2 text-gray-700 text-sm pl-4 border-l-2 border-gray-300">
                        {pub.abstract}
                      </p>
                    )}
                  </div>
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
