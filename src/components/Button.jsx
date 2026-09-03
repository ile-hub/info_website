import { ArrowRight } from "lucide-react";
import { C } from "../lib/theme";

export default function Button({ children, variant = "primary", onClick, icon = true }) {
  const styles =
    variant === "primary"
      ? { backgroundColor: C.rust, color: C.paper, boxShadow: "0 8px 20px -8px rgba(181,80,46,0.55)" }
      : variant === "dark"
      ? { backgroundColor: C.ink, color: C.paper, boxShadow: "0 8px 20px -8px rgba(0,0,0,0.4)" }
      : { backgroundColor: "transparent", color: C.ink, boxShadow: `inset 0 0 0 1.5px ${C.ink}` };
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium text-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:brightness-110 hover:shadow-xl active:translate-y-0"
      style={styles}
    >
      {children}
      {icon && <ArrowRight size={15} />}
    </button>
  );
}
