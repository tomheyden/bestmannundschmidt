import { cn } from "@/lib/utils";

type Props = {
  label?: string;
  aspect?: "portrait" | "landscape" | "square" | "tall";
  className?: string;
  tone?: "navy" | "paper";
};

const aspectMap = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[16/10]",
  square: "aspect-square",
  tall: "aspect-[4/5]",
};

export function ImageFallback({
  label,
  aspect = "landscape",
  className,
  tone = "navy",
}: Props) {
  const toneClass =
    tone === "navy"
      ? "gradient-navy text-ivory/50"
      : "bg-gradient-to-br from-paper to-line text-navy/40";

  return (
    <div
      className={cn(
        "relative overflow-hidden grain",
        aspectMap[aspect],
        toneClass,
        className,
      )}
      role="img"
      aria-label={label ?? "Decorative background"}
    >
      {label ? (
        <span className="absolute left-5 bottom-5 label">{label}</span>
      ) : null}
    </div>
  );
}
