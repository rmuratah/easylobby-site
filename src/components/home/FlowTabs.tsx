import { useState } from "react";
import { CircleUser, Swords, Users } from "lucide-react";

import { cn } from "@/lib/utils";

const FLOWS = [
  {
    id: "lobby",
    icon: Users,
    title: "Lobby",
    text: "Monte o grupo, escolha a fila e veja quem está pronto, tudo numa tela limpa e direta.",
  },
  {
    id: "perfil",
    icon: CircleUser,
    title: "Perfil",
    text: "Um perfil limpo, com navegação rápida e filtros que o LoL não te dá.",
  },
  {
    id: "selecao",
    icon: Swords,
    title: "Seleção de campeões",
    text: "Bans e escolhas organizados com hierarquia visual para decidir rápido.",
  },
] as const;

type FlowId = (typeof FLOWS)[number]["id"];

function Preview({ id }: { id: FlowId }) {
  if (id === "lobby") {
    return (
      <div className="grid gap-2">
        {["bg-avatar-1", "bg-avatar-2", "bg-avatar-3", "bg-avatar-4", "bg-avatar-5"].map((c, i) => (
          <div
            key={c}
            className="flex animate-fade-up items-center gap-3 rounded-tile border border-border bg-card px-3 py-2"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <span className={cn("h-8 w-8 shrink-0 rounded-full", c)} />
            <span className="min-w-0 flex-1">
              <span className="block h-2 w-28 rounded-full bg-secondary" />
              <span className="mt-1.5 block h-1.5 w-16 rounded-full bg-secondary" />
            </span>
            <span
              className={cn(
                "shrink-0 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold",
                i === 4
                  ? "border-border bg-secondary text-muted-foreground"
                  : "border-teal/40 bg-teal-soft text-teal-ink",
              )}
            >
              {i === 4 ? "Aguardando" : "Pronto"}
            </span>
          </div>
        ))}
      </div>
    );
  }
  if (id === "perfil") {
    return (
      <div className="grid gap-3">
        <div className="flex items-center gap-4 rounded-tile border border-border bg-card p-4">
          <span className="h-12 w-12 shrink-0 rounded-full bg-avatar-3" />
          <span className="min-w-0 flex-1">
            <span className="block h-3 w-28 rounded-full bg-secondary" />
            <span className="mt-2 block h-2 w-16 rounded-full bg-secondary" />
          </span>
          <span className="shrink-0 rounded-full border border-teal/40 bg-teal-soft px-3 py-1 text-xs font-semibold text-teal-ink">
            Ouro II
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {["Todos", "Solo", "Flex", "Aram"].map((f, i) => (
            <span
              key={f}
              className={cn(
                "animate-fade-up rounded-full border px-3 py-1.5 text-xs font-semibold",
                i === 0
                  ? "border-teal bg-primary text-primary-foreground shadow-glow"
                  : "border-border bg-secondary text-muted-foreground",
              )}
              style={{ animationDelay: `${80 + i * 50}ms` }}
            >
              {f}
            </span>
          ))}
        </div>

        <div className="grid gap-2">
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className="flex animate-fade-up items-center gap-3 rounded-tile border border-border bg-card p-3"
              style={{ animationDelay: `${220 + i * 70}ms` }}
            >
              <span
                className={cn("h-8 w-8 shrink-0 rounded-full", ["bg-avatar-1", "bg-avatar-4"][i])}
              />
              <span className="min-w-0 flex-1">
                <span className="block h-2 w-24 rounded-full bg-secondary" />
                <span className="mt-2 block h-2 w-14 rounded-full bg-secondary" />
              </span>
              <span className="h-6 w-10 shrink-0 rounded-full bg-teal-soft" />
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="grid gap-4">
      <div className="flex justify-between gap-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className="h-10 flex-1 animate-fade-up rounded-card border border-destructive/40 bg-secondary"
            style={{ animationDelay: `${i * 60}ms` }}
          />
        ))}
      </div>
      <div className="grid grid-cols-6 gap-2">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className={cn(
              "aspect-square animate-fade-up rounded-card border border-border bg-raised transition-transform hover:scale-105",
              i === 4 && "border-2 border-teal shadow-glow",
            )}
            style={{ animationDelay: `${120 + i * 30}ms` }}
          />
        ))}
      </div>
      <div className="h-11 rounded-full bg-primary-gradient shadow-glow" />
    </div>
  );
}

export function FlowTabs() {
  const [active, setActive] = useState<FlowId>("lobby");

  return (
    <div className="grid items-stretch gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div role="tablist" aria-label="Fluxos do easylobby" className="grid gap-3">
        {FLOWS.map((f) => {
          const Icon = f.icon;
          const on = f.id === active;
          return (
            <button
              key={f.id}
              role="tab"
              id={`tab-${f.id}`}
              aria-selected={on}
              aria-controls="flow-panel"
              onClick={() => setActive(f.id)}
              onMouseEnter={() => setActive(f.id)}
              className={cn(
                "group flex items-start gap-4 rounded-tile border p-5 text-left transition-all duration-300",
                on
                  ? "border-teal bg-card shadow-lift"
                  : "border-border bg-transparent hover:bg-card",
              )}
            >
              <span
                className={cn(
                  "grid h-11 w-11 shrink-0 place-items-center rounded-control-lg transition-colors",
                  on ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground",
                )}
              >
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span>
                <span className="block text-lg font-semibold">{f.title}</span>
                <span className="mt-1 block text-sm text-muted-foreground">{f.text}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div
        id="flow-panel"
        role="tabpanel"
        aria-labelledby={`tab-${active}`}
        className="surface relative overflow-hidden rounded-panel p-6 shadow-soft sm:p-8"
      >
        <div className="bg-hero-art pointer-events-none absolute inset-0 opacity-50" aria-hidden />
        <div className="relative flex h-full flex-col" key={active}>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Pré-visualização ilustrativa
          </p>
          <div className="flex flex-1 items-center">
            <div className="flex min-h-[290px] w-full flex-col justify-center">
              <Preview id={active} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
