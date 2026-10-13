import { pathFor } from "./site";

export const NAV = [
  { key: "home", label: "Home" },
  { key: "renters", label: "For Renters" },
  { key: "landlords", label: "For Landlords" },
  { key: "how", label: "How It Works" },
  { key: "about", label: "About" },
  { key: "events", label: "What’s on" },
].map((n) => ({ ...n, path: pathFor(n.key) }));
