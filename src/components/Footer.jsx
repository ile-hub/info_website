import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { C } from "../lib/theme";
import { NAV } from "../data/nav";
import Button from "./Button";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: C.ink }} className="mt-24 rounded-t-[36px] sm:rounded-t-[60px]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-12 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-baseline gap-1 mb-4">
            <span className="text-4xl font-black tracking-tight" style={{ color: C.paper }}>
              Leri
            </span>
            <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: C.rust }} />
          </div>
          <p className="text-[15px] leading-7 max-w-sm" style={{ color: C.kraft }}>
            A trust and compatibility platform for renting, built so people
            don't have to start from zero every time they move.
          </p>
        </div>
        <div>
          <div className="text-sm font-bold uppercase tracking-[0.18em] mb-4" style={{ color: C.paper }}>
            Explore
          </div>
          <div className="flex flex-col gap-3 text-[15px]">
            {NAV.map((n) => (
              <Link
                key={n.key}
                to={n.path}
                className="w-fit transition-colors duration-300 hover:text-[#B5502E]"
                style={{ color: C.kraft }}
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="text-sm font-bold uppercase tracking-[0.18em] mb-4" style={{ color: C.paper }}>
            Contact us
          </div>
          <a
            href="mailto:hello@leri.app"
            className="inline-flex items-center gap-2 text-[15px] transition-colors duration-300 hover:text-[#B5502E]"
            style={{ color: C.kraft }}
          >
            <Mail size={16} />
            hello@leri.app
          </a>
          <div className="mt-6">
            <Button to="/waitlist">Join the waitlist</Button>
          </div>
        </div>
      </div>
      <div
        className="max-w-7xl mx-auto px-5 sm:px-8 py-6 border-t text-sm flex flex-col sm:flex-row gap-2 justify-between"
        style={{ color: C.kraftDark, borderColor: "#2E3634" }}
      >
        <span>
          © <span suppressHydrationWarning>{new Date().getFullYear()}</span> Leri. All rights reserved. ·{" "}
          <Link to="/privacy" className="underline underline-offset-2 transition-colors duration-300 hover:text-[#B5502E]">
            Privacy
          </Link>
        </span>
        <span>A social enterprise reimagining trust in renting.</span>
      </div>
    </footer>
  );
}
