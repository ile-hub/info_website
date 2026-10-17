import BrandDoodle from "../components/BrandDoodle";
import { ShieldCheck } from "lucide-react";
import { C } from "../lib/theme";
import { LANDLORD_POINTS } from "../data/content";
import Reveal from "../components/Reveal";
import Eyebrow from "../components/Eyebrow";
import PageHeading from "../components/PageHeading";
import Card from "../components/Card";
import FormPanel from "../components/FormPanel";
import WaitlistForm from "../components/WaitlistForm";

export default function Landlords() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
      <Reveal>
        <div className="brand-heading-row">
          <div className="min-w-0 flex-1">
        <Eyebrow>For landlords</Eyebrow>
        <PageHeading className="mb-5">Your property. Your preferences. Better matches.</PageHeading>
          </div>
          <BrandDoodle variant="landlords" />
        </div>
        <p className="text-base sm:text-lg leading-relaxed mb-5 max-w-6xl" style={{ color: "#3E4744" }}>
          Tell us what matters to you, from tenancy expectations to acceptable
          evidence of suitability. Leri helps you find renters who align with
          your requirements.{" "}
          <span className="font-bold" style={{ color: C.ink }}>
            Your next great tenant might be hiding in plain sight. 
          </span>
        </p>
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-5 mb-14">
        {LANDLORD_POINTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08} className="h-full">
            <Card className="flex gap-4">
              <ShieldCheck size={20} style={{ color: C.verified }} className="flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2" style={{ color: C.ink }}>
                  {p.title}
                </h3>
                <p className="text-[15px] leading-7" style={{ color: "#4B534F" }}>
                  {p.body}
                </p>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <section aria-labelledby="landlord-promise-title" className="mb-16 promise-layout">
          <div className="promise-photo-wrap">
            <img src="/pinky-promise.jpeg" alt="Two people linking pinky fingers in a promise" width="1280" height="1920" loading="lazy" className="promise-photo" />
          </div>
          <div className="promise-content">

          <div className="max-w-3xl mx-auto text-center mb-8">
            <img
              src="/promise_logo.png"
              alt="Leri Promise"
              width="160"
              height="160"
              className="w-32 h-32 sm:w-40 sm:h-40 object-contain mx-auto mb-4"
            />
            <Eyebrow>The Leri Landlord Promise</Eyebrow>
            <h2
              id="landlord-promise-title"
              className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight"
              style={{ color: C.verified }}
            >
              Great tenants deserve great landlords. Be the reason great renters get a fair chance!
            </h2>
          </div>
          <div
            className="rounded-[32px] sm:rounded-[48px] px-6 py-10 sm:px-12 sm:py-14"
            style={{ backgroundColor: C.kraft }}
          >
            <div className="max-w-3xl mx-auto text-base sm:text-lg leading-relaxed" style={{ color: C.ink }}>
              <p>
                We're bringing you capable renters who deserve to be seen beyond
                traditional checklists. In return, we ask you to keep an open mind,
                assess people carefully, communicate clearly and treat every renter
                with respect.
              </p>
              <p className="mt-8 text-center font-bold" style={{ color: C.verified }}>
                Trust works when it goes both ways
              </p>
            </div>
          </div>
                  </div>
        </section>
      </Reveal>

      <Reveal>
        <FormPanel title="List with Leri." body="Join the landlord waitlist and we'll email you as soon as you can start listing.">
          <WaitlistForm defaultRole="landlord" />
        </FormPanel>
      </Reveal>
    </section>
  );
}
