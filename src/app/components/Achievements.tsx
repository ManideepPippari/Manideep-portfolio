"use client";

import React from "react";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="max-w-6xl mx-auto px-6 py-20 text-center"
    >
      {/* Title */}
      <h2 className="text-3xl font-bold mb-10 text-[var(--accent2)]">
        Achievements &amp; Certifications
      </h2>

      {/* Certifications list */}
      <div className="grid gap-6 md:grid-cols-2 mb-12">
        {/* IBM */}
        <a
          href="/ibm_data_analyst_professional_certificate.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="card p-6 text-left hover:border-sky-400/80 hover:bg-slate-900/80 transition-colors"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)] mb-1">
            Certification
          </p>
          <h3 className="font-semibold text-base mb-2 text-slate-100">
            🏅 IBM Data Analyst Professional Certificate
          </h3>
          <p className="text-sm text-[var(--muted)] mb-2">
            Training in SQL, Excel, Python, and data visualization for
            real-world analytics projects and dashboards.
          </p>
          <p className="text-xs text-sky-300 underline underline-offset-2">
            Click to open certificate (PDF)
          </p>
        </a>

        {/* OutSkill */}
        <a
          href="/outskill_generative_ai_certificate.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="card p-6 text-left hover:border-sky-400/80 hover:bg-slate-900/80 transition-colors"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)] mb-1">
            Certification
          </p>
          <h3 className="font-semibold text-base mb-2 text-slate-100">
            🤖 OutSkill Generative AI Mastermind Certification
          </h3>
          <p className="text-sm text-[var(--muted)] mb-2">
            Hands-on GenAI workflows for analytics, automation, and advanced
            prompt engineering.
          </p>
          <p className="text-xs text-sky-300 underline underline-offset-2">
            Click to open certificate (PDF)
          </p>
        </a>
      </div>

      {/* Stats strip */}
      <div className="card flex flex-col items-center justify-between gap-6 py-5 px-6 md:flex-row">
        <div className="flex-1">
          <div className="text-2xl font-semibold text-sky-300">6+</div>
          <div className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
            Projects
          </div>
        </div>

        <div className="hidden h-10 w-px bg-slate-700/70 md:block" />

        <div className="flex-1">
          <div className="text-2xl font-semibold text-sky-300">2+</div>
          <div className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
            Certifications
          </div>
        </div>

        <div className="hidden h-10 w-px bg-slate-700/70 md:block" />

        <div className="flex-1">
          <div className="text-2xl font-semibold text-sky-300">4+</div>
          <div className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
            Years of Experience
          </div>
        </div>
      </div>
    </section>
  );
}