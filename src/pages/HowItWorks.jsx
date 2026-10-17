import { FileStack, ShieldCheck, TrendingUp, Repeat } from "lucide-react";
import { C } from "../lib/theme";
import Eyebrow from "../components/Eyebrow";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { HOW_STEPS, VALUE_POINTS } from "../data/content";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import BrandDoodle from "../components/BrandDoodle";
import "./how-it-works.css";

const VALUE_ICONS = [FileStack, ShieldCheck, TrendingUp, Repeat];

function IconBadge({ icon: Icon = ShieldCheck }) {
  return <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: C.kraft }}><Icon size={26} style={{ color: C.ink }} /></div>;
}

export default function HowItWorks() {
  return (
    <section className="how-page">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="text-left mb-11">
          <div className="brand-heading-row">
            <div className="min-w-0 flex-1">
              <Eyebrow>How it works</Eyebrow>
              <SectionTitle as="h1">Three steps to better renting.</SectionTitle>
            </div>
            <BrandDoodle variant="how" />
          </div>
        </Reveal>
        <div className="how-steps">
          {HOW_STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * .08}>
              <article className="how-step">
                <div className="how-step-heading">
                  <span className={`how-number how-number-${i + 1}`}>{i + 1}</span>
                  <h2>{step.title}</h2>
                </div>
                <div className={`how-illustration how-illustration-${i + 1}`} role="img" aria-label={[
                  "Renter building a profile with identity, preferences and credible evidence",
                  "Landlord and renters finding a compatible match",
                  "Renter building a history through their first home, a new city and their next chapter",
                ][i]} />
                <p>{step.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <section className="pt-16 pb-6">
        <Reveal className="text-left">
          <Eyebrow>A little more understanding. A lot less guesswork.</Eyebrow>
          <SectionTitle>Why it works</SectionTitle>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6 mt-10">
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
        </section>
        <Reveal>
          <div className="how-invitation">
            <BrandDoodle variant="home" />
            <div className="how-invitation-content">
              <Button to="/waitlist" className="!rounded-full">Join the waitlist</Button>
              <div className="how-role-links"><Link to="/renters">I’m a renter</Link><span aria-hidden="true" /><Link to="/landlords">I’m a landlord</Link></div>
            </div>
            <BrandDoodle variant="renters" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
