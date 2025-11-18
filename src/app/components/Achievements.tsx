"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function Achievements() {
  return (
    <motion.section
      id="achievements"
      className="max-w-6xl mx-auto py-20 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-10 text-slate-100">
        Achievements &amp; Certifications
      </h2>

      {/* Certificates */}
      <div className="grid gap-6 md:grid-cols-2 mb-12">
        {/* IBM */}
        <a
          href="/ibm_data_analyst_certificate.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col rounded-xl border border-slate-700/80 bg-slate-900/70 p-5 shadow-sm hover:border-sky-400/80 hover:bg-slate-900 transition-colors"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">
              <Award className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Certification
              </p>
              <h3 className="text-sm font-semibold text-slate-100 group-hover:text-sky-300">
                IBM Data Analyst Professional Certificate
              </h3>
            </div>
          </div>
          <p className="text-xs text-slate-300/90 mb-2">
            Training in SQL, Excel, Python, and data visualization for
            real-world analytics projects.
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
          className="group flex flex-col rounded-xl border border-slate-700/80 bg-slate-900/70 p-5 shadow-sm hover:border-sky-400/80 hover:bg-slate-900 transition-colors"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">
              <Award className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Certification
              </p>
              <h3 className="text-sm font-semibold text-slate-100 group-hover:text-sky-300">
                OutSkill Generative AI Mastermind
              </h3>
            </div>
          </div>
          <p className="text-xs text-slate-300/90 mb-2">
            Hands-on GenAI workflows for analytics, automation, and advanced
            prompt engineering.
          </p>
          <p className="text-xs text-sky-300 underline underline-offset-2">
            Click to open certificate (PDF)
          </p>
        </a>
      </div>

      {/* Stats strip */}
      <div className="rounded-2xl border border-slate-700/80 bg-slate-900/60 px-6 py-5 flex flex-col gap-4 text-center text-slate-200 md:flex-row md:items-center md:justify-between">
        <div className="flex-1">
          <div className="text-2xl font-semibold text-sky-300">6+</div>
          <div className="text-xs uppercase tracking-[0.22em] text-slate-400">
            Projects
          </div>
        </div>

        <div className="hidden h-10 w-px bg-slate-700/60 md:block" />

        <div className="flex-1">
          <div className="text-2xl font-semibold text-sky-300">2+</div>
          <div className="text-xs uppercase tracking-[0.22em] text-slate-400">
            Certifications
          </div>
        </div>

        <div className="hidden h-10 w-px bg-slate-700/60 md:block" />

        <div className="flex-1">
          <div className="text-2xl font-semibold text-sky-300">4+</div>
          <div className="text-xs uppercase tracking-[0.22em] text-slate-400">
            Years of Experience
          </div>
        </div>
      </div>
    </motion.section>
  );
}