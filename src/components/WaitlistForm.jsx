import { useState } from "react";
import { Check, Mail } from "lucide-react";
import { C, REDUCE_MOTION } from "../lib/theme";

// Local state only — not wired to a backend yet. Swap handleSubmit for
// a real API call / email-capture service before this goes live.
export default function WaitlistForm({ compact }) {
  const [role, setRole] = useState("renter");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="rounded-lg p-5 flex items-start gap-3"
        style={{
          backgroundColor: "#EAF1EB",
          boxShadow: `inset 0 0 0 1.5px ${C.verified}`,
          animation: REDUCE_MOTION ? "none" : "ile-fade-up 0.5s ease-out",
        }}
      >
        <Check size={18} style={{ color: C.verified }} className="mt-0.5 flex-shrink-0" />
        <div>
          <div className="font-semibold text-sm" style={{ color: C.verifiedDeep }}>
            You're on the list.
          </div>
          <div className="text-sm mt-1" style={{ color: C.verifiedDeep }}>
            We'll email {email} as soon as your spot opens up.
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-xl p-5 ${compact ? "" : "sm:p-6"}`}
      style={{ backgroundColor: C.cream, boxShadow: `inset 0 0 0 1px ${C.line}` }}
    >
      <div className="flex gap-2 mb-4">
        {["renter", "landlord"].map((r) => (
          <button
            type="button"
            key={r}
            onClick={() => setRole(r)}
            className="flex-1 font-mono text-xs uppercase tracking-wide px-3 py-2 rounded-lg transition-all duration-300"
            style={
              role === r
                ? { backgroundColor: C.ink, color: C.paper, boxShadow: `inset 0 0 0 1px ${C.ink}` }
                : { backgroundColor: "transparent", color: C.ink, boxShadow: `inset 0 0 0 1px ${C.line}` }
            }
          >
            I'm a {r}
          </button>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
        <div
          className="flex items-center gap-2 flex-1 rounded-lg px-3 py-2 transition-shadow duration-300 focus-within:shadow-[0_0_0_2px_rgba(181,80,46,0.4)]"
          style={{ backgroundColor: C.paper, boxShadow: `inset 0 0 0 1px ${C.line}` }}
        >
          <Mail size={15} style={{ color: C.slate }} />
          <input
            type="email"
            required
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-transparent outline-none text-sm"
            style={{ color: C.ink }}
          />
        </div>
        <button
          type="submit"
          className="px-5 py-2 rounded-lg font-medium text-sm transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-lg"
          style={{ backgroundColor: C.rust, color: C.paper, boxShadow: "0 6px 16px -8px rgba(181,80,46,0.5)" }}
        >
          Join waitlist
        </button>
      </div>
    </form>
  );
}
