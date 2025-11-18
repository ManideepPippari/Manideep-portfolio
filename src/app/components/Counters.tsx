"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function CountUp({ end, label }: { end: number; label: string }) {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let current = 0;
      const duration = 1500;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          current = end;
          clearInterval(timer);
        }
        setCount(Math.round(current));
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, end]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <p className="text-4xl font-bold text-[var(--accent2)]">{count}+</p>
      <p className="text-sm text-[var(--muted)]">{label}</p>
    </motion.div>
  );
}

export default function Counters() {
  return (
    <section
      id="stats"
      className="max-w-5xl mx-auto px-6 py-20 text-center border-t border-white/10"
    >
      <h2 className="text-3xl font-bold mb-10 text-[var(--accent2)]">
        Snapshot Overview
      </h2>
      <div className="grid grid-cols-3 gap-6">
        <CountUp end={6} label="Projects" />
        <CountUp end={2} label="Certifications" />
        <CountUp end={4} label="Years of Experience" />
      </div>
    </section>
  );
}