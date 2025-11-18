"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Insights() {
  return (
    <motion.section
      id="insights"
      className="max-w-5xl mx-auto py-20 px-6 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold fancy-heading mb-6">
        Insights & Articles
      </h2>
      <p className="text-white/70 max-w-3xl mx-auto">
        I frequently share insights about data analytics, AI automation, and
        how modern businesses can use data-driven decisions to optimize growth.
        Stay tuned — more blogs and visual breakdowns are coming soon!
      </p>
    </motion.section>
  );
}
