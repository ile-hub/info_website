// Single source of truth for page URLs and search metadata. Used by the
// router, the per-page <head> tags, the build-time prerender and the
// generated sitemap, so they can't drift apart.
export const SITE_URL = "https://leri.app";
export const SITE_NAME = "Leri";
export const SOCIAL_IMAGE = {
  path: "/Leri_logo.png",
  width: 1254,
  height: 1254,
  alt: "Leri logo: a heart-shaped roof above the Leri name",
};

export const ROUTES = [
  {
    key: "home",
    path: "/",
    title: "Leri | Better renting starts with the right fit",
    description:
      "Leri helps renters and landlords find the right fit through personalised matching and flexible ways to demonstrate suitability, so they can connect with confidence.",
    priority: "1.0",
  },
  {
    key: "renters",
    path: "/renters",
    title: "For Renters | Find landlords who fit you | Leri",
    description:
      "Show your suitability beyond traditional checklists, find landlords whose expectations fit your circumstances and build a rental history with Leri.",
    priority: "0.9",
  },
  {
    key: "landlords",
    path: "/landlords",
    title: "For Landlords | Your preferences. Better matches. | Leri",
    description:
      "Set your tenancy preferences, review evidence-backed renter profiles and connect with people who fit your requirements. You decide what happens next.",
    priority: "0.9",
  },
  {
    key: "how",
    path: "/how-it-works",
    title: "How It Works | Three steps to better renting | Leri",
    description:
      "Build your trust profile, let Leri connect you with compatible landlords and build a rental history that grows with you. Three steps to better renting.",
    priority: "0.8",
  },
  {
    key: "about",
    path: "/about",
    title: "About Leri | A social enterprise for fairer renting",
    description:
      "Discover why Leri puts people first through personalised matching, flexible evidence and meaningful connections. Meet our founder and help shape better renting.",
    priority: "0.6",
  },
  {
    key: "events",
    path: "/whats-on",
    title: "What’s On | Ideas, conversations and better renting | Leri",
    description: "Join renters, landlords and changemakers at Leri events for big ideas, real conversations and a fresh look at the future of renting.",
    priority: "0.7",
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
