// Generated at build time, replacing the hand-edited public/sitemap.xml whose
// lastmod was frozen. Pages carry the build date (they redeploy on every
// change); the older reference PDFs keep their known dates. URLs use the
// trailing-slash form to match trailingSlash:true and the page canonicals.

const baseUrl = "https://sukhunkang.com";

// Force build-time static generation for output: export.
export const dynamic = "force-static";

export default function sitemap() {
  const now = new Date();

  const pages = [
    { path: "/", changeFrequency: "monthly", priority: 1.0 },
    { path: "/about/", changeFrequency: "monthly", priority: 0.8 },
    { path: "/research/", changeFrequency: "weekly", priority: 0.9 },
    { path: "/teaching/", changeFrequency: "monthly", priority: 0.7 },
    { path: "/resources/", changeFrequency: "monthly", priority: 0.6 },
    { path: "/lab/hil/", changeFrequency: "monthly", priority: 0.8 },
    { path: "/lab/hiwg/", changeFrequency: "monthly", priority: 0.7 },
  ].map((p) => ({
    url: `${baseUrl}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  const documents = [
    { path: "/syllabi/TMP412-syllabus.pdf", lastModified: now },
    { path: "/syllabi/TMP120-syllabus.pdf", lastModified: now },
    {
      path: "/resources/Introduction-to-Expanded-Access.pdf",
      lastModified: new Date("2020-06-11"),
    },
    {
      path: "/resources/Introduction-to-FDA-Expedited-Programs.pdf",
      lastModified: new Date("2020-06-11"),
    },
    {
      path: "/resources/Introduction-to-Pharmaceutical-Regulations.pdf",
      lastModified: new Date("2020-06-05"),
    },
  ].map((d) => ({
    url: `${baseUrl}${d.path}`,
    lastModified: d.lastModified,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...pages, ...documents];
}
