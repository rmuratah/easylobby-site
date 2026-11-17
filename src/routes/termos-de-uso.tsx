import { createFileRoute } from "@tanstack/react-router";

import { ComingSoon } from "@/components/site/ComingSoon";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — easylobby" },
      {
        name: "description",
        content: "Termos de Uso do easylobby. Página em preparação.",
      },
      { property: "og:title", content: "Termos de Uso — easylobby" },
      {
        property: "og:description",
        content: "Termos de Uso do easylobby. Página em preparação.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <ComingSoon label="Termos de Uso" title="Os termos de uso chegam por aqui.">
      <p>
        Esta página vai reunir as condições de uso do easylobby. Ela ainda está em preparação e será
        publicada em breve.
      </p>
    </ComingSoon>
  ),
});
