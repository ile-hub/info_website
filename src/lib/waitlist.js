const URL = import.meta.env.VITE_SUPABASE_URL;
const KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

// Inserts a signup into the Supabase `waitlist` table via the REST API.
// RLS on the table only allows anonymous inserts, so the publishable key
// can add rows but never read them back.
export async function joinWaitlist({ email, role }) {
  if (!URL || !KEY) throw new Error("Waitlist is not configured.");

  const res = await fetch(`${URL}/rest/v1/waitlist`, {
    method: "POST",
    headers: {
      apikey: KEY,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({ email: email.trim().toLowerCase(), role }),
  });

  if (res.ok) return;

  // Already signed up (unique email) — treat as success rather than
  // revealing whether an address is on the list.
  if (res.status === 409) return;

  throw new Error("Something went wrong. Please try again.");
}
