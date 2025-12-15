"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface MagneticButtonProps {
  href: string;
  className?: string;
  children: ReactNode;
}

export default function MagneticButton({
  href,
  className = "",
  children,
}: MagneticButtonProps) {
  return (
    <Link
      href={href}
      className={`rounded-md px-6 py-2 transition-all duration-300 cursor-pointer ${className}`}
    >
      {children}
    </Link>
  );
}