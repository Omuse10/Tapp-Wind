import windsongLogo from "@/assets/windsong-logo.jpg.asset.json";

export function WindsongMark({ className = "" }: { className?: string }) {
  return (
    <img
      src={windsongLogo.url}
      alt="Windsong Travel"
      width={432}
      height={120}
      className={`h-auto w-56 max-w-full ${className}`}
    />
  );
}
