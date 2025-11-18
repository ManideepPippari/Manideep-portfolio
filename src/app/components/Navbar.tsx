"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="#home" className="font-semibold tracking-wide text-slate-100">
          Manideep Pippari
        </Link>

        <div className="hidden sm:flex items-center gap-6 text-sm">
          <Link href="#home" className="hover:text-sky-300">Home</Link>
          <Link href="#about" className="hover:text-sky-300">About</Link>
          <Link href="#skills" className="hover:text-sky-300">Skills</Link>
          <Link href="#experience" className="hover:text-sky-300">Experience</Link>
          <Link href="#projects" className="hover:text-sky-300">Projects</Link>
          <Link href="#achievements" className="hover:text-sky-300">Achievements</Link>
          <Link href="#contact" className="hover:text-sky-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
}