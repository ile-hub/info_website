import Reveal from "../components/Reveal";
import Eyebrow from "../components/Eyebrow";
import PageHeading from "../components/PageHeading";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <section className="max-w-2xl mx-auto px-5 sm:px-8 py-24 text-center">
      <Reveal>
        <Eyebrow>404</Eyebrow>
        <PageHeading className="mb-4">This page doesn't exist.</PageHeading>
        <p className="text-base leading-relaxed mb-8" style={{ color: "#3E4744" }}>
          It may have moved, or the link might be wrong.
        </p>
        <Button to="/">Back to home</Button>
      </Reveal>
    </section>
  );
}
