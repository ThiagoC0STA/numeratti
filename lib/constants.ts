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
      "10 milhões de impressões entregues em campanhas ativas dos nossos clientes.",
    suffix: "",
    icon: "impressoes" as const,
  },
  {
    value: 35000,
    label: "Leads",
    description:
      "35 mil leads gerados por campanhas gerenciadas pela Numeratti em diversas plataformas.",
    suffix: "",
    icon: "leads" as const,
  },
  {
    value: 17,
    label: "ROAS",
    description:
      "Melhor ROAS registrado entre nossos clientes — R$ 17 de retorno para cada R$ 1 investido em mídia paga.",
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
      "Auditoria, diagnóstico e plano de ação personalizado para escalar sua operação de tráfego pago.",
  },
  {
    id: "02",
    title: "Google Ads",
    description:
      "Campanhas em Search, Display, Shopping, Performance Max e YouTube Ads — com foco em intenção de compra e ROAS.",
  },
  {
    id: "03",
    title: "Facebook Ads",
    description:
      "Campanhas de conversão, geração de leads e remarketing no feed, stories e Reels — com catálogo dinâmico e segmentação avançada.",
  },
  {
    id: "04",
    title: "Instagram Ads",
    description:
      "Anúncios nativos que performam em Reels, Stories e Explore — formatos visuais otimizados para engajamento e conversão.",
  },
  {
    id: "05",
    title: "YouTube Ads",
    description:
      "Campanhas em In-Stream, In-Feed e Shorts — ideais para branding com escala e Video Action Campaigns focadas em conversão.",
  },
  {
    id: "06",
    title: "LinkedIn Ads",
    description:
      "Campanhas B2B com segmentação por cargo, empresa e setor — em formatos de Sponsored Content, InMail e Lead Gen Forms.",
  },
] as const;

export const PLATFORMS = [
  "Facebook Ads",
  "Instagram Ads",
  "Google Ads",
  "Waze Ads",
  "Criteo",
  "RTB House",
  "Voxus",
  "Twitter / X Ads",
  "Bing Ads",
  "Pinterest Ads",
  "TikTok Ads",
  "LinkedIn Ads",
  "Google Analytics",
  "YouTube",
  "Spotify Ads",
  "Mídia Programática",
] as const;

/** Official platform badge artwork (legacy site). */
export const PLATFORM_ASSETS = [
  {
    name: "Facebook Ads",
    image: "https://numeratti.com.br/wp-content/uploads/2022/04/Retangulo-47.png",
  },
  {
    name: "Instagram Ads",
    image: "https://numeratti.com.br/wp-content/uploads/2022/04/jpbalthazar-graficos-instagram-ads.png",
  },
  {
    name: "Google Ads",
    image: "https://numeratti.com.br/wp-content/uploads/2022/04/ads-logo-horizontal.png",
  },
  {
    name: "Waze Ads",
    image: "https://numeratti.com.br/wp-content/uploads/2022/04/unnamed.png",
  },
  {
    name: "Criteo",
    image: "https://numeratti.com.br/wp-content/uploads/2022/04/Retangulo-51.png",
  },
  {
    name: "RBT House",
    image: "https://numeratti.com.br/wp-content/uploads/2022/04/Retangulo-52.png",
  },
  {
    name: "Voxus",
    image: "https://numeratti.com.br/wp-content/uploads/2022/04/Retangulo-53.png",
  },
  {
    name: "Twitter Ads",
    image: "https://numeratti.com.br/wp-content/uploads/2022/04/Retangulo-55.png",
  },
  {
    name: "Bing Ads",
    image: "https://numeratti.com.br/wp-content/uploads/2022/04/Retangulo-56.png",
  },
  {
    name: "Pinterest Ads",
    image: "https://numeratti.com.br/wp-content/uploads/2022/04/Retangulo-57.png",
  },
  {
    name: "TikTok Ads",
    image: "https://numeratti.com.br/wp-content/uploads/2022/04/Retangulo-58.png",
  },
  {
    name: "LinkedIn Ads",
    image: "https://numeratti.com.br/wp-content/uploads/2022/04/Retangulo-49.png",
  },
  {
    name: "Google Analytics",
    image: "https://numeratti.com.br/wp-content/uploads/2022/04/logo_lockup_analytics_icon_horizontal_black_2x.png",
  },
  {
    name: "YouTube",
    image: "https://numeratti.com.br/wp-content/uploads/2023/09/Retangulo-108.png",
  },
  {
    name: "Tinder",
    image: "https://numeratti.com.br/wp-content/uploads/2023/09/Retangulo-109.png",
  },
  {
    name: "Spotify",
    image: "https://numeratti.com.br/wp-content/uploads/2023/09/Retangulo-110.png",
  },
  {
    name: "Mídia Programática",
    image: "https://numeratti.com.br/wp-content/uploads/2023/09/MIDIAPROGRAMATICA.png",
  },
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

export const SOCIAL_LINKS = [
  { href: "https://www.facebook.com/numerattibr", label: "Facebook", icon: "facebook" as const },
  { href: "https://www.instagram.com/numerattibr/", label: "Instagram", icon: "instagram" as const },
  { href: "https://www.linkedin.com/company/numeratti/about/", label: "LinkedIn", icon: "linkedin" as const },
] as const;

export const WHATSAPP_SUPPORT_URL = "https://api.whatsapp.com/send?phone=5585988776405";

export const QUEM_SOMOS = {
  intro:
    "Somos uma consultoria de performance digital que transforma investimento em mídia paga em resultado mensurável. Unimos inteligência analítica, gestão de tráfego multicanal e estratégia sob medida — tudo guiado por dados, não por achismo. Com sede em Fortaleza e atuação em todo o Brasil, somos o parceiro estratégico que o seu negócio precisa para crescer com previsibilidade — não com promessa.",
  headline: "A Performance e a Estratégia se encontram aqui!",
  paragraphs: [
    "A Numeratti nasceu com um foco: gerar resultados reais e mensuráveis por meio de dados concretos. Enquanto o mercado de marketing digital faz promessas, nós entregamos informações que você pode usar para tomar decisões — e um comprometimento absoluto com o que funciona.",
    "Com foco em performance digital e experiência comprovada com grandes players do varejo cearense, nossa equipe está pronta para estruturar seu e-commerce, escalar suas campanhas e impulsionar seu crescimento de forma consistente.",
    "Nascemos em Fortaleza, no coração do Ceará, e crescemos pelo Brasil. Hoje atendemos empresas de ponta a ponta do país que buscam mais do que uma agência de marketing — buscam um parceiro que entenda de negócio, de dados e de escala.",
  ],
  founder: {
    name: "Lucas Mendes",
    role: "Sócio fundador da Numeratti",
    bio: "Publicitário com 14 anos de experiência em marketing digital de performance. Empreendedor, palestrante e consultor, contribuiu para o crescimento de marcas como Ibyte, San Paolo e RioMar.",
    credentials:
      "Google Partner Premier | Palestrante de marketing digital | +14 anos em mídia paga para marcas de alto ticket em Fortaleza e Brasil",
    image: "https://numeratti.com.br/wp-content/uploads/2022/04/logo-1.png",
  },
  award:
    "3º lugar no Prêmio Limitless RD Station 2022 — categoria Especialistas em Vendas, entre mais de 3.000 agências concorrentes no Brasil.",
} as const;

export const SOLUCOES = {
  intro:
    "Consultoria, estratégia e operação de mídia paga para empresas que querem escalar com previsibilidade. Gerenciamos suas campanhas em +17 plataformas com foco em métricas que importam: custo por lead, ROAS e receita atribuída.",
  sections: [
    {
      title: "Consultoria Estratégica para Equipe Interna",
      text: "Seu time interno já opera campanhas, mas precisa de direção estratégica? Entramos como mentores: auditamos a operação atual, identificamos gargalos e entregamos um plano de ação com prioridades claras — de estrutura de conta a estratégia de lances. Ideal para equipes que querem evoluir sem terceirizar a operação.",
    },
    {
      title: "Gestão Completa de Mídia Paga",
      text: "Assumimos a operação das suas campanhas de ponta a ponta: do planejamento à otimização semanal. Cada anúncio é testado, cada métrica é monitorada com BI em tempo real, e cada decisão é baseada em dados — não em intuição. O resultado: campanhas que performam e investimento que se justifica.",
    },
    {
      title: "Estratégia Digital Integrada",
      text: "Quando o desafio vai além da mídia paga — e envolve posicionamento, jornada do cliente e integração entre canais — montamos uma estratégia digital completa. Combinamos tráfego pago, análise de dados e inteligência de mercado para criar um ecossistema de performance sob medida.",
    },
    {
      title: "Diagnóstico e Planejamento Digital",
      text: "Para empresas que estão começando no digital ou reestruturando sua presença online, oferecemos um diagnóstico completo: mapeamos concorrência, oportunidades e o melhor mix de canais para o seu modelo de negócio. Você recebe um plano claro antes de investir o primeiro real em mídia.",
    },
  ],
} as const;

export const HERO_SLIDES = [
  {
    lines: [
      {
        parts: [
          { text: "Seu negócio com resultados ", highlight: false },
          { text: "reais e mensuráveis", highlight: true },
          { text: " através dos números.", highlight: false },
        ],
      },
    ],
    smallImage: undefined,
    image: "https://numeratti.com.br/wp-content/uploads/2022/04/Grupo-299-1.png",
  },
  {
    lines: [
      {
        parts: [
          { text: "Performance digital ", highlight: true },
          { text: "orientada por dados.", highlight: false },
        ],
      },
    ],
    smallImage: undefined,
    image: "https://numeratti.com.br/wp-content/uploads/2022/05/IMAGEM-BANNER-2.png",
  },
  {
    lines: [
      {
        parts: [
          { text: "Menos promessa vazia, ", highlight: false },
          { text: "mais número na mesa.", highlight: true },
        ],
      },
    ],
    smallImage: undefined,
    image: "https://numeratti.com.br/wp-content/uploads/2022/05/IMAGEM-BANNER-3.png",
  },
] as const;

/** Default share image (first hero slide) for Open Graph / Twitter. */
export const DEFAULT_OG_IMAGE_URL = HERO_SLIDES[0].image;
