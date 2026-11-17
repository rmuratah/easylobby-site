// Public copy for the Sobre page, taken from the approved text Ricco sent (section 2 of the brief).
// Do not add numbers, dates, deadlines or personal facts that are not in that text.

export const STACK = [
  { id: "rust", label: "Rust", detail: "No núcleo do aplicativo." },
  { id: "react", label: "React + TypeScript", detail: "Na interface." },
  { id: "tauri", label: "Tauri", detail: "No aplicativo desktop." },
  {
    id: "api",
    label: "API local",
    detail: "A comunicação acontece pela API local do client do próprio League.",
  },
  {
    id: "plan",
    label: "Planejamento",
    detail: "Cada mudança nasce de um plano. Definimos o que fazer antes de produzir.",
  },
] as const;

export const PRINCIPLES = [
  {
    id: "leveza",
    title: "Leveza",
    heading: "Leveza em primeiro lugar",
    text: "Não queremos devolver em efeitos visuais o consumo de recursos que tentamos reduzir.",
  },
  {
    id: "simples",
    title: "Uso simples",
    heading: "Uso simples e agradável",
    text: "A interface precisa ser intuitiva e confortável para quem vai usá-la no dia a dia.",
  },
  {
    id: "feedback",
    title: "Feedback",
    heading: "Melhoria a partir da experiência",
    text: "Testar, ouvir o que está faltando e ajustar o que ainda atrapalha faz parte do projeto.",
  },
] as const;

export const TEAM = [
  {
    id: "murata",
    name: "Murata",
    photo: `${import.meta.env.BASE_URL}equipe/murata.png`,
    photoAlt: "Ilustração de um insectoide azul de olhos amarelos, o avatar do Murata",
    github: "https://github.com/rmuratah",
    githubHandle: "rmuratah",
    focus: ["Integração com o client", "Núcleo do app"],
    short:
      "Desenvolvedor com experiência em .NET, C# e React. Idealizador do easylobby e responsável principalmente pela integração com o client e pelo núcleo do aplicativo.",
    long: [
      "Desenvolvedor há alguns anos, com experiência em .NET, C# e React. Foi dele a ideia inicial do easylobby.",
      "No projeto, sua frente principal é a integração com o client e o núcleo do aplicativo, incluindo a comunicação com a API e os recursos que chegam à interface. Ele também participa da evolução visual e das decisões do projeto.",
    ],
  },
  {
    id: "ricco",
    name: "Ricco",
    photo: `${import.meta.env.BASE_URL}equipe/ricco.png`,
    photoAlt:
      "Ilustração de uma coxa de frango e uma fatia de pizza sorridentes, o avatar do Ricco",
    github: "https://github.com/Victor-Ricco",
    githubHandle: "Victor-Ricco",
    focus: ["Interface", "Experiência desktop", "Testes de uso"],
    short:
      "Desenvolvedor com foco em SQL, Python e dados. No easylobby, trabalha principalmente na interface, na experiência desktop e nos testes de uso.",
    long: [
      "Desenvolvedor há cerca de um ano, com trabalho voltado principalmente a SQL, Python e processos envolvendo dados. Antes dessa transição, trabalhou como barista; a música também faz parte da sua trajetória.",
      "No easylobby, sua frente principal é a interface e a experiência desktop: organização das telas, interações, testes de uso e ajustes visuais. O projeto também responde a uma necessidade pessoal de ter uma experiência mais leve no próprio computador.",
    ],
  },
] as const;

export const PROCESS = [
  {
    id: "plan",
    title: "Planejamento humano",
    text: "Antes de implementar, organizamos o projeto em issues no GitHub, dividimos as responsabilidades e definimos a sequência das entregas.",
  },
  {
    id: "ai",
    title: "Geração com IA",
    text: "A partir desse planejamento, a IA gera o código, apoia as revisões e ajuda a investigar os problemas encontrados.",
  },
  {
    id: "test",
    title: "Verificações e testes de uso",
    text: "Executamos o aplicativo e testamos as mudanças. As aprovações se apoiam nesses testes, nos relatórios disponíveis e nas verificações automatizadas.",
  },
  {
    id: "adjust",
    title: "Ajustes",
    text: "Os resultados dos testes orientam os próximos ajustes, que voltam a ser planejados e desenvolvidos.",
  },
  {
    id: "ship",
    title: "Nova entrega",
    text: "A mudança passa a fazer parte do aplicativo e o ciclo recomeça a partir do que aprendemos usando.",
  },
] as const;

export const MILESTONES = [
  {
    n: "01",
    title: "A ideia",
    summary: "Combinar o experimento com IA e a vontade de reduzir o peso do client.",
    detail:
      "A ideia partiu do Murata, que já experimentava ferramentas de IA em outro projeto. O peso do client do LoL era um problema que fazia sentido investigar.",
  },
  {
    n: "02",
    title: "O planejamento",
    summary: "Organizar issues, responsabilidades e dependências antes de implementar.",
    detail:
      "O projeto foi dividido em issues no GitHub, com responsabilidades e a sequência das entregas definidas antes da primeira linha de código gerada.",
  },
  {
    n: "03",
    title: "A base funcional",
    summary: "Conectar o agente e construir os primeiros fluxos do aplicativo.",
    detail:
      "A primeira tarefa era estabelecer a conexão e mostrar informações reais do jogador. Depois vieram os fluxos de lobby, fila, seleção de campeões e recursos sociais.",
  },
  {
    n: "04",
    title: "Testar o conjunto",
    summary: "Experimentar filas e funcionalidades e comparar o resultado com o início.",
    detail:
      "Terminar uma rodada de mapeamento das filas e testar a maioria delas foi um momento importante. Comparar com o começo ajudou a perceber o quanto o aplicativo tinha avançado.",
  },
  {
    n: "05",
    title: "Continuar refinando",
    summary: "Melhorar o visual, completar comportamentos e corrigir problemas encontrados no uso.",
    detail:
      "A seleção de campeões ainda tem funcionalidades e detalhes a refinar. Esta etapa segue em andamento.",
    current: true,
  },
] as const;

export const ABOUT_FAQ = [
  {
    q: "Vocês já eram desenvolvedores?",
    a: "Sim. O experimento não é aprender programação do zero; é explorar a construção de um projeto sem escrever ou editar manualmente o código.",
  },
  {
    q: "Como vocês verificam as mudanças?",
    a: "Com testes de uso, relatórios e verificações automatizadas. Isso não equivale a uma revisão humana completa de toda a implementação.",
  },
  {
    q: "O projeto está pronto?",
    a: "Ainda está em desenvolvimento e refinamento, mas toda versão disponibilizada para uso está completamente funcional e pronta para uso. A disponibilidade de versões e testes deve ser consultada nos canais oficiais do projeto quando forem publicados.",
  },
  {
    q: "Como posso ajudar?",
    a: "Enviando sugestões e relatos de bugs pelos canais do site assim que estiverem no ar.",
  },
] as const;
