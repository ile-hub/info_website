import { C } from "../lib/theme";
import { HOW_STEPS } from "../data/content";
import Reveal from "../components/Reveal";
import EvidenceBoard from "../components/EvidenceBoard";
import Eyebrow from "../components/Eyebrow";
import PageHeading from "../components/PageHeading";
import Button from "../components/Button";

export default function HowItWorks({ setPage }) {
  return (
    <section className="max-w-5xl mx-auto px-5 sm:px-8 py-16">
      <Reveal>
        <Eyebrow>How it works</Eyebrow>
        <PageHeading className="mb-12">From first evidence to a portable trust history.</PageHeading>
      </Reveal>

      <div className="flex flex-col gap-0">
        {HOW_STEPS.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.06}>
            <div className="flex gap-5 sm:gap-8 pb-10 relative">
              {i < HOW_STEPS.length - 1 && (
                <div className="absolute left-[19px] top-10 bottom-0 w-px" style={{ backgroundColor: C.line }} />
              )}
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs font-semibold z-10"
                style={{ color: C.rust, backgroundColor: C.paper, boxShadow: `inset 0 0 0 2px ${C.rust}` }}
              >
                {i + 1}
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1" style={{ fontFamily: "'Fraunces', serif", color: C.ink }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed max-w-xl" style={{ color: "#4B534F" }}>
                  {s.body}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-6 flex justify-center">
          <EvidenceBoard />
        </div>
      </Reveal>

      <div className="mt-10 flex justify-center">
        <Button onClick={() => setPage("renters")}>Start as a renter</Button>
      </div>
    </section>
  );
}
