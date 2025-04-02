'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Suhkun Kang | UC Santa Barbara",
//   description: "Suhkun Kang | UC Santa Barbara",
// };

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Get current route

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", process.env.NEXT_PUBLIC_MEASUREMENT_ID, {
        page_path: pathname,
      });
    }
  }, [pathname]); // Runs when the route changes

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics script */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`}
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_MEASUREMENT_ID}');
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
