import { C } from "../lib/theme";
import { VALUE_POINTS } from "../data/content";
import Reveal from "../components/Reveal";
import EvidenceBoard from "../components/EvidenceBoard";
import Eyebrow from "../components/Eyebrow";
import PageHeading from "../components/PageHeading";
import Card from "../components/Card";
import FormPanel from "../components/FormPanel";
import WaitlistForm from "../components/WaitlistForm";

export default function Renters() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
      <Reveal>
        <Eyebrow>For renters</Eyebrow>
        <PageHeading className="mb-5">Build your file once. Use it everywhere.</PageHeading>
          <p className="text-base sm:text-lg leading-relaxed mb-10 max-w-2xl" style={{ color: "#3E4744" }}>
          No more re-submitting references and payslips for every single
          application. Leri gives you one evidence-based profile that travels
          with you, and it's built to work even if you don't fit the mould of
          a "standard" applicant.
        </p>
      </Reveal>

      <div className="grid sm:grid-cols-3 gap-5 mb-14">
        {VALUE_POINTS.map((v, i) => (
          <Reveal key={v.title} delay={i * 0.1} className="h-full">
            <Card>
              <div className="text-sm font-extrabold mb-4" style={{ color: C.rust }}>
                0{i + 1}
              </div>
              <h3 className="font-bold text-lg mb-2" style={{ color: C.ink }}>
                {v.title}
              </h3>
              <p className="text-[15px] leading-7" style={{ color: "#4B534F" }}>
                {v.desc}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-8 items-center mb-16">
        <Reveal from="left">
          <h3 className="text-3xl font-extrabold uppercase mb-4" style={{ color: C.ink }}>
            You don't need every item.
          </h3>
          <p className="text-[15px] leading-7 mb-4" style={{ color: "#4B534F" }}>
            Add whatever credible evidence fits your situation; there's no
            single required document. Your profile reflects what you've
            provided with a clear confidence level, never a single pass/fail
            number.
          </p>
          <p className="text-[15px] leading-7" style={{ color: "#4B534F" }}>
            Every completed tenancy adds to your history, so your trust
            profile only gets stronger the more you rent.
          </p>
        </Reveal>
        <Reveal from="right" delay={0.15}>
          <EvidenceBoard />
        </Reveal>
      </div>

      <Reveal>
        <FormPanel
          title="Ready when you are."
          body="Join the renter waitlist and we'll let you know as soon as you can start building your profile."
        >
          <WaitlistForm />
        </FormPanel>
      </Reveal>
    </section>
  );
}
