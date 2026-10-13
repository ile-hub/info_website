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
import Logo from "../components/Logo";

const VALUE_ICONS = [FileStack, ShieldCheck, TrendingUp, Repeat];
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
          <h1 className="font-black uppercase mb-7" style={{ textWrap: "balance" }}>
            <span
              className="block font-extrabold mb-4"
              style={{ color: C.rust, fontSize: "clamp(1.125rem, 2vw, 1.5rem)", lineHeight: 1.3 }}
            >
              Renting is more than a transaction
            </span>{" "}
            <span
              className="block"
              style={{
                color: C.ink,
                fontSize: "clamp(2rem, 4.2vw, 3.5rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
              }}
            >
              It's a relationship that deserves the right start.
            </span>
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed mb-9 max-w-xl" style={{ color: "#3E4744" }}>
            Leri puts people first & takes the hassle out of renting through 
            personalised matching and flexible ways to demonstrate suitability, 
            helping landlords and renters see the fuller picture, find the right
             fit and connect with confidence.
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
          <Eyebrow>A little more understanding. A lot less guesswork.</Eyebrow>
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
        <div className="rounded-[36px] sm:rounded-[60px] px-6 py-12 sm:p-16 grid lg:grid-cols-[auto_minmax(0,1fr)] gap-10 lg:gap-14 items-start" style={{ backgroundColor: C.ink }}>
          <Reveal from="left" className="flex justify-center lg:pt-10">
            <div
              className="w-48 h-48 sm:w-60 sm:h-60 rounded-full flex items-center justify-center"
              style={{ backgroundColor: C.paper, boxShadow: `0 0 0 10px ${C.ink}, 0 0 0 12px ${C.kraft}` }}
            >
              <Logo
                size={192}
                className="h-40 w-40 sm:h-48 sm:w-48 object-contain"
              />
            </div>
          </Reveal>
          <Reveal from="right" delay={0.1}>
            <Eyebrow color={C.kraft}>Our story</Eyebrow>
            <SectionTitle light className="!mb-6">The right fit changes everything.</SectionTitle>
            <p className="text-[15px] leading-7 mb-4 max-w-2xl" style={{ color: "#C9CDC4" }}>
              We started by listening. To renters tired of being reduced to rigid checklists. To landlords tired of void periods, unsuitable applications and difficult renter situations.
            </p>
            <p className="text-[15px] leading-7 mb-4 max-w-2xl" style={{ color: "#C9CDC4" }}>
              From campaigning nationally to building a digital efficient solution.
            </p>
            <p className="text-[15px] leading-7 mb-4 max-w-2xl" style={{ color: "#C9CDC4" }}>
              We're bringing together trustworthy landlords and capable renters who might otherwise miss each other:  from students and first-time renters to graduates, creatives, new to country professionals and self-employed people. Because suitability shouldn't be defined by one type of income, career or rental history.
            </p>
            <p className="text-[15px] leading-7 mb-4 max-w-2xl" style={{ color: "#C9CDC4" }}>
              We're building a community where the right people can find each other. And we're building it with you, not just for you.
            </p>
        
            <div className="mt-7">
              <Button to="/about">Read our story</Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* For landlords — temporarily hidden; remove hidden to restore. */}
      <section hidden className="max-w-7xl mx-auto px-5 sm:px-8 py-4">
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
      <section className="max-w-7xl mx-auto px-5 sm:px-8">
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
