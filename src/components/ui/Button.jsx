// components/ui/Button.jsx

import Link from "next/link";

// ─── Arrow Icon ───────────────────────────────────────────────
const ArrowIcon = () => (
  <svg width="9" height="12" viewBox="0 0 9 12" fill="none">
    <path
      d="M0.77735 0.0846398C0.445073 -0.136878 0 0.101317 0 0.500665V10.6321C0 11.0315 0.445073 11.2697 0.77735 11.0482L8.37596 5.98243C8.67283 5.78452 8.67283 5.34829 8.37596 5.15038L0.77735 0.0846398Z"
      fill="currentColor"
    />
  </svg>
);

// ─── Button ───────────────────────────────────────────────────
export default function Button({ label, href, bgColor, textColor, showIcon }) {
  const style = {
    backgroundColor: bgColor || "transparent",
    color: textColor || "#ffffff",
    border: bgColor ? "none" : "1.5px solid #02090F",
    borderRadius: "90px",
    padding: "20px 30px",
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "20px",
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
    textDecoration: "none",
  };

  const content = (
    <>
      {label}
      {showIcon && <ArrowIcon />}
    </>
  );

  if (href) return <Link href={href} style={style}>{content}</Link>;

  return <button style={style}>{content}</button>;
}