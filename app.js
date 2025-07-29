// let titulo = document.querySelector('h1');
let listaNumerossorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

// titulo.innerHTML = 'Jogo do numero secreto';
// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML ='Escolha um numero entre 1 e 10';
// funcoes com parametros e sem parametros
function exibirTextoNatela(tag,texto){
    let campo = document.querySelector(tag);
    campo. innerHTML = texto;

}
function exibirMensagemInicial(){

    exibirTextoNatela('h1','Jogo do numero secreto');
    exibirTextoNatela('p','Escolha um numero entre 1 e 10');


}
exibirMensagemInicial();


// nenhum parametro mas tem retorno;
function  gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeelementoslista =listaNumerossorteados.length;

    if(quantidadeDeelementoslista == numeroLimite)
    {
        listaNumerossorteados = [];
    }
    // includes funcao que verifica se o numero escolhido ja foi usado
    if(listaNumerossorteados.includes(numeroEscolhido))
    {
        // recursao
        return gerarNumeroAleatorio();
    }else{
        // push coloca o parametro escolhido ao final da lista
        listaNumerossorteados.push(numeroEscolhido);
        console.log(listaNumerossorteados);
        return numeroEscolhido;
    }
}
// sem retorno
function verificarChute()
{
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto)
    {
        exibirTextoNatela('h1','acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
        let mensagemTentativas = `voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`; 
        exibirTextoNatela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else
    {
        if(chute > numeroSecreto){
            exibirTextoNatela('p','o numero secreto e menor');
        }
        else{
             exibirTextoNatela('p','o numero secreto e maior');
        }
        tentativas++;
        limparCampo();
    }

    // console.log('teste do botao');
    console.log(chute == numeroSecreto);
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto =gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}