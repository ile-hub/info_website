import { useState, useEffect } from "react";

// A quick, quiet cross-fade whenever the visible page changes, so
// navigation feels like a single continuous surface rather than a
// hard cut.
export default function PageFade({ pageKey, children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(false);
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(raf);
  }, [pageKey]);

  return (
    <div
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(10px)",
        transition: "opacity 0.45s ease-out, transform 0.45s ease-out",
      }}
    >
      {children}
    </div>
  );
}
