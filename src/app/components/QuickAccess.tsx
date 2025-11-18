"use client";

import React from "react";
import QRCode from "react-qr-code";

export default function QuickAccess() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {/* Resume QR */}
      <div className="rounded-xl border border-slate-700/70 bg-slate-900/60 p-4 text-center shadow-sm hover:border-sky-400/70 transition">
        <h3 className="font-semibold mb-2 text-slate-100 text-sm">
          Resume PDF
        </h3>

        <div className="bg-white p-2 inline-block rounded shadow">
          <QRCode
            value="https://manideep-portfolio-tau.vercel.app/Manideep_Resume.pdf"
            size={110}
          />
        </div>

        <a
          href="/Manideep_Resume.pdf"
          target="_blank"
          className="block text-[10.5px] text-sky-300 hover:underline mt-2"
        >
          Click to open resume directly
        </a>
      </div>

      {/* LinkedIn QR */}
      <div className="rounded-xl border border-slate-700/70 bg-slate-900/60 p-4 text-center shadow-sm hover:border-sky-400/70 transition">
        <h3 className="font-semibold mb-2 text-slate-100 text-sm">
          LinkedIn Profile
        </h3>

        <div className="bg-white p-2 inline-block rounded shadow">
          <QRCode
            value="https://www.linkedin.com/in/manideep-pippari/"
            size={110}
          />
        </div>

        <a
          href="https://www.linkedin.com/in/manideep-pippari/"
          target="_blank"
          className="block text-[10.5px] text-sky-300 hover:underline mt-2"
        >
          Click to open LinkedIn directly
        </a>
      </div>
    </div>
  );
}