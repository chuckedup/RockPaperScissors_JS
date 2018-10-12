const buttons = document.querySelectorAll('button');
buttons.forEach(button => {button.addEventListener('click',game)})
const round_win = document.getElementById('round_win');
const score = document.getElementById('score');
const game_win = document.getElementById("game_win");
const bothChoices = document.getElementById("bothChoices");

let n=0;
let computer_wins = 0;
let player_wins = 0;

function computerPlay(){
    let randNum = Math.floor((Math.random()*3)+1);
    if(randNum == 1){
        return "rock";
    }else if (randNum == 2){
        return "paper";
    }return "scissors";
   }



let computerSelection = 1;

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        console.log("tied");
        return 1;
    }else{
        if(playerSelection == "rock" && computerSelection == "scissors"){
            console.log("win");
            return 2;
        } else if(playerSelection == "paper" && computerSelection == "rock") {
            return 2;
        } else if(playerSelection == "scissors" && computerSelection == "paper") {
            return 2;
        } else{ console.log("lose");return 0;}
    }
}
   
function game(e){
    if(n==  0){
        round_win.innerHTML="";
        game_win.innerHTML="";
        score.innerHTML="";
    }
    n++;
    console.log(n);
        computerSelection = computerPlay();
        bothChoices.innerHTML="You chose " + e.srcElement.id + ", and the computer chose " + computerSelection + ".";
        console.log(e.srcElement.id);
        console.log(computerSelection);
        let result = playRound(e.srcElement.id, computerSelection);
        gameNum(n,result);
        if (n==5){
            n = 0;
            console.log(n); 
            player_wins = 0;
            computer_wins = 0;  
        }
}

function gameNum(n,result){
    if(n==5){
        winCounter(result);
        if(player_wins>computer_wins){
            console.log("The player won the game!");
            game_win.textContent = "The player won the game!";
        } else if(computer_wins>player_wins){
            console.log("The computer won the game!");
            game_win.textContent = "The computer won the game!";
        } else{console.log("Tie Game!"); game_win.textContent="Tie Game!";}
    }else{winCounter(result);}

}

function winCounter(result){
            if (result == 2){
            player_wins++;
            console.log("The player won this round. ");
            round_win.textContent="The player won this round. ";
        }else if(result == 0){
            computer_wins++;
            console.log("The computer won this round. ");
            round_win.textContent="The computer won this round. ";
        } else{console.log("The round is tied. ");round_win.textContent="The round is tied. ";}
        score.innerHTML = "Total Player Wins: " + player_wins +"<br>"+"Total Computer Wins: " + computer_wins;
}