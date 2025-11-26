import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import ParticlesBackground from "./components/ParticlesBackground";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Manideep Pippari | Data & AI",
  description: "Portfolio of Manideep Pippari | Data Engineer & AI Analyst.",
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