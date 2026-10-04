import { BadgeCheck, Users, Wallet, History, Anchor, Home, MapPin } from "lucide-react";
import { C } from "../lib/theme";

const EVIDENCE = [
  { label: "Identity & right to rent", icon: BadgeCheck, done: true },
  { label: "Income proof", icon: Wallet, done: true },
  { label: "References", icon: Users, done: true },
  { label: "Track record", icon: History, done: false },
  { label: "Commitment", icon: Anchor, done: false },
];

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

function ProfileScreen() {
  return (
    <div className="h-full flex flex-col">
      <div className="px-4 pt-10 pb-5" style={{ backgroundColor: C.verified, color: C.paper }}>
        <div className="text-[10px] font-bold uppercase tracking-[0.18em] opacity-80">Trust profile</div>
        <div className="text-lg font-extrabold mt-1">Amara O.</div>
        <div className="mt-3 flex items-center gap-2">
          <div className="flex-1 h-2 rounded-full" style={{ backgroundColor: "rgba(238,240,234,0.25)" }}>
            <div className="h-full w-3/5 rounded-full" style={{ backgroundColor: C.paper }} />
          </div>
          <span className="text-[11px] font-bold">Good</span>
        </div>
      </div>
      <div className="flex-1 px-3 py-3 flex flex-col gap-2">
        {EVIDENCE.map(({ label, icon: Icon, done }) => (
          <div key={label} className="flex items-center gap-2.5 rounded-xl px-3 py-2.5" style={{ backgroundColor: C.cream }}>
            <Icon size={14} style={{ color: done ? C.verified : C.kraftDark }} />
            <span className="flex-1 text-[11px] font-semibold" style={{ color: C.ink }}>
              {label}
            </span>
            <span
              className="w-4 h-4 rounded-full"
              style={done ? { backgroundColor: C.verified } : { boxShadow: `inset 0 0 0 1.5px ${C.kraftDark}` }}
            />
          </div>
        ))}
        <div className="mt-auto rounded-xl py-2.5 text-center text-[11px] font-bold" style={{ backgroundColor: C.rust, color: C.paper }}>
          Add evidence
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

// Two overlapping app screens on a warm backdrop circle — the hero's
// product shot, drawn in CSS so it stays on-palette.
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
          <ProfileScreen />
        </Frame>
      </div>
    </div>
  );
}
