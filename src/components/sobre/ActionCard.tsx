import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

/** CTA tile. Without a real href it renders a disabled "em breve" state, never a fake link. */
export function ActionCard({
  icon,
  title,
  detail,
  href,
  primary = false,
}: {
  icon: ReactNode;
  title: string;
  detail: string;
  href: string;
  primary?: boolean;
}) {
  const cls = cn(
    "group relative flex h-full flex-col gap-6 rounded-tile border p-6 text-left transition-all duration-300",
    primary ? "border-teal bg-card shadow-lift" : "border-border bg-card shadow-soft",
  );
  const body = (
    <>
      <span className="flex items-start justify-between">
        <span
          className={cn(
            "grid h-12 w-12 place-items-center rounded-tile transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110",
            primary ? "bg-primary text-primary-foreground" : "bg-teal-soft text-teal-ink",
          )}
        >
          {icon}
        </span>
        {href ? (
          <ArrowUpRight
            className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-teal-ink"
            aria-hidden
          />
        ) : (
          <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold text-muted-foreground">
            Em breve
          </span>
        )}
      </span>
      <span>
        <span className="block text-lg font-bold tracking-tight">{title}</span>
        <span className="mt-1 block text-sm text-muted-foreground">{detail}</span>
      </span>
    </>
  );
  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(cls, "hover:-translate-y-1 hover:border-teal hover:shadow-lift")}
    >
      {body}
      <span className="sr-only"> (abre em nova aba)</span>
    </a>
  ) : (
    <div className={cn(cls, "opacity-80")} aria-disabled="true">
      {body}
    </div>
  );
}
