import { C } from "../lib/theme";
import { NAV } from "../data/nav";
import Button from "./Button";

export default function Footer({ setPage }) {
  return (
    <footer style={{ backgroundColor: C.ink }} className="mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14 grid sm:grid-cols-3 gap-10">
        <div>
          <div className="text-2xl font-semibold mb-3" style={{ fontFamily: "'Fraunces', serif", color: C.paper }}>
            Ilé
          </div>
          <p className="text-sm leading-relaxed" style={{ color: C.kraft }}>
            A trust and compatibility platform for renting, built so people
            don't have to start from zero every time they move.
          </p>
        </div>
        <div>
          <div className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: C.kraft }}>
            Explore
          </div>
          <div className="flex flex-col gap-2 text-sm">
            {NAV.map((n) => (
              <button
                key={n.key}
                onClick={() => setPage(n.key)}
                className="text-left hover:underline w-fit transition-opacity hover:opacity-80"
                style={{ color: C.paper }}
              >
                {n.label}
              </button>
            ))}
          </div>
        </div>
        <div>
          <div className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: C.kraft }}>
            Get in touch
          </div>
          <p className="text-sm" style={{ color: C.paper }}>
            hello@ile.house
          </p>
          <div className="mt-4">
            <Button variant="ghost" icon={false} onClick={() => setPage("waitlist")}>
              <span style={{ color: C.paper }}>Join waitlist</span>
            </Button>
          </div>
        </div>
      </div>
      <div
        className="text-center font-mono text-[11px] py-5 border-t"
        style={{ color: C.kraftDark, borderColor: "#2E3634" }}
      >
        Ilé: a social enterprise reimagining trust in renting.
      </div>
    </footer>
  );
}
