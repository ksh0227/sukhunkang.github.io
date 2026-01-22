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
