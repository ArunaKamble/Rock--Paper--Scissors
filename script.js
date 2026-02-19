let playerScore = 0;
let computerScore = 0;

function play(playerChoice){

    const choices = ["rock","paper","scissors"];
    const computerChoice = choices[Math.floor(Math.random()*3)];

    let resultText = "";
    let resultClass = "";

    if(playerChoice === computerChoice){
        resultText = "It's a Draw!";
        resultClass = "draw";
    }
    else if(
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ){
        resultText = "You Win! 🎉";
        resultClass = "win";
        playerScore++;
    }
    else{
        resultText = "Computer Wins! 💻";
        resultClass = "lose";
        computerScore++;
    }

    const resultDiv = document.getElementById("result");
    resultDiv.className = "result " + resultClass;
    resultDiv.innerText =
        `You: ${playerChoice} | Computer: ${computerChoice}\n${resultText}`;

    document.getElementById("playerScore").innerText = playerScore;
    document.getElementById("computerScore").innerText = computerScore;
}

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    document.getElementById("playerScore").innerText = 0;
    document.getElementById("computerScore").innerText = 0;
    document.getElementById("result").innerText = "Choose your move!";
    document.getElementById("result").className = "result";
}
