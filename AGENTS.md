# AGENTS.md

Site público do easylobby. Responda em português.

- Site estático: o build gera um HTML por página em `dist/client` (prerender do TanStack Start). Não adicione nada que precise de servidor (server functions, rotas de API, SSR em tempo de pedido).
- Publicado no GitHub Pages pelo workflow `.github/workflows/deploy.yml` a cada push na `main`.
- Caminhos de arquivos de `public/` usam `import.meta.env.BASE_URL`, porque o site pode rodar numa subpasta (`/easylobby-site/`).
- Gerenciador de pacotes: bun (`bun install`, `bun run build`, `bun run test`, `bun run lint`).

## Project rules

- Theme is set via `data-theme="escuro|claro"` on `<html>` (app convention), applied by an inline head script before paint; Tailwind `dark:` variant targets it. Why: reuse the easylobby app tokens and avoid theme flash.
- Contact and download links live in `src/lib/site.ts`; empty values render a "coming soon" state. Why: never ship fake links.
- Keep the existing decorative "gold" token names backed by a fixed accent in `src/styles.css` and initialize `data-accent` before paint without reading saved palette choices. Why: all pages share one palette while existing utilities remain compatible.
- The custom cursor (`TargetCursor`) decides targets in `src/lib/cursor-target.ts`: outermost card wins, then links/buttons, then h1–h3 text; paragraphs and the header bar are never targets. Why: one place controls what the cursor hugs; mark new cards with `data-cursor-card` and opt out with `data-cursor-ignore`.
