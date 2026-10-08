import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { C, REDUCE_MOTION } from "../lib/theme";
import { joinWaitlist } from "../lib/waitlist";

export default function WaitlistForm({ defaultRole = "renter" }) {
  const [role, setRole] = useState(defaultRole);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | done
  const [error, setError] = useState("");
  const submitted = status === "done";
  // Spam traps: bots tend to fill every field and submit instantly. If
  // either trap trips, show success without saving anything.
  const [trap, setTrap] = useState("");
  const startedAt = useRef(Date.now());

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || status === "sending") return;
    if (trap || Date.now() - startedAt.current < 1500) {
      setStatus("done");
      return;
    }
    setStatus("sending");
    setError("");
    try {
      await joinWaitlist({ email, role });
      setStatus("done");
    } catch (err) {
      setError(err.message);
      setStatus("idle");
    }
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
      <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
        <label>
          Leave this field empty
          <input type="text" name="company" tabIndex={-1} autoComplete="off" value={trap} onChange={(e) => setTrap(e.target.value)} />
        </label>
      </div>
      <input
        type="email"
        name="email"
        autoComplete="email"
        required
        placeholder="Your email address"
        aria-label="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full h-[62px] px-7 rounded-xl text-base outline-none transition-shadow duration-300 focus:shadow-[0_0_0_3px_rgba(181,80,46,0.35)]"
        style={{ backgroundColor: C.cream, color: C.ink, border: `1px solid ${C.ink}` }}
      />
      <div className="min-h-[28px] pt-1.5 text-sm font-medium" role="alert" style={{ color: C.rustDeep }}>
        {error}
      </div>
      <div className="flex justify-center mt-1">
        <button
          type="submit"
          disabled={status === "sending"}
          className="px-14 py-4 rounded-xl font-semibold text-lg transition-all duration-500 ease-in-out hover:-translate-y-0.5 hover:brightness-110 disabled:opacity-70 disabled:hover:translate-y-0"
          style={{ backgroundColor: C.rust, color: C.paper }}
        >
          {status === "sending" ? "Joining…" : "Join the waitlist"}
        </button>
      </div>
      <p className="mt-4 text-center text-xs" style={{ color: C.slate }}>
        We'll only email you about Leri's launch. Unsubscribe anytime. See our{" "}
        <Link to="/privacy" className="underline underline-offset-2">
          privacy notice
        </Link>
        .
      </p>
    </form>
  );
}
