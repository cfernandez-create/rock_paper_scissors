function cpuChoice() {
  const choices = ["rock", "paper", "scissors"];
  const choicesArray = Math.floor(Math.random() * choices.length);
  return choices[choicesArray];
}

function gameRound(playerPlays, cpuPlays) {
  playerPlays = playerPlays.toLowerCase();

  if (playerPlays === cpuPlays) {
    return "Tie!";
  } else if (
    (playerPlays === "rock" && cpuPlays === "scissors") ||
    (playerPlays === "scissors" && cpuPlays === "paper") ||
    (playerPlays === "paper" && cpuPlays === "rock")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}


function start() {
  let playerScore = 0;
  let cpuScore = 0;
  let roundPlayed = 0;
  let gameEnded = false;


  const rockButton = document.querySelector(".choices__rock");
  rockButton.addEventListener("click", function () {
    if(!gameEnded){
    playRound('rock')
    }
  });

  const paperButton = document.querySelector(".choices__paper");
  paperButton.addEventListener("click", function () {
    if(!gameEnded){
    playRound('paper')
    }
  });

  const scissorsButton = document.querySelector(".choices__scissors");
  scissorsButton.addEventListener("click", function () {
    if(!gameEnded){
    playRound('scissors')
    }
  });

  const startButton = document.querySelector(".new-game__btn")
  startButton.addEventListener("click", function() {
  window.location.reload()
  })

  
  const playerScoreE = document.querySelector('.scores__player-score')
  const cpuScoreE = document.querySelector('.scores__cpu-score')
  playerScoreE.textContent = 'YOU :' + playerScore;
  cpuScoreE.textContent = 'CPU :' + cpuScore;

  const rounds = document.querySelector('.header__rounds')

  const finalResult = document.querySelector('.game-result__result')
 
 


  function playRound(playerPlays) {
    const cpuPlays = cpuChoice();
    const roundPoint = gameRound(playerPlays, cpuPlays);
    console.log(roundPoint);

    if (roundPoint.includes("win")) {
      playerScore++;
    } else if (roundPoint.includes("lose")) {
      cpuScore++;
    }
   
    playerScoreE.textContent = 'YOU :' + playerScore;
    cpuScoreE.textContent = 'CPU :' + cpuScore;

    roundPlayed++
    rounds.textContent = 'Rounds: ' + roundPlayed + "/5";
    if (roundPlayed === 5){
        endGame();
    }
  }
  
  let finalResultText = ''
  function endGame() {

    gameEnded = true;

    if (playerScore > cpuScore){
         finalResultText = 'You Win!'
    } else{
        finalResultText = 'You lose!'
    }
  finalResult.textContent = (finalResultText);
}
}

start();
