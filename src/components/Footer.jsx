import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";
import { C } from "../lib/theme";
import { NAV } from "../data/nav";
import Button from "./Button";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: C.ink }} className="mt-24 rounded-t-[36px] sm:rounded-t-[60px]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-12 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link
            to="/"
            aria-label="Leri home"
            className="inline-flex mb-4"
          >
            <Logo
              src="/Pristine_Leri_Logo.png"
              size={96}
              className="h-24 w-24 object-contain"
            />
          </Link>
          <p className="text-[15px] leading-7 max-w-sm" style={{ color: C.kraft }}>
            Your space for better matches, meaningful connections and a simpler way to rent.
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
                className="w-fit transition-colors duration-300 hover:text-[#D5E5DA]"
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
            className="inline-flex items-center gap-2 text-[15px] transition-colors duration-300 hover:text-[#D5E5DA]"
            style={{ color: C.kraft }}
          >
            <Mail size={16} />
            hello@leri.app
          </a>
          <div className="mt-5">
            <a
              href="https://www.instagram.com/leri.app?obrf=MWRkODFqYTIwbTV4dQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[15px] transition-opacity hover:opacity-80"
              style={{ color: C.kraft }}
            >
              <Instagram size={18} aria-hidden="true" />
              Instagram
            </a>
          </div>
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
          <Link to="/privacy" className="underline underline-offset-2 transition-colors duration-300 hover:text-[#D5E5DA]">
            Privacy
          </Link>
        </span>
        <span>A social enterprise reimagining trust in renting.</span>
      </div>
    </footer>
  );
}
