// Note: the underlying evidence framework (its named categories and
// exact evidence pathways) is intentionally not enumerated publicly —
// this is a simplified, generic front-of-site framing rather than the
// real internal model.
export const VALUE_POINTS = [
  {
    title: "More than a credit check",
    desc: "We look at a fuller picture: proof of income, references, and a track record, not just a score pulled from a bureau.",
  },
  {
    title: "You don't need everything",
    desc: "Add what you have. There's no single required document; your profile reflects whatever credible evidence you're able to provide.",
  },
  {
    title: "It grows with you",
    desc: "Every completed tenancy adds to your history, so your profile only gets stronger the more you rent.",
  },
];

export const PROBLEM_POINTS = [
  {
    title: "Screening leaves good tenants out",
    body: "Standard checks reward a narrow kind of applicant: steady salaried income and long credit history. Students, freelancers, gig workers and newcomers get filtered out, even when they're perfectly capable of sustaining a tenancy.",
  },
  {
    title: "Evidence, not a single number",
    body: "Instead of one rigid score, renters choose from flexible evidence pathways. No renter needs every item; just enough to show a credible picture.",
  },
  {
    title: "Fit matters as much as risk",
    body: "Ilé also matches on compatibility: tenancy length, household type, and lifestyle, so landlords see who's suitable, not just who's 'safe'.",
  },
];


export const LANDLORD_POINTS = [
  {
    title: "See the full picture, not a credit score alone",
    body: "Trust profiles combine income proof, references and track record, providing a fuller signal than income multiples and credit checks give you on their own.",
  },
  {
    title: "Compatibility, alongside trust",
    body: "Matching also weighs tenancy length, household type and property rules, so the applicants you see aren't just 'safe'; they're actually a fit for your property.",
  },
  {
    title: "Faster shortlisting",
    body: "Review evidence-backed profiles upfront instead of chasing references and paperwork applicant by applicant.",
  },
  {
    title: "A record that builds over time",
    body: "Completed tenancies feed back into the system, so returning renters bring a track record with them, and so do you as a landlord.",
  },
];

export const HOW_STEPS = [
  { title: "Verify identity", body: "A quick identity and right-to-rent check is required before anything else, so trust starts from a solid base." },
  { title: "Build your evidence file", body: "Add evidence at your own pace, choosing whatever pathways fit your situation." },
  { title: "Get a trust profile, not a score", body: "See a clear confidence level, plus next steps to strengthen any area that's light on evidence." },
  { title: "Get matched", body: "Compatibility matching considers your preferences alongside your trust profile to surface properties that actually fit." },
  { title: "Apply with confidence", body: "Landlords see your evidence-backed profile and compatibility fit together, so you don't have to re-submit the same documents." },
  { title: "Your history grows", body: "Once a tenancy completes, the outcome feeds back in, so your next move starts from a stronger position, not zero." },
];

export const EVIDENCE_NODES = [
  { key: "references", label: "References", icon: "Users", top: "6%", left: "8%", rot: -6 },
  { key: "income", label: "Income Proof", icon: "Wallet", top: "4%", left: "68%", rot: 5 },
  { key: "history", label: "Track Record", icon: "History", top: "62%", left: "4%", rot: 4 },
  { key: "commitment", label: "Commitment", icon: "Anchor", top: "64%", left: "70%", rot: -4 },
];
