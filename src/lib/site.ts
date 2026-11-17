// Real contact/download data for the site. Empty strings mean "not provided yet":
// the UI shows a "coming soon" state instead of a fake link.
export const SITE = {
  name: "easylobby",
  discordUrl: "",
  supportEmail: "",
  downloadUrl: "https://github.com/rmuratah/easylobby-site/releases/latest",
  githubUrl: "https://github.com/rmuratah/easylobby",
  // Suggestion and bug-report destinations still need to be confirmed by the team.
  suggestionUrl: "",
  bugReportUrl: "",
};

export const THEME_STORAGE_KEY = "el-theme";
export type Theme = "escuro" | "claro";
export const DEFAULT_THEME: Theme = "escuro";

/** Fixed site-wide decorative accent; previous palette choices no longer apply. */
export const DEFAULT_ACCENT = "esmeralda";

/** Runs in <head> before first paint so the page never flashes the wrong theme or color. */
export const themeInitScript = `(function(){var d=document.documentElement;d.setAttribute("data-accent","${DEFAULT_ACCENT}");try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t!=="claro"&&t!=="escuro")t="${DEFAULT_THEME}";d.setAttribute("data-theme",t);}catch(e){d.setAttribute("data-theme","${DEFAULT_THEME}");}})();`;

export function resolveTheme(stored: string | null): Theme {
  return stored === "claro" || stored === "escuro" ? stored : DEFAULT_THEME;
}
