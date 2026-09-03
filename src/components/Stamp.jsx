import { BadgeCheck } from "lucide-react";
import { C } from "../lib/theme";

export default function Stamp({ children }) {
  return (
    <span
      className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-widest rounded-full px-3 py-1"
      style={{ color: C.verified, boxShadow: `inset 0 0 0 1.5px ${C.verified}` }}
    >
      <BadgeCheck size={13} strokeWidth={2.5} />
      {children}
    </span>
  );
}
