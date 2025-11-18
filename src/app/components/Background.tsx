"use client";
import React from "react";

export default function Background() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="pointer-events-none absolute -inset-[20%] bg-[radial-gradient(circle_at_50%_50%,rgba(157,183,255,0.08),transparent_50%)] animate-pulse" />
    </div>
  );
}
