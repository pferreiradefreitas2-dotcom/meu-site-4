function gerarCapa() {
  // Pega a ideia atual
  const ideiaAtual = document.getElementById("output").innerText.replace("💡 Ideia: ", "");

  // Mostra mensagem de carregamento
  document.getElementById("capa").innerText = "🎨 Gerando capa para: " + ideiaAtual + "...";

  // Aqui você integraria a chamada para uma API de geração de imagens
  // Exemplo fictício:
  // fetch("https://api.gerador-imagens.com/create", {
  //   method: "POST",
  //   body: JSON.stringify({ prompt: ideiaAtual })
  // })
  // .then(res => res.json())
  // .then(data => {
  //   document.getElementById("capa").innerHTML = "🎨 Capa gerada:<br><img src='" + data.url + "'>";
  // });

  // Para teste simples, podemos usar uma imagem aleatória de jogos/tecnologia:
  const imagensTeste = [
    "https://picsum.photos/seed/games/400/250",
    "https://picsum.photos/seed/tech/400/250",
    "https://picsum.photos/seed/console/400/250",
    "https://picsum.photos/seed/pcgamer/400/250"
  ];
  let sorteio = imagensTeste[Math.floor(Math.random() * imagensTeste.length)];
  document.getElementById("capa").innerHTML = "🎨 Capa gerada:<br><img src='" + sorteio + "'>";
}
