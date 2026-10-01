import windsongMark from "@/assets/windsong-logo.webp";

export function WindsongMark({ className = "" }: { className?: string }) {
  return (
    <img
      src={windsongMark}
      alt="Windsong Travel"
      width={432}
      height={120}
      className={`h-auto w-56 max-w-full ${className}`}
    />
  );
}
