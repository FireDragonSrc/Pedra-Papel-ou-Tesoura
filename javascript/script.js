const jogador1 =  document.querySelector('.jogada1');
const jogador2 =  document.querySelector('.jogada2');   

const msgJogador1 = document.querySelector('.vez1');
const msgJogador2 = document.querySelector('.vez2');

function JogarTesoura(){
    jogador1.src = "/assets/image/maos.png"; 
    if(jogador2.src = '/assets/image/maos.png'){
        msgJogador1.innerHTML = 'Empate!';
        msgJogador2.innerHTML = 'Empate!';
    }
    else if(jogador2.src = "assets/image/maos02.png"){
        msgJogador1.innerHTML = 'Ganhou!'
        msgJogador2.innerHTML = 'Perdeu!'
    }
    else if(jogador2.src = "assets/image/maos03.png"){
        msgJogador1.innerHTML = 'Perdeu!'
        msgJogador2.innerHTML = 'Ganhou!'
    }
}
function JogarPapel(){
    jogador1.src = "/assets/image/maos02.png";
    if(jogador2.src = '/assets/image/maos.png'){
        msgJogador1.innerHTML = 'Perdeu!';
        msgJogador2.innerHTML = 'Ganhou!'
    }
    else if(jogador2.src = "assets/image/maos02.png"){
        msgJogador1.innerHTML = 'Empate!'
        msgJogador2.innerHTML = 'Empate!'
    }
    else if(jogador2.src = "assets/image/maos03.png"){
        msgJogador1.innerHTML = 'Ganhou!'
        msgJogador2.innerHTML = 'Perdeu!'
    }
}
function JogarPedra(){
    jogador1.src = "/assets/image/maos03.png";
    if(jogador2.src = '/assets/image/maos.png'){
        msgJogador1.innerHTML = 'Ganhou!';
        msgJogador2.innerHTML = 'Perdeu!'
    }
    else if(jogador2.src = "assets/image/maos02.png"){
        msgJogador1.innerHTML = 'Perdeu!'
        msgJogador2.innerHTML = 'Ganhou!'
    }
    else if(jogador2.src = "assets/image/maos03.png"){
        msgJogador1.innerHTML = 'Empate!'
        msgJogador2.innerHTML = 'Empate!'
    }
}
const tesouraJogador2 = document.querySelector('.tesoura2');
const papelJogador2 = document.querySelector('.papel2');
const pedraJogador2 = document.querySelector('.pedra2');

function aleatorio(){
    const random = (min, max) => Math.floor(Math.random() * (max - min) + min);
    let arr = ['/assets/image/maos.png', '/assets/image/maos02.png', '/assets/image/maos03.png']; 
    let ran = arr[random(0, arr.length)];
    msgJogador2.innerHTML = '';
    jogador2.src = ran;
} setInterval(() => {aleatorio()}, 10000);