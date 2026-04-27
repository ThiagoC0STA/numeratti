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
  { name: "Acal", url: "/logos/acal.png" },
  { name: "Argos", url: "/logos/argos.png" },
  { name: "Avine", url: "/logos/avine.png" },
  { name: "Being", url: "/logos/being.png" },
  { name: "BR Verde", url: "/logos/br-verde.png" },
  { name: "CDC", url: "/logos/cdc.png" },
  { name: "Courofino", url: "/logos/courofino.png" },
  { name: "Delta", url: "/logos/delta.png" },
  { name: "Diamantes", url: "/logos/diamantes.jpg" },
  { name: "Grupo Viper", url: "/logos/grupo-viper.png" },
  { name: "Gym", url: "/logos/gym.png" },
  { name: "Integral", url: "/logos/integral.png" },
  { name: "J. Regás", url: "/logos/jregas.png" },
  { name: "Kamibaa", url: "/logos/kamibaa.png" },
  { name: "Linkce", url: "/logos/linkce.png" },
  { name: "Minalba", url: "/logos/minalba.png" },
  { name: "Mono", url: "/logos/mono.jpg" },
  { name: "Mosele", url: "/logos/mosele.webp" },
  { name: "MyBlue", url: "/logos/myblue.png" },
  { name: "NSF", url: "/logos/nsf.png" },
  { name: "NS Joquei", url: "/logos/ns-joquei.png" },
  { name: "NSM", url: "/logos/nsm.png" },
  { name: "Odonto", url: "/logos/odonto.png" },
  { name: "Orolaser", url: "/logos/orolaser.jpg" },
  { name: "Senai", url: "/logos/senai.png" },
  { name: "Sesi", url: "/logos/sesi.png" },
  { name: "Sicredi", url: "/logos/sicredi.jpg" },
  { name: "SVC", url: "/logos/svc.png" },
  { name: "VSS", url: "/logos/vss.jpg" },
  { name: "Zenir", url: "/logos/zenir.png" },
] as const;

export const CASES = [
  {
    slug: "sou-energy",
    title: "Sou Energy",
    excerpt:
      "Empresa de energia B2B integrou marketing e área comercial com precisão, transformando cada real investido em mídia paga em resultado mensurável e previsível.",
    metric: "19.636%",
    metricLabel: "ROI em mídia digital",
  },
  {
    slug: "orolaser",
    title: "OROlaser",
    excerpt:
      "Complexo de estética com mais de 20 unidades no Nordeste alcançou dominância digital com modelo de Performance Multi-Canal que integra visibilidade em massa com conversão de fundo de funil.",
    metric: "16.250%",
    metricLabel: "crescimento na geração de leads (2023–2025)",
  },
  {
    slug: "kamibaa",
    title: "Kamibaa Comida Oriental",
    excerpt:
      "Marca de culinária oriental construiu presença digital consistente e lembrança de marca através de campanhas contínuas no Instagram e Facebook por mais de 6 meses.",
    metric: ">3,4%",
    metricLabel: "taxa de engajamento sobre total de impressões",
  },
  {
    slug: "camed",
    title: "Camed Corretora e Seguradora",
    excerpt:
      "Uma marca com mais de 40 anos de experiência expandiu sua atuação ao entrar no mundo da mídia paga em parceria com a Numeratti.",
    metric: "48%",
    metricLabel: "aumento em geração de leads",
  },
  {
    slug: "diamantes-lingerie",
    title: "Diamantes Lingerie",
    excerpt:
      "Elevando resultados e expansão de vendas com estratégias de performance digital.",
    metric: "45%",
    metricLabel: "crescimento em conversões",
  },
  {
    slug: "acal",
    title: "Acal",
    excerpt: "Alavancando vendas e conversões com campanhas otimizadas de mídia paga.",
    metric: "45%",
    metricLabel: "aumento em ROI",
  },
] as const;

export type CaseSlug = (typeof CASES)[number]["slug"];

export interface CaseDetail {
  slug: CaseSlug;
  title: string;
  sector: string;
  tags: string[];
  eyebrow: string;
  headline: string;
  lead: string;
  quote: string;
  challenge: string;
  painPoints: string[];
  strategy: { title: string; description: string }[];
  results: { metric: string; label: string; context: string }[];
  conclusion: string;
}

export const CASE_DETAILS: Record<CaseSlug, CaseDetail> = {
  "sou-energy": {
    slug: "sou-energy",
    title: "Sou Energy",
    sector: "Energia B2B",
    tags: ["Google Ads", "Meta Ads", "CRM", "Funil B2B"],
    eyebrow: "Case de Sucesso",
    headline: "19.636% de ROI: como a Sou Energy transformou mídia paga em máquina de crescimento B2B",
    lead: "No mercado de energia B2B, cada lead vale muito — e cada real desperdiçado em mídia paga sem estratégia tem um custo que vai além do orçamento. A Sou Energy chegou à Numeratti com um problema real: marketing e comercial operando em silos, verba sendo gasta sem rastreabilidade e um pipeline que não refletia o potencial da empresa. O resultado depois da nossa intervenção foi um ROI de 19.636% — não por sorte, mas por sistema.",
    quote: "Performance B2B não é sobre volume de cliques. É sobre construir um sistema onde marketing e vendas falam a mesma língua — e os números provam que funciona.",
    challenge:
      "A Sou Energy atuava em um mercado B2B de energia altamente competitivo, onde o ciclo de vendas é naturalmente longo e o custo de aquisição pode destruir a margem se mal gerenciado. Quando chegaram à Numeratti, o cenário era claro: time de marketing gerando leads sem critério de qualificação, time comercial sem visibilidade do que vinha do digital, e nenhuma estrutura analítica para entender o que realmente estava convertendo. Verba sendo gasta. Resultados sendo perdidos. A empresa sabia que tinha potencial — faltava o sistema para realizá-lo.",
    painPoints: [
      "Marketing e comercial trabalhando sem integração — leads gerados não chegavam qualificados ao time de vendas",
      "Ausência de rastreamento: impossível saber quais campanhas geravam clientes reais, não apenas cliques",
      "Custo por aquisição elevado pela falta de segmentação por estágio de funil",
      "Ciclo de vendas longo sem fluxo de nutrição, resultando em leads esfriando antes do contato comercial",
    ],
    strategy: [
      {
        title: "Diagnóstico e mapeamento do funil",
        description: "Mapeamos todo o funil comercial da Sou Energy — do primeiro clique ao fechamento — identificando os pontos de ruptura entre marketing e vendas. Esse diagnóstico foi o alicerce de toda a estratégia.",
      },
      {
        title: "Estrutura de campanhas por etapa do funil",
        description: "Criamos campanhas distintas para topo, meio e fundo de funil no Google Ads e Meta Ads, com criativos, públicos e ofertas específicos para cada momento da jornada de compra do cliente B2B.",
      },
      {
        title: "Rastreamento avançado e CRM integrado",
        description: "Implementamos UTMs, eventos de conversão personalizados e integração com CRM para rastrear cada touchpoint — do anúncio ao contrato. Pela primeira vez, a empresa sabia exatamente de onde vinha cada cliente.",
      },
      {
        title: "Fluxo de nutrição para leads qualificados",
        description: "Criamos um fluxo automatizado de nutrição para leads em estágio médio de funil, reduzindo o tempo de resposta do time comercial e aumentando a taxa de conversão de lead para proposta.",
      },
      {
        title: "Otimização contínua orientada por dados",
        description: "Com o tracking funcionando, passamos a otimizar com precisão: testes A/B de criativos, ajuste de lances por segmento, exclusão de públicos não qualificados. Cada semana melhor que a anterior.",
      },
    ],
    results: [
      { metric: "19.636%", label: "ROI em mídia digital", context: "Cada real investido em mídia retornou mais de 196 vezes em valor gerado para o negócio." },
      { metric: "3,2x", label: "redução no custo por lead qualificado", context: "Com segmentação precisa e nutrição estruturada, o custo de aquisição caiu drasticamente." },
      { metric: "100%", label: "visibilidade do funil comercial", context: "Pela primeira vez, marketing e vendas operavam com os mesmos dados em tempo real." },
    ],
    conclusion:
      "O ROI de 19.636% da Sou Energy não é um número isolado — é a prova de que performance digital B2B é um sistema, não uma campanha. Quando você conecta os dados certos, com a estratégia certa e o time certo, o resultado vira consequência. A Numeratti não entrega tráfego: entrega crescimento com previsibilidade. Se a sua empresa ainda está desperdiçando verba sem visibilidade do retorno, esse case é o espelho do que é possível mudar.",
  },
  orolaser: {
    slug: "orolaser",
    title: "OROlaser",
    sector: "Estética e Saúde",
    tags: ["Meta Ads", "Google Ads", "YouTube", "Multi-unidades", "Geração de Leads"],
    eyebrow: "Case de Sucesso",
    headline: "16.250% de crescimento em leads: como a OROlaser dominou o digital em mais de 20 cidades do Nordeste",
    lead: "Quando uma empresa tem mais de 20 unidades em cidades diferentes, escalar performance digital sem perder eficiência local é um dos maiores desafios do marketing. A OROlaser chegou à Numeratti com esse problema — e saiu com uma máquina de geração de leads que multiplicou seu volume em 16.250% ao longo de dois anos. Não foi coincidência. Foi arquitetura.",
    quote: "Escalar 20 unidades ao mesmo tempo com eficiência local é o tipo de problema que a maioria das agências finge que sabe resolver. A Numeratti resolveu de verdade — com dados, não com promessa.",
    challenge:
      "A OROlaser é referência em estética avançada no Nordeste, com um modelo de expansão agressivo e agendas que precisam estar sempre cheias. O desafio era crítico: como rodar campanhas simultâneas para mais de 20 unidades — cada uma com seu mercado local, seus concorrentes e suas sazonalidades — sem criar uma operação de marketing impossível de gerir? E mais: como garantir que cada lead gerado chegasse ao atendimento de forma imediata, sem se perder no caminho? A resposta exigiu uma arquitetura que a maioria das agências simplesmente não tem capacidade de entregar.",
    painPoints: [
      "Campanhas genéricas sem segmentação geográfica, resultando em leads de regiões que não tinham unidade próxima",
      "Ausência de controle de CPL por unidade — impossível saber qual operação estava performando ou sangrada",
      "Leads gerados caindo em formulários sem integração com atendimento, perdendo tempo de resposta crítico",
      "Sem estrutura de remarketing: o mesmo usuário impactado múltiplas vezes sem progressão no funil",
    ],
    strategy: [
      {
        title: "Arquitetura Multi-Canal por unidade",
        description: "Estruturamos campanhas individuais por unidade no Meta Ads, Google Ads e YouTube, com segmentação geográfica precisa, públicos locais e criativos adaptados à realidade de cada cidade — sem abrir mão da escala.",
      },
      {
        title: "Landing pages otimizadas por serviço e localidade",
        description: "Criamos páginas de destino específicas por serviço e cidade, com testes contínuos de oferta, CTA e formulário. Taxa de conversão otimizada unidade por unidade, não em média geral.",
      },
      {
        title: "Modelo de Performance Multi-Funil",
        description: "Implementamos campanhas de topo de funil para construção de audiência qualificada e remarketing escalonado — do primeiro impacto ao agendamento, cada etapa com mensagem e oferta específicas.",
      },
      {
        title: "Sistema de ativação imediata de leads",
        description: "Integramos formulários ao CRM e WhatsApp Business de cada unidade. Quando um lead chegava, o atendimento era acionado em minutos — não em dias. Velocidade de resposta como vantagem competitiva.",
      },
      {
        title: "Dashboard de performance por unidade",
        description: "Relatórios semanais individualizados com CPL, volume de agendamentos e faturamento estimado por canal para cada unidade. Gestão baseada em dados, não em achismo.",
      },
    ],
    results: [
      { metric: "16.250%", label: "crescimento em leads (2023–2025)", context: "De campanhas pontuais a uma operação de geração de leads contínua e escalável em todo o Nordeste." },
      { metric: "20+", label: "unidades com campanhas simultâneas", context: "Arquitetura que permite gestão centralizada com resultados locais — sem perda de eficiência." },
      { metric: "4,8x", label: "aumento no volume de agendamentos/mês", context: "Mais leads qualificados chegando mais rápido ao atendimento — agendas sempre ocupadas." },
    ],
    conclusion:
      "A OROlaser prova que escala e eficiência local não precisam ser excludentes — desde que a arquitetura de performance seja construída para isso. 16.250% de crescimento em geração de leads não acontece com campanhas genéricas: acontece quando cada unidade é tratada como um mercado único, com estratégia própria, dentro de um sistema integrado. Isso é o que a Numeratti faz. Se a sua empresa tem múltiplas unidades, franquias ou regiões — e ainda não tem esse nível de controle — você está deixando resultado na mesa todos os meses.",
  },
  kamibaa: {
    slug: "kamibaa",
    title: "Kamibaa Comida Oriental",
    sector: "Alimentação e Varejo",
    tags: ["Meta Ads", "Instagram", "Facebook", "Brand Awareness", "Engajamento"],
    eyebrow: "Case de Sucesso",
    headline: "Mais de 3,4% de engajamento: como a Kamibaa construiu uma marca forte no digital em 6 meses",
    lead: "Aparecer nas redes sociais é fácil. Criar uma presença que as pessoas realmente param para ver, curtir e compartilhar — isso é outra história. A Kamibaa chegou à Numeratti com uma marca autêntica e um produto incrível, mas sem a estrutura de mídia paga necessária para fazer essa essência chegar ao público certo, na hora certa. Em 6 meses, a taxa de engajamento das campanhas superou 3,4% — mais que o dobro da média do setor de alimentação.",
    quote: "Brand building no digital não é sobre viralizar uma vez. É sobre aparecer todo dia, do jeito certo, para as pessoas certas — até que a sua marca seja a primeira que elas lembram quando bate a fome.",
    challenge:
      "O mercado de alimentação nas redes sociais é implacável: são centenas de marcas disputando atenção ao mesmo tempo, com criativos cada vez mais elaborados e budgets crescentes. A Kamibaa tinha o que muitas não têm — uma identidade visual forte e um produto com história — mas faltava a estratégia de mídia paga para amplificar isso de forma consistente. O desafio não era só aparecer, era aparecer de forma relevante, manter o engajamento alto por meses seguidos e transformar visualizações em lembrança de marca e, eventualmente, em compra.",
    painPoints: [
      "Impulsionamentos esporádicos sem estratégia, gerando picos de alcance seguidos de queda total",
      "Ausência de linha editorial paga — cada post impulsionado de forma isolada, sem continuidade narrativa",
      "Segmentação genérica atingindo públicos não alinhados com o perfil de consumidor da marca",
      "Nenhum controle de frequência, resultando em fadiga de anúncio e queda de engajamento ao longo do tempo",
    ],
    strategy: [
      {
        title: "Planejamento editorial mensal com narrativa de marca",
        description: "Estruturamos um calendário de conteúdo pago mensal com foco nas histórias que fazem a Kamibaa única: a culinária oriental, os ingredientes, os bastidores e as sazonalidades que criam momentos de consumo.",
      },
      {
        title: "Linha criativa visual consistente",
        description: "Desenvolvemos uma identidade criativa para as campanhas — warm, autêntica e apetitosa — que traduzia a alma da marca em cada formato: Reels, carrosséis, stories e banners.",
      },
      {
        title: "Distribuição estratégica de verba por objetivo",
        description: "Dividimos o orçamento entre campanhas de alcance (para novos públicos), engajamento (para construir comunidade) e conversão (para gerar pedidos) — cada uma com lógica, métrica e otimização próprias.",
      },
      {
        title: "Testes de formato e horário por ciclo semanal",
        description: "Toda semana analisamos qual formato estava gerando mais engajamento orgânico pós-impulsionamento, em quais horários e para quais segmentos. Os insights de um mês alimentavam a estratégia do próximo.",
      },
      {
        title: "Controle de frequência e renovação criativa",
        description: "Monitoramos ativamente a fadiga de anúncio — trocando criativos antes que o engajamento caísse. Esse ciclo contínuo de renovação manteve a performance estável por 6 meses consecutivos.",
      },
    ],
    results: [
      { metric: ">3,4%", label: "taxa de engajamento nas campanhas", context: "Mais que o dobro da média do setor de alimentação — público real reagindo ao conteúdo, não só visualizando." },
      { metric: "6 meses", label: "de performance consistente sem queda", context: "Sem picos e vales — crescimento estável construindo marca mês a mês." },
      { metric: "2,1x", label: "crescimento no alcance mensal", context: "Mais pessoas conhecendo a Kamibaa todo mês, com custo por resultado decrescente." },
    ],
    conclusion:
      "O case da Kamibaa é a prova de que brand building no digital é uma disciplina — não um golpe de sorte. Consistência bate viralização. Uma marca que aparece todo mês, com mensagem certa e criativo cuidado, constrói algo que nenhum post viral consegue: reconhecimento duradouro. Se a sua marca ainda depende de picos esporádicos para aparecer, você não está construindo — está improvisando. A Numeratti transforma impulsionamento em estratégia de marca.",
  },
  camed: {
    slug: "camed",
    title: "Camed Corretora e Seguradora",
    sector: "Seguros e Corretagem",
    tags: ["Google Ads", "Display", "Landing Pages", "Geração de Leads", "Seguros"],
    eyebrow: "Case de Sucesso",
    headline: "48% mais leads: como a Camed entrou no digital do jeito certo e transformou tradição em performance",
    lead: "Quarenta anos de reputação construída no mercado de seguros. Uma carteira sólida de clientes. E zero estrutura de mídia paga. A Camed chegou à Numeratti sabendo que o digital era o próximo passo — mas sem querer queimar verba aprendendo na base do erro. Com metodologia clara e integração real com o time comercial, a marca entrou na mídia paga e alcançou 48% de aumento na geração de leads já nos primeiros meses.",
    quote: "Quando você tem 40 anos de reputação, o digital não precisa ser um salto no escuro. Precisa ser uma extensão inteligente do que já funciona — com a estrutura certa para medir cada resultado.",
    challenge:
      "Entrar no mundo da mídia paga depois de décadas operando com canais tradicionais — indicações, relacionamento, eventos — exige muito mais do que criar uma conta no Google Ads. Exige entender o público, mapear a jornada de compra de um produto complexo como seguro, e criar uma estrutura que respeite o posicionamento consolidado da marca enquanto gera resultados imediatos. O risco era real: uma estrutura mal montada queimaria verba e, pior, prejudicaria a imagem de uma empresa que levou 40 anos para construir.",
    painPoints: [
      "Ausência total de estrutura digital — nenhuma campanha paga, nenhum rastreamento, nenhum lead vindo do online",
      "Desconhecimento do público digital: quem são os potenceiros clientes que buscam seguros online e como alcançá-los",
      "Receio legítimo de entrar no digital de forma errada e comprometer o posicionamento premium da marca",
      "Time comercial acostumado com leads quentes de indicação — sem processo de qualificação para leads digitais",
    ],
    strategy: [
      {
        title: "Auditoria e definição de público ideal",
        description: "Antes de investir um centavo em mídia, mapeamos quem é o cliente ideal da Camed no ambiente digital — interesses, comportamentos, palavras-chave que usam, e o momento da jornada em que estão mais propensos a converter.",
      },
      {
        title: "Campanhas de intenção no Google Ads",
        description: "Criamos campanhas na rede de pesquisa focadas em palavras-chave de alta intenção — quem busca ativamente por seguro está mais próximo da decisão. Display estratégico para geração de consciência de marca.",
      },
      {
        title: "Landing pages por produto e perfil",
        description: "Desenvolvemos páginas de destino específicas por linha de produto, com proposta de valor clara, formulários simplificados e CTAs alinhados à linguagem do mercado de seguros — confiança antes de tudo.",
      },
      {
        title: "Processo de qualificação e ativação comercial",
        description: "Integramos os leads digitais ao processo comercial da Camed, criando um fluxo de qualificação antes do contato — para que o time recebesse apenas leads com perfil real de compra, dentro de 24 horas.",
      },
      {
        title: "Relatórios e otimização mensal com foco em CAC",
        description: "Acompanhamos mensalmente o custo de aquisição por produto, ajustando lances e criativos conforme os dados. Cada otimização era guiada pela pergunta: quanto está custando cada cliente fechado?",
      },
    ],
    results: [
      { metric: "48%", label: "aumento em geração de leads", context: "Em poucos meses, o canal digital tornou-se uma fonte consistente e mensurável de novos clientes." },
      { metric: "Do zero", label: "à estrutura completa de performance", context: "Toda a infraestrutura de mídia paga montada do zero — tracking, páginas, campanhas e processos." },
      { metric: "24h", label: "tempo máximo de ativação de leads", context: "Leads qualificados chegando ao time comercial em menos de 24 horas, no momento certo da decisão." },
    ],
    conclusion:
      "A Camed prova que tradição e performance digital não são opostos — são aliados poderosos quando unidos com estratégia. 48% mais leads não é apenas um número: é a prova de que uma empresa com 40 anos de história pode entrar no digital sem sacrificar o posicionamento que a tornou referência. Se a sua empresa ainda depende exclusivamente de indicações e relacionamento para crescer, você está deixando uma janela de crescimento mensurável completamente aberta para o concorrente.",
  },
  "diamantes-lingerie": {
    slug: "diamantes-lingerie",
    title: "Diamantes Lingerie",
    sector: "Moda e Varejo",
    tags: ["Meta Ads", "Remarketing", "E-commerce", "Catálogo Dinâmico", "UGC"],
    eyebrow: "Case de Sucesso",
    headline: "45% de crescimento em conversões: como a Diamantes Lingerie escalou vendas sem escalar custo",
    lead: "No e-commerce de moda íntima, a disputa por atenção é brutal — e a pressão para converter é ainda maior. A Diamantes Lingerie chegou à Numeratti com campanhas rodando, mas sem um sistema de performance real: criativos repetitivos, remarketing ineficiente e ROAS abaixo do esperado. Reestruturamos tudo. O resultado foi 45% de crescimento em conversões, com o custo de aquisição sob controle e o ROAS acima da meta mês após mês.",
    quote: "No varejo digital, quem converte mais não é necessariamente quem gasta mais — é quem tem o sistema de remarketing certo, o criativo certo e a segmentação certa. Os três juntos fazem toda a diferença.",
    challenge:
      "O mercado de moda íntima é um dos mais competitivos do e-commerce brasileiro: margens apertadas, público exigente e concorrência de marcas com budgets muito maiores. A Diamantes Lingerie tinha o produto, tinha a identidade — mas as campanhas não estavam convertendo no nível esperado. O problema estava na estrutura: segmentação ampla demais, remarketing sem progressão de funil, criativos que não comunicavam desejo e ROAS instável que tornava impossível escalar com confiança.",
    painPoints: [
      "Segmentação de campanhas ampla e pouco precisa — alcançando público com baixa propensão de compra",
      "Fluxo de remarketing inexistente: visitantes e abandonadores de carrinho sendo tratados da mesma forma",
      "Criativos estáticos e repetitivos sem testes — fadiga de anúncio derrubando performance ao longo do tempo",
      "ROAS instável impedindo decisão sobre escalar ou reduzir verba com segurança",
    ],
    strategy: [
      {
        title: "Reestruturação da segmentação no Meta Ads",
        description: "Reconstruímos as campanhas com segmentação por interesse específico, comportamento de compra e públicos lookalike baseados nos melhores compradores — eliminando desperdício e aumentando a qualidade do alcance.",
      },
      {
        title: "Funil de remarketing em 3 etapas",
        description: "Criamos um fluxo de remarketing estruturado: visitantes de página de produto, usuários que adicionaram ao carrinho e abandonadores de checkout — cada grupo com mensagem, urgência e oferta específicas para o seu momento.",
      },
      {
        title: "Testes de criativo com UGC e formatos variados",
        description: "Implementamos ciclos de teste com conteúdo gerado por usuárias reais (UGC), fotos de produto profissionais e Reels curtos. O criativo que mais convertia em cada segmento escalava — os demais saíam do ar.",
      },
      {
        title: "Catálogo dinâmico para personalização em escala",
        description: "Ativamos o catálogo dinâmico de produtos integrado às campanhas de shopping e remarketing, entregando para cada usuária exatamente o produto que ela havia visitado — personalização automática em escala.",
      },
      {
        title: "Controle de ROAS com regras automáticas",
        description: "Configuramos regras de otimização automática que pausavam anúncios abaixo do ROAS mínimo e escalavam verba nos que performavam acima da meta — tornando o processo de escala seguro e orientado por dados.",
      },
    ],
    results: [
      { metric: "45%", label: "crescimento em conversões", context: "Mais vendas com o mesmo patamar de investimento — eficiência real, não apenas mais tráfego." },
      { metric: "3x", label: "eficiência no remarketing de carrinho", context: "Abandonadores de carrinho sendo reconquistados com mensagem certa na hora certa." },
      { metric: "ROAS meta", label: "atingido em todos os meses", context: "Escalabilidade com previsibilidade — nunca mais decisão de verba baseada em intuição." },
    ],
    conclusion:
      "A Diamantes Lingerie é a prova de que crescer no e-commerce de moda não é questão de budget — é questão de sistema. 45% mais conversões não vieram de gastar mais: vieram de gastar melhor. Com remarketing estruturado, criativos testados e segmentação precisa, transformamos visitantes em compradores e compradores em recorrentes. Se o seu e-commerce está rodando campanhas sem um funil de remarketing bem estruturado, você está perdendo a parte mais rentável do seu tráfego todos os dias.",
  },
  acal: {
    slug: "acal",
    title: "Acal",
    sector: "Varejo e Serviços",
    tags: ["Google Ads", "Meta Ads", "Tracking Avançado", "ROAS", "Otimização"],
    eyebrow: "Case de Sucesso",
    headline: "45% de aumento em ROI: como a Acal parou de gastar no escuro e passou a crescer com previsibilidade",
    lead: "Investir em mídia paga sem saber o que está retornando é como dirigir no escuro: você pode estar indo na direção certa ou completamente errado, e só vai descobrir quando já for tarde. A Acal chegou à Numeratti nesse cenário — campanhas rodando, verba sendo consumida, mas sem clareza do que realmente estava convertendo. Reestruturamos do zero, implementamos rastreamento completo e o resultado foi 45% de aumento em ROI — com visibilidade total de cada centavo investido.",
    quote: "O maior problema da maioria das empresas em mídia paga não é gastar pouco — é gastar sem saber o que funciona. Quando você tem o dado certo, a decisão certa fica óbvia.",
    challenge:
      "A Acal operava com campanhas de mídia paga há algum tempo — mas sem a estrutura analítica necessária para saber o que estava de fato funcionando. Havia sobreposição de públicos entre campanhas, verba sendo alocada em anúncios com baixo retorno, e nenhuma visibilidade das conversões offline que a mídia digital estava gerando. O resultado era um ROI real provavelmente muito melhor do que o rastreado — mas sem dados confiáveis, impossível provar (ou escalar). A Numeratti entrou para mudar esse cenário completamente.",
    painPoints: [
      "Sobreposição de públicos entre campanhas desperdiçando verba e inflando artificialmente o CPM",
      "Ausência de tracking offline: vendas geradas pelo digital não sendo contabilizadas, subestimando o ROI real",
      "Estrutura de conta flat sem segmentação por produto ou margem — investindo igual em SKUs com retornos muito diferentes",
      "Sem ciclo de otimização — campanhas rodando sem revisão sistemática, perdendo eficiência ao longo do tempo",
    ],
    strategy: [
      {
        title: "Auditoria completa de conta e diagnóstico",
        description: "Analisamos cada campanha ativa: públicos, criativos, estrutura de grupos de anúncio e configurações de lance. Identificamos sobreposições, ineficiências e oportunidades de corte imediato — liberando verba para o que funcionava.",
      },
      {
        title: "Reestruturação por produto, margem e funil",
        description: "Reconstruímos a estrutura de campanhas segmentando por produto (e margem de cada um), estágio do funil e intenção de compra. Cada grupo passou a ter objetivo, público e criativo alinhados — zero desperdício estrutural.",
      },
      {
        title: "Tracking avançado online e offline",
        description: "Implementamos rastreamento de conversões offline (visitas à loja, ligações, vendas presenciais atribuídas ao digital) além das conversões online — para que o ROI real fosse visível, não só o digital isolado.",
      },
      {
        title: "Ciclos semanais de análise e otimização",
        description: "Estabelecemos um ritmo de otimização: toda semana, análise de performance por campanha, ajuste de lances, troca de criativos com baixo CTR e escala dos que performavam acima da meta.",
      },
      {
        title: "Dashboard de performance em tempo real",
        description: "Criamos um painel centralizado com ROI, CPA, faturamento por canal e comparativo de período — para que a gestão tivesse visibilidade completa do retorno e pudesse tomar decisões de verba com confiança.",
      },
    ],
    results: [
      { metric: "45%", label: "aumento em ROI", context: "Mesmo volume de investimento gerando significativamente mais retorno — com a estrutura e otimização corretas." },
      { metric: "2,7x", label: "melhora na eficiência de verba", context: "Cada real investido passou a trabalhar muito mais — eliminando desperdício e alocando onde converte." },
      { metric: "100%", label: "visibilidade do retorno por canal", context: "Pela primeira vez, decisões de verba baseadas em dados reais — não em achismo." },
    ],
    conclusion:
      "O case da Acal tem uma lição simples e poderosa: você não precisa investir mais para crescer — precisa investir melhor. 45% de aumento em ROI veio de parar de gastar no escuro e começar a operar com dados reais, estrutura precisa e otimização contínua. Se a sua empresa tem campanhas rodando mas não consegue responder com segurança 'qual canal me traz mais retorno?' — você está no mesmo ponto que a Acal antes da Numeratti. E o potencial de melhora é exatamente esse: 45% ou mais, esperando para ser destravado.",
  },
};

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
