export default function Logo({ size = 96, className = "", src = "/Leri_logo.png" }) {
  return (
    <img
      src={src}
      alt="Leri"
      width={size}
      height={size}
      className={`object-contain shrink-0 ${className}`}
    />
  );
}
