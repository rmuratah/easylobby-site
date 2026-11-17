import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

/** Two bars comparing CPU use; the easylobby bar fills to half once it scrolls into view. */
export function CpuBars({ className }: { className?: string }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={cn("group glass rounded-tile p-5", className)}>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        Uso da CPU
      </p>
      <div className="mt-4 grid gap-3 text-sm">
        <div className="grid grid-cols-[7.5rem_1fr] items-center gap-3">
          <span className="text-muted-foreground">Client padrão</span>
          <span className="h-2.5 overflow-hidden rounded-full bg-secondary">
            <span className="block h-full w-0 rounded-full bg-muted-foreground/50 transition-[width] duration-1000 ease-out group-data-[visible=true]:w-full" />
          </span>
        </div>
        <div className="grid grid-cols-[7.5rem_1fr] items-center gap-3">
          <span className="font-semibold">easylobby</span>
          <span className="h-2.5 overflow-hidden rounded-full bg-secondary">
            <span className="bg-gold-gradient block h-full w-0 rounded-full transition-[width] delay-300 duration-1000 ease-out group-data-[visible=true]:w-1/2" />
          </span>
        </div>
      </div>
    </div>
  );
}
