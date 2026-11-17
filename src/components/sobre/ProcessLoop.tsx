import { useState } from "react";
import { Bot, ClipboardList, FlaskConical, PackageCheck, RotateCcw, Wrench } from "lucide-react";

import { PROCESS } from "@/content/sobre";
import { cn } from "@/lib/utils";
import { rovingKey } from "./roving";

const ICONS = {
  plan: ClipboardList,
  ai: Bot,
  test: FlaskConical,
  adjust: Wrench,
  ship: PackageCheck,
} as const;
const WHO: Record<(typeof PROCESS)[number]["id"], string> = {
  plan: "Nós",
  ai: "IA",
  test: "Nós + verificações",
  adjust: "Nós + IA",
  ship: "Aplicativo",
};

/** Clickable diagram: Planejamento humano → geração com IA → testes → ajustes → nova entrega. */
export function ProcessLoop() {
  const [index, setIndex] = useState(0);
  const step = PROCESS[index]!;

  return (
    <div className="surface relative overflow-hidden rounded-panel p-5 shadow-soft sm:p-8">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden />

      <div className="relative">
        {/* connector line behind the nodes (desktop) */}
        <div
          className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-border lg:block"
          aria-hidden
        >
          <div
            className="h-full bg-primary-gradient transition-[width] duration-500 ease-out"
            style={{ width: `${(index / (PROCESS.length - 1)) * 100}%` }}
          />
        </div>

        <div
          role="tablist"
          aria-label="Etapas do processo"
          className="relative grid gap-3 lg:grid-cols-5 lg:gap-2"
        >
          {PROCESS.map((p, i) => {
            const Icon = ICONS[p.id];
            const on = i === index;
            const done = i < index;
            return (
              <button
                key={p.id}
                role="tab"
                id={`process-tab-${p.id}`}
                aria-selected={on}
                aria-controls="process-panel"
                tabIndex={on ? 0 : -1}
                onClick={() => setIndex(i)}
                onKeyDown={(e) => rovingKey(e, i, PROCESS.length, setIndex)}
                className="group flex items-center gap-4 rounded-tile p-2 text-left lg:flex-col lg:gap-3 lg:text-center"
              >
                <span
                  className={cn(
                    "grid h-16 w-16 shrink-0 place-items-center rounded-full border-2 transition-all duration-300",
                    on
                      ? "scale-110 border-teal bg-primary text-primary-foreground shadow-glow"
                      : done
                        ? "border-teal bg-teal-soft text-teal-ink"
                        : "border-border bg-card text-muted-foreground group-hover:border-teal group-hover:text-teal-ink",
                  )}
                >
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")} · {WHO[p.id]}
                  </span>
                  <span className={cn("mt-0.5 block font-semibold", on && "text-teal-ink")}>
                    {p.title}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div
          id="process-panel"
          role="tabpanel"
          aria-labelledby={`process-tab-${step.id}`}
          className="glass mt-6 flex flex-col gap-4 rounded-tile p-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p key={step.id} className="animate-fade-up max-w-2xl text-lg">
            {step.text}
          </p>
          <button
            type="button"
            onClick={() => setIndex((i) => (i + 1) % PROCESS.length)}
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold transition-colors hover:border-teal hover:text-teal-ink sm:self-auto"
          >
            {index === PROCESS.length - 1 ? (
              <>
                <RotateCcw className="h-4 w-4" aria-hidden /> Recomeçar o ciclo
              </>
            ) : (
              "Próxima etapa →"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
