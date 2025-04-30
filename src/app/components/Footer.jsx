import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-4 mb-6 mx-4">
      <div className="w-[400px] lg:w-[600px] h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent opacity-50 dark:via-neutral-600"></div>
      <div className="mt-6 text-center text-sm">
        © {new Date().getFullYear()} By Sukhun Kang. Email:{" "}
        <Link href="mailto:sukhunkang@ucsb.edu" className="hover:underline">
          sukhunkang@ucsb.edu
        </Link>
      </div>
      <div className="flex gap-6 mt-4">
        <Link
          href="https://www.linkedin.com/in/sukhunkang/"
          target="_blank"
          className="social-icon"
        >
          <img
            src="linkedin.svg"
            alt="LinkedIn"
            width={24}
            height={24}
            className="hover:scale-110 transition-transform duration-300"
          />
        </Link>

        <Link
          href="https://x.com/sukhunkang"
          target="_blank"
          className="social-icon"
        >
          <img
            src="X_logo.jpeg"
            alt="X"
            width={24}
            height={24}
            className="hover:scale-110 transition-transform duration-300"
          />
        </Link>

        <Link
          href="https://scholar.google.co.uk/citations?user=FMHJcysAAAAJ&hl=en"
          target="_blank"
          className="social-icon"
        >
          <img
            src="google-scholar.svg"
            alt="Google Scholar"
            width={24}
            height={24}
            className="hover:scale-110 transition-transform duration-300"
          />
        </Link>

        <Link
          href="https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=2596230"
          target="_blank"
          className="social-icon"
        >
          <img
            src="ssrn.svg"
            alt="SSRN"
            width={24}
            height={24}
            className="hover:scale-110 transition-transform duration-300"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
