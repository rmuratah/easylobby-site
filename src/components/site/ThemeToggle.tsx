import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

import { THEME_STORAGE_KEY, resolveTheme, type Theme } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("escuro");

  useEffect(() => {
    setTheme(resolveTheme(document.documentElement.getAttribute("data-theme")));
  }, []);

  function toggle() {
    const next: Theme = theme === "escuro" ? "claro" : "escuro";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* storage blocked: theme still applies for this visit */
    }
  }

  const isDark = theme === "escuro";
  const label = isDark ? "Mudar para tema claro" : "Mudar para tema escuro";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={cn(
        "relative grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-border bg-card text-foreground transition-all hover:border-teal hover:text-teal-ink hover:shadow-glow",
        className,
      )}
    >
      <Sun
        aria-hidden
        className={cn(
          "absolute h-[18px] w-[18px] transition-all duration-500",
          isDark ? "translate-y-6 rotate-90 opacity-0" : "translate-y-0 rotate-0 opacity-100",
        )}
      />
      <Moon
        aria-hidden
        className={cn(
          "absolute h-[18px] w-[18px] transition-all duration-500",
          isDark ? "translate-y-0 rotate-0 opacity-100" : "-translate-y-6 -rotate-90 opacity-0",
        )}
      />
    </button>
  );
}
