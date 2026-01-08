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
      abstract: "ADD YOUR ABSTRACT HERE"
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
      abstract: "ADD YOUR ABSTRACT HERE"
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
          <ul classNa
