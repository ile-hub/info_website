import { C } from "../lib/theme";

export default function Eyebrow({ children, className = "", color = C.rust }) {
  return (
    <div className={`text-sm font-bold uppercase tracking-[0.18em] mb-6 ${className}`} style={{ color }}>
      <span className="brand-eyebrow">{children}</span>
    </div>
  );
}
