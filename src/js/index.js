// OBJETIVO PRINCIPAL - quando clicar na seta para avançar temos que esconder todas as imagens e mostrar a próxima imagem

//     a imagem atual começa em 0 porque é a primeira imagem, assim que for clicado no avançar eu preciso adicionar mais 1 ao contador de imagens  pra poder saber que agora vou mostrar a próxima imagem

//     - esconder todas as imagens
//         pegar todas as imagens usando o DOM e remover a classe mostrar

//     - mostrar a próxima imagem
//         pegar todas as imagens, descobrir qual é a próxima, e colocar a classe mostrar nela

const imagensPainel = document.querySelectorAll(".imagem-painel");
const setaAvancar = document.getElementById("btn-avancar");
const setaVoltar = document.getElementById("btn-voltar");
let imagemAtual = 0;

function Esconder(){
    imagensPainel.forEach(imagem => {
    imagem.classList.remove("mostrar");
    });
}

function Mostrar(){
    imagensPainel[imagemAtual].classList.add("mostrar");
}

setaAvancar.addEventListener("click", function () {

 const totalDeImagens = imagensPainel.length - 1;

// teste se o contador da imagemAtual e igual ao total de imagens

if(imagemAtual === totalDeImagens){
    return;
}

imagemAtual++;

Esconder();

Mostrar();

});

setaVoltar.addEventListener("click", function () {

    if(imagemAtual === 0){

        return;

    }

imagemAtual--;

Esconder();

Mostrar();

imagensPainel[imagemAtual].classList.add("mostrar");


});

