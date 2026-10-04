import Reveal from "../components/Reveal";
import Eyebrow from "../components/Eyebrow";
import PageHeading from "../components/PageHeading";
import FormPanel from "../components/FormPanel";
import WaitlistForm from "../components/WaitlistForm";

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-5 sm:px-8 py-16">
      <Reveal>
        <Eyebrow>About Leri</Eyebrow>
        <PageHeading className="mb-6">A social enterprise, built for fair access to housing.</PageHeading>
        <p className="text-base leading-relaxed mb-5" style={{ color: "#3E4744" }}>
          Leri exists because too many capable renters (students, freelancers,
          gig workers, newcomers to a country or city) get filtered out by
          screening built around one narrow kind of applicant. We think the
          real question isn't "does this person tick every box," it's "how
          likely is this tenancy to succeed."
        </p>
        <p className="text-base leading-relaxed mb-5" style={{ color: "#3E4744" }}>
          We're building Leri as a social enterprise, not a conventional
          venture-backed startup which means the incentive is to keep access
          fair for renters, not to extract as much value from them as
          possible. Our aim is for the platform to be primarily funded by the
          landlords, agents and institutions who benefit from better-matched,
          better-informed tenancies.
        </p>
        <p className="text-base leading-relaxed mb-10" style={{ color: "#3E4744" }}>
          Longer term, we see Leri's role extending beyond software and toward
          genuinely improving housing outcomes for the people the current
          system leaves behind. The platform is designed to stand on its own
          first.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <FormPanel title="Want to follow along?" body="Join the waitlist, or get in touch directly at hello@leri.app.">
          <WaitlistForm />
        </FormPanel>
      </Reveal>
    </section>
  );
}
