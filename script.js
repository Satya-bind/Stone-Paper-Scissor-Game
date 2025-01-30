let userScore = 0;              // variables 
let compScore = 0;              // variables 


// DOM Manipulation;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


//Random Number Generation;

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);        
    return options[randIdx];                                           // koi bhi random number choose karta hai 
    // rock, paper, scissors
}


// Draw Text

const drawGame = () => {
    msg.innerText = "Game was draw. Play again";
    msg.style.backgroundColor = "grey";
}


// 

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;                                                                       //Update Scores;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your${userChoice} beats  ${compChoice}`;
        msg.style.backgroundColor = "green";

    } else {
        compScore++;                                                                      //Update Scores;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
}




//Winner/Loser Logic;

const  playGame = (userChoice) => {
    console.log("user choice = ", userChoice);  //Generate computer choice -> modular
    const compChoice = genCompChoice();
    console.log("Comp choice = ", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {                                                     
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {                                                 
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;                                  
        }
        showWinner(userWin, userChoice, compChoice);
    }
}



//vent Handling;

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);     
    } );
});