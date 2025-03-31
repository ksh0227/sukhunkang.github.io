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
  title: "Suhkun Kang | UC Santa Barbara",
  description: "Suhkun Kang | UC Santa Barbara",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`}></Script>
        <Script id="google-analytics">
          {
            `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${process.env.NEXT_PUBLIC_MEASUREMENT_ID}');
            `
          }
        </Script>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={geistSans.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1 pt-16">
            {children}
          </main>  
          <Footer />
        </div>
      </body>
    </html>
  );
}
