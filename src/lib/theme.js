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
  kraft: "#D9C9A8",
  kraftDark: "#B7A47C",
  verified: "#3F6B4F",
  verifiedDeep: "#2C4B37",
  rust: "#B5502E",
  rustDeep: "#8F3D22",
  slate: "#2F4858",
  cream: "#F7F5EF",
  line: "#CFCABB",
};

export const REDUCE_MOTION =
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Large, very soft shadow used on floating cards and panels.
export const SOFT_SHADOW = "0 0 80px rgba(28,35,33,0.12)";
