import { C, SOFT_SHADOW } from "../lib/theme";

export default function Card({ children, className = "", dark = false, style = {} }) {
  return (
    <div
      className={`h-full rounded-2xl p-7 pb-9 transition-all duration-300 ease-out hover:-translate-y-1 ${className}`}
      style={{
        backgroundColor: dark ? "#232B28" : C.cream,
        boxShadow: dark ? "inset 0 0 0 1px #37403D" : SOFT_SHADOW,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
