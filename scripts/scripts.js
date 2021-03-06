let order = [];
let clickedOrder = [];
let score = 0;

// 0 - verde
// 1 - vermelho
// 2 - azul
// 3 - amarelo

const green = document.querySelector(".green");
const red = document.querySelector(".red");
const blue = document.querySelector(".blue");
const yellow = document.querySelector(".yellow");

//cria ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];
    
    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a p[roxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add("selected");
    }, number - 250);
    setTimeout(() => {
        element.classList.remove("selected");
    });
}

//checa os botões clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            brake;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

    //função para o clique do usuario
    let click = (color) => {
        clickedOrder[clickedOrder.length] = color;
        createColorElement(color).classList.add("selected");

        setTimeout(() => {
            createColorElement(color).classList.remove("selected");
            checkOrder();
        }, 250);
    }

    //função que retorna a cor
    let createColorElement = (color) => {
        if(color == 0) {
            return green;
        } else if(color == 1) {
            return red;
        } else if(color == 2) {
            return blue; 
        } else if(color == 3) {
            return yellow;
        }
    }

    //função para próximo nível do jogo
    let nextLevel = () => {
        score++;
        shuffleOrder();
    }

    //funcão para o game over
    let gameOver = () => {
        alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
        order = [];
        clickedOrder = [];

        playGame();
    }

    //função de inicio do jogo
    let playGame = () => {
        alert("Bem vindo ao Gênesis! Iniciando novo jogo!");
        score = 0;

        nextLevel();
    }
    //evento de clique para as cores
    green.onclick = () => click(0);
    red.onclick = () => click(1);
    yellow.onclick = () => click(2);
    blue.onclick = () => click(3);

    //inicio de jogo
    playGame();