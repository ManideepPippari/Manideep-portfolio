"use client";

import React, { useEffect, useRef } from "react";

/** Magnetic button effect */
type MagneticButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export function MagneticButton({ children, ...props }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      // apply transform safely
      el.style.transform = 'translate(${x * 0.12}px, ${y * 0.12}px)';
    };

    const reset = () => {
      el.style.transform = "translate(0px, 0px)";
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", reset);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <button
      ref={ref}
      className="relative inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/10 px-5 py-2 text-sm font-medium text-sky-100 transition duration-200 shadow-[0_0_25px_rgba(56,189,248,0.25)] hover:bg-sky-500/20"
      {...props}
    >
      {children}
    </button>
  );
}

/** Small stat badge */
type CounterBadgeProps = {
  label: string;
  value: string;
};

export function CounterBadge({ label, value }: CounterBadgeProps) {
  return (
    <div className="rounded-2xl border border-slate-700/80 bg-slate-900/70 px-4 py-3 text-xs text-slate-200 shadow-[0_0_30px_rgba(15,23,42,0.7)]">
      <div className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
        {label}
      </div>
      <div className="mt-1 text-lg font-semibold text-sky-200">{value}</div>
    </div>
  );
}