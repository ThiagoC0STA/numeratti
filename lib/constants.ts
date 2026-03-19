export const SITE_URL = "https://numeratti.com.br";
export const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=558581486404";
export const PRIVACY_URL = "https://numeratti.com.br/politica-de-privacidade";

export const COLORS = {
  primary: "#ff6600",
  primaryDark: "#f27405",
  black: "#0a0a0a",
  white: "#ffffff",
  gray: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
  },
} as const;

export const LOGO_DESKTOP =
  "https://numeratti.com.br/wp-content/themes/Numeratti/assets/images/logo_principal.svg";
export const LOGO_MOBILE =
  "https://numeratti.com.br/wp-content/themes/Numeratti/assets/images/logo_mobile.svg";

export const NAV_LINKS = [
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/solucoes", label: "Soluções" },
  { href: "/clientes", label: "Clientes" },
  { href: "/cases", label: "Cases" },
  { href: "/blog", label: "Blog" },
] as const;

export const FOOTER_LINKS = [
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/solucoes", label: "Soluções" },
  { href: "/clientes", label: "Clientes" },
  { href: "/cases", label: "Cases" },
  { href: "/blog", label: "Blog" },
  { href: "/trabalhe-conosco", label: "Trabalhe Conosco" },
  { href: "/contato", label: "Fale Conosco" },
  { href: PRIVACY_URL, label: "Política de privacidade", external: true },
] as const;

export const METRICS = [
  {
    value: 10000000,
    label: "Impressões",
    description:
      "Total de vezes que anúncios de nossos clientes foram exibidos para suas personas.",
    suffix: "",
    icon: "impressoes" as const,
  },
  {
    value: 35000,
    label: "Leads",
    description:
      "Contatos gerados através de campanhas em diversas plataformas para nossos clientes.",
    suffix: "",
    icon: "leads" as const,
  },
  {
    value: 17,
    label: "ROAS",
    description:
      "O valor do Retorno sobre Gastos com anúncios indica quanto o investimento em mídia patrocinada está promovendo vendas.",
    suffix: "x",
    icon: "roas" as const,
  },
] as const;

export const ABOUT_STATS = [
  { value: 110, label: "CLIENTES", suffix: "+" },
  { value: 19400, label: "LEADS gerados em campanha", suffix: "+" },
  { value: 1.9, label: "EM FATURAMENTO (Mi)", suffix: "+ " },
] as const;

export const SERVICES = [
  {
    id: "01",
    title: "Consultoria de Tráfego Pago",
    description:
      "Diagnóstico e planejamento de ações para o seu negócio no digital",
  },
  {
    id: "02",
    title: "Google Ads",
    description: "Anúncios de Rede de Pesquisa, Display, Shopping, Vídeo e mais.",
  },
  {
    id: "03",
    title: "Facebook Ads",
    description: "Anúncios Dark Post, Carrossel, Dinâmico, Stories e mais.",
  },
  {
    id: "04",
    title: "Instagram Ads",
    description: "Anúncios Dark Post, Carrossel, Dinâmico, Stories e mais.",
  },
  {
    id: "05",
    title: "YouTube Ads",
    description: "Anúncios In Stream, Discovery, For Action e mais.",
  },
  {
    id: "06",
    title: "LinkedIn Ads",
    description: "Anúncios Dark Post, Texto, inMail, Vídeo e mais.",
  },
] as const;

export const PLATFORMS = [
  "Facebook Ads",
  "Instagram Ads",
  "Google Ads",
  "Waze Ads",
  "Criteo",
  "YouTube",
  "LinkedIn Ads",
  "TikTok Ads",
  "Bing Ads",
  "Pinterest Ads",
  "Google Analytics",
  "Mídia Programática",
] as const;

export const CLIENT_LOGOS = [
  {
    name: "Nossa Fruta",
    url: "https://numeratti.com.br/wp-content/uploads/2022/07/1689080881046-e1694713945899.jpg",
  },
  {
    name: "Artplac",
    url: "https://numeratti.com.br/wp-content/uploads/2023/09/LOGO-NUMERATTI-ArtPlac-Colorido-PNG.png",
  },
  {
    name: "Babbi Osteria",
    url: "https://numeratti.com.br/wp-content/uploads/2023/09/LOGO-NUMERATTI-Babbi-Colorido-PNG.png",
  },
  {
    name: "Bem Viver Urbanismo",
    url: "https://numeratti.com.br/wp-content/uploads/2023/09/LOGO-NUMERATTI-Bem-Viver-Colorido-PNG.png",
  },
  {
    name: "Bipp",
    url: "https://numeratti.com.br/wp-content/uploads/2023/09/LOGO-NUMERATTI-Bipp-Colorido-PNG.png",
  },
  {
    name: "Conexo",
    url: "https://numeratti.com.br/wp-content/uploads/2023/09/LOGO-NUMERATTI-Conexo-Colorido-PNG.png",
  },
  {
    name: "Cortile",
    url: "https://numeratti.com.br/wp-content/uploads/2023/09/LOGO-NUMERATTI-Cortile-Colorido-PNG.png",
  },
  {
    name: "Fio Jeitoso",
    url: "https://numeratti.com.br/wp-content/uploads/2023/09/LOGO-NUMERATTI-Fio-Jeitoso-Colorido-PNG.png",
  },
  {
    name: "Grupo Geppos",
    url: "https://numeratti.com.br/wp-content/uploads/2023/07/grupo-geppos-e1694714699388.png",
  },
  {
    name: "IEL",
    url: "https://numeratti.com.br/wp-content/uploads/2023/09/LOGO-NUMERATTI-IEL-Colorido-PNG.png",
  },
] as const;

export const CASES = [
  {
    title: "Camed Corretora e Seguradora",
    excerpt:
      "Uma marca com mais de 40 anos de experiência expandiu sua atuação ao entrar no mundo da mídia paga em parceria com a Numeratti.",
    metric: "48%",
    metricLabel: "aumento em geração de leads",
    url: "https://numeratti.com.br/cases/aumento-geracao-leads-camed/",
  },
  {
    title: "Diamantes Lingerie",
    excerpt:
      "Elevando resultados e expansão de vendas com estratégias de performance.",
    metric: "45%",
    metricLabel: "crescimento em conversões",
    url: "https://numeratti.com.br/cases/diamantes-lingerie-elevando-resultados-e-expansao-de-vendas/",
  },
  {
    title: "Acal",
    excerpt: "Alavancando vendas e conversões com campanhas otimizadas.",
    metric: "45%",
    metricLabel: "aumento em ROI",
    url: "https://numeratti.com.br/cases/alavancando-vendas-e-conversoes-acal-e-numeratti/",
  },
] as const;

export const BLOG_POSTS = [
  {
    title: "Aumente suas Vendas na Black Friday Usando Análise de Dados",
    date: "23 out 2024",
    excerpt:
      "Você já imaginou aumentar suas vendas na Black Friday de forma significativa? Segundo a National Retail Federation...",
    categories: [
      "Gestão de Investimentos em Publicidade",
      "Otimização de Orçamento",
      "Tecnologia",
    ],
    url: "https://numeratti.com.br/tecnologia/aumente-vendas-black-friday-analise-dados/",
    image:
      "https://numeratti.com.br/wp-content/uploads/2024/10/shutterstock_2330107529-1-1-compactado-1-1.png",
  },
  {
    title: "5 Tendências Para Sua Marca Se Destacar em 2024",
    date: "09 fev 2024",
    excerpt:
      "Todo começo de ano uma pergunta ronda os pensamentos de muitas pessoas das mais diversas áreas...",
    categories: ["#tendência", "2024", "Marketing", "Tendências de Mercado"],
    url: "https://numeratti.com.br/tendencias-mercado/5-tendencias-para-sua-marca-se-destacar-em-2024/",
    image:
      "https://numeratti.com.br/wp-content/uploads/2024/02/shutterstock_2351639671-scaled.jpg",
  },
  {
    title: "Evolução do Marketing 1.0 ao 5.0 - Da Era Industrial à Conexão Holística",
    date: "15 jan 2024",
    excerpt:
      "De acordo com Philip Kotler, Marketing é a ciência e arte de explorar, criar e entregar valor...",
    categories: ["#campanha", "#estratégia", "Liderança", "Marketing", "Tecnologia"],
    url: "https://numeratti.com.br/marketing/entenda-diferenca-entre-marketing-1-0-ao-5-0/",
    image:
      "https://numeratti.com.br/wp-content/uploads/2024/01/shutterstock_2243890189-scaled.jpg",
  },
] as const;

export const QUEM_SOMOS = {
  intro:
    "Somos uma empresa de consultoria de performance especializada. Combinamos técnica, estratégias personalizadas e uma abordagem baseada em dados para o sucesso do seu negócio.",
  headline: "A Performance e a Estratégia se encontram aqui!",
  paragraphs: [
    "A Numeratti nasceu com um foco definido: gerar resultados reais e mensuráveis para nossos clientes por meio de análises e dados concretos. No mercado de marketing digital, muitas promessas são feitas, mas poucas são cumpridas integralmente. Quantas vezes você já ficou esperando por informações concretas para tomar decisões importantes?",
    "É exatamente isso que oferecemos: dados, análises e números que você pode confiar, além de um comprometimento absoluto com os resultados. Embora não possamos prever o futuro, acreditamos que o sucesso pode ser construído por meio do trabalho correto. Com nosso foco em performance digital e um investimento estratégico, sua empresa pode alcançar patamares ainda mais altos, especialmente quando conduzido por especialistas com o know-how necessário.",
    "Desde o nosso início, já trazemos uma bagagem sólida. A Numeratti tem o prazer de abrir as portas para você, trazendo consigo uma vasta experiência com grandes players do mercado varejista, comprovada por meio de cases reais e números que evidenciam nossa eficiência. Contamos com uma equipe de especialistas prontos para atender às necessidades do seu e-commerce, impulsionar a performance de suas redes sociais e promover seu crescimento contínuo.",
  ],
  founder: {
    name: "Lucas Mendes",
    role: "Sócio fundador da Numeratti",
    bio: "Lidera uma equipe dedicada a oferecer soluções estratégicas e resultados concretos para os clientes. Atua há 14 anos com marketing digital especializado em performance. Publicitário de formação, empreendedor, palestrante e consultor, contribuiu para o crescimento de grandes marcas varejistas, incluindo Ibyte, San Paolo e Rio Mar.",
    image: "https://numeratti.com.br/wp-content/uploads/2022/04/logo-1.png",
  },
  award:
    "Fomos considerados uma das melhores agências de marketing digital do Brasil pela RD Station na categoria Especialistas em Vendas, recebendo o troféu de 3° Lugar do Prêmio Limitless RD Station em 2022, sendo reconhecidos como a agência que entrega os melhores resultados para os seus clientes entre mais de 3000 concorrentes.",
} as const;

export const SOLUCOES = {
  intro:
    "O seu negócio com resultados reais e mensuráveis, a partir de consultoria, estratégias e operação de um time com alta inteligência de mercado.",
  sections: [
    {
      title: "Consultoria Estratégica para a sua Equipe Interna",
      text: "Aprenda conosco e obtenha uma compreensão profunda da estratégia de mídia paga e marketing digital. Nossa consultoria está pronta para guiá-lo, oferecendo orientações sobre as melhores práticas e caminhos para alcançar os verdadeiros objetivos da sua empresa.",
    },
    {
      title: "Resultados tangíveis",
      text: "Não acreditamos em promessas vazias! Oferecemos resultados reais, respaldados por estratégias sólidas e eficazes. Nossos anúncios não ficam no escuro: são testados e analisados semanalmente para garantir que estão gerando o impacto desejado. Com a utilização de Business Intelligence (BI), monitoramos o desempenho em tempo real. Isso nos permite tomar decisões baseadas em dados para ajustar as estratégias conforme necessário, garantindo que você esteja sempre no caminho certo para o sucesso.",
    },
    {
      title: "Performance total",
      text: "Seja comércio eletrônico, captação de leads ou qualquer outra estratégia, nossa equipe tem tudo o que você precisa para ser visto e lembrado no mundo digital. Pare de fazer só posts e atinja o potencial máximo da sua empresa!",
    },
    {
      title: "Alta inteligência de mercado",
      text: "Se você ainda não sabe o caminho que quer seguir, não precisa se desesperar, podemos ajudar você a traçar o melhor tipo de estratégia dentro do marketing digital para alcançar os seus clientes.",
    },
  ],
} as const;

export const HERO_SLIDES = [
  {
    lines: [
      {
        parts: [
          { text: "SEU NEGÓCIO COM RESULTADOS ", highlight: false },
          { text: "REAIS E MENSURÁVEIS", highlight: true },
          { text: " ATRAVÉS DOS NÚMEROS.", highlight: false },
        ],
      },
    ],
    smallImage: undefined,
    image: "https://numeratti.com.br/wp-content/uploads/2022/04/Grupo-299-1.png",
  },
  {
    lines: [
      { text: "Qualidade", highlight: true },
      { text: "e desempenho", highlight: true },
      { text: "nos seus anúncios.", highlight: false },
    ],
    smallImage: "https://numeratti.com.br/wp-content/uploads/2022/07/000103-300x150.png",
    image: "https://numeratti.com.br/wp-content/uploads/2022/05/IMAGEM-BANNER-2.png",
  },
  {
    lines: [
      { text: "Impulsionando", highlight: false },
      { text: "marcas a gerar", highlight: false },
      { text: "resultados para", highlight: true },
      { text: "seu negócio.", highlight: true },
    ],
    smallImage: "https://numeratti.com.br/wp-content/uploads/2022/04/logo-1-300x139.png",
    image: "https://numeratti.com.br/wp-content/uploads/2022/05/IMAGEM-BANNER-3.png",
  },
] as const;
