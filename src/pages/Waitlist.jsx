import BrandDoodle from "../components/BrandDoodle";
import Reveal from "../components/Reveal";
import Eyebrow from "../components/Eyebrow";
import PageHeading from "../components/PageHeading";
import WaitlistForm from "../components/WaitlistForm";

export default function Waitlist() {
  return (
    <section className="max-w-2xl mx-auto px-5 sm:px-8 py-20">
      <Reveal>
        <div className="brand-heading-row">
          <div className="min-w-0 flex-1">
        <Eyebrow>Join us</Eyebrow>
        <PageHeading className="mb-4">Get early access to Leri.</PageHeading>
          </div>
          <BrandDoodle variant="waitlist" />
        </div>
        <p className="text-base leading-relaxed mb-8" style={{ color: "#3E4744" }}>
          Tell us if you're renting or letting, and we'll email you when Leri
          opens up.
        </p>
        <WaitlistForm />
      </Reveal>
    </section>
  );
}
