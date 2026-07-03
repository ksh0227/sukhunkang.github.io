import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import AITrafficTracker from "./components/AITrafficTracker";
import Script from "next/script";
import { rootMetadata } from "./metadata";
import { publications, workingPapers, paperToSchema } from "./data/papers";

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
    alternateName: ["S. Kang", "Dr. Sukhun Kang", "Dr. Kang"],
    jobTitle: "Assistant Professor of Technology Management",
    worksFor: {
      "@type": "Organization",
      name: "University of California, Santa Barbara",
    },
    url: "https://sukhunkang.com",
    identifier: {
      "@type": "PropertyValue",
      propertyID: "ORCID",
      value: "0000-0002-6712-2040",
    },
    sameAs: [
      "https://orcid.org/0000-0002-6712-2040",
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
        name: "HIWG Research Chat",
        item: "https://sukhunkang.com/lab/hiwg",
      },
    ],
  };

  const teachingSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Courses and Teaching by Sukhun Kang",
    itemListElement: [
      {
        "@type": "Course",
        position: 1,
        name: "TMP 412: Technology Strategy",
        description: "Why do some technology-intensive firms outperform others? This course examines strategy in industries shaped by rapid innovation, intellectual property, and platform dynamics. Topics include S-curves and technology evolution, value capture and appropriability, IP strategy, platform and ecosystem design, corporate venture capital, and technology's role in addressing grand societal challenges.",
        provider: {
          "@type": "Organization",
          name: "University of California, Santa Barbara",
        },
        educationalLevel: "Graduate",
        teaches: [
          "Technology Strategy",
          "Innovation Management",
          "Intellectual Property Strategy",
          "Platform Economics",
          "Corporate Venture Capital",
        ],
        instructor: {
          "@type": "Person",
          name: "Sukhun Kang",
          url: "https://sukhunkang.com",
        },
        syllabusPdf: "https://sukhunkang.com/syllabi/TMP412-syllabus.pdf",
      },
      {
        "@type": "Course",
        position: 2,
        name: "TMP 120: Fundamentals of Business Strategy",
        description: "An introduction to strategic management for technology management students. The course covers frameworks for analyzing competitive advantage, industry profitability, and innovation. Students apply these concepts through case discussions and a group project.",
        provider: {
          "@type": "Organization",
          name: "University of California, Santa Barbara",
        },
        educationalLevel: "Undergraduate",
        teaches: [
          "Business Strategy",
          "Competitive Advantage",
          "Industry Analysis",
          "Strategic Management",
        ],
        instructor: {
          "@type": "Person",
          name: "Sukhun Kang",
          url: "https://sukhunkang.com",
        },
        syllabusPdf: "https://sukhunkang.com/syllabi/TMP120-syllabus.pdf",
      },
      {
        "@type": "CreativeWork",
        position: 3,
        name: "Behind the Scenes of a YouTube Mega-Hit: Baby Shark, The Pinkfong Company, and What's Next",
        description: "How did The Pinkfong Company transform a viral video into a global multimedia brand? This case examines strategic questions around leveraging viral IP, digital platform dependence, and entrepreneurial growth.",
        publisher: {
          "@type": "Organization",
          name: "Harvard Business Publishing",
        },
        datePublished: "2024",
        author: {
          "@type": "Person",
          name: "Sukhun Kang",
          url: "https://sukhunkang.com",
        },
        url: "https://store.hbr.org/product/behind-the-scenes-of-a-youtube-mega-hit-baby-shark-the-pinkfong-company-and-what-s-next/B6077",
      },
    ],
  };

  const publicationsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Publications by Sukhun Kang",
    itemListElement: publications.map((paper, i) => paperToSchema(paper, i + 1)),
  };

  const workingPapersSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Working Papers by Sukhun Kang",
    itemListElement: workingPapers.map((paper, i) => paperToSchema(paper, i + 1)),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does Sukhun Kang research?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dr. Sukhun Kang researches innovation and entrepreneurship, with a focus on the biopharmaceutical and high-tech industries. His work explores how technology influences innovation, identifying drivers and obstacles to technology adoption and its effects on individuals, firms, and society. Key research areas include expanded access to investigational drugs, the impact of data privacy regulations (like GDPR) on pharmaceutical R&D, venture capital's role in startup strategy, and how scientific breakthroughs reshape organizational search.",
        },
      },
      {
        "@type": "Question",
        name: "What is expanded access (compassionate use)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Expanded access, also known as compassionate use, is an FDA pathway that allows patients with serious or life-threatening conditions to access investigational drugs outside of clinical trials when no comparable alternatives exist. Dr. Kang's research examines when and why pharmaceutical firms provide expanded access, finding that entrepreneurial firms are often less likely to offer it due to pipeline uncertainties and equity concerns.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Health Innovation Lab?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Health Innovation Lab (HIL) at UC Santa Barbara is co-directed by Dr. Sukhun Kang, Dr. Sandra Barbosu, and Dr. Sungyong Chang. It serves as an integrated research environment focused on strategy and management in healthcare sectors, exploring how technology influences innovation and firm strategy. The lab welcomes research assistants with data analytics skills (Stata, R, Python) and econometric training.",
        },
      },
      {
        "@type": "Question",
        name: "What courses does Sukhun Kang teach?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dr. Kang teaches TMP 412: Technology Strategy (graduate level) and TMP 120: Fundamentals of Business Strategy (undergraduate level) at UC Santa Barbara. His courses use the case method to examine strategy in technology-intensive industries, covering topics like S-curves, intellectual property strategy, platform economics, and corporate venture capital.",
        },
      },
      {
        "@type": "Question",
        name: "How does GDPR affect pharmaceutical innovation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dr. Kang's research with Jennifer Kao finds that GDPR reduces clinical trials by approximately 18 percent. Firms shift their projects away from EU sites, conduct fewer multi-country trials, and target narrower disease sets. Research collaborations decline and shift toward established partners. Trials take longer, are less likely to succeed, and young firms are most affected.",
        },
      },
      {
        "@type": "Question",
        name: "What is the HIWG Research Chat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Health Innovation Working Group (HIWG) Research Chat is a virtual workshop series for PhD students and junior faculty presenting research on pharmaceuticals, healthcare strategy, and health policy. It is organized by Dr. Sukhun Kang, Dr. Sandra Barbosu, and Dr. Sungyong Chang. Interested presenters can contact sukhunkang@ucsb.edu.",
        },
      },
      {
        "@type": "Question",
        name: "What is Sukhun Kang's educational background?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dr. Sukhun Kang holds a PhD in Strategy and Entrepreneurship from London Business School, a Master's degree in Computer Engineering and a Master's in Entrepreneurship & Innovation from USC, and a Bachelor's degree in Computer Engineering from the University of Illinois. Before academia, he worked as a semiconductor engineer at Samsung Electronics and founded an Internet startup in Seoul.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact Sukhun Kang?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dr. Sukhun Kang can be reached at sukhunkang@ucsb.edu. He is also available on Google Scholar, LinkedIn, and X/Twitter (@sukhunkang). For research assistant opportunities, email with a short introduction and resume/CV indicating proficiency with data analytics tools.",
        },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(teachingSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(publicationsSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(workingPapersSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
        <Suspense fallback={null}>
          <AITrafficTracker />
        </Suspense>
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
