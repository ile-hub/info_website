import { ShieldCheck } from "lucide-react";
import { C } from "../lib/theme";
import { VALUE_POINTS, PROBLEM_POINTS } from "../data/content";
import Reveal from "../components/Reveal";
import AmbientGlow from "../components/AmbientGlow";
import EvidenceBoard from "../components/EvidenceBoard";
import TornDivider from "../components/TornDivider";
import Eyebrow from "../components/Eyebrow";
import SectionTitle from "../components/SectionTitle";
import Stamp from "../components/Stamp";
import Button from "../components/Button";
import Card from "../components/Card";
import WaitlistForm from "../components/WaitlistForm";

export default function Home({ setPage }) {
  return (
    <>
      <section className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-10 sm:pt-14 pb-14 grid sm:grid-cols-2 gap-10 items-center">
        <AmbientGlow />
        <Reveal className="relative z-10">
          <div className="font-mono text-[11px] tracking-widest mb-3" style={{ color: C.slate }}>
            FILE REF - ILÉ / TRUST-01
          </div>
          <h1
            className="font-semibold mb-6"
            style={{
              fontFamily: "'Fraunces', serif",
              color: C.ink,
              fontSize: "clamp(2.4rem, 5vw, 3.4rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.015em",
            }}
          >
            Rented trust shouldn't start from zero every time.
          </h1>
          <p className="text-base sm:text-lg leading-relaxed mb-8" style={{ color: "#3E4744" }}>
            Ilé lets renters pin up real evidence and build one verified
            profile that travels with them everywhere they apply. Landlords
            see the whole board, not just a credit check.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button onClick={() => setPage("renters")}>I'm renting</Button>
            <Button variant="ghost" onClick={() => setPage("landlords")}>
              I'm a landlord
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.15} className="relative z-10">
          <EvidenceBoard />
        </Reveal>
      </section>

      <TornDivider />

      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid sm:grid-cols-3 gap-6">
          {PROBLEM_POINTS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <Card>
                <h3 className="font-semibold text-lg mb-2" style={{ fontFamily: "'Fraunces', serif", color: C.ink }}>
                  {c.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4B534F" }}>
                  {c.body}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: C.ink }} className="py-16">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal>
            <Eyebrow>What makes a profile</Eyebrow>
            <SectionTitle light>Built from real evidence, not a guess</SectionTitle>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            {VALUE_POINTS.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <Card dark>
                  <div className="font-mono text-[11px] tracking-widest mb-3" style={{ color: C.rust }}>
                    0{i + 1}
                  </div>
                  <h4 className="font-semibold mb-2" style={{ fontFamily: "'Fraunces', serif", color: C.paper }}>
                    {v.title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: C.kraft }}>
                    {v.desc}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <div className="mt-8">
              <Button variant="primary" onClick={() => setPage("how")}>
                See how it works
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      

      <section className="max-w-4xl mx-auto px-5 sm:px-8 pb-20 pt-20">
        <Reveal>
          <div
            className="rounded-2xl p-8 sm:p-10"
            style={{ backgroundColor: C.cream, boxShadow: `inset 0 0 0 1px ${C.line}, 0 20px 40px -24px rgba(28,35,33,0.25)` }}
          >
            <Stamp>Early access</Stamp>
            <h3 className="text-2xl font-semibold mt-4 mb-2" style={{ fontFamily: "'Fraunces', serif", color: C.ink }}>
              Be first in when we open access.
            </h3>
            <p className="text-sm mb-6" style={{ color: "#4B534F" }}>
              We're onboarding renters and landlords in stages. Join the list
              and we'll reach out as your spot opens up.
            </p>
            <WaitlistForm />
          </div>
        </Reveal>
      </section>
    </>
  );
}
