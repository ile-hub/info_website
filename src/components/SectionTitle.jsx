import { C } from "../lib/theme";

export default function SectionTitle({ children, light, className = "" }) {
  return (
    <h2
      className={`font-extrabold uppercase leading-[1.05] mb-4 ${className}`}
      style={{
        color: light ? C.paper : C.ink,
        fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)",
        letterSpacing: "-0.01em",
      }}
    >
      {children}
    </h2>
  );
}
