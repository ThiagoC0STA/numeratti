import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "a9gqa05x",
  dataset: "production",
  apiVersion: "2024-06-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

function textBlock(text, style = "normal") {
  return {
    _type: "block",
    _key: Math.random().toString(36).slice(2, 10),
    style,
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: Math.random().toString(36).slice(2, 10),
        text,
        marks: [],
      },
    ],
  };
}

function boldTextBlock(parts) {
  return {
    _type: "block",
    _key: Math.random().toString(36).slice(2, 10),
    style: "normal",
    markDefs: [],
    children: parts.map((p) => ({
      _type: "span",
      _key: Math.random().toString(36).slice(2, 10),
      text: p.text,
      marks: p.bold ? ["strong"] : [],
    })),
  };
}

async function main() {
  console.log("Creating categories...");

  const midiaPaga = await client.createOrReplace({
    _id: "cat-midia-paga",
    _type: "category",
    title: "Mídia Paga",
    description:
      "Conteúdos sobre Google Ads, Meta Ads e estratégias de mídia paga para performance.",
  });
  console.log("  Category created:", midiaPaga.title);

  const performance = await client.createOrReplace({
    _id: "cat-performance",
    _type: "category",
    title: "Performance",
    description:
      "Estratégias de marketing de performance e otimização de campanhas.",
  });
  console.log("  Category created:", performance.title);

  console.log("\nCreating blog post...");

  const body = [
    textBlock(
      "Investir em mídia paga sem estratégia é como jogar dinheiro numa fogueira e torcer para que alguém veja a fumaça. Parece exagero, mas é exatamente o que acontece quando campanhas rodam sem otimização. Se o seu custo por lead está alto e os resultados não aparecem, provavelmente você está cometendo pelo menos um destes erros."
    ),

    textBlock("1. Não usar palavras-chave negativas no Google Ads", "h2"),
    textBlock(
      "Esse é o erro mais caro e mais comum. Sem negativar termos irrelevantes, seu anúncio aparece para quem busca coisas que não têm nada a ver com seu produto. Imagine uma clínica de estética aparecendo para \"curso de estética grátis\". Cada clique desses é dinheiro jogado fora."
    ),
    textBlock(
      "A correção é simples: revise o relatório de termos de pesquisa toda semana e adicione as palavras que não fazem sentido como negativas. Esse hábito sozinho pode reduzir o custo por lead em até 30%."
    ),

    textBlock("2. Mandar todo o tráfego para a home do site", "h2"),
    textBlock(
      'Sua página inicial foi feita para apresentar a empresa, não para converter um clique específico. Quando alguém pesquisa "consultoria de marketing digital em São Paulo", essa pessoa precisa cair numa landing page que fale exatamente disso, com um CTA claro e direto.'
    ),
    textBlock(
      "Crie landing pages dedicadas para cada campanha ou grupo de anúncios. A taxa de conversão pode triplicar simplesmente por alinhar o que o anúncio promete com o que a página entrega."
    ),

    textBlock("3. Ignorar o público de remarketing", "h2"),
    textBlock(
      "Apenas 2% a 4% dos visitantes convertem na primeira visita. Os outros 96% vão embora e provavelmente esquecem que seu site existe. Remarketing é a forma de trazer essas pessoas de volta com uma mensagem mais direcionada."
    ),
    textBlock(
      "Configure públicos de remarketing tanto no Google quanto no Meta. Segmente por páginas visitadas, tempo no site e ações específicas. Quem visitou sua página de preços merece um anúncio diferente de quem só viu o blog."
    ),

    textBlock("4. Não testar criativos no Meta Ads", "h2"),
    textBlock(
      "Rodar um único criativo por meses é uma receita para fadiga de anúncio. O algoritmo do Meta precisa de variação para encontrar a combinação que melhor performa para cada segmento do seu público."
    ),
    textBlock(
      "O ideal é ter pelo menos 3 a 5 variações de criativo por conjunto de anúncios: mude imagens, headlines, formatos (carrossel, vídeo, estático). Deixe o algoritmo testar e concentre o orçamento nos vencedores após uma semana de dados."
    ),

    textBlock(
      "5. Definir orçamento sem considerar o funil completo",
      "h2"
    ),
    textBlock(
      "Muitas empresas definem o orçamento de mídia olhando só para o custo por clique. O problema é que CPC barato não significa lead barato. Se o clique custa R$ 1,00 mas a taxa de conversão da landing page é 0,5%, seu custo por lead real é R$ 200,00."
    ),
    textBlock(
      "Faça a conta de trás para frente: quanto vale um cliente? Qual a taxa de fechamento do comercial? Quantos leads precisa para um fechamento? Com esses números, você define um CPA máximo que faz sentido para o negócio e otimiza em cima disso."
    ),

    textBlock("6. Não acompanhar conversões corretamente", "h2"),
    textBlock(
      "Se o pixel do Meta não está configurado direito ou o Google Ads não tem as conversões corretas marcadas, você está navegando no escuro. O algoritmo precisa desses sinais para otimizar as entregas. Sem dados de conversão, ele otimiza para cliques, que é uma métrica de vaidade."
    ),
    textBlock(
      "Valide sua configuração de tracking pelo menos uma vez por mês. Use o Google Tag Assistant e o Meta Pixel Helper para garantir que os eventos estão disparando corretamente em cada etapa do funil."
    ),

    textBlock("7. Otimizar cedo demais (ou nunca otimizar)", "h2"),
    textBlock(
      "Os dois extremos são prejudiciais. Mexer na campanha todo dia sem dar tempo para o algoritmo aprender gera instabilidade. Por outro lado, criar a campanha e \"esquecer\" é desperdiçar potencial de melhoria contínua."
    ),
    textBlock(
      "A regra geral é esperar pelo menos 7 dias e um mínimo de 50 conversões (ou mil impressões, o que vier primeiro) antes de fazer ajustes significativos. Depois disso, revise semanalmente com base em dados reais, não em achismos."
    ),

    textBlock("Conclusão", "h2"),
    textBlock(
      "Nenhum desses erros é difícil de corrigir. O difícil é identificar qual deles está consumindo seu orçamento quando ninguém está olhando os dados com atenção. Se sua operação de mídia paga não tem um processo de revisão semanal com análise de termos, criativos e conversões, o dinheiro vai continuar escorrendo."
    ),
    boldTextBlock([
      { text: "Na Numeratti, cada real investido tem um motivo e um número atrelado. ", bold: false },
      { text: "Se você quer parar de adivinhar e começar a escalar com previsibilidade, fale com a gente.", bold: true },
    ]),
  ];

  const post = await client.createOrReplace({
    _id: "post-7-erros-midia-paga",
    _type: "post",
    title: "7 Erros de Mídia Paga Que Estão Queimando Seu Orçamento",
    slug: { _type: "slug", current: "7-erros-de-midia-paga-que-estao-queimando-seu-orcamento" },
    publishedAt: new Date().toISOString(),
    excerpt:
      "A maioria das empresas perde dinheiro em Google Ads e Meta Ads por erros simples e evitáveis. Neste artigo, mostramos os 7 mais comuns e como corrigir cada um para transformar cliques em resultados reais.",
    categories: [
      { _type: "reference", _ref: "cat-midia-paga", _key: "ref1" },
      { _type: "reference", _ref: "cat-performance", _key: "ref2" },
    ],
    body,
  });

  console.log("  Post created:", post.title);
  console.log(`\nDone! Open http://localhost:3000/blog to see the post.`);
  console.log(`Edit it at http://localhost:3000/studio`);
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
