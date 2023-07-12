console.log("Welcome to Tic-Tac-Toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let isGameOver = false
let turn = "X"
let reset = document.getElementById('reset')

// :::: FUNCTIONO TO CHANGE TURN ::::
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}


// :::: FUNCTION TO CHECK WIN :::: 
const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext')
    let wins = [
        [0, 1, 2, 0, 0, 4.5],
        [3, 4, 5, 0, 0, 14.5],
        [6, 7, 8, 0, 0, 19.5],
        [0, 3, 6, 90, 15, 10],
        [1, 4, 7, 90, 15, 0],
        [2, 5, 8, 90, 15, -10],
        [0, 4, 8, 45, 10, 10.5],
        [2, 4, 6, 135, 10, -10.5],
    ]

    wins.forEach((e) => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won"
            isGameOver = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "300px";
            document.querySelector(".line").style.transform = `rotate(${e[3]}deg) translate(${e[4]}vw, ${e[5]}vw)`;
            document.querySelector(".line").style.width = "30vw"
        }
    })
}

// :::: GAME LOGIC ::::

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            music.volume = 0.04;
            music.play();
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isGameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn
            }
        }
    })
})

// :::: RESET CONFIGURATION ::::
reset.addEventListener('click', () => {
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach((element) => {
        element.innerText = ""
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = 0
        isGameOver = false
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn
        document.querySelector(".line").style.width = "0vw"
    })
})