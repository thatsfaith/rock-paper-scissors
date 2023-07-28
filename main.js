
 let playerScore = 0;
 let computerScore = 0;
  

 function getComputerChoice() {
  let options = ['rock', 'paper', 'scissors'];
  let randomNumber = Math.floor(Math.random() * options.length);
  return options[randomNumber];
}

function getPlayerChoice() {
  let playerChoice = prompt("Choose a weapon");
  return playerChoice.toLowerCase();
}


     
function playRound(playerSelection, computerSelection) { 
  switch (playerSelection + computerSelection) {
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
      playerScore++
      return `You win this round. Your score: ${playerScore} Computer score: ${computerScore}`;
      break
    case 'scissorsrock':
    case 'rockpaper':
    case 'paperscissors':
      computerScore++
      return `Computer wins this round. Your score: ${playerScore} Computer score: ${computerScore}`;
      break 
    case 'scissorsscissors':
    case 'paperpaper':
    case 'rockrock':
     return `It's a draw. You both picked ${playerSelection}. Your score: ${playerScore} Computer score: ${computerScore}`
     break    
  }
}
   


function game(){
    for (let  i = 0; i < 5;  i++) {
     playerSelection = getPlayerChoice();
     computerSelection = getComputerChoice();
     console.log(playRound(playerSelection, computerSelection));
    }
     if (playerScore > computerScore){
       console.log('You win! GAME OVER');
     } else if (computerScore > playRound) {
      console.log('You lose. GAME OVER');
     } else console.log('We have a tie. GAME OVER');
  }
game();