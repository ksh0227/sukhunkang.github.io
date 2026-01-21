"use client";

import Link from "next/link";
import { useState } from "react";

export default function Research() {
  const [expandedPapers, setExpandedPapers] = useState({});

  const togglePaper = (id) => {
    setExpandedPapers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const publications = [
    {
      id: "pub-1",
      title: "Entrepreneurship, Innovation, and Political Competition: How the Public Sector Helps the Sharing Economy Create Value",
      venue: "Strategic Management Journal",
      year: "2019",
      volume: "40: 503-532",
      coauthors: "with Yongwook Paik & Robert Seamans",
      hook: "Political competition can explain whether cities accomodate or ban ridesharing platforms.",
      abstract: "With the recent growth of the sharing economy, regulators must frequently strike the right balance between private and public interests to maximize value creation. In this article, we argue that political competition is a critical ingredient that explains whether cities accommodate or ban ridesharing platforms and that this relationship is moderated in more populous cities and in cities with higher unemployment rates. We test our arguments using archival data covering ridesharing bans in various U.S. cities during the 2011–2015 period. We supplement these data with semistructured interviews. We find broad support for our arguments while mitigating potential endogeneity concerns. Our study has important implications for nonmarket strategy, entrepreneurship and innovation, and public-private partnership literatures. In addition, our findings inform policy debates on the sharing economy.",
      links: [
        { label: "PDF", url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2925077" },
      ],
    },
    {
      id: "pub-2",
      title: "Implementation of 21st Century Cures Act Expanded Access Policies Requirement",
      venue: "Clinical Pharmacology & Therapeutics",
      year: "2021",
      volume: "110(6): 1579-1584",
      coauthors: "with Sungyong Chang, Joseph Ross & Jennifer Miller",
      hook: "Most drug companies do not publicly disclose their expanded access policies despite the Cures Act.",
      abstract: "The US Food and Drug Administration (FDA) expanded access pathway allows patients with life-threatening or serious conditions to access investigational drugs outside of trials, under certain conditions. The 21st Century Cures Act ('Cures Act') requires certain drug companies to publicly disclose their expanded access policies. We characterized the proportion of applicable US biopharmaceutical companies, with an oncology related drug, implementing Cures Act requirements for expanded access policies and whether available policies contain the information described in the Act. We found about one-third of applicable biopharmaceutical companies (32%, 140/423) implemented the Cures Act requirement to have a public expanded access policy. Less than one-third of public policies contained all described information (31%, 44/140). Larger companies and those with at least one drug receiving an FDA expedited designation (59% vs. 21%; P < 0.001), or at least one FDA-approved drug (57% vs. 28%; P < 0.001) were more likely to have a public policy. Our results suggest the Cures Act may be having a limited impact on its goals of supporting timely medical decisions and closing informational gaps for patients and doctors around expanded access to investigational oncology therapies, especially for products sponsored by smaller and newer companies.",
      links: [
        { label: "PDF", url: "https://ascpt.onlinelibrary.wiley.com/doi/10.1002/cpt.2401" },
      ],
    },
  ];

  const workingPapers = [
    
       {
      id: "wp-1",
      title: "Revealed Relatedness: How New Mapping Criteria Reshape Organizational Search",
      coauthors: "",
      hook: "Search for innovation depends on the criteria firms use to assess the distance",
      abstract: "Research on organizational search assumes that the criteria for assessing domain relatedness remain stable. I examine what happens when new mapping criteria reveal that domains share causal mechanisms despite appearing unrelated under existing criteria—a phenomenon I term revealed relatedness. I argue that revealed relatedness increases entry likelihood through capability redeployment and that portfolio concentration reduces initial responsiveness due to cognitive inertia. Analyzing pharmaceutical firms’ responses to The Cancer Genome Atlas, I find that firms enter revealed domains primarily by redeploying existing drugs. Highly concentrated firms are slower to respond initially, but those that enter become more likely to identify additional related domains before external mapping confirms the connections. Because proactive entry precedes external revelation, this pattern suggests an internalization of mapping principles. These findings reveal how changing mapping criteria reshape organizational search.",
      awards: [
        "2023 AOM Best Paper Proceedings",
        "Runner-up for ISA Giarrantani Rising Star Award",
      ],
      links: [],
    },
    {
      id: "wp-2",
      title: "When Do Firms Provide Early Access to Investigational Drugs? Evidence from Expanded Access in the Oncology Drug Market 1990-2020",
      coauthors: "with Sungyong Chang",
      hook: "We examine firm-level determinants of providing expanded access in the oncology market.",
      abstract: "One of the grand challenges in healthcare is the limited availability of life-saving drugs and therapies. While providing early access to investigational drugs is seen as a potential solution to this issue, our understanding of what deters or facilitates firms from granting early access remains limited. We examine when firms provide early access to investigational oncology drugs from 1990 to 2020. Our study finds that while entrepreneurial firms are known as engines for developing novel drugs, they are less likely to provide early access due to uncertainties from thinner product pipelines and concerns over equity values. Regulatory certification significantly reduces such uncertainties, encouraging firms to provide early access, but its benefits are more pronounced for established firms. We discuss the intricacies involved in improving early access, highlighting the complex interaction between company incentives and industry structure.",
      links: [
        { label: "PDF", url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4885005" },
      ],
    },
        {
      id: "wp-4",
      title: "Data Privacy Regulation and Innovation",
      coauthors: "with Jennifer Kao",
      hook: "We examine how data privacy regulation impacts innovative process in pharmaceutical R&D.",
      abstract: "We investigate how data privacy regulations shape research and development. While such regulations aim to increase stakeholder privacy and data security, they can also introduce costs in settings where collecting, analyzing, and sharing sensitive data is central to innovation. We examine this tension in the context of the pharmaceutical industry and the European Union’s (EU) General Data Protection Regulation (GDPR), the most comprehensive data privacy regulation to date. Leveraging firm-level variation in exposure to the GDPR, we find that the regulation lowers clinical trials by 18 percent. Firms also shift the types of projects they pursue: trials are less likely to include sites in the EU, be conducted across multiple countries, and target a narrower set of diseases. Research collaborations decline overall and shift away from new partners towards established relationships. When looking at project outcomes, we observe that trials take longer to complete, are less likely to succeed, and report results with greater delay. The decline in clinical trial activity is greatest among young firms. These findings reveal how data privacy regulations shape not only the rate of innovation, but also the process by which it is pursued and its outcomes.",
      links: [],
    },
      {
      id: "wp-3",
      title: "How Do Investors Shape Startups' Response to New Market Opportunities?",
      coauthors: "with Sarath Balachandran & Sungyong Chang",
      hook: "Venture Capital portfolio is associated with how startups enter a market.",
      abstract: "",
      awards: [
        "2025 AOM Best Paper Proceedings",
        "2025 Sumantra Ghoshal Research and Practice Award",
        "2025 AOM STR's Distinguished Best Paper Award",
      ],
      links: [
        { label: "PDF", url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4993926" },
      ],
    },
     {
      id: "wp-7",
      title: "Do Biomedical Researchers Study Topics Related to Their Own Ethnicities? Evidence from NIH",
      coauthors: "with Wesley Greenblatt & Young Hou",
      hook: "Scientists' ethnic backgrounds shape what diseases they choose to study.",
      abstract: "",
      links: [],
    },
    {
      id: "wp-5",
      title: "Shattering Ceilings While Opening Doors: The Symbolic Effect of the First Female Political Leader on the Mobility Outcomes of Female Employees",
      coauthors: "with Olenka Kacperczyk & Yongwook Paik",
      hook: "We examine how feamle political leadership impacts female employee's mobility.",
      abstract: "",
      links: [],
    },
    {
      id: "wp-5",
      title: "Orchestrating an Ecosystem of Innovative Startups: Ex-Ante and Ex-post Actions and Orchestrator's Performance",
      coauthors: "with Gary Dushnitsky",
      hook: "We suggest that CVC can be used to initiate and orchestrate an ecosystem of innovative startups.",
      abstract: "",
      links: [],
    },

   
    {
      id: "wp-8",
      title: "Whitespace in Drug Development: Quantifying the Inter-trial Intervals Between Clinical Trials",
      coauthors: "with Sandra Barbosu, Sungyong Chang & Fan Ye",
      hook: "Measuring the gaps between clinical trials reveals hidden inefficiencies in drug development.",
      abstract: "",
      links: [],
    },
  ];

  const PaperItem = ({ paper, showAbstract = true }) => {
    const isExpanded = expandedPapers[paper.id];
    const hasExpandableContent = paper.abstract || paper.awards;

    return (
      <div className="py-4 border-b border-gray-200 last:border-b-0">
        <div
          className={`flex items-start gap-2 ${hasExpandableContent ? "cursor-pointer" : ""}`}
          onClick={() => hasExpandableContent && togglePaper(paper.id)}
        >
          {hasExpandableContent && (
            <span
              className="text-gray-400 mt-1 transition-transform duration-200 select-none"
              style={{ transform: isExpanded ? "rotate(90deg)" : "rotate(0deg)" }}
            >
              ▸
            </span>
          )}
          {!hasExpandableContent && <span className="w-4" />}
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">{paper.title}</h3>
            <p className="text-sm text-gray-600 mt-1">
              {paper.venue && <span className="italic">{paper.venue}</span>}
              {paper.venue && paper.year && <span> · </span>}
              {paper.year && <span>{paper.year}</span>}
              {paper.volume && <span> · {paper.volume}</span>}
              {paper.coauthors && <span> · {paper.coauthors}</span>}
            </p>
            {paper.links && paper.links.length > 0 && (
              <p className="text-sm mt-1">
                {paper.links.map((link, i) => (
                  <span key={i}>
                    {i > 0 && " · "}
                    <Link
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      [{link.label}]
                    </Link>
                  </span>
                ))}
              </p>
            )}
            <p className="text-gray-700 mt-2 italic">{paper.hook}</p>
          </div>
        </div>

        {isExpanded && (
          <div className="ml-6 mt-3 pl-4 border-l-2 border-gray-200">
            {paper.awards && paper.awards.length > 0 && (
              <div className="mb-3">
                {paper.awards.map((award, i) => (
                  <p key={i} className="text-sm text-gray-600">
                    🏆 {award}
                  </p>
                ))}
              </div>
            )}
            {paper.abstract && (
              <p className="text-sm text-gray-700 leading-relaxed">{paper.abstract}</p>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow px-6 lg:px-72 py-8">
        <section className="mt-8">
          <h1 className="text-3xl font-bold mb-4">Research</h1>
          <p className="text-gray-700 leading-relaxed">
            My research focuses on {" "}
            <strong>the intersection of innovation and entrepreneurship, especially within the biopharmaceutical and high-tech industries.</strong>.
            My work explores the intricate ways in which technology influences innovation, aiming to identify the key drivers and obstacles to technology adoption and its effects on individuals, firms, and our society.
            My{" "}
            <Link
              href="/Sukhun-Kang-CV.pdf"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              CV can be viewed here [PDF]
            </Link>.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-2">Publications</h2>
          <div>
            {publications.map((paper) => (
              <PaperItem key={paper.id} paper={paper} />
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-2">Working Papers / Work in Progress</h2>
          <div>
            {workingPapers.map((paper) => (
              <PaperItem key={paper.id} paper={paper} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
