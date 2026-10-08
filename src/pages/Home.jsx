import { ShieldCheck, FileStack, TrendingUp, Users, Zap, Repeat, Mail } from "lucide-react";
import { C, SOFT_SHADOW } from "../lib/theme";
import { VALUE_POINTS, PROBLEM_POINTS, LANDLORD_POINTS } from "../data/content";
import Reveal from "../components/Reveal";
import PhoneMockup from "../components/PhoneMockup";
import EvidenceBoard from "../components/EvidenceBoard";
import Eyebrow from "../components/Eyebrow";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import Card from "../components/Card";
import FormPanel from "../components/FormPanel";
import WaitlistForm from "../components/WaitlistForm";

const VALUE_ICONS = [FileStack, ShieldCheck, TrendingUp];
const LANDLORD_ICONS = [ShieldCheck, Users, Zap, Repeat];

function IconBadge({ icon: Icon, tone = C.kraft, color = C.ink }) {
  return (
    <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: tone }}>
      <Icon size={26} style={{ color }} strokeWidth={2.2} />
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pt-10 sm:pt-16 pb-10 grid lg:grid-cols-[7fr_5fr] gap-10 items-center">
        <Reveal from="left">
          <h1 className="font-black uppercase mb-7">
            <span
              className="block font-extrabold leading-none mb-2"
              style={{ color: C.rust, fontSize: "clamp(1.5rem, 3vw, 2.4rem)" }}
            >
              Tired of starting
            </span>{" "}
            <span
              className="block"
              style={{
                color: C.ink,
                fontSize: "clamp(2.6rem, 6.4vw, 5.2rem)",
                lineHeight: 0.98,
                letterSpacing: "-0.02em",
              }}
            >
              from zero every time you rent?
            </span>
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed mb-9 max-w-xl" style={{ color: "#3E4744" }}>
            Leri lets renters build one verified, evidence-based profile that
            travels with them everywhere they apply. Landlords see the whole
            picture, not just a credit check.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button to="/renters">I'm renting</Button>
            <Button variant="secondary" to="/landlords">
              I'm a landlord
            </Button>
          </div>
        </Reveal>
        <Reveal from="right" delay={0.1}>
          <PhoneMockup />
        </Reveal>
      </section>

      {/* Waitlist */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
        <Reveal>
          <FormPanel
            title="Join the early access list"
            body="We're onboarding renters and landlords in stages. Join the list and we'll reach out as your spot opens up."
          >
            <WaitlistForm />
          </FormPanel>
        </Reveal>
      </section>

      {/* The idea */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal from="left">
          <EvidenceBoard />
        </Reveal>
        <Reveal from="right" delay={0.1}>
          <Eyebrow>Why Leri</Eyebrow>
          <SectionTitle className="mb-8">A simple idea that changes renting</SectionTitle>
          <div className="flex flex-col gap-6">
            {PROBLEM_POINTS.map((p, i) => (
              <div key={p.title} className="flex gap-4">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-extrabold flex-shrink-0"
                  style={{ backgroundColor: C.rust, color: C.paper }}
                >
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1" style={{ color: C.ink }}>
                    {p.title}
                  </h3>
                  <p className="text-[15px] leading-7" style={{ color: "#4B534F" }}>
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Why it works */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-12">
        <Reveal className="text-center">
          <Eyebrow>What makes a profile</Eyebrow>
          <SectionTitle>Why it works</SectionTitle>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {VALUE_POINTS.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.1} className="h-full">
              <Card>
                <IconBadge icon={VALUE_ICONS[i]} />
                <h3 className="text-xl font-bold mt-6 mb-2" style={{ color: C.ink }}>
                  {v.title}
                </h3>
                <p className="text-[15px] leading-7" style={{ color: "#4B534F" }}>
                  {v.desc}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3} className="mt-10 flex justify-center">
          <Button variant="dark" to="/how-it-works">
            See how it works
          </Button>
        </Reveal>
      </section>

      {/* Mission */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <div className="rounded-[36px] sm:rounded-[60px] px-6 py-12 sm:p-16 grid md:grid-cols-[auto_1fr] gap-10 items-center" style={{ backgroundColor: C.ink }}>
          <Reveal from="left" className="flex justify-center">
            <div
              className="w-48 h-48 sm:w-60 sm:h-60 rounded-full flex items-center justify-center"
              style={{ backgroundColor: C.rust, boxShadow: `0 0 0 10px ${C.ink}, 0 0 0 12px ${C.kraft}` }}
            >
              <span className="text-6xl sm:text-7xl font-black tracking-tight" style={{ color: C.paper }}>
                Leri
              </span>
            </div>
          </Reveal>
          <Reveal from="right" delay={0.1}>
            <Eyebrow color={C.kraft}>Our story</Eyebrow>
            <SectionTitle light>Built as a social enterprise</SectionTitle>
            <h3 className="text-xl font-bold mb-3" style={{ color: C.kraft }}>
              Fair access to housing, by design.
            </h3>
            <p className="text-[15px] leading-7 mb-8 max-w-2xl" style={{ color: "#C9CDC4" }}>
              Too many capable renters (students, freelancers, gig workers,
              newcomers) get filtered out by screening built around one narrow
              kind of applicant. Leri asks a better question: how likely is this
              tenancy to succeed?
            </p>
            <Button to="/about">Read our story</Button>
          </Reveal>
        </div>
      </section>

      {/* For landlords */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-4">
        <Reveal className="text-center">
          <Eyebrow>For landlords</Eyebrow>
          <SectionTitle>What landlords get</SectionTitle>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {LANDLORD_POINTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} className="h-full">
              <Card className="flex gap-5 items-start">
                <IconBadge icon={LANDLORD_ICONS[i]} tone={C.verified} color={C.paper} />
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: C.ink }}>
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
      </section>

      {/* Get in touch */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-20">
        <Reveal>
          <div
            className="rounded-[36px] sm:rounded-[60px] px-6 py-12 sm:px-16 sm:py-14 grid md:grid-cols-[1fr_auto] gap-8 items-center"
            style={{ backgroundColor: C.cream, boxShadow: SOFT_SHADOW }}
          >
            <div>
              <Eyebrow>Get in touch</Eyebrow>
              <SectionTitle className="!mb-3">Let's talk</SectionTitle>
              <p className="text-[15px] leading-7 max-w-xl" style={{ color: "#4B534F" }}>
                Letting agent, housing provider, university, or writing about
                renting? We'd love to hear from you. Questions from renters and
                landlords are welcome too.
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-2">
              <Button href="mailto:hello@leri.app" variant="dark">
                <Mail size={18} />
                Email us
              </Button>
              <span className="text-sm font-medium" style={{ color: C.slate }}>
                hello@leri.app
              </span>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
