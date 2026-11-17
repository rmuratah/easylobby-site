/**
 * Transition from the hero into the next section: an animated mouse plus a glowing
 * drop that runs down a thin line, pulling the eye to what comes next.
 */
export function ScrollCue({ href }: { href: string }) {
  return (
    <div className="relative mt-16 flex flex-col items-center sm:mt-20">
      <a
        href={href}
        className="group flex flex-col items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
      >
        <span className="grid h-11 w-7 justify-center rounded-full border-2 border-border pt-2 transition-colors group-hover:border-teal">
          <span className="animate-scroll-wheel block h-2 w-1 rounded-full bg-gold" aria-hidden />
        </span>
        Role para descobrir
      </a>
      <div
        className="relative mt-4 h-28 w-px overflow-hidden bg-gradient-to-b from-border to-transparent"
        aria-hidden
      >
        <span className="animate-scroll-drop absolute left-1/2 h-10 w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-transparent via-teal to-gold" />
      </div>
    </div>
  );
}
