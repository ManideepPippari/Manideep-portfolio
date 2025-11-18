// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import ParticlesBackground from "./components/ParticlesBackground";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Manideep Pippari | Data & AI",
  description: "Portfolio of Manideep Pippari – Data Engineer & AI Analyst.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-50 antialiased">
        <div className="relative min-h-screen">
          {/* Star background behind everything – does NOT create extra space */}
          <div className="pointer-events-none fixed inset-0 -z-10">
            <ParticlesBackground />
          </div>

          {/* Fixed navbar at top */}
          <Navbar />

          {/* Main content – padded only for navbar height */}
          <div className="pt-20 pb-16">{children}</div>
        </div>
      </body>
    </html>
  );
}
