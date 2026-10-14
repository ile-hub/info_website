import { BadgeCheck, BedDouble, CalendarDays, Clock, Home, MapPin, PawPrint, Briefcase, Users, Wallet, FileText, Handshake } from "lucide-react";
import { C } from "../lib/theme";
import Logo from "./Logo";

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

function AppHeader() {
  return <div className="px-3 pt-8 pb-1"><Logo size={48} className="w-12 h-12" /></div>;
}
function Avatar({ initials, label }) {
  return <div className="text-center"><div className={`phone-avatar phone-avatar-${initials} w-12 h-12 rounded-full mx-auto`} role="img" aria-label={label} /><div className="text-[10px] font-bold mt-1">{label}</div></div>;
}
function ConnectionScreen() {
  return (
    <div className="h-full flex flex-col" style={{ color: C.ink }}>
      <AppHeader />
      <div className="px-3 py-2 text-center">
        <h3 className="text-lg font-extrabold">You’re connected!</h3>
        <p className="text-[10px] mt-1">Alex thinks you’re a great fit<br />for this property.</p>
        <div className="flex items-center justify-between my-3"><Avatar initials="JK" label="Jamie K." /><Handshake size={24} style={{ color: C.verified }} /><Avatar initials="AR" label="Alex R." /></div>
        <div className="flex justify-between text-[9px] px-3 -mt-2"><span>Renter</span><span>Landlord</span></div>
      </div>
      <div className="mx-3 rounded-xl overflow-hidden" style={{ backgroundColor: C.cream }}>
        <div className="phone-property-photo h-20" role="img" aria-label="Bright living room in a Finnieston flat" />
        <div className="p-2"><h3 className="text-xs font-bold">2 bed flat in Finnieston</h3><p className="text-[10px] mt-1">£950 pcm</p><div className="flex justify-between text-[8px] mt-2"><span>2 beds</span><span>Glasgow</span><span>From 1 June</span></div></div>
      </div>
      <p className="mx-3 my-2 p-2 rounded-xl text-[9px] leading-snug" style={{ backgroundColor: C.kraft }}>Alex thinks you’re a great fit because your lifestyle, preferences and values align with this property.</p>
      <div className="mx-3 mt-auto mb-2 py-2 rounded-full text-center text-[10px] font-bold" style={{ backgroundColor: C.verified, color: C.paper }}>View conversation</div>
      <div className="text-center text-[9px] font-semibold mb-4">View property details</div>
    </div>
  );
}
function RenterProfileScreen() {
  const preferences = [[BedDouble, "1–2 bed"], [Wallet, "Up to £1,000 pcm"], [CalendarDays, "From June"], [Clock, "Long-term"], [PawPrint, "Pet friendly"], [Briefcase, "Hybrid working"]];
  const evidence = [[Wallet, "Affordability", 3], [FileText, "Reliability", 2], [Users, "Community", 2], [Home, "Stability", 3]];
  return (
    <div className="h-full" style={{ color: C.ink }}>
      <AppHeader />
      <div className="px-3 pb-3">
        <h3 className="text-base font-extrabold mb-2">My rental profile</h3>
        <div className="rounded-xl p-2 flex items-center gap-2" style={{ backgroundColor: C.kraft }}>
          <div className="phone-avatar phone-avatar-profile w-16 h-16 rounded-full shrink-0" role="img" aria-label="Jamie K." />
          <div><div className="text-sm font-bold">Jamie K.</div><div className="text-[8px] flex items-center gap-1 mt-1"><MapPin size={10} />Looking in Glasgow</div><div className="flex items-center gap-1 text-[8px] mt-1"><BadgeCheck size={11} />Identity verified</div></div>
        </div>
        <div className="grid grid-cols-3 gap-1 my-2">{preferences.map(([Icon, text]) => <div key={text} className="flex items-center gap-1 rounded-md px-1 py-1.5 text-[7px] leading-tight" style={{ backgroundColor: C.cream }}><Icon size={12} className="shrink-0" />{text}</div>)}</div>
        <div className="rounded-xl p-2" style={{ backgroundColor: C.kraft }}>
          <h3 className="text-[11px] font-bold mb-1">Why I’ll make a great tenant</h3>
          <p className="text-[9px] leading-[1.4]">I believe where I live is my safe space, and I take good care of it. I’m self-employed and earn an average of £2,400 per month, with the financial flexibility to pay up to 6 months in advance.<br />I value open and honest communication with my landlord and always aim to be a respectful, reliable and considerate tenant.<br />I’m ideally looking for a flat with an ensuite bathroom, and I love the idea of a home with a bit of character.</p>
        </div>
        <h3 className="flex items-center gap-1 text-[10px] font-bold mt-2 mb-1"><BadgeCheck size={13} />My supporting evidence (ARCS)</h3>
        <div className="grid grid-cols-2 gap-1">{evidence.map(([Icon, label, count]) => <div key={label} className="flex items-center gap-1.5 rounded-lg p-1.5" style={{ backgroundColor: C.cream }}><Icon size={18} style={{ color: C.verified }} /><div><div className="text-[8px] font-bold">{label}</div><div className="text-[7px] mt-0.5" style={{ color: C.verified }}>✓ {count} items</div></div></div>)}</div>
      </div>
    </div>
  );
}

// Two overlapping app screens on a warm backdrop circle (a renter’s
// profile behind, a landlord’s viewing conversation in front), drawn in CSS so it
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
          <ConnectionScreen />
        </Frame>
        <Frame className="rotate-[3deg]">
          <RenterProfileScreen />
        </Frame>
      </div>
    </div>
  );
}
