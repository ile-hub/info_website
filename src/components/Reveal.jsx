import { useRef, useState, useEffect } from "react";
import { REDUCE_MOTION } from "../lib/theme";

const OFFSETS = {
  up: "translate3d(0, 24px, 0)",
  left: "translate3d(-48px, 0, 0)",
  right: "translate3d(48px, 0, 0)",
};

// Lightweight scroll-triggered fade, rising up or sliding in from either
// side. Respects prefers-reduced-motion by skipping straight to visible.
export default function Reveal({ children, delay = 0, from = "up", className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(REDUCE_MOTION);

  useEffect(() => {
    if (REDUCE_MOTION) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate3d(0, 0, 0)" : OFFSETS[from],
        transition: `opacity 0.7s cubic-bezier(.22,1,.36,1) ${delay}s, transform 0.7s cubic-bezier(.22,1,.36,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
