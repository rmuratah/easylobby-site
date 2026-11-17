import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/home/Reveal";

/** Shared shell for pages that are planned but not written yet. */
export function ComingSoon({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-40 pb-16">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
      <div className="bg-hero-art pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <div className="animate-fade-up">
          <SectionLabel>{label}</SectionLabel>
        </div>
        <h1 className="text-headline mt-6 animate-fade-up [animation-delay:80ms]">{title}</h1>
        <div className="mt-5 animate-fade-up text-lg text-muted-foreground [animation-delay:160ms]">
          {children}
        </div>
        <div className="mt-10 flex justify-center animate-fade-up [animation-delay:240ms]">
          <Button asChild size="lg" variant="secondary">
            <Link to="/">
              <ArrowLeft aria-hidden /> Voltar para a Home
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
