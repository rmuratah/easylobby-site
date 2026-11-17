import { Mail } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Logo } from "./Logo";
import { DiscordIcon } from "@/components/site/DiscordIcon";
import { SITE } from "@/lib/site";

function SupportCard({
  icon,
  title,
  detail,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  detail: string;
  href: string;
}) {
  const content = (
    <>
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-tile bg-teal-soft text-teal-ink transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-base font-semibold text-foreground">{title}</span>
        <span className="block truncate text-sm text-muted-foreground">{detail}</span>
      </span>
    </>
  );
  const cls =
    "group surface flex items-center gap-4 rounded-tile p-4 shadow-soft transition-all duration-300";
  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${cls} hover:-translate-y-1 hover:border-teal hover:shadow-lift`}
    >
      {content}
    </a>
  ) : (
    <div className={`${cls} opacity-80`} aria-disabled>
      {content}
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.2fr_1fr]">
        <div>
          <Logo className="text-3xl" />
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Um client leve para League of Legends. Projeto independente, sem vínculo com a Riot
            Games.
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Suporte
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
            <SupportCard
              icon={<DiscordIcon className="block h-6 w-6" />}
              title="Discord"
              detail={SITE.discordUrl ? "Entre na comunidade" : "Link em breve"}
              href={SITE.discordUrl}
            />
            <SupportCard
              icon={<Mail className="h-6 w-6" aria-hidden />}
              title="E-mail"
              detail={SITE.supportEmail || "Endereço em breve"}
              href={SITE.supportEmail ? `mailto:${SITE.supportEmail}` : ""}
            />
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-6 pt-5 text-xs text-muted-foreground">
          <Link
            to="/politicas-de-privacidade"
            className="font-semibold text-teal-ink underline underline-offset-4 transition-colors hover:text-foreground"
          >
            Políticas de Privacidade
          </Link>{" "}
          · Termos de Uso em breve.
        </p>
        <p className="mx-auto max-w-6xl px-6 py-5 text-xs text-muted-foreground">
          © {new Date().getFullYear()} easylobby. O easylobby não é endossado pela Riot Games e não
          reflete as opiniões da Riot Games nem de ninguém oficialmente envolvido na produção ou
          gestão das propriedades da Riot Games. Riot Games e todas as propriedades associadas são
          marcas comerciais ou marcas registradas da Riot Games, Inc.
        </p>
      </div>
    </footer>
  );
}
