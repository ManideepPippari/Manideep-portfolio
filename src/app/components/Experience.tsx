"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="max-w-6xl mx-auto py-20 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-slate-100">
        Experience
      </h2>

      <div className="space-y-14 text-white/80">

        {/* PNC */}
        <div className="border-l-2 border-sky-400/60 pl-6">
          <h3 className="text-xl font-semibold text-slate-100">PNC Bank</h3>
          <p className="text-sm text-sky-400 mb-3">
            Data Analyst • Aug 2024 – Present
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Performed comprehensive data mining and statistical analysis using Python and SQL to identify customer spending patterns.</li>
            <li>Developed Tableau dashboards using star schema modeling to support executive decisions.</li>
            <li>Optimized SQL queries and automated SSRS reports, reducing manual reporting.</li>
            <li>Built ETL workflows in Snowflake for improved data governance.</li>
            <li>Designed KPI dashboards with automated alert mechanisms.</li>
          </ul>
        </div>

        {/* Vivma */}
        <div className="border-l-2 border-sky-400/60 pl-6">
          <h3 className="text-xl font-semibold text-slate-100">Vivma</h3>
          <p className="text-sm text-sky-400 mb-3">
            Data Analyst • Sep 2020 – Aug 2023
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Conducted data QA using SQL and Python, reducing dataset error rates.</li>
            <li>Designed predictive models identifying high-risk customer segments.</li>
            <li>Created Power BI dashboards for IT Services Revenue & Customer Growth KPIs.</li>
            <li>Collaborated with Agile teams to evaluate engagement metrics and pricing strategy tests.</li>
            <li>Maintained AWS Redshift pipelines and Git version control for KPI dashboards.</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}