import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { SpotlightCard } from "@/components/home/SpotlightCard";
import { GitHubIcon } from "@/components/site/GitHubIcon";
import { TEAM } from "@/content/sobre";
import { cn } from "@/lib/utils";

function PersonCard({ person }: { person: (typeof TEAM)[number] }) {
  const [open, setOpen] = useState(false);
  return (
    <SpotlightCard className="h-full">
      <div className="flex items-center gap-4">
        <img
          src={person.photo}
          alt={person.photoAlt}
          width={64}
          height={64}
          className="h-16 w-16 shrink-0 rounded-full object-cover ring-4 ring-background transition-transform duration-300 group-hover:scale-105"
        />
        <div className="min-w-0">
          <h3 className="text-2xl font-bold tracking-tight">{person.name}</h3>
          <a
            href={person.github}
            target="_blank"
            rel="noreferrer"
            className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-ink hover:underline"
          >
            <GitHubIcon className="h-4 w-4" />
            {person.githubHandle}
            <span className="sr-only"> (GitHub de {person.name}, abre em nova aba)</span>
          </a>
        </div>
      </div>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Frentes de ${person.name}`}>
        {person.focus.map((f) => (
          <li
            key={f}
            className="rounded-full bg-teal-soft px-3 py-1 text-xs font-semibold text-teal-ink"
          >
            {f}
          </li>
        ))}
      </ul>

      <p className="mt-5 text-muted-foreground">{person.short}</p>

      <Collapsible open={open} onOpenChange={setOpen} className="mt-5">
        <CollapsibleTrigger className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold transition-colors hover:border-teal hover:text-teal-ink">
          {open ? "Fechar trajetória" : "Conheça a trajetória"}
          <ChevronDown
            className={cn("h-4 w-4 transition-transform duration-300", open && "rotate-180")}
            aria-hidden
          />
        </CollapsibleTrigger>
        <CollapsibleContent className="animate-fade-up">
          <div className="mt-4 grid gap-3 border-l-2 border-gold pl-4 text-sm text-muted-foreground">
            {person.long.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </SpotlightCard>
  );
}

export function DuoCards() {
  const [murata, ricco] = TEAM;
  return (
    <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr]">
      <PersonCard person={murata} />
      <div className="flex items-center justify-center" aria-hidden>
        <div className="relative flex items-center lg:h-full lg:flex-col">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-border lg:h-full lg:w-px lg:bg-gradient-to-b" />
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-gold bg-card text-xl font-bold text-gold-ink shadow-lift">
            &
          </span>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-border lg:h-full lg:w-px lg:bg-gradient-to-t" />
        </div>
      </div>
      <PersonCard person={ricco} />
    </div>
  );
}
