import { useState } from "react";
import { Feather, MessageCircleHeart, MousePointerClick } from "lucide-react";

import { PRINCIPLES } from "@/content/sobre";
import { cn } from "@/lib/utils";
import { rovingKey } from "./roving";

const ICONS = {
  leveza: Feather,
  simples: MousePointerClick,
  feedback: MessageCircleHeart,
} as const;

export function Principles() {
  const [index, setIndex] = useState(0);
  const p = PRINCIPLES[index]!;
  const Icon = ICONS[p.id];

  return (
    <div className="surface relative overflow-hidden rounded-panel p-3 shadow-soft sm:p-4">
      <p className="sr-only">O que orienta as decisões</p>
      <div
        role="tablist"
        aria-label="O que orienta as decisões"
        className="grid grid-cols-3 gap-2 rounded-tile bg-secondary p-1.5"
      >
        {PRINCIPLES.map((item, i) => {
          const on = i === index;
          const ItemIcon = ICONS[item.id];
          return (
            <button
              key={item.id}
              role="tab"
              id={`principle-tab-${item.id}`}
              aria-selected={on}
              aria-controls="principle-panel"
              tabIndex={on ? 0 : -1}
              onClick={() => setIndex(i)}
              onKeyDown={(e) => rovingKey(e, i, PRINCIPLES.length, setIndex)}
              className={cn(
                "flex items-center justify-center gap-2 rounded-card px-3 py-3 text-sm font-semibold transition-all duration-300 sm:text-base",
                on
                  ? "bg-card text-teal-ink shadow-soft"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <ItemIcon className="hidden h-4 w-4 sm:block" aria-hidden />
              {item.title}
            </button>
          );
        })}
      </div>

      <div
        id="principle-panel"
        role="tabpanel"
        aria-labelledby={`principle-tab-${p.id}`}
        className="relative grid items-center gap-6 px-4 py-10 sm:grid-cols-[auto_1fr] sm:px-8 sm:py-12"
      >
        <div className="bg-hero-art pointer-events-none absolute inset-0 opacity-60" aria-hidden />
        <div
          key={p.id}
          className="relative grid h-24 w-24 animate-fade-up place-items-center rounded-panel bg-gold-soft text-gold-ink"
        >
          <Icon className="h-10 w-10" aria-hidden />
          <span className="absolute -right-2 -top-2 grid h-8 w-8 place-items-center rounded-full border-2 border-gold bg-card text-xs font-bold text-gold-ink">
            {index + 1}
          </span>
        </div>
        <div key={`${p.id}-t`} className="relative animate-fade-up [animation-delay:60ms]">
          <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{p.heading}</h3>
          <p className="mt-3 max-w-xl text-lg text-muted-foreground">{p.text}</p>
        </div>
      </div>
    </div>
  );
}
