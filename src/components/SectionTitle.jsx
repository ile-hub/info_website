import { C } from "../lib/theme";

export default function SectionTitle({ children, light }) {
  return (
    <h2
      className="font-semibold leading-tight mb-4"
      style={{
        fontFamily: "'Fraunces', serif",
        color: light ? C.paper : C.ink,
        fontSize: "clamp(1.85rem, 3.2vw, 2.5rem)",
        letterSpacing: "-0.01em",
      }}
    >
      {children}
    </h2>
  );
}
