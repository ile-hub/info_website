// Single source of truth for page URLs and search metadata. Used by the
// router, the per-page <head> tags, the build-time prerender and the
// generated sitemap, so they can't drift apart.
export const SITE_URL = "https://leri.app";
export const SITE_NAME = "Leri";

export const ROUTES = [
  {
    key: "home",
    path: "/",
    title: "Leri | Renting trust that travels with you",
    description:
      "Leri lets renters build one verified, evidence-based profile they can use for every application, and helps landlords see the whole picture beyond a credit check.",
    priority: "1.0",
  },
  {
    key: "renters",
    path: "/renters",
    title: "For Renters | Build one profile, apply anywhere | Leri",
    description:
      "Stop re-sending payslips and references for every flat. Build a single evidence-based renter profile with Leri, even if you don't fit the 'standard' applicant mould.",
    priority: "0.9",
  },
  {
    key: "landlords",
    path: "/landlords",
    title: "For Landlords | Shortlist tenants with confidence | Leri",
    description:
      "See verified evidence and compatibility for every applicant upfront. Leri helps landlords shortlist suitable tenants faster, beyond income multiples and credit scores.",
    priority: "0.9",
  },
  {
    key: "how",
    path: "/how-it-works",
    title: "How It Works | From first evidence to trusted tenant | Leri",
    description:
      "Verify your identity, add evidence at your own pace, get a trust profile instead of a score, and get matched with homes that fit. Here's how Leri works.",
    priority: "0.8",
  },
  {
    key: "about",
    path: "/about",
    title: "About Leri | A social enterprise for fairer renting",
    description:
      "Leri is a social enterprise building fairer access to housing for students, freelancers, gig workers and newcomers who get filtered out by standard tenant screening.",
    priority: "0.6",
  },
  {
    key: "waitlist",
    path: "/waitlist",
    title: "Join the Waitlist | Get early access to Leri",
    description:
      "Renting or letting? Join the Leri waitlist and we'll email you as soon as early access opens.",
    priority: "0.7",
  },
  {
    key: "privacy",
    path: "/privacy",
    title: "Privacy Notice | Leri",
    description:
      "How Leri collects, uses and protects the email address and details you give us when you join the waitlist, and your rights under UK GDPR.",
    priority: "0.3",
  },
];

export const NOT_FOUND = {
  title: "Page not found | Leri",
  description: "The page you're looking for doesn't exist.",
};

export const pathFor = (key) => ROUTES.find((r) => r.key === key)?.path ?? "/";
