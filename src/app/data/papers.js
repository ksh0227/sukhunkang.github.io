// Single source of truth for Sukhun Kang's papers.
// The research page, the JSON-LD structured data in layout.js, and llms.txt
// are ALL derived from the arrays below. Edit a paper here and every consumer
// updates. Author lists put Sukhun Kang first; the "with ..." display string
// and the schema.org author list are both derived from `authors`.

export const publications = [
  {
    id: "pub-3",
    title:
      "Uncovering Seeding Trials: Examining Non-Scientific Purposes in Clinical Trials",
    venue: "BMJ Evidence-Based Medicine",
    year: "(Forthcoming)",
    authors: ["Sukhun Kang", "Ivan Lin", "Sungyong Chang"],
    hook: "Seeding trials remain a systemic problem requiring proactive transparency mandates and coordinated oversight.",
    abstract: "",
    links: [
      { label: "Link", url: "https://ebm.bmj.com/content/early/2026/04/08/bmjebm-2025-114242.full" },
    ],
  },
  {
    id: "pub-2",
    title:
      "Implementation of 21st Century Cures Act Expanded Access Policies Requirement",
    venue: "Clinical Pharmacology & Therapeutics",
    year: "2021",
    volume: "110(6): 1579-1584",
    authors: ["Sukhun Kang", "Sungyong Chang", "Joseph Ross", "Jennifer Miller"],
    hook: "Most drug companies do not publicly disclose their expanded access policies despite the Cures Act.",
    abstract:
      "The US Food and Drug Administration (FDA) expanded access pathway allows patients with life-threatening or serious conditions to access investigational drugs outside of trials, under certain conditions. The 21st Century Cures Act ('Cures Act') requires certain drug companies to publicly disclose their expanded access policies. We characterized the proportion of applicable US biopharmaceutical companies, with an oncology related drug, implementing Cures Act requirements for expanded access policies and whether available policies contain the information described in the Act. We found about one-third of applicable biopharmaceutical companies (32%, 140/423) implemented the Cures Act requirement to have a public expanded access policy. Less than one-third of public policies contained all described information (31%, 44/140). Larger companies and those with at least one drug receiving an FDA expedited designation (59% vs. 21%; P < 0.001), or at least one FDA-approved drug (57% vs. 28%; P < 0.001) were more likely to have a public policy. Our results suggest the Cures Act may be having a limited impact on its goals of supporting timely medical decisions and closing informational gaps for patients and doctors around expanded access to investigational oncology therapies, especially for products sponsored by smaller and newer companies.",
    links: [
      { label: "Link", url: "https://ascpt.onlinelibrary.wiley.com/doi/10.1002/cpt.2401" },
    ],
  },
  {
    id: "pub-1",
    title:
      "Entrepreneurship, Innovation, and Political Competition: How the Public Sector Helps the Sharing Economy Create Value",
    venue: "Strategic Management Journal",
    year: "2019",
    volume: "40: 503-532",
    authors: ["Sukhun Kang", "Yongwook Paik", "Robert Seamans"],
    hook: "Political competition can explain whether cities accommodate or ban ridesharing platforms.",
    abstract:
      "With the recent growth of the sharing economy, regulators must frequently strike the right balance between private and public interests to maximize value creation. In this article, we argue that political competition is a critical ingredient that explains whether cities accommodate or ban ridesharing platforms and that this relationship is moderated in more populous cities and in cities with higher unemployment rates. We test our arguments using archival data covering ridesharing bans in various U.S. cities during the 2011–2015 period. We supplement these data with semistructured interviews. We find broad support for our arguments while mitigating potential endogeneity concerns. Our study has important implications for nonmarket strategy, entrepreneurship and innovation, and public-private partnership literatures. In addition, our findings inform policy debates on the sharing economy.",
    links: [
      { label: "Link", url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2925077" },
    ],
  },
];

export const workingPapers = [
  {
    id: "wp-1",
    title: "Revealed Relatedness: How New Mapping Criteria Reshape Organizational Search",
    authors: ["Sukhun Kang"],
    hook: "Search for innovation depends on the criteria firms use to assess the distance",
    abstract:
      "Research on organizational search assumes that the criteria for assessing domain relatedness remain stable. I examine what happens when new mapping criteria reveal that domains share causal mechanisms despite appearing unrelated under existing criteria, a phenomenon I term revealed relatedness. I argue that revealed relatedness increases entry likelihood through capability redeployment and that portfolio concentration reduces initial responsiveness due to cognitive inertia. Analyzing pharmaceutical firms’ responses to The Cancer Genome Atlas, I find that firms enter revealed domains primarily by redeploying existing drugs. Highly concentrated firms are slower to respond initially, but those that enter become more likely to identify additional related domains before external mapping confirms the connections. Because proactive entry precedes external revelation, this pattern suggests an internalization of mapping principles. These findings reveal how changing mapping criteria reshape organizational search.",
    awards: [
      "2023 AOM Best Paper Proceedings",
      "Runner-up for ISA Giarratani Rising Star Award",
    ],
    links: [],
    notes: [
      "Previous titles: “Objects may be closer than they appear: The impact of public scientific map on organizational search”",
    ],
  },
  {
    id: "wp-2",
    title:
      "When Do Firms Provide Early Access Prior to Commercialization? Evidence from Expanded Access Programs in the Oncology Drug Market",
    authors: ["Sukhun Kang", "Sungyong Chang"],
    hook: "We examine firm-level determinants of providing expanded access in the oncology market.",
    abstract:
      "One of the grand challenges in healthcare is the limited availability of life-saving drugs and therapies. While providing early access to investigational drugs is seen as a potential solution to this issue, our understanding of what deters or facilitates firms from granting early access remains limited. We examine when firms provide early access to investigational oncology drugs from 1990 to 2020. Our study finds that while entrepreneurial firms are known as engines for developing novel drugs, they are less likely to provide early access due to uncertainties from thinner product pipelines and concerns over equity values. Regulatory certification significantly reduces such uncertainties, encouraging firms to provide early access, but its benefits are more pronounced for established firms. We discuss the intricacies involved in improving early access, highlighting the complex interaction between company incentives and industry structure.",
    links: [
      { label: "Link", url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4885005" },
    ],
  },
  {
    id: "wp-4",
    title: "Data Privacy Regulation and Innovation",
    authors: ["Sukhun Kang", "Jennifer Kao"],
    hook: "We examine how data privacy regulation impacts innovative process in pharmaceutical R&D.",
    abstract:
      "We investigate how data privacy regulations shape research and development (R&D). Such regulations are designed to protect individuals, but the innovation process that develops valuable new products for those same individuals depends on collecting, analyzing, and sharing their data. We examine this tension in the context of the pharmaceutical industry, where data is a key input to R&D, and the European Union’s (EU) General Data Protection Regulation (GDPR), the most comprehensive data privacy regulation to date. Leveraging firm-level variation in exposure to the GDPR, we find that the regulation lowers clinical trials by 18 percent. Firms also shift the types of R&D they pursue: trials are less likely to include sites in the EU or to be conducted across multiple countries, and they target a narrower set of diseases. Research collaborations decline overall and shift away from new partners towards established relationships. When looking at R&D outcomes, we observe that trials take longer to complete, are less likely to succeed, and report results with greater delay. The decline in clinical trials is greatest among young firms. These findings reveal how data privacy regulations shape not only the rate of innovation but also the process by which it is pursued and its outcomes.",
    awards: [
      "2026 AOM Best Paper Proceedings",
      "2026 Runner-up for ISA Babbage International Policy Forum Industrial Innovation Policy Award",
    ],
    links: [
      { label: "Link", url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6104788" },
    ],
  },
  {
    id: "wp-3",
    title: "How Do Investors Shape Startups' Response to New Market Opportunities?",
    authors: ["Sukhun Kang", "Sarath Balachandran", "Sungyong Chang"],
    hook: "Venture Capital portfolio is associated with how startups enter a market.",
    abstract: "",
    awards: [
      "2025 AOM Best Paper Proceedings",
      "2025 Sumantra Ghoshal Research and Practice Award",
      "2025 AOM STR's Distinguished Best Paper Award",
    ],
    links: [
      { label: "Link", url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4993926" },
    ],
  },
  {
    id: "wp-7",
    title:
      "Do Biomedical Researchers Study Topics Related to Their Own Ethnicities? Evidence from NIH",
    authors: ["Sukhun Kang", "Wesley Greenblatt", "Young Hou"],
    hook: "Scientists' ethnic backgrounds shape what diseases they choose to study.",
    abstract: "",
    links: [],
  },
  {
    id: "wp-8",
    title: "Attention Triage in Sequential Innovation",
    authors: ["Sukhun Kang", "Sandra Barbosu", "Sungyong Chang"],
    hook: "How firms allocate limited attention across opportunities in sequential innovation.",
    abstract: "",
    awards: ["2026 ISA Best Paper in Innovation and Entrepreneurship Award"],
    links: [],
  },
  {
    id: "wp-6",
    title:
      "Orchestrating an Ecosystem of Innovative Startups: Ex-Ante and Ex-post Actions and Orchestrator's Performance",
    authors: ["Sukhun Kang", "Gary Dushnitsky"],
    hook: "We suggest that CVC can be used to initiate and orchestrate an ecosystem of innovative startups.",
    abstract: "",
    links: [],
  },
];

// "with A", "with A & B", "with A, B & C" (empty for solo-authored). Kang is
// dropped since the site is his own; the remaining coauthors are listed.
export function formatCoauthors(authors) {
  if (!authors || authors.length <= 1) return "";
  const others = authors.slice(1);
  if (others.length === 1) return `with ${others[0]}`;
  return `with ${others.slice(0, -1).join(", ")} & ${others[others.length - 1]}`;
}

// Derive a schema.org ScholarlyArticle from a paper. Only emits fields the
// paper actually has, so no placeholder/empty properties reach the JSON-LD.
export function paperToSchema(paper, position) {
  const schema = {
    "@type": "ScholarlyArticle",
    position,
    name: paper.title,
    author: paper.authors.map((name) => ({ "@type": "Person", name })),
    description: paper.hook,
  };
  if (paper.year && /^\d{4}$/.test(paper.year)) schema.datePublished = paper.year;
  if (paper.venue) schema.isPartOf = { "@type": "Periodical", name: paper.venue };
  if (paper.abstract) schema.abstract = paper.abstract;
  if (paper.awards && paper.awards.length) schema.award = paper.awards;
  const url = paper.links && paper.links[0] && paper.links[0].url;
  if (url) schema.url = url;
  return schema;
}
