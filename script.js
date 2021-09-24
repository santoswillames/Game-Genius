/*
    Ordem das cores por números
    0- green
    1- red
    2- yellow
    3- blue
*/

let order = []
let clickedOrder = []
let score = 0 

const blue = document.querySelector('.blue-area')
const red = document.querySelector('.red-area')
const green = document.querySelector('.green-area')
const yellow = document.querySelector('.yellow-area')


// Gerando ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1)
    }
}

// Destaca a próxima cor
let lightColor = (element, number) => {
    number = number * 500; 
    setTimeout(() => {
        element.classList.add('selected')
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected')
    })
}

// Checagem do que foi clicado com a ordem de cores gerada
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver()
            break;
        }
    }
    if(clickedOrder.length == order.length){

        alert(`Pontuação: ${score}\nVocê Acertou! Iniciando próximo nível`);
        nextLevel()
    }
} 

// Função para clique do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color
    createColorElement(color).classList.add('selected')

    setTimeout(() => {
        createColorElement(color).classList.remove('selected')
        checkOrder()
    }, 250)

}

// função que retorna a cor
let createColorElement = (color) => {
    if(color == 0 ) {
        return green
    } else if(color == 1) {
        return red
    } else if(color == 2) {
        return yellow
    } else if(color == 3) {
        return blue 
    }
}

// função próximo jogo
let nextLevel = () => {
    score++;
    shuffleOrder()
}

// função game over
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu!\nClique em Ok para reiniciar o jogo.`);
    order = []
    clickedOrder = []

    playGame()
}

let playGame = () => {
    alert('Iniciando novo jogo')
    score = 0

    nextLevel()
}

green.onclick = () =>  click(0)
red.onclick = () =>  click(1)
yellow.onclick = () =>  click(2)
blue.onclick = () =>  click(3)

playGame()
