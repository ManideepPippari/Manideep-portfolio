"use client";

import React from "react";
import QRCode from "react-qr-code";

export default function QuickAccess() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {/* Resume QR */}
      <div className="card p-4 text-center">
        <h3 className="font-semibold mb-2 text-slate-100 text-sm">
          Resume PDF
        </h3>
        <div className="bg-white p-2 inline-block rounded">
          <QRCode value="/Manideep_Resume.pdf" size={110} />
        </div>
        <p className="text-xs text-[var(--muted)] mt-2">
          Scan to open resume
        </p>
      </div>

      {/* LinkedIn QR */}
      <div className="card p-4 text-center">
        <h3 className="font-semibold mb-2 text-slate-100 text-sm">
          LinkedIn Profile
        </h3>
        <div className="bg-white p-2 inline-block rounded">
          <QRCode
            value="https://www.linkedin.com/in/manideep-pippari/"
            size={110}
          />
        </div>
        <p className="text-xs text-[var(--muted)] mt-2">
          Scan to open LinkedIn
        </p>
      </div>
    </div>
  );
}