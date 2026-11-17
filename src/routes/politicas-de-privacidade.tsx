import { createFileRoute } from "@tanstack/react-router";

const UPDATED_AT = "17 de novembro de 2026";

export const Route = createFileRoute("/politicas-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Políticas de Privacidade — easylobby" },
      {
        name: "description",
        content: "Quais dados o easylobby coleta, por que coleta e como desligar.",
      },
      { property: "og:title", content: "Políticas de Privacidade — easylobby" },
      {
        property: "og:description",
        content: "Quais dados o easylobby coleta, por que coleta e como desligar.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: PrivacyPage,
});

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold text-foreground">{title}</h2>
      <div className="mt-3 space-y-3 text-muted-foreground">{children}</div>
    </section>
  );
}

function PrivacyPage() {
  return (
    <article className="relative mx-auto max-w-3xl px-6 pt-40 pb-16">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        Políticas de Privacidade
      </p>
      <h1 className="text-headline mt-4">Seus dados ficam com você.</h1>
      <p className="mt-4 text-sm text-muted-foreground">Atualizada em {UPDATED_AT}.</p>

      <Block title="Resumo">
        <p>
          O easylobby roda no seu computador e conversa apenas com o client do League of Legends que
          já está aberto na sua máquina. A única coisa que o app envia para fora é um relatório de
          erro quando algo quebra, e você pode desligar isso.
        </p>
      </Block>

      <Block title="O que fica só no seu computador">
        <p>
          Para funcionar, o app lê a senha local que o próprio client do LoL gera a cada sessão e
          usa essa senha só para falar com o client na sua máquina. Seu nick, sua senha da Riot, a
          chave local do client, suas mensagens de chat, sua lista de amigos e seu histórico não são
          enviados para nenhum servidor nosso.
        </p>
      </Block>

      <Block title="Relatórios de erro">
        <p>
          Quando o app encontra um erro, ele envia um relatório técnico para o nosso banco de dados
          no Supabase, um serviço de hospedagem de dados. O relatório traz a mensagem de erro, a
          parte do app em que ele aconteceu, a gravidade, a versão do easylobby, o sistema
          operacional e um código aleatório de instalação. Esse código é sorteado pelo app na
          primeira vez que ele abre e serve só para agrupar erros do mesmo computador: ele não tem
          ligação com a sua conta da Riot.
        </p>
        <p>
          O relatório não contém nick, senha, chave da API local do client, conteúdo de chat nem
          outro dado da sua conta. Usamos esses relatórios apenas para corrigir bugs.
        </p>
        <p>
          Você pode desligar o envio a qualquer momento nas configurações do app, na opção “Enviar
          erros para os devs”. Com ela desligada, nada sai do seu computador.
        </p>
      </Block>

      <Block title="O que não fazemos">
        <p>
          Não vendemos nem compartilhamos dados, não mostramos anúncios e não usamos rastreadores de
          publicidade.
        </p>
      </Block>

      <Block title="Este site">
        <p>
          O site não pede cadastro. Ele guarda no seu navegador só a escolha de tema claro ou
          escuro.
        </p>
      </Block>

      <Block title="Contato">
        <p>
          Para pedir a remoção de relatórios de erro ou tirar dúvidas, fale com a equipe pelos
          canais de suporte no rodapé desta página.
        </p>
      </Block>

      <p className="mt-12 text-xs text-muted-foreground">
        O easylobby não é endossado pela Riot Games e não reflete as opiniões da Riot Games nem de
        ninguém oficialmente envolvido na produção ou gestão das propriedades da Riot Games.
      </p>
    </article>
  );
}
