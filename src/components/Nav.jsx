import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { C } from "../lib/theme";
import { NAV } from "../data/nav";
import Button from "./Button";

// Glass sticky header with a sliding active-tab pill (measured via refs
// and animated with CSS transitions).
export default function Nav({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  const tabRefs = useRef({});
  const [pill, setPill] = useState({ left: 0, width: 0, opacity: 0 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useLayoutEffect(() => {
    const el = tabRefs.current[page];
    if (el) setPill({ left: el.offsetLeft, width: el.offsetWidth, opacity: 1 });
    else setPill((p) => ({ ...p, opacity: 0 }));
  }, [page]);

  return (
    <header
      className="sticky top-0 z-30 transition-shadow duration-300"
      style={{
        backgroundColor: "rgba(238,240,234,0.82)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        boxShadow: scrolled ? "0 4px 24px -12px rgba(28,35,33,0.25)" : "none",
        borderBottom: `1px solid ${scrolled ? C.line : "transparent"}`,
      }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-4">
        <div className="flex items-center justify-between mb-3">
          <button onClick={() => setPage("home")} className="flex items-baseline gap-1 group">
            <span
              className="text-2xl font-semibold transition-transform duration-300 group-hover:-translate-y-0.5 inline-block"
              style={{ fontFamily: "'Fraunces', serif", color: C.ink }}
            >
              Ilé
            </span>
            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: C.rust }} />
          </button>
          <div className="hidden sm:block">
            <Button variant="primary" icon={false} onClick={() => setPage("waitlist")}>
              Join the waitlist
            </Button>
          </div>
        </div>

        <nav className="relative flex gap-1 overflow-x-auto">
          <div
            className="absolute top-0 bottom-0 rounded-lg transition-all duration-400 ease-out"
            style={{
              left: pill.left,
              width: pill.width,
              opacity: pill.opacity,
              backgroundColor: C.ink,
              transitionTimingFunction: "cubic-bezier(.22,1,.36,1)",
            }}
          />
          {NAV.map((n) => {
            const active = page === n.key;
            const Icon = n.icon;
            return (
              <button
                key={n.key}
                ref={(el) => (tabRefs.current[n.key] = el)}
                onClick={() => setPage(n.key)}
                className="relative z-10 flex items-center gap-2 px-4 py-2.5 rounded-lg font-mono text-xs uppercase tracking-wide whitespace-nowrap transition-colors duration-300"
                style={{ color: active ? C.paper : C.slate }}
              >
                <Icon size={13} />
                {n.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
