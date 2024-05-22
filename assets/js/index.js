const imagensPainel = document.querySelectorAll(".imagem-painel");
const setaAvancar = document.getElementById("btn-avancar");
const setaVoltar = document.getElementById("btn-voltar");
let imagemAtual = 0;

function esconderImagens() {
  imagensPainel.forEach((imagem) => {
    imagem.classList.remove("mostrar");
  });
}

function mostrarImagem() {
  imagensPainel[imagemAtual].classList.add("mostrar");
}

setaAvancar.addEventListener("click", function () {
  const totalDeImagens = imagensPainel.length - 1;
  if (imagemAtual === totalDeImagens) {
    console.log("Não pode avançar mais");
    return;
  }

  imagemAtual++;

  esconderImagens();
  mostrarImagem();
});

setaVoltar.addEventListener("click", function () {
  if (imagemAtual == 0) {
    console.log("Não tem mais como voltar");
  }

  imagemAtual--;

  esconderImagens();
  mostrarImagem();
});
