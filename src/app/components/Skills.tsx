"use client";
import React from "react";

export default function Skills() {
    const skills = [
        "Python", "SQL", "Power BI", "Tableau", "AWS", "Snowflake",
        "Machine Learning", "Pandas", "NumPy", "Scikit-learn", "Airflow",
    ];

    return (
        <section id="skills" className="text-center text-space-white py-20 border-b border-space-surface">
            <h2 className="text-4xl font-bold text-space-blue glow-text mb-10">Skills</h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
                {skills.map((skill) => (
                    <span key={skill} className="px-5 py-2 border border-space-blue text-space-blue rounded-lg hover:bg-space-blue hover:text-space-white transition-all duration-300">
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
}
