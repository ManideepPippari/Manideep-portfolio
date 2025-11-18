"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a
        href="#contact"
        className="px-5 py-3 rounded-full font-semibold bg-[var(--accent2)] text-black shadow-lg hover:scale-105 transition-transform"
      >
        🚀 Let’s Connect
      </a>
    </motion.div>
  );
}
