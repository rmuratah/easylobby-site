import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

/** Floating chapter index (wide screens only) that tracks the section in view. */
export function ChapterRail({ chapters }: { chapters: readonly { id: string; label: string }[] }) {
  const [active, setActive] = useState(chapters[0]?.id);

  useEffect(() => {
    const els = chapters
      .map((c) => document.getElementById(c.id))
      .filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [chapters]);

  return (
    <nav
      aria-label="Capítulos da página"
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
    >
      <ul className="glass grid gap-1 rounded-full p-2 shadow-soft">
        {chapters.map((c) => {
          const on = c.id === active;
          return (
            <li key={c.id}>
              <a
                href={`#${c.id}`}
                aria-current={on ? "true" : undefined}
                className="group relative grid h-7 w-7 place-items-center rounded-full"
              >
                <span
                  className={cn(
                    "rounded-full transition-all duration-300",
                    on
                      ? "h-3 w-3 bg-teal shadow-glow"
                      : "h-1.5 w-1.5 bg-muted-foreground group-hover:bg-foreground",
                  )}
                />
                <span
                  className={cn(
                    "glass pointer-events-none absolute right-10 whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold opacity-0 shadow-soft transition-all duration-200 group-hover:opacity-100 group-focus-visible:opacity-100",
                    on && "text-teal-ink",
                  )}
                >
                  {c.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
