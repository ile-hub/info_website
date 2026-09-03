import { C } from "../lib/theme";

export default function Eyebrow({ children }) {
  return (
    <div className="font-mono text-xs uppercase tracking-[0.2em] mb-3" style={{ color: C.rust }}>
      {children}
    </div>
  );
}
