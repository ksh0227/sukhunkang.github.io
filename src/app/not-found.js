import Link from "next/link";

// Branded 404, replacing the framework default (which shipped a second
// <title> and a homepage canonical). GitHub Pages serves this as 404.html
// with a 404 status, so search engines treat it as not-found without needing
// a robots meta.
export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow max-w-4xl mx-auto px-6 py-24 text-center">
        <p className="text-sm font-semibold text-blue-600">404</p>
        <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
          Page not found
        </h1>
        <p className="text-gray-600 mb-8">
          The page you are looking for does not exist or may have moved.
        </p>
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
        >
          Return to the homepage
        </Link>
      </main>
    </div>
  );
}
