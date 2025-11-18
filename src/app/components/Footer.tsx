"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="text-sky-400 font-semibold">Manideep Pippari</span>.  
          All rights reserved.
        </p>

        <div className="flex gap-6 text-sm">
          <a
            href="https://github.com/ManideepPippari"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/manideep-pippari/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:mani.pippari@gmail.com"
            className="hover:text-sky-400 transition"
          >
            Email Me
          </a>
        </div>
      </div>
    </footer>
  );
}
