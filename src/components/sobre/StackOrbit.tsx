import { useState } from "react";

import { Logo } from "@/components/site/Logo";
import { STACK, TEAM } from "@/content/sobre";
import { cn } from "@/lib/utils";

// The longest label sits at the top, where there is the most horizontal room, so it never touches the screen edge on phones.
const ANGLES: Record<(typeof STACK)[number]["id"], number> = {
  react: -90,
  rust: -18,
  tauri: 54,
  api: 126,
  plan: 198,
};

/** Hero visual: the app's real stack orbiting the logo. Click or focus a chip to read what it does. */
export function StackOrbit() {
  const [active, setActive] = useState<string>(STACK[0].id);
  const current = STACK.find((s) => s.id === active) ?? STACK[0];

  return (
    <div className="mx-auto w-full max-w-[26rem]">
      <div className="relative aspect-square">
        {/* rotating gradient ring */}
        <div
          className="conic-ring animate-spin-ring absolute inset-[13%] rounded-full p-[1.5px] opacity-80"
          aria-hidden
        >
          <div className="h-full w-full rounded-full bg-background" />
        </div>
        <div
          className="absolute inset-[26%] rounded-full border border-dashed border-border"
          aria-hidden
        />

        <div className="glass absolute inset-[32%] grid place-items-center rounded-full shadow-lift">
          <div className="text-center">
            <Logo className="text-2xl sm:text-3xl" />
            <div
              className="mt-2 flex justify-center -space-x-2"
              aria-label="Feito por Murata e Ricco"
            >
              {TEAM.map((p) => (
                <img
                  key={p.id}
                  src={p.photo}
                  alt={p.photoAlt}
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full border-2 border-card object-cover"
                />
              ))}
            </div>
          </div>
        </div>

        <ul aria-label="Como o easylobby é feito">
          {STACK.map((s) => {
            const a = (ANGLES[s.id] * Math.PI) / 180;
            const on = s.id === active;
            return (
              <li
                key={s.id}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${50 + 40 * Math.cos(a)}%`, top: `${50 + 40 * Math.sin(a)}%` }}
              >
                <button
                  type="button"
                  aria-pressed={on}
                  onClick={() => setActive(s.id)}
                  onMouseEnter={() => setActive(s.id)}
                  onFocus={() => setActive(s.id)}
                  className={cn(
                    "whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-semibold shadow-soft transition-all duration-300 sm:text-sm",
                    on
                      ? "scale-110 border-teal bg-primary text-primary-foreground shadow-glow"
                      : "border-border bg-card text-muted-foreground hover:text-foreground",
                  )}
                >
                  {s.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <p
        className="surface mt-2 rounded-tile px-5 py-4 text-center text-sm text-muted-foreground shadow-soft"
        aria-live="polite"
      >
        <span className="font-semibold text-foreground">{current.label}:</span> {current.detail}
      </p>
    </div>
  );
}
