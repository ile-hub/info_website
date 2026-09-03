import { C } from "../lib/theme";

// Shared rounded panel used to frame a WaitlistForm with a heading,
// so pages don't repeat the same wrapper styling.
export default function FormPanel({ title, body, children }) {
  return (
    <div
      className="rounded-2xl p-8"
      style={{ backgroundColor: C.cream, boxShadow: `inset 0 0 0 1px ${C.line}, 0 20px 40px -24px rgba(28,35,33,0.25)` }}
    >
      {title && (
        <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Fraunces', serif", color: C.ink }}>
          {title}
        </h3>
      )}
      {body && (
        <p className="text-sm mb-6" style={{ color: "#4B534F" }}>
          {body}
        </p>
      )}
      {children}
    </div>
  );
}
