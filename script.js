// Lista de ideias no nicho de jogos e tecnologia
const ideias = [
  "Review de consoles da nova geração",
  "Top 5 jogos indies de 2026",
  "Comparação de placas de vídeo para gamers",
  "História dos jogos retrô",
  "Testando acessórios gamer (headsets, teclados)",
  "Como montar um PC gamer econômico",
  "Tendências em realidade virtual",
  "Os melhores mods para jogos populares",
  "Impacto da IA nos jogos modernos",
  "Dicas para streamers iniciantes"
];

let usadas = [];
let ideiaAtual = ""; // guarda a última ideia

function novaIdeia() {
  if (usadas.length === ideias.length) {
    usadas = [];
  }

  let restante = ideias.filter(i => !usadas.includes(i));
  let sorteio = restante[Math.floor(Math.random() * restante.length)];

  usadas.push(sorteio);
  ideiaAtual = sorteio;

  document.getElementById("output").innerText = "💡 Ideia: " + sorteio;
  document.getElementById("roteiro").innerText =
    "📜 Roteiro:\n" +
    "Introdução: Apresente o tema \"" + sorteio + "\".\n" +
    "Passo 1: Explique o contexto.\n" +
    "Passo 2: Mostre exemplos práticos.\n" +
    "Passo 3: Dê dicas ou comparações.\n" +
    "Conclusão: Convide o público a interagir.";
}

function gerarCapa() {
  if (!ideiaAtual) {
    document.getElementById("capa").innerText = "⚠️ Primeiro gere uma ideia!";
    return;
  }

  // Exemplo simples com imagens aleatórias
  const imagensTeste = [
    "https://picsum.photos/seed/games/400/250",
    "https://picsum.photos/seed/tech/400/250",
    "https://picsum.photos/seed/console/400/250",
    "https://picsum.photos/seed/pcgamer/400/250"
  ];
  let sorteio = imagensTeste[Math.floor(Math.random() * imagensTeste.length)];

  document.getElementById("capa").innerHTML =
    "🎨 Capa para \"" + ideiaAtual + "\":<br><img src='" + sorteio + "'>";
}
