import Reveal from "../components/Reveal";
import Eyebrow from "../components/Eyebrow";
import PageHeading from "../components/PageHeading";
import WaitlistForm from "../components/WaitlistForm";

export default function Waitlist() {
  return (
    <section className="max-w-2xl mx-auto px-5 sm:px-8 py-20">
      <Reveal>
        <Eyebrow>Join us</Eyebrow>
        <PageHeading className="mb-4">Get early access to Ilé.</PageHeading>
        <p className="text-base leading-relaxed mb-8" style={{ color: "#3E4744" }}>
          Tell us who you are and we'll be in touch as we open up new areas
          and partnerships.
        </p>
        <WaitlistForm />
      </Reveal>
    </section>
  );
}
