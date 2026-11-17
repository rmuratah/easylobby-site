import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search, X } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, SectionLabel } from "@/components/home/Reveal";
import { FAQ, type FaqSection } from "@/content/faq";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — easylobby" },
      {
        name: "description",
        content:
          "Perguntas frequentes sobre o easylobby: instalação, uso, desempenho, conta e suporte.",
      },
      { property: "og:title", content: "FAQ — easylobby" },
      {
        property: "og:description",
        content:
          "Perguntas frequentes sobre o easylobby: instalação, uso, desempenho, conta e suporte.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FaqPage,
});

function normalize(s: string) {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function filterFaq(sections: FaqSection[], query: string): FaqSection[] {
  const q = normalize(query.trim());
  if (!q) return sections;
  return sections
    .map((s) => ({
      ...s,
      groups: s.groups
        .map((g) => ({
          ...g,
          items: g.items.filter((i) => normalize(i.q + " " + i.a).includes(q)),
        }))
        .filter((g) => g.items.length > 0),
    }))
    .filter((s) => s.groups.length > 0);
}

function FaqPage() {
  const [query, setQuery] = useState("");
  const sections = useMemo(() => filterFaq(FAQ, query), [query]);
  const searching = query.trim().length > 0;

  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-12 sm:pt-40">
        <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
        <div className="bg-hero-art pointer-events-none absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <div className="animate-fade-up">
            <SectionLabel>FAQ</SectionLabel>
          </div>
          <h1 className="text-headline mt-6 animate-fade-up [animation-delay:80ms]">
            Perguntas <span className="text-gradient-brand">frequentes.</span>
          </h1>
          <p className="mt-4 animate-fade-up text-lg text-muted-foreground [animation-delay:160ms]">
            Tudo o que você precisa saber antes e depois de instalar.
          </p>
          <label className="glass mx-auto mt-8 flex max-w-xl animate-fade-up items-center gap-3 rounded-full px-5 py-3 shadow-soft transition-shadow focus-within:shadow-glow [animation-delay:240ms]">
            <Search className="h-5 w-5 shrink-0 text-muted-foreground" aria-hidden />
            <span className="sr-only">Buscar pergunta</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar pergunta..."
              className="w-full bg-transparent text-base outline-none placeholder:text-muted-foreground [&::-webkit-search-cancel-button]:hidden"
            />
            {searching && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Limpar busca"
                className="grid h-7 w-7 place-items-center rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                <X className="h-4 w-4" aria-hidden />
              </button>
            )}
          </label>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[14rem_1fr]">
          <nav aria-label="Seções do FAQ" className="hidden lg:block">
            <ul className="sticky top-28 grid gap-1">
              {FAQ.map((s) => {
                const visible = sections.some((v) => v.id === s.id);
                return (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className={cn(
                        "flex items-center gap-2 rounded-control px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
                        !visible && "pointer-events-none opacity-40",
                      )}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
                      {s.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="grid gap-8">
            {sections.length === 0 && (
              <div className="surface rounded-panel p-10 text-center">
                <p className="text-lg font-semibold">Nenhuma pergunta encontrada.</p>
                <p className="mt-2 text-muted-foreground">
                  Tente outra palavra ou fale com a gente pelo rodapé.
                </p>
              </div>
            )}
            {sections.map((section, si) => (
              <Reveal key={section.id} delay={searching ? 0 : Math.min(si, 2) * 60}>
                <section
                  id={section.id}
                  className="surface scroll-mt-28 rounded-panel p-6 shadow-soft sm:p-10"
                >
                  <div className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-tile bg-gold-soft text-base font-bold text-gold-ink">
                      {String(FAQ.findIndex((s) => s.id === section.id) + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h2 className="text-2xl font-bold tracking-tight">{section.title}</h2>
                      <p className="mt-1 text-muted-foreground">{section.description}</p>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-8">
                    {section.groups.map((group) => (
                      <div key={group.title}>
                        <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-ink">
                          {group.title}
                        </h3>
                        <Accordion
                          type="multiple"
                          key={searching ? "s" : "n"}
                          defaultValue={searching ? group.items.map((i) => i.q) : []}
                          className="mt-2"
                        >
                          {group.items.map((item) => (
                            <AccordionItem key={item.q} value={item.q} className="border-border">
                              <AccordionTrigger className="py-4 text-base font-semibold hover:no-underline hover:text-teal-ink">
                                {item.q}
                              </AccordionTrigger>
                              <AccordionContent className="pr-8 text-base text-muted-foreground">
                                {item.a}
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </div>
                    ))}
                  </div>
                </section>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
