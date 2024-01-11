let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score")
const comScorePara = document.querySelector("#comp-score")


const genComChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randInd = Math.floor(Math.random() * 3);
    return options[randInd];
    // rock, paper, scissors
};
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore
   
        msg.innerText = `you win ! ${userChoice} beats ${compChoice}😍`
        msg.style.backgroundColor = "green"
    } else {
        compScore++
        comScorePara.innerText = compScore
        msg.innerText = `you lose ! ${compChoice} beats ${userChoice}😒`
        msg.style.backgroundColor = "red"

    }
};


const drawGame = () => {
    alert("oops game was draw🫣");
    msg.innerText = "game draw Play Again😁"
    msg.style.backgroundColor = "purple"

};

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    // generate computer choice
    const compChoice = genComChoice();
    console.log("comp choice num", compChoice);

    if (userChoice === compChoice) {
        // draw game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin , userChoice, compChoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
