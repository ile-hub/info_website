import { C } from "../lib/theme";

// Shared page-level H1 used at the top of every route (not the homepage
// hero, which has its own larger treatment in Home.jsx).
export default function PageHeading({ children, className = "" }) {
  return (
    <h1
      className={`font-black uppercase leading-[1.02] ${className}`}
      style={{
        color: C.ink,
        fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
        letterSpacing: "-0.015em",
      }}
    >
      {children}
    </h1>
  );
}
