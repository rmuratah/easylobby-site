// FAQ content. These are EXAMPLE answers written as placeholders: review and replace
// them with the real answers before launch.
export type FaqItem = { q: string; a: string };
export type FaqGroup = { title: string; items: FaqItem[] };
export type FaqSection = { id: string; title: string; description: string; groups: FaqGroup[] };

export const FAQ: FaqSection[] = [
  {
    id: "geral",
    title: "Geral",
    description: "O que é o easylobby e para quem ele foi feito.",
    groups: [
      {
        title: "Sobre o projeto",
        items: [
          {
            q: "O que é o easylobby?",
            a: "É um client alternativo que troca a interface visual do nosso Lolzinho por telas mais leves e limpas.",
          },
          {
            q: "O easylobby é da Riot Games?",
            a: "Não. É um projeto independente e não oficial, sem vínculo ou aprovação da Riot Games.",
          },
          {
            q: "O easylobby substitui o jogo?",
            a: "Não. Ele cuida só dos momentos antes da partida. A partida em si continua acontecendo no jogo normal.",
          },
        ],
      },
      {
        title: "Custo",
        items: [
          {
            q: "Preciso pagar para usar?",
            a: "O easylobby é gratuito para o uso de todas as funcionalidades já existentes do client do Lol.",
          },
        ],
      },
    ],
  },
  {
    id: "instalacao",
    title: "Instalação",
    description: "Como baixar, instalar e manter o app atualizado.",
    groups: [
      {
        title: "Requisitos",
        items: [
          {
            q: "Em quais sistemas o easylobby funciona?",
            a: "O easylobby funciona apenas no Windows.",
          },
          {
            q: "Preciso ter o League of Legends instalado?",
            a: "Sim. O easylobby conversa com o client do jogo, então o LoL precisa estar instalado e com a sua conta conectada.",
          },
        ],
      },
      {
        title: "Instalar e atualizar",
        items: [
          {
            q: "Como instalo o easylobby?",
            a: "Baixe o instalador pelo botão de download da página inicial, abra o arquivo e siga os passos na tela.",
          },
          {
            q: "Como recebo novas versões?",
            a: "As novidades serão publicadas na página de Atualizações. Conteúdo de exemplo: descreva aqui se o app se atualiza sozinho.",
          },
          {
            q: "Como desinstalo?",
            a: "Use a opção de remover programas do seu sistema, como faria com qualquer outro aplicativo.",
          },
        ],
      },
    ],
  },
  {
    id: "uso",
    title: "Uso",
    description: "Lobby, fila e seleção de campeões no dia a dia.",
    groups: [
      {
        title: "Lobby e fila",
        items: [
          {
            q: "Consigo criar sala e chamar amigos?",
            a: "Sim. O lobby mostra a sua sala e os jogadores dela numa tela mais simples.",
          },
          {
            q: "Como entro na fila?",
            a: "No lobby, clique em buscar partida. Quando a partida for encontrada, aceite pela própria tela do easylobby.",
          },
        ],
      },
      {
        title: "Seleção de campeões",
        items: [
          {
            q: "Consigo escolher e banir campeões?",
            a: "Sim. A seleção de campeões foi redesenhada para mostrar só o que importa na hora de escolher.",
          },
          {
            q: "Posso voltar para a interface original?",
            a: "Sim. Basta fechar o easylobby e abrir o client do jogo normalmente.",
          },
        ],
      },
      {
        title: "Aparência",
        items: [
          {
            q: "Tem tema claro e escuro?",
            a: "Sim. Você pode alternar entre os dois quando quiser.",
          },
        ],
      },
    ],
  },
  {
    id: "desempenho",
    title: "Desempenho",
    description: "Por que o app é mais leve para o seu computador.",
    groups: [
      {
        title: "Consumo",
        items: [
          {
            q: "Quanto o easylobby economiza?",
            a: "Numa medição inicial, economizou cerca de 885 MB de memória, e o uso da CPU cai em 50%. Os números podem variar conforme o computador e o uso.",
          },
          {
            q: "Por que ele é mais leve?",
            a: "Um agente em Rust faz o trabalho pesado com pouco consumo, e a interface foi feita do zero para ser enxuta.",
          },
        ],
      },
    ],
  },
  {
    id: "seguranca",
    title: "Conta e segurança",
    description: "Seus dados e a sua conta.",
    groups: [
      {
        title: "Dados",
        items: [
          {
            q: "O easylobby pede a minha senha?",
            a: "O EasyLobby não exige login. Basta estar conectado ao Riot Client para que o aplicativo cuide do restante automaticamente.",
          },
        ],
      },
      {
        title: "Regras do jogo",
        items: [
          {
            q: "Usar o easylobby pode afetar a minha conta?",
            a: "O EasyLobby não interfere na sua conta, pois não modifica suas partidas nem oferece vantagens competitivas antes do jogo.",
          },
        ],
      },
    ],
  },
  {
    id: "suporte",
    title: "Suporte",
    description: "Onde pedir ajuda ou mandar sugestões.",
    groups: [
      {
        title: "Contato",
        items: [
          {
            q: "Encontrei um erro. Como aviso?",
            a: "Fale com a gente pelo Discord ou por e-mail. Os dois aparecem no rodapé do site.",
          },
          {
            q: "Posso sugerir uma melhoria?",
            a: "Pode e deve. Mande a sua ideia pelo Discord, que é onde a comunidade conversa.",
          },
        ],
      },
    ],
  },
];
