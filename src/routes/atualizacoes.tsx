import { createFileRoute } from "@tanstack/react-router";

import { ComingSoon } from "@/components/site/ComingSoon";

export const Route = createFileRoute("/atualizacoes")({
  head: () => ({
    meta: [
      { title: "Atualizações — easylobby" },
      { name: "description", content: "Novidades e notas de versão do easylobby." },
      { property: "og:title", content: "Atualizações — easylobby" },
      { property: "og:description", content: "Novidades e notas de versão do easylobby." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <ComingSoon label="Atualizações" title="As novidades chegam por aqui.">
      <p>Esta página vai reunir as notas de versão do easylobby. Em breve.</p>
    </ComingSoon>
  ),
});
