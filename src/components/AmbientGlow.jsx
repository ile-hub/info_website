import { C, REDUCE_MOTION } from "../lib/theme";

// Soft ambient light behind hero content — a modern glow instead of a
// heavy paper texture, while keeping brand color underneath.
export default function AmbientGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className="absolute rounded-full"
        style={{
          width: 420,
          height: 420,
          top: -140,
          right: -100,
          background: `radial-gradient(circle, ${C.rust}33 0%, transparent 70%)`,
          filter: "blur(40px)",
          animation: REDUCE_MOTION ? "none" : "ile-blob-drift 14s ease-in-out infinite",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 360,
          height: 360,
          bottom: -160,
          left: -120,
          background: `radial-gradient(circle, ${C.verified}2b 0%, transparent 70%)`,
          filter: "blur(40px)",
          animation: REDUCE_MOTION ? "none" : "ile-blob-drift 18s ease-in-out infinite reverse",
        }}
      />
    </div>
  );
}
