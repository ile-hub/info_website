import { BadgeCheck, Users, Wallet, History, Anchor } from "lucide-react";
import { C, REDUCE_MOTION } from "../lib/theme";
import { EVIDENCE_NODES } from "../data/content";

const ICONS = { Users, Wallet, History, Anchor };

// Signature element: The Evidence Board.
// A corkboard with pinned evidence cards, connected by string,
// converging on a sealed trust profile — investigation-board language
// repurposed warm and credible. Cards drift gently and strings draw
// themselves in on load, so the one illustration that carries the
// page's concept also carries its motion.
export default function EvidenceBoard() {
  const nodes = EVIDENCE_NODES;
  const center = { top: "38%", left: "38%" };

  const toXY = (n) => ({ x: (parseFloat(n.left) + 8) * 4, y: (parseFloat(n.top) + 8) * 3 });
  const centerXY = { x: (parseFloat(center.left) + 12) * 4, y: (parseFloat(center.top) + 10) * 3 };

  const floatKeyframes = nodes
    .map(
      (n) => `
    @keyframes leri-float-${n.key} {
      0%, 100% { transform: rotate(${n.rot}deg) translateY(0px); }
      50% { transform: rotate(${n.rot}deg) translateY(-7px); }
    }
  `
    )
    .join("\n");

  return (
    <div
      className="relative rounded-2xl overflow-hidden h-[340px] sm:h-[400px] shadow-xl"
      style={{
        backgroundColor: C.kraft,
        backgroundImage: `radial-gradient(rgba(28,35,33,0.10) 1px, transparent 1.4px), linear-gradient(160deg, ${C.kraft} 0%, ${C.kraftDark}55 100%)`,
        backgroundSize: "14px 14px, 100% 100%",
        boxShadow: `0 20px 50px -20px rgba(28,35,33,0.35), inset 0 0 0 1px ${C.kraftDark}66`,
      }}
    >
      <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        {nodes.map((n, i) => {
          const p1 = toXY(n);
          const midX = (p1.x + centerXY.x) / 2;
          const midY = (p1.y + centerXY.y) / 2 - 14;
          return (
            <path
              key={n.key}
              d={`M ${p1.x} ${p1.y} Q ${midX} ${midY} ${centerXY.x} ${centerXY.y}`}
              fill="none"
              stroke={C.rust}
              strokeWidth="1.6"
              strokeDasharray="500"
              strokeDashoffset={REDUCE_MOTION ? "0" : "500"}
              opacity="0.75"
              style={
                REDUCE_MOTION
                  ? {}
                  : { animation: `leri-string-draw 1.1s ease-out forwards`, animationDelay: `${0.15 + i * 0.08}s` }
              }
            />
          );
        })}
      </svg>

      {nodes.map((n, i) => {
        const Icon = ICONS[n.icon];
        return (
          <div
            key={n.key}
            className="absolute w-24 sm:w-28 rounded-md p-2.5"
            style={{
              top: n.top,
              left: n.left,
              backgroundColor: C.cream,
              boxShadow: "0 8px 20px -6px rgba(28,35,33,0.35)",
              transform: `rotate(${n.rot}deg)`,
              animation: REDUCE_MOTION ? "none" : `leri-float-${n.key} 4.5s ease-in-out infinite`,
              animationDelay: `${i * 0.35}s`,
            }}
          >
            <div
              className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full"
              style={{ backgroundColor: C.rust, boxShadow: "0 2px 4px rgba(0,0,0,0.35)" }}
            />
            <Icon size={15} style={{ color: C.slate }} className="mb-1.5" />
            <div className="font-mono text-[9px] uppercase tracking-wide leading-tight" style={{ color: C.ink }}>
              {n.label}
            </div>
          </div>
        );
      })}

      <div
        className="absolute w-28 sm:w-32 rounded-full flex flex-col items-center justify-center text-center"
        style={{
          top: center.top,
          left: center.left,
          height: "112px",
          backgroundColor: C.ink,
          boxShadow: `0 12px 28px -8px rgba(0,0,0,0.5), 0 0 0 3px ${C.rust}`,
        }}
      >
        <BadgeCheck size={20} style={{ color: C.paper }} className="mb-1" />
        <div className="font-mono text-[9px] uppercase tracking-widest leading-tight px-2" style={{ color: C.paper }}>
          Trust Profile
        </div>
      </div>

      <style>{floatKeyframes}</style>
    </div>
  );
}
