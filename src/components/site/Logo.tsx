import { cn } from "@/lib/utils";

export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  if (compact) {
    return (
      <span className={cn("brand", className)} aria-label="easylobby">
        e<span className="text-teal">l</span>
      </span>
    );
  }
  return (
    <span className={cn("brand", className)}>
      easy<span className="text-teal">lobby</span>
    </span>
  );
}
