# easylobby-site

Site público do [easylobby](https://github.com/rmuratah/easylobby), um client leve para League of Legends.

## Rodar localmente

```sh
bun install
bun run dev        # http://localhost:5173
bun run test       # Vitest
bun run lint       # ESLint + Prettier
bun run build      # gera o site estático em dist/client
```

Para testar o build numa subpasta, como no GitHub Pages: `BASE_PATH=/easylobby-site/ bun run build`.

## Publicação

O workflow [`deploy.yml`](.github/workflows/deploy.yml) gera o site e publica no GitHub Pages a cada push na `main`.
Com domínio próprio, defina a variável `BASE_PATH` do repositório como `/` (Settings > Secrets and variables > Actions > Variables).

## Onde mudar o quê

- Links de download, Discord e e-mail: `src/lib/site.ts`.
- Fotos da página Sobre: `public/equipe/murata.png` e `public/equipe/ricco.png`.
- Páginas: `src/routes/`.

O easylobby não é endossado pela Riot Games e não reflete as opiniões da Riot Games nem de ninguém oficialmente envolvido na produção ou gestão das propriedades da Riot Games. Riot Games e todas as propriedades associadas são marcas comerciais ou marcas registradas da Riot Games, Inc.
