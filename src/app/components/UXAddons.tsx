"use client";
import { motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-[var(--accent2)] origin-left z-[9999]"
    />
  );
}

export function MagneticButton({ children, ...props }) {
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handle = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
    };
    const leave = () => (el.style.transform = "");
    el.addEventListener("mousemove", handle);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mousemove", handle);
      el.removeEventListener("mouseleave", leave);
    };
  }, []);
  return (
    <button
      ref={ref}
      {...props}
      className="btn btn-primary transition-transform duration-300"
    >
      {children}
    </button>
  );
}
