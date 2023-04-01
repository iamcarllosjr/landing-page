/* 
   Quando clicar na seta para avançar temos que esconder
   todas as imagens e mostras a próxima imagem.

   A imagem atual começa em 0 pq é a primeira imagem, assim
   que for clicado no avançar eu preciso adicionar +1 ao contador de imagens
 */

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

function esconderImagem(){
    //removendo a classe mostrar da imagem
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
}

function mostrarImagem(){
    imagensPainel[imagemAtual].classList.add('mostrar');
}

setaAvancar.addEventListener('click', function() {
    
    //testar se o contador da imagemAtual é igual ao contador de imagens
    const totalDeImagens = imagensPainel.length - 1;
    if(imagemAtual === totalDeImagens){
        return;

    }

    //contador (adição)
    imagemAtual++;

    esconderImagem();
    mostrarImagem();

});

setaVoltar.addEventListener('click', function(){

    if(imagemAtual === 0){
        return; 
    }

    imagemAtual--;

    esconderImagem();
    mostrarImagem();
})