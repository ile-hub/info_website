import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { C } from "../lib/theme";
import { NAV } from "../data/nav";
import Button from "./Button";

// Single-row sticky header: logo, inline links, CTA. Links collapse into
// a dropdown menu on small screens.
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-30 transition-shadow duration-300"
      style={{
        backgroundColor: C.paper,
        boxShadow: scrolled ? "0 6px 30px -12px rgba(28,35,33,0.25)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-baseline gap-1 group" aria-label="Leri home">
          <span
            className="text-3xl font-black tracking-tight transition-transform duration-300 group-hover:-translate-y-0.5 inline-block"
            style={{ color: C.ink }}
          >
            Leri
          </span>
          <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: C.rust }} />
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main">
          {NAV.map((n) => (
            <NavLink
              key={n.key}
              to={n.path}
              end
              className="relative py-1 text-[15px] font-semibold whitespace-nowrap transition-colors duration-300 hover:opacity-100"
              style={({ isActive }) => ({ color: isActive ? C.rust : C.ink, opacity: isActive ? 1 : 0.85 })}
            >
              {({ isActive }) => (
                <>
                  {n.label}
                  <span
                    className="absolute left-0 -bottom-0.5 h-0.5 rounded-full transition-all duration-300"
                    style={{ width: isActive ? "100%" : 0, backgroundColor: C.rust }}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <Button to="/waitlist" className="!px-6 !py-3 text-[15px]">
              Join the waitlist
            </Button>
          </div>
          <button
            className="md:hidden p-2 rounded-lg"
            style={{ color: C.ink }}
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-5 pb-5" style={{ backgroundColor: C.paper }}>
          <div className="flex flex-col rounded-2xl overflow-hidden" style={{ backgroundColor: C.ink }}>
            {[...NAV, { key: "waitlist", label: "Join the waitlist", path: "/waitlist" }].map((n) => (
              <NavLink
                key={n.key}
                to={n.path}
                end
                className="text-left px-5 py-3.5 font-semibold border-b last:border-b-0"
                style={({ isActive }) => ({ color: isActive ? C.kraft : C.paper, borderColor: "#2E3634" })}
              >
                {n.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
