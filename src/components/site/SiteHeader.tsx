import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { DownloadButton } from "./DownloadButton";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/atualizacoes", label: "Atualizações" },
  { to: "/faq", label: "FAQ" },
  { to: "/sobre", label: "Sobre" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className={cn(
          "mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full px-3 pl-6 transition-all duration-500",
          scrolled ? "glass shadow-soft" : "border border-transparent",
        )}
      >
        <Link to="/" className="text-2xl" aria-label="easylobby, página inicial">
          <Logo />
        </Link>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-1 rounded-full p-1">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: true }}
                  className="relative block rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground data-[status=active]:bg-teal-soft data-[status=active]:text-teal-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <DownloadButton className="hidden sm:inline-flex" />
          <DownloadButton iconOnly className="sm:hidden" />
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card md:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <Menu className="h-5 w-5" aria-hidden />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Principal (celular)"
          className="glass animate-fade-up mx-auto mt-2 max-w-6xl rounded-panel p-3 shadow-lift md:hidden"
        >
          <ul className="grid gap-1">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: true }}
                  onClick={() => setOpen(false)}
                  className="block rounded-tile px-4 py-3 text-base font-semibold text-muted-foreground hover:bg-secondary hover:text-foreground data-[status=active]:bg-teal-soft data-[status=active]:text-teal-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-2 border-t border-border pt-3">
            <DownloadButton full onClick={() => setOpen(false)} />
          </div>
        </nav>
      )}
    </header>
  );
}
