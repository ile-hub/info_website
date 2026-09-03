import { C } from "../lib/theme";

export default function Card({ children, className = "", dark = false, style = {} }) {
  return (
    <div
      className={`rounded-xl p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg ${className}`}
      style={{
        backgroundColor: dark ? "#232B28" : C.cream,
        boxShadow: dark ? "inset 0 0 0 1px #37403D" : `inset 0 0 0 1px ${C.line}80, 0 1px 2px rgba(28,35,33,0.04)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
