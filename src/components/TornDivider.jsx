import { C } from "../lib/theme";

export default function TornDivider() {
  const teeth = 22;
  const points = Array.from({ length: teeth }, (_, i) => {
    const x = (i / (teeth - 1)) * 100;
    const y = i % 2 === 0 ? 0 : 100;
    return `${x}% ${y}%`;
  }).join(", ");
  return (
    <div
      className="w-full h-4"
      style={{ backgroundColor: C.paper, clipPath: `polygon(${points})` }}
    />
  );
}
