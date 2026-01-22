import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Script from "next/script";
import { rootMetadata } from "./metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = rootMetadata;

export default function RootLayout({ children }) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sukhun Kang",
    givenName: "Sukhun",
    familyName: "Kang",
    jobTitle: "Assistant Professor of Technology Management",
    worksFor: {
      "@type": "Organization",
      name: "University of California, Santa Barbara",
    },
    url: "https://sukhunkang.com",
    sameAs: [
      "https://scholar.google.co.uk/citations?user=FMHJcysAAAAJ",
      "https://www.linkedin.com/in/sukhunkang/",
      "https://x.com/sukhunkang",
      "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=2596230",
    ],
    alumniOf: [
      { "@type": "Organization", name: "London Business School" },
      { "@type": "Organization", name: "University of Illinois" },
      { "@type": "Organization", name: "University of Southern California" },
    ],
    knowsAbout: [
      "Innovation",
      "Entrepreneurship",
      "Technology Management",
      "Biopharmaceutical Industry",
      "Strategic Management",
      "Expanded Access",
      "GDPR",
      "The Cancer Genome Atlas",
      "Corporate Venture Capital",
      "Venture Capital",
      "21st Century Cures Act",
      "Artificial Intelligence",
      "Biomedical Research",
    ],
  };

  const labSchema = {
    "@context": "https://schema.org",
    "@type": "ResearchOrganization",
    name: "Health Innovation Lab",
    alternateName: "HIL",
    url: "https://sukhunkang.com/lab/hil",
    parentOrganization: {
      "@type": "Organization",
      name: "University of California, Santa Barbara",
    },
    description: "The Health Innovation Lab serves as an integrated environment for research in strategy and management with focus on healthcare sectors, exploring how technology influences innovation and firm strategy.",
    member: [
      {
        "@type": "Person",
        name: "Sukhun Kang",
        jobTitle: "Co-Director",
        url: "https://sukhunkang.com",
      },
      {
        "@type": "Person",
        name: "Sandra Barbosu",
        jobTitle: "Co-Director",
        url: "https://www.barbosu.com/",
      },
      {
        "@type": "Person",
        name: "Sungyong Chang",
        jobTitle: "Co-Director",
        url: "https://sungyongchang.com/",
      },
    ],
    knowsAbout: [
      "Healthcare Innovation",
      "Pharmaceutical Strategy",
      "Technology Adoption",
      "Drug Development",
      "Health Policy",
      "Expanded Access",
      "GDPR",
      "The Cancer Genome Atlas",
      "21st Century Cures Act",
      "Artificial Intelligence",
      "Biomedical Research",
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://sukhunkang.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://sukhunkang.com/about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Research",
        item: "https://sukhunkang.com/research",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Teaching",
        item: "https://sukhunkang.com/teaching",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Resources",
        item: "https://sukhunkang.com/resources",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Health Innovation Lab",
        item: "https://sukhunkang.com/lab/hil",
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "HIWG Seminar",
        item: "https://sukhunkang.com/lab/hiwg",
      },
    ],
  };

  const publicationsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Publications by Sukhun Kang",
    itemListElement: [
      {
        "@type": "ScholarlyArticle",
        position: 1,
        name: "Entrepreneurship, Innovation, and Political Competition: How the Public Sector Helps the Sharing Economy Create Value",
        author: [
          { "@type": "Person", name: "Sukhun Kang" },
          { "@type": "Person", name: "Yongwook Paik" },
          { "@type": "Person", name: "Robert Seamans" },
        ],
        datePublished: "2019",
        isPartOf: {
          "@type": "Periodical",
          name: "Strategic Management Journal",
        },
        volumeNumber: "40",
        pageStart: "503",
        pageEnd: "532",
        abstract: "With the recent growth of the sharing economy, regulators must frequently strike the right balance between private and public interests to maximize value creation. In this article, we argue that political competition is a critical ingredient that explains whether cities accommodate or ban ridesharing platforms and that this relationship is moderated in more populous cities and in cities with higher unemployment rates. We test our arguments using archival data covering ridesharing bans in various U.S. cities during the 2011–2015 period. We supplement these data with semistructured interviews. We find broad support for our arguments while mitigating potential endogeneity concerns. Our study has important implications for nonmarket strategy, entrepreneurship and innovation, and public-private partnership literatures. In addition, our findings inform policy debates on the sharing economy.",
        description: "Political competition can explain whether cities accommodate or ban ridesharing platforms.",
        url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2925077",
      },
      {
        "@type": "ScholarlyArticle",
        position: 2,
        name: "Implementation of 21st Century Cures Act Expanded Access Policies Requirement",
        author: [
          { "@type": "Person", name: "Sukhun Kang" },
          { "@type": "Person", name: "Sungyong Chang" },
          { "@type": "Person", name: "Joseph Ross" },
          { "@type": "Person", name: "Jennifer Miller" },
        ],
        datePublished: "2021",
        isPartOf: {
          "@type": "Periodical",
          name: "Clinical Pharmacology & Therapeutics",
        },
        volumeNumber: "110",
        issue: "6",
        pageStart: "1579",
        pageEnd: "1584",
        abstract: "The US Food and Drug Administration (FDA) expanded access pathway allows patients with life-threatening or serious conditions to access investigational drugs outside of trials, under certain conditions. The 21st Century Cures Act ('Cures Act') requires certain drug companies to publicly disclose their expanded access policies. We characterized the proportion of applicable US biopharmaceutical companies, with an oncology related drug, implementing Cures Act requirements for expanded access policies and whether available policies contain the information described in the Act. We found about one-third of applicable biopharmaceutical companies (32%, 140/423) implemented the Cures Act requirement to have a public expanded access policy. Less than one-third of public policies contained all described information (31%, 44/140). Larger companies and those with at least one drug receiving an FDA expedited designation (59% vs. 21%; P < 0.001), or at least one FDA-approved drug (57% vs. 28%; P < 0.001) were more likely to have a public policy. Our results suggest the Cures Act may be having a limited impact on its goals of supporting timely medical decisions and closing informational gaps for patients and doctors around expanded access to investigational oncology therapies, especially for products sponsored by smaller and newer companies.",
        description: "Most drug companies do not publicly disclose their expanded access policies despite the Cures Act.",
        url: "https://ascpt.onlinelibrary.wiley.com/doi/10.1002/cpt.2401",
      },
    ],
  };

  const workingPapersSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Working Papers by Sukhun Kang",
    itemListElement: [
      {
        "@type": "ScholarlyArticle",
        position: 1,
        name: "Revealed Relatedness: How New Mapping Criteria Reshape Organizational Search",
        author: [{ "@type": "Person", name: "Sukhun Kang" }],
        abstract: "Research on organizational search assumes that the criteria for assessing domain relatedness remain stable. I examine what happens when new mapping criteria reveal that domains share causal mechanisms despite appearing unrelated under existing criteria—a phenomenon I term revealed relatedness. I argue that revealed relatedness increases entry likelihood through capability redeployment and that portfolio concentration reduces initial responsiveness due to cognitive inertia. Analyzing pharmaceutical firms' responses to The Cancer Genome Atlas, I find that firms enter revealed domains primarily by redeploying existing drugs. Highly concentrated firms are slower to respond initially, but those that enter become more likely to identify additional related domains before external mapping confirms the connections. Because proactive entry precedes external revelation, this pattern suggests an internalization of mapping principles. These findings reveal how changing mapping criteria reshape organizational search.",
        description: "Search for innovation depends on the criteria firms use to assess the distance.",
        award: ["2023 AOM Best Paper Proceedings", "Runner-up for ISA Giarrantani Rising Star Award"],
      },
      {
        "@type": "ScholarlyArticle",
        position: 2,
        name: "When Do Firms Provide Early Access to Investigational Drugs? Evidence from Expanded Access in the Oncology Drug Market 1990-2020",
        author: [
          { "@type": "Person", name: "Sukhun Kang" },
          { "@type": "Person", name: "Sungyong Chang" },
        ],
        abstract: "One of the grand challenges in healthcare is the limited availability of life-saving drugs and therapies. While providing early access to investigational drugs is seen as a potential solution to this issue, our understanding of what deters or facilitates firms from granting early access remains limited. We examine when firms provide early access to investigational oncology drugs from 1990 to 2020. Our study finds that while entrepreneurial firms are known as engines for developing novel drugs, they are less likely to provide early access due to uncertainties from thinner product pipelines and concerns over equity values. Regulatory certification significantly reduces such uncertainties, encouraging firms to provide early access, but its benefits are more pronounced for established firms. We discuss the intricacies involved in improving early access, highlighting the complex interaction between company incentives and industry structure.",
        description: "We examine firm-level determinants of providing expanded access in the oncology market.",
        url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4885005",
      },
      {
        "@type": "ScholarlyArticle",
        position: 3,
        name: "Data Privacy Regulation and Innovation",
        author: [
          { "@type": "Person", name: "Sukhun Kang" },
          { "@type": "Person", name: "Jennifer Kao" },
        ],
        abstract: "We investigate how data privacy regulations shape research and development. While such regulations aim to increase stakeholder privacy and data security, they can also introduce costs in settings where collecting, analyzing, and sharing sensitive data is central to innovation. We examine this tension in the context of the pharmaceutical industry and the European Union's (EU) General Data Protection Regulation (GDPR), the most comprehensive data privacy regulation to date. Leveraging firm-level variation in exposure to the GDPR, we find that the regulation lowers clinical trials by 18 percent. Firms also shift the types of projects they pursue: trials are less likely to include sites in the EU, be conducted across multiple countries, and target a narrower set of diseases. Research collaborations decline overall and shift away from new partners towards established relationships. When looking at project outcomes, we observe that trials take longer to complete, are less likely to succeed, and report results with greater delay. The decline in clinical trial activity is greatest among young firms. These findings reveal how data privacy regulations shape not only the rate of innovation, but also the process by which it is pursued and its outcomes.",
        description: "We examine how data privacy regulation impacts innovative process in pharmaceutical R&D.",
        url: "https://sukhunkang.com/papers/Kang_Kao_GDPR.pdf",
      },
      {
        "@type": "ScholarlyArticle",
        position: 4,
        name: "How Do Investors Shape Startups' Response to New Market Opportunities?",
        author: [
          { "@type": "Person", name: "Sukhun Kang" },
          { "@type": "Person", name: "Sarath Balachandran" },
          { "@type": "Person", name: "Sungyong Chang" },
        ],
        description: "Venture Capital portfolio is associated with how startups enter a market.",
        award: ["2025 AOM Best Paper Proceedings", "2025 Sumantra Ghoshal Research and Practice Award", "2025 AOM STR's Distinguished Best Paper Award"],
        url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4993926",
      },
      {
        "@type": "ScholarlyArticle",
        position: 5,
        name: "Do Biomedical Researchers Study Topics Related to Their Own Ethnicities? Evidence from NIH",
        author: [
          { "@type": "Person", name: "Sukhun Kang" },
          { "@type": "Person", name: "Wesley Greenblatt" },
          { "@type": "Person", name: "Young Hou" },
        ],
        description: "Scientists' ethnic backgrounds shape what diseases they choose to study.",
      },
      {
        "@type": "ScholarlyArticle",
        position: 6,
        name: "Shattering Ceilings While Opening Doors: The Symbolic Effect of the First Female Political Leader on the Mobility Outcomes of Female Employees",
        author: [
          { "@type": "Person", name: "Sukhun Kang" },
          { "@type": "Person", name: "Olenka Kacperczyk" },
          { "@type": "Person", name: "Yongwook Paik" },
        ],
        description: "We examine how female political leadership impacts female employee's mobility.",
      },
      {
        "@type": "ScholarlyArticle",
        position: 7,
        name: "Orchestrating an Ecosystem of Innovative Startups: Ex-Ante and Ex-post Actions and Orchestrator's Performance",
        author: [
          { "@type": "Person", name: "Sukhun Kang" },
          { "@type": "Person", name: "Gary Dushnitsky" },
        ],
        description: "We suggest that CVC can be used to initiate and orchestrate an ecosystem of innovative startups.",
      },
      {
        "@type": "ScholarlyArticle",
        position: 8,
        name: "Whitespace in Drug Development: Quantifying the Inter-trial Intervals Between Clinical Trials",
        author: [
          { "@type": "Person", name: "Sukhun Kang" },
          { "@type": "Person", name: "Sandra Barbosu" },
          { "@type": "Person", name: "Sungyong Chang" },
          { "@type": "Person", name: "Fan Ye" },
        ],
        description: "Measuring the gaps between clinical trials reveals hidden inefficiencies in drug development.",
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(labSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(publicationsSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(workingPapersSchema) }}
        />
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
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
