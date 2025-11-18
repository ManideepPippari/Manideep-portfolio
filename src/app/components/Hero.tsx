"use client";
import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-80px)] items-center justify-center"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center">
        <p className="text-xs tracking-[0.35em] text-slate-300/80">
          DATA · ANALYTICS · AI
        </p>

        {/* Name — pure white */}
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          Manideep Pippari
        </h1>

        <p className="max-w-3xl text-sm leading-relaxed text-slate-200 sm:text-base md:text-lg">
          Data Engineer &amp; AI Analyst turning raw data into intelligent,
          business-ready insights. I design end-to-end data solutions from
          <span className="font-medium text-white"> pipelines and warehouses</span> to
          <span className="font-medium text-white"> machine learning models</span> and
          <span className="font-medium text-white"> executive dashboards</span>.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
  <a
    href="#achievements"
    className="rounded-md border border-white px-6 py-2 text-sm font-semibold text-white hover:bg-white hover:text-slate-900 transition"
  >
    View Resume & Achievements
  </a>

  <a
    href="#contact"
    className="rounded-md border border-white px-6 py-2 text-sm font-semibold text-white hover:bg-white hover:text-slate-900 transition"
  >
    Contact Me
  </a>
</div>
      </div>
    </section>
  );
}