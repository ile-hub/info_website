import { BadgeCheck, Users, Wallet, History, Home, MapPin } from "lucide-react";
import { C } from "../lib/theme";

// Landlord's shortlist for one listing. Initials only, no real people.
const APPLICANTS = [
  { initials: "JK", trust: "Strong", fit: "94%", evidence: [true, true, true, true] },
  { initials: "SM", trust: "Good", fit: "88%", evidence: [true, true, true, false] },
  { initials: "TA", trust: "Good", fit: "81%", evidence: [true, true, false, true] },
];
const EVIDENCE_ICONS = [BadgeCheck, Wallet, Users, History];

const MATCHES = [
  { area: "Peckham, SE15", rooms: "2 bed flat", fit: "94%" },
  { area: "Leyton, E10", rooms: "1 bed flat", fit: "89%" },
  { area: "Brixton, SW2", rooms: "Room in house", fit: "82%" },
];

function Frame({ children, className = "", style = {} }) {
  return (
    <div
      className={`relative w-[230px] sm:w-[250px] aspect-[9/19] rounded-[38px] p-2.5 ${className}`}
      style={{ backgroundColor: C.ink, boxShadow: "0 30px 60px -20px rgba(28,35,33,0.45)", ...style }}
    >
      <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full z-10" style={{ backgroundColor: C.ink }} />
      <div className="w-full h-full rounded-[30px] overflow-hidden" style={{ backgroundColor: C.paper }}>
        {children}
      </div>
    </div>
  );
}

function ApplicantsScreen() {
  return (
    <div className="h-full flex flex-col">
      <div className="px-4 pt-10 pb-4" style={{ backgroundColor: C.verified, color: C.paper }}>
        <div className="text-[10px] font-bold uppercase tracking-[0.18em] opacity-80">Your listing</div>
        <div className="text-lg font-extrabold mt-1 leading-tight">2 bed flat, SE15</div>
        <div className="mt-2 text-[11px] font-semibold opacity-90">3 applicants shortlisted</div>
      </div>
      <div className="flex-1 px-3 py-3 flex flex-col gap-2">
        {APPLICANTS.map((a) => (
          <div key={a.initials} className="rounded-xl px-3 py-3" style={{ backgroundColor: C.cream }}>
            <div className="flex items-center gap-2.5">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-extrabold flex-shrink-0"
                style={{ backgroundColor: C.kraft, color: C.ink }}
              >
                {a.initials}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-bold" style={{ color: C.ink }}>
                  Trust: {a.trust}
                </div>
                <div className="flex items-center gap-1 mt-1">
                  {EVIDENCE_ICONS.map((Icon, i) => (
                    <Icon key={i} size={11} style={{ color: a.evidence[i] ? C.verified : C.kraftDark }} />
                  ))}
                  <span className="text-[9px] font-semibold ml-0.5 whitespace-nowrap" style={{ color: C.slate }}>
                    {a.evidence.filter(Boolean).length}/4 verified
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-[13px] font-extrabold leading-none" style={{ color: C.verified }}>
                  {a.fit}
                </div>
                <div className="text-[9px] font-semibold mt-0.5" style={{ color: C.slate }}>
                  fit
                </div>
              </div>
            </div>
          </div>
        ))}
        <div
          className="flex items-start gap-2 rounded-xl px-3 py-2.5 text-[10px] font-semibold leading-snug"
          style={{ boxShadow: `inset 0 0 0 1px ${C.line}`, color: C.slate }}
        >
          <BadgeCheck size={13} className="flex-shrink-0 mt-px" style={{ color: C.verified }} />
          Every applicant has a verified ID and right to rent.
        </div>
        <div className="mt-auto rounded-xl py-2.5 text-center text-[11px] font-bold" style={{ backgroundColor: C.rust, color: C.paper }}>
          Book viewings
        </div>
      </div>
    </div>
  );
}

function MatchesScreen() {
  return (
    <div className="h-full flex flex-col px-3 pt-10">
      <div className="px-1 text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: C.rust }}>
        Your matches
      </div>
      <div className="px-1 text-lg font-extrabold mb-3" style={{ color: C.ink }}>
        Homes that fit
      </div>
      <div className="flex flex-col gap-2.5">
        {MATCHES.map((m) => (
          <div key={m.area} className="rounded-xl overflow-hidden" style={{ backgroundColor: C.cream }}>
            <div className="h-14 flex items-center justify-center" style={{ backgroundColor: C.kraft }}>
              <Home size={20} style={{ color: C.kraftDark }} />
            </div>
            <div className="px-3 py-2 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1 text-[11px] font-bold" style={{ color: C.ink }}>
                  <MapPin size={10} />
                  {m.area}
                </div>
                <div className="text-[10px]" style={{ color: C.slate }}>
                  {m.rooms}
                </div>
              </div>
              <span className="text-[10px] font-bold rounded-full px-2 py-0.5" style={{ backgroundColor: C.verified, color: C.paper }}>
                {m.fit}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Two overlapping app screens on a warm backdrop circle (a renter's
// matches behind, a landlord's shortlist in front), drawn in CSS so it
// stays on-palette.
export default function PhoneMockup() {
  return (
    <div className="relative flex justify-center items-center py-6 min-h-[480px] sm:min-h-[560px]">
      <div
        className="absolute w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] rounded-full"
        style={{ backgroundColor: C.kraft }}
        aria-hidden="true"
      />
      <div className="relative flex items-center" aria-hidden="true">
        <Frame className="hidden sm:block -mr-16 mt-16 rotate-[-6deg] scale-90">
          <MatchesScreen />
        </Frame>
        <Frame className="rotate-[3deg]">
          <ApplicantsScreen />
        </Frame>
      </div>
    </div>
  );
}
