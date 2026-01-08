const baseUrl = "https://sukhunkang.com";

export const rootMetadata = {
  metadataBase: new URL(baseUrl),
  title: "Sukhun Kang | UC Santa Barbara",
  description:
    "Sukhun Kang is an Assistant Professor of Technology Management at UC Santa Barbara, researching innovation, entrepreneurship, and strategy in biopharmaceutical and high-tech industries.",
  openGraph: {
    title: "Sukhun Kang | UC Santa Barbara",
    description:
      "Assistant Professor of Technology Management researching innovation, entrepreneurship, and biopharmaceutical strategy.",
    url: baseUrl,
    siteName: "Sukhun Kang",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Sukhun Kang | UC Santa Barbara",
    description:
      "Assistant Professor of Technology Management at UC Santa Barbara.",
    creator: "@sukhunkang",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: baseUrl },
};

export const aboutMetadata = {
  title: "About | Sukhun Kang",
  description:
    "Sukhun Kang is an Assistant Professor of Technology Management at UC Santa Barbara. His research focuses on innovation, entrepreneurship, and the biopharmaceutical industry. PhD from London Business School.",
  openGraph: {
    title: "About | Sukhun Kang",
    description:
      "Assistant Professor of Technology Management at UC Santa Barbara, researching innovation and entrepreneurship in biopharmaceutical and high-tech industries.",
    url: `${baseUrl}/about`,
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "About | Sukhun Kang",
    description:
      "Assistant Professor of Technology Management at UC Santa Barbara, researching innovation and entrepreneurship.",
  },
};

export const researchMetadata = {
  title: "Research | Sukhun Kang",
  description:
    "Publications and working papers by Sukhun Kang on innovation, entrepreneurship, biopharmaceutical strategy, and expanded access policy. Includes work in Strategic Management Journal and Clinical Pharmacology & Therapeutics.",
  openGraph: {
    title: "Research | Sukhun Kang",
    description:
      "Academic publications and working papers on innovation, entrepreneurship, and biopharmaceutical industry strategy.",
    url: `${baseUrl}/research`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Research | Sukhun Kang",
    description:
      "Publications on innovation, entrepreneurship, and biopharmaceutical strategy.",
  },
};

export const teachingMetadata = {
  title: "Teaching | Sukhun Kang",
  description:
    "Teaching activities by Sukhun Kang at UC Santa Barbara, including case studies published with Harvard Business Publishing and courses in business strategy. Highly rated by students.",
  openGraph: {
    title: "Teaching | Sukhun Kang",
    description:
      "Case studies and courses in business strategy at UC Santa Barbara. Includes Harvard Business Publishing cases.",
    url: `${baseUrl}/teaching`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Teaching | Sukhun Kang",
    description:
      "Business strategy teaching and case studies at UC Santa Barbara.",
  },
};

export const resourcesMetadata = {
  title: "Resources | Sukhun Kang",
  description:
    "Resources on FDA expanded access, expedited drug programs, and pharmaceutical regulation. Includes doctoral consortia listings and information on consulting and speaking engagements.",
  openGraph: {
    title: "Resources | Sukhun Kang",
    description:
      "Educational resources on FDA programs, pharmaceutical regulation, and doctoral research opportunities.",
    url: `${baseUrl}/resources`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Resources | Sukhun Kang",
    description:
      "Resources on FDA programs, pharmaceutical policy, and strategy research.",
  },
};

export const hilMetadata = {
  title: "Health Innovation Lab | Sukhun Kang",
  description:
    "The Health Innovation Lab at UC Santa Barbara, co-directed by Dr. Sukhun Kang, Dr. Sandra Barbosu, and Dr. Sungyong Chang. Research on pharmaceutical innovation, drug development, and health policy.",
  openGraph: {
    title: "Health Innovation Lab | Sukhun Kang",
    description:
      "Research lab at UC Santa Barbara focused on pharmaceutical innovation and health policy.",
    url: `${baseUrl}/lab/hil`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Health Innovation Lab | Sukhun Kang",
    description:
      "UC Santa Barbara research lab on pharmaceutical innovation and health policy.",
  },
};

export const hiwgMetadata = {
  title: "Health Innovation Working Group Seminar | Sukhun Kang",
  description:
    "The HIWG Seminar Series is a virtual workshop for PhD students and junior faculty presenting research on pharmaceuticals, healthcare, strategy, and health policy. Contact sukhunkang@ucsb.edu to present.",
  openGraph: {
    title: "Health Innovation Working Group Seminar | Sukhun Kang",
    description:
      "Virtual seminar series for PhD students and faculty researching pharmaceuticals and healthcare strategy.",
    url: `${baseUrl}/lab/hiwg`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "HIWG Seminar | Sukhun Kang",
    description:
      "Virtual workshop series for research on pharmaceuticals, healthcare, and health policy.",
  },
};
