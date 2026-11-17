import { useRef, useState } from "react";
import { ArrowDown, Check } from "lucide-react";

import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

type Phase = "idle" | "accepting" | "done";

const PARTICLES = Array.from({ length: 14 }, (_, i) => i);

/**
 * "Partida encontrada" download button: a pulsing ring that fills up when clicked,
 * bursts, then sends the user to the download (or says it's coming soon).
 */
export function DownloadCTA() {
  const [phase, setPhase] = useState<Phase>("idle");
  const wrap = useRef<HTMLDivElement>(null);
  const btn = useRef<HTMLButtonElement>(null);

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse" || !wrap.current || !btn.current) return;
    const r = wrap.current.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * 0.18;
    const y = (e.clientY - (r.top + r.height / 2)) * 0.18;
    btn.current.style.transform = `translate(${x}px, ${y}px)`;
  }
  function onLeave() {
    if (btn.current) btn.current.style.transform = "translate(0,0)";
  }

  function onClick() {
    if (phase !== "idle") {
      if (phase === "done") setPhase("idle");
      return;
    }
    setPhase("accepting");
    window.setTimeout(() => {
      setPhase("done");
      if (SITE.downloadUrl) window.location.href = SITE.downloadUrl;
    }, 1400);
  }

  const R = 46;
  const C = 2 * Math.PI * R;

  return (
    <div className="flex flex-col items-center text-center">
      <div
        ref={wrap}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        className="relative grid h-80 w-80 place-items-center sm:h-96 sm:w-96"
      >
        {/* orbit rings */}
        <span
          className="absolute inset-0 rounded-full border border-dashed border-border"
          aria-hidden
        />
        <span className="absolute inset-10 rounded-full border border-border/60" aria-hidden />
        <span
          className="animate-spin-ring absolute inset-0 rounded-full opacity-40 blur-2xl conic-ring"
          aria-hidden
        />

        <button
          ref={btn}
          type="button"
          onClick={onClick}
          aria-live="polite"
          className={cn(
            "group relative grid h-56 w-56 place-items-center rounded-full transition-transform duration-300 ease-out sm:h-64 sm:w-64",
            phase === "idle" && "animate-search-ring",
          )}
        >
          {/* spinning gradient border */}
          <span
            className="animate-spin-ring conic-ring absolute inset-0 rounded-full"
            aria-hidden
          />
          <span className="absolute inset-[3px] rounded-full bg-card shadow-lift" aria-hidden />

          {/* accept progress ring */}
          <svg viewBox="0 0 100 100" className="absolute inset-3 -rotate-90" aria-hidden>
            <circle
              cx="50"
              cy="50"
              r={R}
              fill="none"
              className="stroke-secondary"
              strokeWidth="3"
            />
            <circle
              cx="50"
              cy="50"
              r={R}
              fill="none"
              strokeLinecap="round"
              strokeWidth="3"
              className="stroke-teal"
              style={{
                strokeDasharray: C,
                strokeDashoffset: phase === "idle" ? C : 0,
                transition:
                  phase === "accepting" ? "stroke-dashoffset 1.4s cubic-bezier(.6,0,.3,1)" : "none",
              }}
            />
          </svg>

          <span className="relative flex flex-col items-center gap-2 px-6">
            {phase === "done" ? (
              <span className="grid h-16 w-16 animate-fade-up place-items-center rounded-full bg-primary text-primary-foreground shadow-glow">
                <Check className="!h-8 !w-8" aria-hidden />
              </span>
            ) : (
              <span
                className={cn(
                  "grid h-16 w-16 place-items-center rounded-full bg-primary-gradient text-primary-foreground shadow-glow transition-transform duration-300 group-hover:scale-110",
                  phase === "accepting" && "animate-bounce",
                )}
              >
                <ArrowDown className="!h-7 !w-7" aria-hidden />
              </span>
            )}
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-ink">
              {phase === "idle" && "Partida encontrada"}
              {phase === "accepting" && "Aceitando…"}
              {phase === "done" && (SITE.downloadUrl ? "Baixando" : "Em breve")}
            </span>
            <span className="text-2xl font-bold tracking-tight text-foreground">
              {phase === "done"
                ? SITE.downloadUrl
                  ? "Bom jogo!"
                  : "Quase lá!"
                : "Baixar easylobby"}
            </span>
          </span>

          {phase === "done" &&
            PARTICLES.map((i) => (
              <span
                key={i}
                aria-hidden
                className={cn(
                  "animate-burst absolute left-1/2 top-1/2 h-2.5 w-2.5 rounded-full",
                  i % 3 === 0 ? "bg-gold" : "bg-teal",
                )}
                style={{ ["--a" as string]: `${(360 / PARTICLES.length) * i}deg` }}
              />
            ))}
        </button>
      </div>

      <p className="mt-6 max-w-md text-sm text-muted-foreground" aria-live="polite">
        {phase === "done" && !SITE.downloadUrl
          ? "O download ainda não foi liberado. Acompanhe as novidades na página de Atualizações."
          : "Clique para aceitar a partida e começar o download."}
      </p>
    </div>
  );
}
