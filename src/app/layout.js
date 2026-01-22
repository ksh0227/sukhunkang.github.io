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
        description: "Political competition can explain whether cities accommodate or ban ridesharing platforms.",
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
        description: "Most drug companies do not publicly disclose their expanded access policies despite the Cures Act.",
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
        description: "Research on organizational search assumes that the criteria for assessing domain relatedness remain stable. I examine what happens when new mapping criteria reveal that domains share causal mechanisms despite appearing unrelated under existing criteria—a phenomenon I term revealed relatedness.",
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
        description: "We examine firm-level determinants of providing expanded access in the oncology market, finding that entrepreneurial firms are less likely to provide early access due to uncertainties from thinner product pipelines.",
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
        description: "We examine how GDPR data privacy regulation impacts pharmaceutical R&D, finding the regulation lowers clinical trials by 18 percent and shifts project types pursued.",
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
