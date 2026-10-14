import BrandDoodle from "../components/BrandDoodle";
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
        <div className="brand-heading-row">
          <div className="min-w-0 flex-1">
        <Eyebrow>For renters</Eyebrow>
        <PageHeading className="mb-5">Tired of applying for homes you never stood a chance of getting?</PageHeading>
          </div>
          <BrandDoodle variant="renters" />
        </div>
          <p className="text-base sm:text-lg leading-relaxed mb-2 max-w-6xl" style={{ color: "#3E4744" }}>
          Endless listings, rigid requirements, pointless viewings and unanswered applications. Renting shouldn't feel like a battlefield.
        </p>
        <p className="text-base sm:text-lg leading-relaxed mb-10 max-w-6xl" style={{ color: "#3E4744" }}>
          Leri helps you show your suitability beyond traditional checklists, find landlords whose expectations align with your circumstances and connect with confidence.
        </p>
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-5 mb-14">
        {VALUE_POINTS.map((v, i) => (
          <Reveal key={v.title} delay={i * 0.1} className="h-full">
            <Card className="flex gap-4">
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm"
                style={{ backgroundColor: C.verified, color: C.paper }}
              >
                {i + 1}
              </span>
              <div>
                <h3 className="font-bold mb-2" style={{ color: C.ink }}>
                  {v.title}
                </h3>
                <p className="text-[15px] leading-7" style={{ color: "#4B534F" }}>
                  {v.desc}
                </p>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-8 items-center mb-16">
        <Reveal from="left">
          <h3 className="text-3xl font-extrabold uppercase mb-4" style={{ color: C.ink }}>
            Build an undeniable profile .
          </h3>
          <p className="text-[15px] leading-7 mb-4" style={{ color: "#4B534F" }}>
            Add whatever credible evidence fits your situation; there's no
            rigid required document. Your profile reflects what you've
            provided with a clear confidence level.
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
        <section
          aria-labelledby="renter-promise-title"
          className="mb-16 promise-layout"
        >
          <div className="promise-photo-wrap">
            <img src="/pinky-promise.jpeg" alt="Two people linking pinky fingers in a promise" width="1280" height="1920" loading="lazy" className="promise-photo" />
          </div>
          <div className="promise-content">

          <div className="max-w-3xl mx-auto">
            <img
              src="/promise_logo.png"
              alt="Leri Promise"
              width="160"
              height="160"
              className="w-32 h-32 sm:w-40 sm:h-40 object-contain mx-auto mb-4"
            />
            <div className="text-center mb-8">
              <Eyebrow>The Leri Renter Promise</Eyebrow>
              <h2
                id="renter-promise-title"
                className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight max-w-xl mx-auto"
                style={{ color: C.verified }}
              >
                Be the reason they think differently.
              </h2>
            </div>
          </div>
          <div
            className="rounded-[32px] sm:rounded-[48px] px-6 py-10 sm:px-12 sm:py-14"
            style={{ backgroundColor: C.kraft }}
          >
            <div className="max-w-3xl mx-auto text-base sm:text-lg leading-relaxed space-y-5" style={{ color: C.ink }}>
              <p>
                We're challenging the rigid boxes and assumptions that cause capable
                renters to be overlooked. Because what looks like a risk on paper
                could actually be a missed opportunity for a great tenancy. But changing that narrative takes all of us.
              </p>
              <p
                className="rounded-r-2xl border-l-4 px-5 py-5 sm:px-6"
                style={{ backgroundColor: C.paper, borderColor: C.verified }}
              >
                <strong className="block mb-1" style={{ color: C.verified }}>Your commitment?</strong>
                Be honest, reliable, respectful and the kind of renter any landlord
                would happily recommend.
              </p>
              <p>
                Our success depends on showing that great tenants don't always fit
                traditional boxes.
              </p>
            </div>
          </div>
                  </div>
        </section>
      </Reveal>

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
