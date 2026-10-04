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
        <Eyebrow>For landlords</Eyebrow>
        <PageHeading className="mb-5">See who's really ready to rent.</PageHeading>
        <p className="text-base sm:text-lg leading-relaxed mb-12 max-w-2xl" style={{ color: "#3E4744" }}>
          Shortlist with confidence using verified evidence and compatibility
          insight before you've exchanged a single message.
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
        <FormPanel title="List with Leri." body="Join the landlord waitlist to get early access as we open up new areas.">
          <WaitlistForm />
        </FormPanel>
      </Reveal>
    </section>
  );
}
