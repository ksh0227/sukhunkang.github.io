// Home-page news, newest first. `date` is "YYYY-MM" and displays as "Oct 2026".
// Dates come from the source: Crossref for the BMJ EBM article, the article
// pages for The Conversation and The Incidental Economist, the HBP store page
// for the case, and data/hiwg.js for the seminar.

export const news = [
  {
    date: "2026-10",
    text: "Hanu Tyagi (UIUC) presents at the HIWG Research Chat on October 6.",
    url: "/lab/hiwg/",
  },
  {
    date: "2026-05",
    text: "“Clinical Trials That Are Actually Marketing Ploys Targeting Doctors” in The Conversation.",
    url: "https://theconversation.com/clinical-trials-that-are-actually-marketing-ploys-targeting-doctors-how-seeding-trials-put-profit-over-patients-280398",
  },
  {
    date: "2026-04",
    text: "“Uncovering Seeding Trials,” with Ivan Lin and Sungyong Chang, published in BMJ Evidence-Based Medicine.",
    url: "https://doi.org/10.1136/bmjebm-2025-114242",
  },
  {
    date: "2025-10",
    text: "New UC Berkeley Haas case on Baby Shark and The Pinkfong Company, with Abhishek Nagaraj.",
    url: "https://store.hbr.org/product/behind-the-scenes-of-a-youtube-mega-hit-baby-shark-the-pinkfong-company-and-what-s-next/B6077",
  },
  {
    date: "2025-08",
    text: "“Measuring Biopharmaceutical Innovation in the Modern Era” in The Incidental Economist.",
    url: "https://theincidentaleconomist.com/wordpress/measuring-biopharmaceutical-innovation-in-the-modern-era/",
  },
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function formatNewsDate(date) {
  const [year, month] = date.split("-").map(Number);
  return `${MONTHS[month - 1]} ${year}`;
}
