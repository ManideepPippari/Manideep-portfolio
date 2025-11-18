"use client";

import React from "react";
import { motion } from "framer-motion";
import QuickAccess from "./QuickAccess";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="max-w-6xl mx-auto py-20 px-6 border-t border-white/10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-center mb-10 text-slate-100">
        Get in Touch
      </h2>

      {/* 2-column layout */}
      <div className="grid gap-10 md:grid-cols-2 items-start">
        {/* LEFT: details + QR codes */}
        <div className="space-y-6 text-sm text-slate-300">
          <div className="space-y-3">
            <p>
              I&apos;m open to opportunities in data engineering, analytics, and
              AI-driven roles. If you&apos;d like to discuss a role,
              collaboration, or project, feel free to drop a message.
            </p>

            <div className="space-y-1">
              <p>
                <span className="font-medium text-slate-100">Email:</span>{" "}
                mani.pippari@gmail.com
              </p>
              <p>
                <span className="font-medium text-slate-100">Phone:</span>{" "}
                +1 (872) 328-6416
              </p>
              <p>
                <span className="font-medium text-slate-100">Location:</span>{" "}
                Los Angeles, CA
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-medium text-slate-100">Social</p>
              <a
                href="https://github.com/ManideepPippari"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sky-300 text-sm hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/manideep-pippari"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sky-300 text-sm hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* QR cards right under the details */}
          <QuickAccess />
        </div>

        {/* RIGHT: form */}
        <div className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-6 shadow-lg">
          <form
            action="https://formspree.io/f/mpwoqlwb"
            method="POST"
            className="space-y-4"
          >
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-md border border-slate-600 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-400"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Your Email
              </label>
              <input
                type="email"
                name="_replyto"
                required
                className="w-full rounded-md border border-slate-600 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-400"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Your Message
              </label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full rounded-md border border-slate-600 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none resize-none focus:border-sky-400"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-sky-500/90 px-4 py-2 text-sm font-medium text-slate-950 shadow-lg shadow-sky-500/40 hover:bg-sky-400 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
}