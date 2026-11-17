import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

import { Reveal } from "@/components/home/Reveal";
import { MILESTONES } from "@/content/sobre";
import { cn } from "@/lib/utils";

/** Vertical timeline whose line fills as you scroll; each milestone expands a short explanation. */
export function Timeline() {
  const ref = useRef<HTMLOListElement>(null);
  const [open, setOpen] = useState<string | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (window.innerHeight * 0.65 - r.top) / r.height));
      el.style.setProperty("--progress", String(p));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <ol ref={ref} className="relative grid gap-4 pl-14" aria-label="Marcos do projeto">
      <span
        className="absolute bottom-6 left-[1.4rem] top-6 w-0.5 rounded-full bg-border"
        aria-hidden
      >
        <span
          className="block w-full origin-top rounded-full bg-primary-gradient"
          style={{ height: "100%", transform: "scaleY(var(--progress, 0))" }}
        />
      </span>

      {MILESTONES.map((m, i) => {
        const isOpen = open === m.n;
        const current = "current" in m && m.current;
        return (
          <li key={m.n} className="relative">
            <Reveal delay={i * 40} className="group">
              <span
                className={cn(
                  "absolute -left-14 top-4 grid h-11 w-11 place-items-center rounded-full border-2 border-border bg-card text-sm font-bold text-muted-foreground transition-all duration-500",
                  "group-data-[visible=true]:border-teal group-data-[visible=true]:text-teal-ink",
                  current && "animate-search-ring",
                )}
                aria-hidden
              >
                {m.n}
              </span>
              <div
                className={cn(
                  "surface rounded-tile shadow-soft transition-all duration-300",
                  isOpen ? "border-teal shadow-lift" : "hover:-translate-y-0.5 hover:shadow-lift",
                )}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`milestone-${m.n}`}
                  onClick={() => setOpen(isOpen ? null : m.n)}
                  className="flex w-full items-start justify-between gap-4 p-5 text-left"
                >
                  <span>
                    <span className="flex flex-wrap items-center gap-2">
                      <span className="text-lg font-bold tracking-tight">{m.title}</span>
                      {current && (
                        <span className="rounded-full bg-gold-soft px-2.5 py-0.5 text-xs font-semibold text-gold-ink">
                          Em andamento
                        </span>
                      )}
                    </span>
                    <span className="mt-1 block text-muted-foreground">{m.summary}</span>
                  </span>
                  <ChevronDown
                    className={cn(
                      "mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300",
                      isOpen && "rotate-180 text-teal-ink",
                    )}
                    aria-hidden
                  />
                </button>
                <div
                  id={`milestone-${m.n}`}
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-border px-5 py-4 text-sm text-muted-foreground">
                      {m.detail}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </li>
        );
      })}
    </ol>
  );
}
