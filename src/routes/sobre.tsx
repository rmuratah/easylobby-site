import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, Bug, Gauge, Info, Lightbulb, MessageSquarePlus, Plus } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Reveal, SectionLabel } from "@/components/home/Reveal";
import { SpotlightCard } from "@/components/home/SpotlightCard";
import { DiscordIcon } from "@/components/site/DiscordIcon";
import { Logo } from "@/components/site/Logo";
import { ActionCard } from "@/components/sobre/ActionCard";
import { ChapterRail } from "@/components/sobre/ChapterRail";
import { DuoCards } from "@/components/sobre/DuoCards";
import { Principles } from "@/components/sobre/Principles";
import { ProcessLoop } from "@/components/sobre/ProcessLoop";
import { StackOrbit } from "@/components/sobre/StackOrbit";
import { Timeline } from "@/components/sobre/Timeline";
import { ABOUT_FAQ } from "@/content/sobre";
import { SITE } from "@/lib/site";

const DESCRIPTION =
  "Ricco e Murata contam por que criaram o easylobby, uma interface mais leve para o client do LoL, e como o projeto é construído com código gerado por IA.";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — easylobby" },
      { name: "description", content: DESCRIPTION },
      {
        property: "og:title",
        content: "Sobre o easylobby — uma forma mais leve de chegar à partida",
      },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SobrePage,
});

const CHAPTERS = [
  { id: "inicio", label: "Início" },
  { id: "historia", label: "Por que começamos" },
  { id: "construindo", label: "O que estamos construindo" },
  { id: "dupla", label: "Quem está por trás" },
  { id: "processo", label: "Como o projeto evolui" },
  { id: "jornada", label: "Nossa jornada" },
  { id: "perguntas", label: "Perguntas" },
  { id: "contribuir", label: "Contribuir" },
] as const;

function Heading({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <Reveal className="max-w-2xl">
      <SectionLabel>{label}</SectionLabel>
      <h2 id={`${id}-title`} className="text-headline mt-5">
        {title}
      </h2>
      {children && <div className="mt-5 grid gap-4 text-lg text-muted-foreground">{children}</div>}
    </Reveal>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
      <div className="bg-hero-art pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-background"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="animate-fade-up">
            <SectionLabel>Sobre o easylobby</SectionLabel>
          </div>
          <h1 className="text-display mt-6 animate-fade-up [animation-delay:80ms]">
            Uma forma mais leve de <span className="text-gradient-brand">chegar à partida.</span>
          </h1>
          <div className="mt-6 grid max-w-xl animate-fade-up gap-4 text-lg text-muted-foreground [animation-delay:160ms]">
            <p>
              O <Logo className="text-foreground" /> nasceu da vontade de simplificar uma
              experiência que faz parte da nossa rotina: abrir o League of Legends, reunir os amigos
              e jogar.
            </p>
            <p>
              Somos <strong className="font-semibold text-foreground">Ricco</strong> e{" "}
              <strong className="font-semibold text-foreground">Murata</strong>, amigos desde a
              adolescência e desenvolvedores. Estamos construindo uma interface alternativa para o
              client do LoL, com foco em leveza, praticidade e no que procuramos como jogadores.
            </p>
          </div>
          <div className="mt-9 flex flex-wrap gap-3 animate-fade-up [animation-delay:240ms]">
            <Button asChild size="lg">
              <a href="#historia">
                Conheça a história <ArrowDown aria-hidden />
              </a>
            </Button>
            {SITE.discordUrl ? (
              <Button asChild size="lg" variant="secondary">
                <a href={SITE.discordUrl} target="_blank" rel="noreferrer">
                  <DiscordIcon /> Entre no nosso Discord
                </a>
              </Button>
            ) : (
              <Button size="lg" variant="secondary" disabled>
                <DiscordIcon /> Nosso Discord em breve
              </Button>
            )}
          </div>
        </div>

        <div className="animate-fade-up [animation-delay:200ms]">
          <StackOrbit />
        </div>
      </div>
    </section>
  );
}

function Origin() {
  return (
    <section id="historia" aria-labelledby="historia-title" className="scroll-mt-28 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Heading
          id="historia"
          label="Por que começamos"
          title="Uma ideia que juntou curiosidade e necessidade."
        />

        <div className="mt-12 grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr]">
          <Reveal>
            <SpotlightCard className="h-full">
              <span className="grid h-12 w-12 place-items-center rounded-tile bg-teal-soft text-teal-ink">
                <Lightbulb className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-teal-ink">
                A curiosidade
              </h3>
              <div className="mt-3 grid gap-3 text-muted-foreground">
                <p>
                  A ideia partiu do Murata. A gente já conversava sobre o potencial da inteligência
                  artificial em projetos maiores, e ele já estava experimentando essas ferramentas
                  no desenvolvimento de um jogo com outros amigos.
                </p>
                <p>
                  Quando o Ricco comentou que tinha assinado um plano pago do ChatGPT, veio o
                  convite para construir algo juntos. Queríamos testar uma proposta concreta:{" "}
                  <span className="font-semibold text-foreground">
                    desenvolver um projeto sem escrever ou editar código manualmente.
                  </span>
                </p>
              </div>
            </SpotlightCard>
          </Reveal>

          <div className="flex items-center justify-center" aria-hidden>
            <span className="grid h-12 w-12 place-items-center rounded-full border border-border bg-card text-muted-foreground shadow-soft">
              <Plus className="h-5 w-5" />
            </span>
          </div>

          <Reveal delay={100}>
            <SpotlightCard className="h-full">
              <span className="grid h-12 w-12 place-items-center rounded-tile bg-gold-soft text-gold-ink">
                <Gauge className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-gold-ink">
                A necessidade
              </h3>
              <p className="mt-3 text-muted-foreground">
                O peso do client do LoL era um problema que fazia sentido investigar. Para o Ricco,
                isso aparecia no uso diário: dificuldade para manter outros aplicativos abertos,
                lentidão ao alternar janelas e uma máquina que continuava ocupada mesmo quando ele
                só estava no lobby.
              </p>
            </SpotlightCard>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <div className="glass relative mx-auto mt-4 flex max-w-3xl flex-col items-center gap-4 rounded-panel p-6 text-center shadow-soft sm:flex-row sm:text-left">
            <span
              className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-teal/30 bg-teal-soft text-foreground shadow-glow dark:border-teal/40 dark:bg-secondary"
              aria-hidden
            >
              <Logo compact className="text-xl" />
            </span>
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">
                O easylobby surgiu desse encontro.
              </span>{" "}
              De um lado, a curiosidade de explorar uma nova forma de desenvolver. Do outro, a
              vontade de melhorar uma experiência que a gente conhecia de perto.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Building() {
  return (
    <section id="construindo" aria-labelledby="construindo-title" className="scroll-mt-28 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Heading
          id="construindo"
          label="O que estamos construindo"
          title="Leveza sem perder o cuidado com a experiência."
        >
          <p>
            Queremos que preparar uma partida seja simples: escolher o modo, organizar o grupo,
            ajustar as posições e seguir para o jogo.
          </p>
          <p>
            Estamos cuidando da aparência do aplicativo, mas os efeitos visuais não vêm antes da
            leveza. Transições e detalhes são bem-vindos quando ajudam na experiência. Se uma
            animação ou iluminação começar a pesar, preferimos simplificar.
          </p>
          <p>
            Nossa referência é o jeito como nós e nossos amigos usamos o LoL. Para muita gente que
            joga há anos, o principal é conseguir entrar, encontrar o grupo e jogar. É para essa
            rotina que estamos olhando primeiro, sem deixar de ouvir outras formas de usar o client.
          </p>
        </Heading>

        <Reveal delay={120} className="lg:sticky lg:top-28">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            O que orienta as decisões
          </p>
          <Principles />
          <p className="mt-4 text-sm text-muted-foreground">
            O aplicativo usa Rust no núcleo, React e TypeScript na interface e Tauri no desktop. A
            comunicação acontece pela API local do client, e o desenvolvimento também conta com um
            ambiente de simulação para reproduzir cenários.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Duo() {
  return (
    <section id="dupla" aria-labelledby="dupla-title" className="scroll-mt-28 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Heading id="dupla" label="Quem está por trás" title={<>Ricco e Murata</>}>
          <p>
            Somos amigos desde a adolescência. Um amigo em comum apresentou a gente pelo Discord,
            mesmo morando perto um do outro. O LoL faz parte dessa convivência, embora cada um tenha
            seu jeito de jogar.
          </p>
          <p>
            No projeto, dividimos as tarefas e conversamos sobre as decisões. Existem discordâncias
            de design e estrutura, como em qualquer trabalho em conjunto, mas a parceria tem sido
            tranquila e com cuidado para equilibrar a carga de cada um.
          </p>
        </Heading>
        <Reveal delay={100} className="mt-12">
          <DuoCards />
        </Reveal>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="processo" aria-labelledby="processo-title" className="scroll-mt-28 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Heading
          id="processo"
          label="Como o projeto evolui"
          title={
            <>
              Código gerado por IA.{" "}
              <span className="text-gradient-brand">Planejamento e testes feitos por nós.</span>
            </>
          }
        >
          <p>
            Desde o começo, a proposta foi construir o easylobby sem escrever ou editar código
            manualmente. Segundo nossa experiência até aqui, esse tem sido o caminho seguido.
          </p>
        </Heading>

        <Reveal delay={100} className="mt-12">
          <ProcessLoop />
        </Reveal>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <div className="surface h-full rounded-panel p-7 shadow-soft">
              <h3 className="text-lg font-bold tracking-tight">Como acompanhamos</h3>
              <p className="mt-3 text-muted-foreground">
                Nosso acompanhamento é principalmente funcional: executamos o aplicativo, testamos
                as mudanças e usamos os resultados para orientar os próximos ajustes. As aprovações
                se apoiam nesses testes, nos relatórios disponíveis e nas verificações
                automatizadas.
              </p>
              <p className="mt-3 text-muted-foreground">
                Os dois já são desenvolvedores, mas essa forma de conduzir um projeto inteiro é nova
                para nós. A velocidade tem sido uma das maiores surpresas; ela também deixa claro
                que testar o uso do aplicativo e compreender integralmente sua implementação são
                coisas diferentes.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="relative flex h-full items-center rounded-panel border border-gold bg-gold-soft p-7">
              <span
                className="absolute -top-[9px] left-10 h-4 w-4 rotate-45 border-l border-t border-gold bg-gold-soft"
                aria-hidden
              />
              <p className="flex gap-3 text-foreground">
                <Info className="mt-1 h-5 w-5 shrink-0 text-gold-ink" aria-hidden />
                <span>
                  Não realizamos uma revisão humana completa, linha por linha, de todo o código
                  gerado. No entanto, analisamos cuidadosamente os relatórios produzidos após cada
                  modificação e executamos uma bateria de testes para garantir a integridade e o
                  correto funcionamento do aplicativo.
                </span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="jornada" aria-labelledby="jornada-title" className="scroll-mt-28 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Heading
            id="jornada"
            label="Nossa jornada"
            title="Ver o conjunto funcionando foi um marco."
          >
            <p>
              Ricco já usa o easylobby para jogar e relata uma navegação mais rápida e agradável no
              seu computador. É uma percepção de uso, não uma promessa de desempenho igual para
              todas as máquinas.
            </p>
          </Heading>
          <Reveal delay={100} className="mt-8">
            <div className="surface rounded-tile p-6 shadow-soft">
              <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-teal-ink">
                <Lightbulb className="h-4 w-4" aria-hidden /> Dificuldades no caminho
              </h3>
              <p className="mt-3 text-muted-foreground">
                Duas se destacaram: entender os endpoints e os comportamentos da API do client e
                transformar uma intenção de layout em instruções suficientemente claras para a IA.
                As referências visuais ajudaram, mas testar e ajustar continuou sendo necessário.
              </p>
            </div>
          </Reveal>
        </div>
        <Timeline />
      </div>
    </section>
  );
}

function Questions() {
  return (
    <section id="perguntas" aria-labelledby="perguntas-title" className="scroll-mt-28 py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Heading id="perguntas" label="Perguntas" title="Ainda ficou alguma dúvida?" />
        <Reveal delay={100}>
          <Accordion
            type="single"
            collapsible
            className="surface rounded-panel px-6 shadow-soft sm:px-8"
          >
            {ABOUT_FAQ.map((item) => (
              <AccordionItem key={item.q} value={item.q} className="border-border last:border-b-0">
                <AccordionTrigger className="py-5 text-base font-semibold hover:no-underline hover:text-teal-ink">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pr-8 text-base text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

function Contribute() {
  return (
    <section id="contribuir" aria-labelledby="contribuir-title" className="scroll-mt-28 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="surface relative overflow-hidden rounded-panel p-8 shadow-lift sm:p-14">
            <div className="bg-hero-art pointer-events-none absolute inset-0" aria-hidden />
            <div className="bg-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden />
            <div className="relative">
              <div className="max-w-2xl">
                <SectionLabel>Contribuir</SectionLabel>
                <h2 id="contribuir-title" className="text-headline mt-5">
                  Um projeto para usar, compartilhar e melhorar.
                </h2>
                <div className="mt-5 grid gap-4 text-lg text-muted-foreground">
                  <p>
                    O easylobby não nasceu de um plano de lucro. Nasceu de um experimento e de uma
                    necessidade real. Nosso primeiro objetivo é ter uma experiência que funcione bem
                    para nós e para nossos amigos.
                  </p>
                  <p>
                    Esta também é nossa primeira experiência colocando um projeto próprio em contato
                    com o público. Queremos aprender com quem usar: saber o que funciona, onde ainda
                    existe dificuldade e o que pode melhorar.
                  </p>
                  <p>
                    Sugestões e relatos de bugs são bem-vindos. Se mais pessoas se identificarem com
                    a proposta, vamos gostar de construir essa próxima etapa com esse retorno. Mesmo
                    que o alcance seja pequeno, o projeto continua tendo valor para a gente.
                  </p>
                </div>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-2">
                <ActionCard
                  primary
                  icon={<MessageSquarePlus className="h-6 w-6" aria-hidden />}
                  title="Enviar uma sugestão"
                  detail="Conte o que faria diferença na sua rotina."
                  href={SITE.suggestionUrl}
                />
                <ActionCard
                  icon={<Bug className="h-6 w-6" aria-hidden />}
                  title="Reportar um problema"
                  detail="Encontrou algo estranho? Ajude a gente a corrigir."
                  href={SITE.bugReportUrl}
                />
              </div>

              <p className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">
                O easylobby é um projeto independente, sem afiliação ou endosso da Riot Games.
                League of Legends é uma marca da Riot Games.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SobrePage() {
  return (
    <>
      <ChapterRail chapters={CHAPTERS} />
      <Hero />
      <Origin />
      <Building />
      <Duo />
      <Process />
      <Journey />
      <Questions />
      <Contribute />
    </>
  );
}
