// src/components/ui/badge.jsx

import React from "react";

export function Badge({ children, className = "", variant = "default", ...props }) {
  const baseStyle = "inline-block px-2 py-1 text-xs font-semibold rounded";
  const variants = {
    default: "bg-emerald-600 text-white",
    outline: "border border-emerald-600 text-emerald-400",
  };

  return (
    <span className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </span>
  );
}
