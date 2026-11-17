import { Download } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

type DownloadButtonProps = {
  className?: string;
  /** Round icon-only version for narrow screens. */
  iconOnly?: boolean;
  /** Full-width row for the mobile menu. */
  full?: boolean;
  onClick?: () => void;
};

/**
 * Download button for the navigation bar. With a real URL it goes straight to the
 * download; without one it takes the visitor to the site's download section, which
 * shows the "em breve" state instead of a dead link.
 */
export function DownloadButton({
  className,
  iconOnly = false,
  full = false,
  onClick,
}: DownloadButtonProps) {
  const hasUrl = !!SITE.downloadUrl;
  const label = hasUrl ? "Baixar easylobby" : "Ir para a seção de download";

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full bg-primary-gradient font-semibold text-primary-foreground shadow-glow transition-all duration-300 hover:brightness-110 active:scale-[0.98]",
    iconOnly ? "h-10 w-10" : "px-4 py-2 text-sm",
    full && "w-full px-5 py-3 text-base",
    className,
  );

  const inner = (
    <>
      <Download className={iconOnly ? "h-[18px] w-[18px]" : "h-4 w-4"} aria-hidden />
      {!iconOnly && <span>Baixar</span>}
    </>
  );

  if (hasUrl) {
    return (
      <a
        href={SITE.downloadUrl}
        onClick={onClick}
        className={classes}
        aria-label={label}
        title={label}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link
      to="/"
      hash="download"
      onClick={onClick}
      className={classes}
      aria-label={label}
      title={label}
    >
      {inner}
    </Link>
  );
}
