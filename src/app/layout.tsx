import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import ParticlesBackground from "./components/ParticlesBackground";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Manideep Pippari | Data & AI",
  description: "Portfolio of Manideep Pippari | Data Engineer & AI Analyst.",
  metadataBase: new URL("https://manideeppippari.com"),

  // OpenGraph – used by LinkedIn, WhatsApp, etc.
  openGraph: {
    title: "Manideep Pippari | Data Engineer & AI/ML Analyst",
    description:
      "Portfolio of Manideep Pippari – Data Engineer & AI/ML Analyst skilled in Python, SQL, AWS, Snowflake, Airflow and BI.",
    url: "https://manideeppippari.com",
    siteName: "Manideep Pippari | Data & AI",
    type: "website",
    locale: "en_US",
    images: [
      {
        // NEW banner image – must exist in /public as og-banner.png
        url: "/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Manideep Pippari – Data Engineer & AI/ML Analyst Portfolio",
      },
    ],
  },

  // Twitter / X card
  twitter: {
    card: "summary_large_image",
    title: "Manideep Pippari | Data Engineer & AI/ML Analyst",
    description:
      "End-to-end Data & AI projects: Spotify ETL on AWS, Global Energy Analytics, and more.",
    images: ["/og-banner.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isProd = process.env.NODE_ENV === "production";
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <head>
        {/* Google Analytics – only run in production and when GA ID exists */}
        {isProd && gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
      </head>

      <body className="bg-slate-950 text-slate-50 antialiased">
        <div className="relative min-h-screen">
          {/* Star background behind everything */}
          <div className="pointer-events-none fixed inset-0 -z-10">
            <ParticlesBackground />
          </div>

          {/* Fixed navbar at top */}
          <Navbar />

          {/* Main content */}
          <div className="pt-20 pb-16">{children}</div>
        </div>
      </body>
    </html>
  );
}