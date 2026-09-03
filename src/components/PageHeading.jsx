import { C } from "../lib/theme";

// Shared page-level H1 used at the top of every route (not the homepage
// hero, which has its own larger treatment in Home.jsx).
export default function PageHeading({ children, className = "" }) {
  return (
    <h1
      className={`font-semibold ${className}`}
      style={{
        fontFamily: "'Fraunces', serif",
        color: C.ink,
        fontSize: "clamp(2rem, 4vw, 2.75rem)",
        letterSpacing: "-0.01em",
      }}
    >
      {children}
    </h1>
  );
}
