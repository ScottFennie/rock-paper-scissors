let playerPick = 0
let compPick = 0
let wins = 0
let winLoss = ""
let compImage = 0

function play(playersChoice) {


    if (playersChoice == "Rock") {
        playerPick = 0
    }
    if (playersChoice == "Paper") {
        playerPick = 1
    }
    if (playersChoice == "Scissors") {
        playerPick = 2
    }


    calcComputer()


}

function calcComputer() {
    compPick = Math.floor(Math.random() * 3)

    calcWinner()


    console.log(compImage)


}

function calcImage() {
    if (compImage == 1) {
        document.getElementById("rpcimage").innerHTML =
            `<img class="computer-img" src="rock.gif" alt="">`
    }
    if (compImage == 2) {
        document.getElementById("rpcimage").innerHTML =
            `<img class="computer-img" src="paper.gif" alt="">`
    }
    if (compImage == 3) {
        document.getElementById("rpcimage").innerHTML =
            `<img class="computer-img" src="sciz.gif" alt="">`
    }
}

function calcWinner() {
    if (playerPick == 0 && compPick == 0) {
        wins += 0;
        winLoss = "Tie"
    }
    if (playerPick == 0 && compPick == 2) {
        wins += 1;
        winLoss = "Win"
    }
    if (playerPick == 0 && compPick == 1) {
        wins -= 1;
        winLoss = "Lose"
    }

    if (playerPick == 1 && compPick == 0) {
        wins += 1;
        winLoss = "Win"
    }
    if (playerPick == 1 && compPick == 1) {
        wins += 0;
        winLoss = "Tie"
    }
    if (playerPick == 1 && compPick == 2) {
        wins -= 1;
        winLoss = "Lose"
    }

    if (playerPick == 2 && compPick == 0) {
        wins -= 1;
        winLoss = "Lose"
    }
    if (playerPick == 2 && compPick == 1) {
        wins += 1;
        winLoss = "Win"
    }
    if (playerPick == 2 && compPick == 2) {
        wins += 0;
        winLoss = "Tie"
    }
    document.getElementById("winner").innerText = "You" + " " + winLoss + "!";

    document.getElementById("score").innerText = "Score:" + " " + wins


    if (compPick == 0) {
        compImage = 1
    }
    if (compPick == 1) {
        compImage = 2
    }
    if (compPick == 2) {
        compImage = 3
    }


    calcImage()
    clearBoard()
}

function clearBoard() {

    playerPick = 0
    compPick = 0
}