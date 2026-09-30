import Link from "next/link";
import { ProfileTile } from "./icons";

const profiles = [
  {
    label: "Google Scholar",
    href: "https://scholar.google.co.uk/citations?user=FMHJcysAAAAJ&hl=en",
    mark: "scholar",
  },
  {
    label: "SSRN",
    href: "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=2596230",
    mark: "ssrn",
  },
  { label: "ORCID", href: "https://orcid.org/0000-0002-6712-2040", mark: "orcid" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sukhunkang/", mark: "linkedin" },
  { label: "X (Twitter)", href: "https://x.com/sukhunkang", mark: "x" },
];

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center mt-4 mb-6 mx-4">
      <div className="w-full max-w-[600px] h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent opacity-50"></div>
      <p className="mt-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Sukhun Kang ·{" "}
        <Link
          href="mailto:sukhunkang@ucsb.edu"
          className="text-gray-900 hover:text-accent hover:underline transition-colors duration-200"
        >
          sukhunkang@ucsb.edu
        </Link>
      </p>
      <ul className="flex items-center gap-5 mt-4">
        {profiles.map(({ label, href, mark }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="block text-gray-500 hover:text-accent transition-colors duration-200"
            >
              <ProfileTile mark={mark} />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
