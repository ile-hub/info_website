import { ArrowRight } from "lucide-react";
import { C } from "../lib/theme";

export default function Button({ children, variant = "primary", onClick, icon = false, className = "" }) {
  const styles =
    variant === "primary"
      ? { backgroundColor: C.rust, color: C.paper }
      : variant === "secondary"
      ? { backgroundColor: C.kraft, color: C.ink }
      : variant === "dark"
      ? { backgroundColor: C.ink, color: C.paper }
      : { backgroundColor: "transparent", color: C.ink, boxShadow: `inset 0 0 0 1.5px ${C.ink}` };
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-500 ease-in-out hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 ${className}`}
      style={styles}
    >
      {children}
      {icon && <ArrowRight size={17} />}
    </button>
  );
}
