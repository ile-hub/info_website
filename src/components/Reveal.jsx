import { useRef, useState, useEffect } from "react";
import { REDUCE_MOTION } from "../lib/theme";

// Lightweight scroll-triggered fade, rising up or sliding in from either
// side. The hidden state lives in CSS (globals.css, gated on the `js`
// class index.html adds), so prerendered HTML is fully visible to
// crawlers and to anyone without JavaScript.
export default function Reveal({ children, delay = 0, from = "up", className = "" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (REDUCE_MOTION || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
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
      data-reveal={from}
      data-shown={shown ? "" : undefined}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
