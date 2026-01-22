const baseUrl = "https://sukhunkang.com";

const defaultImage = {
  url: `${baseUrl}/sukhun.jpg`,
  width: 1200,
  height: 1500,
  alt: "Sukhun Kang - Assistant Professor at UC Santa Barbara",
};

const defaultAuthor = {
  name: "Sukhun Kang",
  url: baseUrl,
};

export const rootMetadata = {
  metadataBase: new URL(baseUrl),
  title: "Sukhun Kang | UC Santa Barbara",
  description:
    "Sukhun Kang is an Assistant Professor of Technology Management at UC Santa Barbara, researching innovation, entrepreneurship, strategy, venture capital, expanded access, and artificial intelligence in biopharmaceutical and high-tech industries.",
  authors: [defaultAuthor],
  creator: "Sukhun Kang",
  publisher: "Sukhun Kang",
  openGraph: {
    title: "Sukhun Kang | UC Santa Barbara",
    description:
      "Assistant Professor of Technology Management researching innovation, entrepreneurship, venture capital, and biopharmaceutical strategy.",
    url: baseUrl,
    siteName: "Sukhun Kang",
    locale: "en_US",
    type: "website",
    images: [defaultImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sukhun Kang | UC Santa Barbara",
    description:
      "Assistant Professor of Technology Management at UC Santa Barbara.",
    creator: "@sukhunkang",
    images: [defaultImage.url],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: baseUrl },
};

export const aboutMetadata = {
  title: "About | Sukhun Kang",
  description:
    "Sukhun Kang is an Assistant Professor of Technology Management at UC Santa Barbara. His research focuses on innovation, entrepreneurship, and the biopharmaceutical industry. PhD from London Business School.",
  authors: [defaultAuthor],
  openGraph: {
    title: "About | Sukhun Kang",
    description:
      "Assistant Professor of Technology Management at UC Santa Barbara, researching innovation and entrepreneurship in biopharmaceutical and high-tech industries.",
    url: `${baseUrl}/about`,
    type: "profile",
    images: [defaultImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Sukhun Kang",
    description:
      "Assistant Professor of Technology Management at UC Santa Barbara, researching innovation and entrepreneurship.",
    images: [defaultImage.url],
  },
};

export const researchMetadata = {
  title: "Research | Sukhun Kang",
  description:
    "Publications and working papers by Sukhun Kang on innovation, entrepreneurship, biopharmaceutical strategy, expanded access, GDPR, The Cancer Genome Atlas, venture capital, 21st Century Cures Act, artificial intelligence, and biomedical research.",
  authors: [defaultAuthor],
  openGraph: {
    title: "Research | Sukhun Kang",
    description:
      "Academic publications on innovation, entrepreneurship, expanded access, GDPR, venture capital, and biopharmaceutical strategy.",
    url: `${baseUrl}/research`,
    type: "website",
    images: [defaultImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Research | Sukhun Kang",
    description:
      "Publications on innovation, expanded access, GDPR, venture capital, and biopharmaceutical strategy.",
    images: [defaultImage.url],
  },
};

export const teachingMetadata = {
  title: "Teaching | Sukhun Kang",
  description:
    "Teaching activities by Sukhun Kang at UC Santa Barbara, including case studies published with Harvard Business Publishing and courses in business strategy. Highly rated by students.",
  authors: [defaultAuthor],
  openGraph: {
    title: "Teaching | Sukhun Kang",
    description:
      "Case studies and courses in business strategy at UC Santa Barbara. Includes Harvard Business Publishing cases.",
    url: `${baseUrl}/teaching`,
    type: "website",
    images: [defaultImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teaching | Sukhun Kang",
    description:
      "Business strategy teaching and case studies at UC Santa Barbara.",
    images: [defaultImage.url],
  },
};

export const resourcesMetadata = {
  title: "Resources | Sukhun Kang",
  description:
    "Resources on FDA expanded access, expedited drug programs, and pharmaceutical regulation. Includes doctoral consortia listings and information on consulting and speaking engagements.",
  authors: [defaultAuthor],
  openGraph: {
    title: "Resources | Sukhun Kang",
    description:
      "Educational resources on FDA programs, pharmaceutical regulation, and doctoral research opportunities.",
    url: `${baseUrl}/resources`,
    type: "website",
    images: [defaultImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resources | Sukhun Kang",
    description:
      "Resources on FDA programs, pharmaceutical policy, and strategy research.",
    images: [defaultImage.url],
  },
};

export const hilMetadata = {
  title: "Health Innovation Lab | Sukhun Kang",
  description:
    "The Health Innovation Lab at UC Santa Barbara, co-directed by Dr. Sukhun Kang, Dr. Sandra Barbosu, and Dr. Sungyong Chang. Research on pharmaceutical innovation, drug development, and health policy.",
  authors: [defaultAuthor],
  openGraph: {
    title: "Health Innovation Lab | Sukhun Kang",
    description:
      "Research lab at UC Santa Barbara focused on pharmaceutical innovation and health policy.",
    url: `${baseUrl}/lab/hil`,
    type: "website",
    images: [defaultImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Health Innovation Lab | Sukhun Kang",
    description:
      "UC Santa Barbara research lab on pharmaceutical innovation and health policy.",
    images: [defaultImage.url],
  },
};

export const hiwgMetadata = {
  title: "Health Innovation Working Group Seminar | Sukhun Kang",
  description:
    "The HIWG Seminar Series is a virtual workshop for PhD students and junior faculty presenting research on pharmaceuticals, healthcare, strategy, and health policy. Contact sukhunkang@ucsb.edu to present.",
  authors: [defaultAuthor],
  openGraph: {
    title: "Health Innovation Working Group Seminar | Sukhun Kang",
    description:
      "Virtual seminar series for PhD students and faculty researching pharmaceuticals and healthcare strategy.",
    url: `${baseUrl}/lab/hiwg`,
    type: "website",
    images: [defaultImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "HIWG Seminar | Sukhun Kang",
    description:
      "Virtual workshop series for research on pharmaceuticals, healthcare, and health policy.",
    images: [defaultImage.url],
  },
};
