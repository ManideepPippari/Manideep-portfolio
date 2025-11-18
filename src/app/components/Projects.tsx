"use client";
import { motion } from "framer-motion";
import React from "react";

export default function Projects(){
  const projects = [{
    title:"Global Sustainable Energy Analysis",
    description:"Analyzed worldwide renewable vs non-renewable trends with Python, SQL and Power BI; forecasted sustainability adoption.",
    tech:["Python","SQL","Power BI","Tableau"],
    github:"https://github.com/ManideepPippari/Global-Sustainable-Energy-Analysis"
  }];

  return (
    <motion.section id="projects" className="max-w-6xl mx-auto px-6"
      initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.7 }} viewport={{ once:true }}>
      <h2 className="text-3xl font-bold text-center mb-10 text-[var(--accent2)]">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map(p=>(
          <motion.div key={p.title} whileHover={{ scale:1.02 }} className="card p-6">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-sm text-[var(--muted)] mb-3">{p.description}</p>
            <p className="text-xs mb-5"><strong>Tech:</strong> {p.tech.join(", ")}</p>
            <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View on GitHub</a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
