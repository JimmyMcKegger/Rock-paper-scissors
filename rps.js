        // play a full game
        function game() {

            // reset scores
            let playerScore = 0;
            let playerSelection = "";
            let computerScore = 0;
            let computerSelection = "";
            let tie = 0;
            let winner = ``;
            let res = "";

            // start game
            for (let i = 0; i < 5; i++) {
                computerSelection = computerPlay();
                playerSelection = playerPlay();;
                res = playRound(computerSelection, playerSelection);
                if (res[4] == "w"){
                    playerScore++;
                } else if (res[4] == "l"){
                    computerScore++;
                } else {
                    tie++;
                }
                console.log(res);
            }
            if (playerScore > computerScore){
                winner = `Congratulations, you win! \nResuts: W-${playerScore} L-${computerScore} T-${tie}`
            } else if (computerScore > playerScore){
                winner = `You lose. \nResuts: W-${playerScore} L-${computerScore} T-${tie}` 
            } else {
                winner = `It's a tie \nResuts: W-${playerScore} L-${computerScore} T-${tie}` 
            }
            console.log(winner);
        }
        
        // randomly pick rock, paper or scissors
        function computerPlay() {
        computerSelection = Math.floor(Math.random() * 3 + 1);
        switch(computerSelection) {
        case 1 :
                computerSelection = "Rock";
                break;
            case 2 :
                computerSelection = "Paper";
                break;
            case 3 :
                computerSelection = "Scissors";
                break;
        }
        return computerSelection;
        }
        
        // prompt the player for a choice
        function playerPlay() {
        let str = prompt("Pick a weapon: ");
        let lowerText = str.toLowerCase();
        let capText = lowerText.charAt(0).toUpperCase() + lowerText.slice(1);
        
        if (capText === "Rock") {
            playerSelection = capText;
            return playerSelection;
        } else if (capText === "Paper") {
            playerSelection = capText;
            return playerSelection;
        } else if (capText === "Scissors") {
            playerSelection = capText;
            return playerSelection;
        } else {
            alert("Pick 'Rock', 'Paper', or 'Scissors'.");
            playerPlay();
        }
        
        }
        
        // compare and log a winner
        function playRound(computerSelection, playerSelection) {
            let com = "";
            if (computerSelection === playerSelection){
                com = "Tie! Pick again.";
            }
            else if (computerSelection == "Rock" && playerSelection == "Scissors"){
                com = "You lose! Rock beats scissors.";
            }
            else if (computerSelection == "Rock" && playerSelection == "Paper"){
                com = "You win! Paper covers rock.";
            }
            else if (computerSelection == "Paper" && playerSelection == "Rock"){
                com = "You lose! Paper covers rock.";
            }
            else if (computerSelection == "Paper" && playerSelection == "Scissors"){
                com = "You win! Scissors beats paper.";
            }
            else if (computerSelection == "Scissors" && playerSelection == "Rock"){
                com = "You win! Rock beats scissors.";
            }
            else if (computerSelection == "Scissors" && playerSelection == "Paper"){
                com = "You lose! Scissors beats paper.";
            }
            return com;
        }
