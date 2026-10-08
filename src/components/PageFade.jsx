// A quick, quiet fade whenever the visible page changes, so navigation
// feels like a single continuous surface rather than a hard cut. Keyed on
// the path so the CSS animation replays per page.
export default function PageFade({ pageKey, children }) {
  return (
    <div key={pageKey} style={{ animation: "leri-fade-up 0.45s ease-out both" }}>
      {children}
    </div>
  );
}
