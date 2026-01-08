import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Script from "next/script";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sukhun Kang | UC Santa Barbara",
  description: "Sukhun Kang | UC Santa Barbara",
};

export default function RootLayout({ children }) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sukhun Kang",
    "givenName": "Sukhun",
    "familyName": "Kang",
    "jobTitle": "Assistant Professor of Technology Management",
    "worksFor": {
      "@type": "Organization",
      "name": "University of California, Santa Barbara"
    },
    "url": "https://sukhunkang.com",
    "sameAs": [
      "https://scholar.google.co.uk/citations?user=FMHJcysAAAAJ",
      "https://www.linkedin.com/in/sukhunkang/",
      "https://x.com/sukhunkang",
      "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=2596230"
    ],
    "alumniOf": [
      {"@type": "Organization", "name": "London Business School"},
      {"@type": "Organization", "name": "University of Illinois"},
      {"@type": "Organization", "name": "University of Southern California"}
    ],
    "knowsAbout": [
      "Innovation",
      "Entrepreneurship",
      "Technology Management",
      "Biopharmaceutical Industry",
      "Strategic Management"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {/* <!-- Google tag (gtag.js) --> */}
        <Script async src={`https://www.googletagmanager.com/gtag/js?id=G-5XRGPSLYNT`}></Script>
        <Script id="google-analytics">
          {
            `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-5XRGPSLYNT');
            `
          }
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
