import { useEffect, useRef, useState } from "react";

import { Logo } from "@/components/site/Logo";
import { cn } from "@/lib/utils";

const SLOTS = [
  { role: "Topo", initial: "T", color: "bg-avatar-1", status: "bg-status-online" },
  { role: "Selva", initial: "S", color: "bg-avatar-2", status: "bg-status-online" },
  { role: "Meio", initial: "V", color: "bg-avatar-3", status: "bg-status-online", you: true },
  { role: "Atirador", initial: "A", color: "bg-avatar-4", status: "bg-status-away" },
  { role: "Suporte", initial: "", color: "bg-secondary", status: "" },
];

/** Illustrative mockup of the easylobby lobby screen, tilts with the cursor. */
export function LobbyMock({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [seconds, setSeconds] = useState(0);
  const [searching, setSearching] = useState(true);

  useEffect(() => {
    if (!searching) return;
    const id = setInterval(() => setSeconds((s) => (s + 1) % 600), 1000);
    return () => clearInterval(id);
  }, [searching]);

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1100px) rotateY(${x * 10}deg) rotateX(${-y * 8}deg)`;
  }
  function onLeave() {
    if (ref.current) ref.current.style.transform = "perspective(1100px) rotateY(0) rotateX(0)";
  }

  const mm = String(Math.floor(seconds / 60)).padStart(1, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <div className={cn("relative", className)} onPointerMove={onMove} onPointerLeave={onLeave}>
      <div
        ref={ref}
        className="surface relative overflow-hidden rounded-panel p-5 shadow-lift transition-transform duration-300 ease-out will-change-transform"
        role="img"
        aria-label="Ilustração da tela de lobby do easylobby"
      >
        <div className="bg-hero-art pointer-events-none absolute inset-0 opacity-70" aria-hidden />
        <div className="relative">
          <div className="flex items-center justify-between">
            <Logo compact className="text-xl" />
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-status-online" />
              Conectado
            </div>
          </div>

          <div className="glass mt-5 rounded-tile p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Lobby · Ranqueada
            </p>
            <div className="mt-1 flex items-end justify-between gap-4">
              <p className="text-2xl font-bold tracking-tight">
                {searching ? "Procurando partida" : "Lobby pronto"}
              </p>
              <p className="font-bold tabular-nums text-teal-ink text-2xl" aria-hidden>
                {mm}:{ss}
              </p>
            </div>
          </div>

          <ul className="mt-4 grid gap-2">
            {SLOTS.map((s, i) => (
              <li
                key={s.role}
                className="flex items-center gap-3 rounded-card border border-border bg-card/70 p-2.5 animate-fade-up"
                style={{ animationDelay: `${300 + i * 90}ms` }}
              >
                <span
                  className={cn(
                    "relative grid h-9 w-9 place-items-center rounded-full text-sm font-bold text-foreground",
                    s.color,
                    !s.initial && "border border-dashed border-border",
                  )}
                >
                  {s.initial || "+"}
                  {s.status && (
                    <span
                      className={cn(
                        "absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-card",
                        s.status,
                      )}
                    />
                  )}
                </span>
                <span className="flex-1 text-sm font-semibold">
                  {s.initial ? s.role : "Convidar"}
                  {s.you && (
                    <span className="ml-2 rounded-full bg-teal-soft px-2 py-0.5 text-[10px] font-bold uppercase text-teal-ink">
                      você
                    </span>
                  )}
                </span>
                {s.initial && <span className={cn("h-2 w-2 rounded-full", s.status)} aria-hidden />}
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => {
              setSearching((v) => !v);
              setSeconds(0);
            }}
            className={cn(
              "mt-4 flex h-12 w-full items-center justify-center rounded-full text-sm font-semibold transition-all",
              searching
                ? "border border-border bg-secondary text-foreground hover:border-destructive hover:text-destructive"
                : "bg-primary text-primary-foreground shadow-glow animate-search-ring",
            )}
          >
            {searching ? "Cancelar busca" : "Buscar partida"}
          </button>
        </div>
      </div>
    </div>
  );
}
