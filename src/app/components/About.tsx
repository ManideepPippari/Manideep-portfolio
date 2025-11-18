"use client";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="max-w-5xl mx-auto px-6 py-16 border-t border-white/10 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold fancy-heading mb-6">About Me</h2>
      <p className="text-white/80 leading-relaxed">
        I'm <strong>Manideep Pippari</strong>, a Data Analyst and AI Analyst based in Los Angeles.
        I specialize in transforming raw data into meaningful insights through machine learning,
        data visualization, and cloud analytics solutions.
      </p>
    </motion.section>
  );
}