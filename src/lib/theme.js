// ============================================================
// LERI — brand tokens
// Concept: the product's core act is a renter assembling a
// verifiable "file" of evidence. The case-file idea lives in one
// signature illustration and a few structural details — stamps,
// a file reference, pinned evidence — while the surrounding UI
// is built like a modern product: depth, motion, soft light,
// not a flat paper texture smeared across every section.
// ============================================================

export const C = {
  ink: "#1C2321",
  paper: "#EEF0EA",
  kraft: "#D5E5DA",
  kraftDark: "#A8C8B4",
  verified: "#043D27",
  verifiedDeep: "#032C1C",
  rust: "#043D27",
  rustDeep: "#032C1C",
  slate: "#2F4858",
  cream: "#F3F8F4",
  line: "#C4D8CB",
};

export const REDUCE_MOTION =
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Large, very soft shadow used on floating cards and panels.
export const SOFT_SHADOW = "0 0 80px rgba(28,35,33,0.12)";
