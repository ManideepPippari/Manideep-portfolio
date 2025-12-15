"use client";
import { motion } from "framer-motion";
import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Global Sustainable Energy Analysis",
      description:
        "Analyzed worldwide renewable vs non-renewable trends using Python, SQL and Power BI; forecasted sustainability adoption rates and policy performance.",
      tech: ["Python", "SQL", "Power BI", "Tableau"],
      github:
        "https://github.com/ManideepPippari/Global-Sustainable-Energy-Analysis",
    },
    {
      title: "Spotify End-to-End Data Engineering Pipeline",
      description:
        "Built a production-style ETL/ELT pipeline that ingests Spotify data, processes it across AWS, Databricks and Snowflake, orchestrates workflows with Airflow, and surfaces insights via Power BI dashboards.",
      tech: [
        "AWS Lambda",
        "S3",
        "Glue",
        "Athena",
        "Airflow",
        "Databricks",
        "PySpark",
        "Delta Lake",
        "Snowflake",
        "Python",
        "Power BI",
      ],
      github:
        "https://github.com/ManideepPippari/spotify-etl-data-engineering",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-slate-100">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <motion.div
            key={p.title}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.25 }}
            className="rounded-xl p-6 bg-white/5 backdrop-blur-lg border border-white/10 shadow-[0px_0px_25px_rgba(0,0,0,0.25)] hover:shadow-[0px_0px_40px_rgba(0,0,0,0.45)]"
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              {p.title}
            </h3>
            <p className="text-sm text-white/70 mb-3">{p.description}</p>
            <p className="text-xs text-white/40 mb-5">
              <strong className="text-white/60">Tech:</strong>{" "}
              {p.tech.join(", ")}
            </p>

            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-fit px-5 py-2 rounded-md text-sm font-semibold border border-white/20 text-white hover:bg-white hover:text-black transition"
            >
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}