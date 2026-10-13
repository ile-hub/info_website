import { BadgeCheck, CalendarDays, CheckCheck, MapPin, Send } from "lucide-react";
import { C } from "../lib/theme";

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

function ViewingChatScreen() {
  const messages = [
    { role: "Landlord", text: "Hi Jamie! I'd love to show you the flat. Are you free for a viewing on Saturday?" },
    { role: "Renter", text: "Hi Alex, that sounds great! Would 11am work?" },
    { role: "Landlord", text: "Absolutely. I'll meet you at the entrance. Looking forward to meeting you!" },
    { role: "Renter", text: "Perfect, see you then. Thank you!" },
  ];
  return (
    <div className="h-full flex flex-col">
      <div className="px-4 pt-10 pb-3" style={{ backgroundColor: C.verified, color: C.paper }}>
        <div className="text-[9px] font-bold uppercase tracking-[0.16em] opacity-80">Your conversations</div>
        <div className="flex items-center gap-2 mt-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: C.kraft, color: C.ink }}>JK</div>
          <div><div className="text-sm font-bold">Jamie K.</div><div className="text-[10px] opacity-90">Renter · 2 bed flat, SE15</div></div>
        </div>
      </div>
      <div className="flex-1 px-3 py-3 flex flex-col gap-2">
        <div className="text-center text-[9px] mb-1" style={{ color: C.slate }}>Today</div>
        {messages.map((message, i) => (
          <div key={i} className={`max-w-[88%] rounded-2xl px-2.5 py-2 ${message.role === "Landlord" ? "self-end rounded-br-sm" : "self-start rounded-bl-sm"}`} style={{ backgroundColor: message.role === "Landlord" ? C.verified : C.cream, color: message.role === "Landlord" ? C.paper : C.ink }}>
            <div className="text-[8px] font-bold opacity-75 mb-0.5">{message.role}</div>
            <p className="text-[10px] leading-snug">{message.text}</p>
          </div>
        ))}
        <div className="flex items-center gap-2 rounded-xl px-2.5 py-2 mt-1" style={{ backgroundColor: C.kraft, color: C.verified }}>
          <CalendarDays size={16} className="shrink-0" />
          <div><div className="text-[10px] font-bold">Viewing confirmed</div><div className="text-[9px]">Saturday · 11:00 AM</div></div>
          <CheckCheck size={14} className="ml-auto shrink-0" />
        </div>
      </div>
      <div className="mx-3 mb-3 rounded-full px-3 py-2 flex items-center justify-between" style={{ backgroundColor: C.cream, color: C.slate }}>
        <span className="text-[10px]">Write a message…</span><Send size={13} style={{ color: C.verified }} />
      </div>
    </div>
  );
}

function RenterProfileScreen() {
  return (
    <div className="h-full flex flex-col">
      <div className="px-4 pt-10 pb-4" style={{ backgroundColor: C.kraft, color: C.ink }}>
        <div className="text-[9px] font-bold uppercase tracking-[0.16em]" style={{ color: C.verified }}>Renter profile</div>
        <div className="w-12 h-12 mt-3 mb-2 rounded-full flex items-center justify-center text-lg font-extrabold" style={{ backgroundColor: C.verified, color: C.paper }}>JK</div>
        <div className="text-lg font-extrabold">Jamie K.</div>
        <div className="flex items-center gap-1 text-[10px] mt-1"><MapPin size={10} />Looking in Scotland</div>
        <div className="flex items-center gap-1 text-[9px] font-semibold mt-2" style={{ color: C.verified }}><BadgeCheck size={12} />Identity verified</div>
      </div>
      <div className="px-3 py-3 flex flex-col gap-2.5" style={{ color: C.ink }}>
        <div className="rounded-xl p-3" style={{ backgroundColor: C.cream }}>
          <h3 className="text-[10px] font-bold mb-1">A little about me</h3>
          <p className="text-[10px] leading-relaxed">Designer, keen cook and considerate neighbour. Looking for somewhere to call home.</p>
        </div>

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
          <RenterProfileScreen />
        </Frame>
        <Frame className="rotate-[3deg]">
          <ViewingChatScreen />
        </Frame>
      </div>
    </div>
  );
}
