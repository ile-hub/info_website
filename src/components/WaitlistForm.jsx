import { useState } from "react";
import { Check } from "lucide-react";
import { C, REDUCE_MOTION } from "../lib/theme";

// Local state only — not wired to a backend yet. Swap handleSubmit for
// a real API call / email-capture service before this goes live.
export default function WaitlistForm() {
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
        className="rounded-xl px-8 py-10 text-center"
        style={{
          backgroundColor: C.verified,
          color: C.paper,
          animation: REDUCE_MOTION ? "none" : "leri-fade-up 0.5s ease-out",
        }}
      >
        <div
          className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
          style={{ backgroundColor: C.paper, color: C.verified }}
        >
          <Check size={24} strokeWidth={3} />
        </div>
        <div className="text-2xl font-extrabold uppercase mb-2">You're on the list.</div>
        <div className="text-base leading-relaxed">We'll email {email} as soon as your spot opens up.</div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-3 mb-3">
        {["renter", "landlord"].map((r) => (
          <button
            type="button"
            key={r}
            onClick={() => setRole(r)}
            className="h-[62px] rounded-xl font-semibold text-base transition-all duration-300"
            style={
              role === r
                ? { backgroundColor: C.ink, color: C.paper, boxShadow: `inset 0 0 0 1px ${C.ink}` }
                : { backgroundColor: C.cream, color: C.ink, boxShadow: `inset 0 0 0 1px ${C.ink}` }
            }
            aria-pressed={role === r}
          >
            I'm a {r}
          </button>
        ))}
      </div>
      <input
        type="email"
        required
        placeholder="Your email address"
        aria-label="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full h-[62px] px-7 mb-4 rounded-xl text-base outline-none transition-shadow duration-300 focus:shadow-[0_0_0_3px_rgba(181,80,46,0.35)]"
        style={{ backgroundColor: C.cream, color: C.ink, border: `1px solid ${C.ink}` }}
      />
      <div className="flex justify-center">
        <button
          type="submit"
          className="px-14 py-4 rounded-xl font-semibold text-lg transition-all duration-500 ease-in-out hover:-translate-y-0.5 hover:brightness-110"
          style={{ backgroundColor: C.rust, color: C.paper }}
        >
          Join the waitlist
        </button>
      </div>
    </form>
  );
}
