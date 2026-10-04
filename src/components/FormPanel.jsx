import { C } from "../lib/theme";

// Big rounded colour block used to frame a WaitlistForm with a centered
// heading, so pages don't repeat the same wrapper styling.
export default function FormPanel({ title, body, children }) {
  return (
    <div
      className="rounded-[36px] sm:rounded-[60px] px-6 py-12 sm:px-[8%] sm:py-16 text-center"
      style={{ backgroundColor: C.kraft }}
    >
      {title && (
        <h3
          className="font-extrabold uppercase leading-tight mb-3"
          style={{ color: C.ink, fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
        >
          {title}
        </h3>
      )}
      {body && (
        <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: C.ink }}>
          {body}
        </p>
      )}
      <div className="max-w-2xl mx-auto text-left">{children}</div>
    </div>
  );
}
