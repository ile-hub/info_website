import { C } from "../lib/theme";
import { HOW_STEPS } from "../data/content";
import Reveal from "../components/Reveal";
import EvidenceBoard from "../components/EvidenceBoard";
import Eyebrow from "../components/Eyebrow";
import PageHeading from "../components/PageHeading";
import Button from "../components/Button";
import Card from "../components/Card";

export default function HowItWorks() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
      <Reveal>
        <Eyebrow>How it works</Eyebrow>
        <PageHeading className="mb-12">From first evidence to a portable trust history.</PageHeading>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {HOW_STEPS.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.06} className="h-full">
            <Card>
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-lg font-extrabold"
                style={{ color: C.paper, backgroundColor: C.rust }}
              >
                {i + 1}
              </div>
              <h3 className="font-bold text-xl mt-6 mb-2" style={{ color: C.ink }}>
                {s.title}
              </h3>
              <p className="text-[15px] leading-7" style={{ color: "#4B534F" }}>
                {s.body}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="max-w-3xl mx-auto">
          <EvidenceBoard />
        </div>
      </Reveal>

      <div className="mt-10 flex justify-center">
        <Button to="/renters">Start as a renter</Button>
      </div>
    </section>
  );
}
