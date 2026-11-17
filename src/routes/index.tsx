import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Cpu,
  Feather,
  Layers,
  MemoryStick,
  MonitorSmartphone,
  Palette,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { CountUp } from "@/components/home/CountUp";
import { CpuBars } from "@/components/home/CpuBars";
import { DownloadCTA } from "@/components/home/DownloadCTA";
import { FlowTabs } from "@/components/home/FlowTabs";
import { LobbyMock } from "@/components/home/LobbyMock";
import { ScrollCue } from "@/components/home/ScrollCue";
import { Reveal, SectionLabel } from "@/components/home/Reveal";
import { SpotlightCard } from "@/components/home/SpotlightCard";
import { Logo } from "@/components/site/Logo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "easylobby — um client leve para League of Legends" },
      {
        name: "description",
        content:
          "easylobby substitui a interface visual do lobby, fila e seleção de campeões do LoL por uma experiência leve, limpa e com identidade própria.",
      },
      { property: "og:title", content: "easylobby — um client leve para League of Legends" },
      {
        property: "og:description",
        content: "Lobby, fila e seleção de campeões numa interface leve e minimalista.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Hero() {
  function onMove(e: React.PointerEvent<HTMLElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  }
  return (
    <section onPointerMove={onMove} className="relative overflow-hidden pt-32 sm:pt-40">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
      <div className="bg-hero-art pointer-events-none absolute inset-0" aria-hidden />
      <div className="spotlight pointer-events-none absolute inset-0" aria-hidden />
      {/* hero glow fades into the page so there's no hard edge */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-background"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h1 className="text-display mt-6 animate-fade-up [animation-delay:80ms]">
            O lobby do LoL,
            <br />
            <span className="text-gradient-brand">muito mais leve.</span>
          </h1>
          <p className="mt-6 max-w-lg animate-fade-up text-lg text-muted-foreground [animation-delay:160ms]">
            O <Logo className="text-foreground" /> troca a interface visual do lobby, da fila e da
            seleção de campeões por uma experiência limpa, rápida e com identidade própria.
          </p>
          <div className="mt-9 flex flex-wrap gap-3 animate-fade-up [animation-delay:240ms]">
            <Button asChild size="lg">
              <a href="#download">
                Quero baixar <ArrowRight aria-hidden />
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="#fluxos">Ver como funciona</a>
            </Button>
          </div>
        </div>

        <div className="animate-fade-up [animation-delay:200ms]">
          <div className="animate-float">
            <LobbyMock className="mx-auto max-w-md" />
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Passe o mouse e clique no botão: é interativo.
          </p>
        </div>
      </div>

      <ScrollCue href="#fluxos" />
    </section>
  );
}

function Section({
  id,
  label,
  title,
  intro,
  children,
}: {
  id?: string;
  label: string;
  title: React.ReactNode;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-12 max-w-2xl">
          <SectionLabel>{label}</SectionLabel>
          <h2 className="text-headline mt-5">{title}</h2>
          {intro && <p className="mt-4 text-lg text-muted-foreground">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}

function Lightness() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="surface relative overflow-hidden rounded-panel p-8 shadow-lift sm:p-14">
            <div className="bg-hero-art pointer-events-none absolute inset-0" aria-hidden />
            <div className="relative grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <SectionLabel>Leveza</SectionLabel>
                <h2 className="text-headline mt-5">Menos peso na sua máquina.</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Um agente em Rust e uma interface enxuta deixam a experiência mais leve para o
                  computador enquanto você está no lobby: menos memória ocupada e o uso da CPU cai
                  pela metade.
                </p>
              </div>
              <div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="glass rounded-tile p-6">
                    <MemoryStick className="h-6 w-6 text-teal" aria-hidden />
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Memória · medição inicial
                    </p>
                    <p className="mt-2 whitespace-nowrap text-[clamp(2.5rem,5vw,3.5rem)] font-bold leading-none tracking-[-0.04em] text-teal-ink">
                      ~<CountUp to={885} />
                      <span className="text-[0.4em] tracking-tight"> MB</span>
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground">
                      economizados numa medição inicial do projeto.
                    </p>
                  </div>
                  <div className="glass rounded-tile p-6">
                    <Cpu className="h-6 w-6 text-gold" aria-hidden />
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Processador
                    </p>
                    <p className="mt-2 whitespace-nowrap text-[clamp(2.5rem,5vw,3.5rem)] font-bold leading-none tracking-[-0.04em] text-gold-ink">
                      −<CountUp to={50} />
                      <span className="text-[0.4em] tracking-tight">%</span>
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground">no uso da CPU.</p>
                  </div>
                </div>
                <CpuBars className="mt-4" />
                <p className="mt-4 text-xs text-muted-foreground">
                  Resultados de testes do projeto, não uma garantia. Podem variar conforme o
                  computador e o uso.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const STACK = [
  {
    icon: Cpu,
    tag: "Rust",
    title: "Agente nativo",
    text: "Um agente em Rust conversa com o client e faz o trabalho pesado com pouco consumo.",
  },
  {
    icon: Layers,
    tag: "React + TypeScript",
    title: "Interface moderna",
    text: "Telas pensadas do zero, com hierarquia clara e animações discretas.",
  },
  {
    icon: MonitorSmartphone,
    tag: "Tauri 2",
    title: "App de desktop enxuto",
    text: "Um shell leve que empacota tudo num aplicativo de desktop pequeno e rápido.",
  },
];

function Principles() {
  return (
    <div className="grid gap-5 md:grid-cols-3 md:grid-rows-2">
      <Reveal className="md:col-span-2 md:row-span-2">
        <SpotlightCard className="h-full">
          <Feather className="h-8 w-8 text-teal" aria-hidden />
          <h3 className="mt-6 text-3xl font-bold tracking-tight">Leve, limpo e direto ao ponto.</h3>
          <p className="mt-3 max-w-md text-muted-foreground">
            Cards flutuantes, bordas finas e espaço para respirar. Só o que importa para você entrar
            na partida.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-3" aria-hidden>
            {["bg-avatar-2", "bg-avatar-3", "bg-avatar-4"].map((c, i) => (
              <div
                key={c}
                className="rounded-tile border border-border bg-background p-4 transition-transform duration-500 group-hover:-translate-y-2"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className={`block h-8 w-8 rounded-full ${c}`} />
                <span className="mt-3 block h-2 w-3/4 rounded-full bg-secondary" />
                <span className="mt-2 block h-2 w-1/2 rounded-full bg-secondary" />
              </div>
            ))}
          </div>
        </SpotlightCard>
      </Reveal>
      <Reveal delay={100}>
        <SpotlightCard className="h-full">
          <Palette className="h-7 w-7 text-gold" aria-hidden />
          <h3 className="mt-5 text-xl font-bold">Identidade própria</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Teal e dourado, tipografia Figtree e um visual que não tenta imitar ninguém.
          </p>
        </SpotlightCard>
      </Reveal>
      <Reveal delay={200}>
        <SpotlightCard className="h-full">
          <ShieldCheck className="h-7 w-7 text-teal" aria-hidden />
          <h3 className="mt-5 text-xl font-bold">Independente</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Projeto não oficial, sem vínculo ou aprovação da Riot Games.
          </p>
        </SpotlightCard>
      </Reveal>
    </div>
  );
}

function Index() {
  return (
    <>
      <Hero />

      <Section
        id="fluxos"
        label="O que muda"
        title={
          <>
            Várias telas, <span className="text-teal-ink">zero excesso.</span>
          </>
        }
        intro="O easylobby cuida dos momentos antes da partida. Passe o mouse em cada etapa para ver."
      >
        <Reveal>
          <FlowTabs />
        </Reveal>
      </Section>

      <Lightness />

      <Section
        label="Por dentro"
        title="Feito com tecnologia moderna."
        intro="Cada parte tem um papel claro, para o app ficar rápido sem pesar."
      >
        <div className="relative grid gap-5 md:grid-cols-3">
          <div
            className="pointer-events-none absolute left-[16%] right-[16%] top-14 hidden h-px bg-gradient-to-r from-transparent via-teal to-transparent md:block"
            aria-hidden
          />
          {STACK.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.tag} delay={i * 120}>
                <SpotlightCard className="h-full">
                  <span className="relative grid h-14 w-14 place-items-center rounded-tile bg-primary text-primary-foreground shadow-glow transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-gold-ink">
                    {s.tag}
                  </p>
                  <h3 className="mt-2 text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section label="Jeito easylobby" title="Pensado para quem só quer jogar.">
        <Principles />
      </Section>

      <section id="download" className="scroll-mt-28 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="surface relative overflow-hidden rounded-panel px-6 py-16 shadow-lift sm:py-20">
              <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
              <div className="bg-hero-art pointer-events-none absolute inset-0" aria-hidden />
              <div className="relative text-center">
                <SectionLabel>Download</SectionLabel>
                <h2 className="text-headline mx-auto mt-5 max-w-xl">
                  Sua próxima partida começa <span className="text-gradient-brand">aqui.</span>
                </h2>
                <div className="mt-6">
                  <DownloadCTA />
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Dúvidas antes de instalar?{" "}
                  <Link
                    to="/faq"
                    className="font-semibold text-teal-ink underline-offset-4 hover:underline"
                  >
                    Veja o FAQ
                  </Link>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
