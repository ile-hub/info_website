import { C } from "../lib/theme";
import Reveal from "../components/Reveal";
import Eyebrow from "../components/Eyebrow";
import PageHeading from "../components/PageHeading";

const LAST_UPDATED = "8 October 2026";
const CONTACT = "hello@leri.app";

const SECTIONS = [
  {
    title: "Who we are",
    body: [
      `Leri ("we", "us") is a trust and compatibility platform for renting, currently in development. We are the controller of the personal data described in this notice. You can contact us about anything in it at ${CONTACT}.`,
    ],
  },
  {
    title: "What we collect",
    body: [
      "When you join the waitlist we collect your email address, whether you're a renter or a landlord, and the date and time you signed up.",
      "We don't ask for your name, address, financial details or any documents at this stage, and we don't use cookies, analytics or advertising trackers on this website.",
    ],
  },
  {
    title: "Why we use it",
    body: [
      "We use your details only to email you about Leri's launch and early access, and to understand roughly how many renters and landlords are interested.",
      "Our lawful basis is your consent, which you give by joining the waitlist. You can withdraw it at any time (see below).",
      "We will never sell your data or share it with landlords, agents or other third parties for their own marketing.",
    ],
  },
  {
    title: "Where your information is stored",
    body: [
      "We use Supabase to securely store and manage waitlist registrations. Supabase only processes your data on our instructions.",
    ],
  },
  {
    title: "How long we keep it",
    body: [
      "We keep your details until you ask us to remove them or unsubscribe, or until 12 months after Leri launches, whichever comes first. After that we delete them.",
    ],
  },
  {
    title: "Your rights",
    body: [
      "Under UK data protection law you can ask to see the data we hold about you, correct it, have it deleted, or withdraw your consent. Every email we send will include an unsubscribe link, or you can email us at any time and we'll remove you.",
      "If you're unhappy with how we've handled your data, please contact us first. You also have the right to complain to the Information Commissioner's Office (ico.org.uk).",
    ],
  },
  {
    title: "Changes to this notice",
    body: [
      "We'll update this notice as Leri grows (for example, when accounts and trust profiles launch) and change the date at the top. If a change affects how we use your existing data, we'll email you first.",
    ],
  },
];

export default function Privacy() {
  return (
    <section className="max-w-3xl mx-auto px-5 sm:px-8 py-16">
      <Reveal>
        <Eyebrow>Privacy</Eyebrow>
        <PageHeading className="mb-4">Privacy notice</PageHeading>
        <p className="text-sm mb-12" style={{ color: C.slate }}>
          Last updated {LAST_UPDATED}
        </p>
      </Reveal>

      <div className="flex flex-col gap-10">
        {SECTIONS.map((s) => (
          <div key={s.title}>
            <h2 className="text-xl font-bold mb-3" style={{ color: C.ink }}>
              {s.title}
            </h2>
            {s.body.map((p) => (
              <p key={p.slice(0, 32)} className="text-[15px] leading-7 mb-3" style={{ color: "#3E4744" }}>
                {p}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
