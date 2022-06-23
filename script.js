console.log("hi");
class Game{
    constructor(){
        this.computerChoices = {
            2:"rock",
            1:"scissors",
            0:"paper"
        };
        this.outcome = [];
        
        this.gameWraper = document.getElementById("game-wrapper")
    }
    userPLay(choice){
        this.outcome = [];
        let humanPlayer = document.createElement("p");
        this.outcome.push(choice);
        humanPlayer.classList.add(choice);
        humanPlayer.setAttribute("id" ,"human");
        this.gameWraper.appendChild(humanPlayer);
        this.computerPlay();
    }
    computerPlay(){
        let computerPlayer = document.createElement("p");
        let randomSelection = Math.floor(Math.random()*3);
        let computerChoice = this.computerChoices[randomSelection];
        this.outcome.push(computerChoice);
        computerPlayer.classList.add(computerChoice);
        computerPlayer.setAttribute("id","computer");
        this.gameWraper.appendChild(computerPlayer);
        this.endGame();
    }
    endGame(){
        let buttons = document.querySelectorAll("button");
        for(button of buttons){
            button.disabled = "true";
        }

        let phrase = "Draw";
        let win = "You win";
        let loose = "You loose";
        let humanOutcome = this.outcome[0];
        let computerOutcome = this.outcome[1];

        if(humanOutcome == "rock"){
            switch(computerOutcome){
                case "rock":
                    break;
                case "scissors":
                    phrase = win;
                    break;
                case "paper":
                    phrase = loose;
                    break;
            }
        }
        else if(humanOutcome == "scissors"){
            switch(computerOutcome){
                case "rock":
                    phrase = loose;
                    break;
                case "scissors":
                    break;
                case "paper":
                    phrase = win;
                    break;
            }
        }
        else if(humanOutcome == "paper"){
            switch(computerOutcome){
                case "rock":
                    phrase = win;
                    break;
                case "scissors":
                    phrase = loose;
                    break;
                case "paper":
                    break;
            }
        }

        let statement = document.createElement("p");
        statement.textContent = phrase;
        let containter = document.createElement("div");
        containter.appendChild(statement);
        let resetButton = document.createElement("button");
        resetButton.textContent = "Play Again";
        resetButton.addEventListener("click",this.reset);
        containter.appendChild(resetButton);
        containter.setAttribute("id","reset");
        let main = document.querySelector("main");
        main.appendChild(containter);
    }
    reset(){
        let humanPlayer = document.getElementById("human");
        let computerPlayer = document.getElementById("computer");
        let resetcontainer = document.getElementById("reset");
        humanPlayer.remove();
        computerPlayer.remove();
        resetcontainer.remove();
        let buttons = document.querySelectorAll("button");
        for(button of buttons){
            button.disabled = false;
        }
    }
}
let rockPaperScissors = new Game;
let buttons = document.querySelectorAll("button");
for(button of buttons){
    button.addEventListener("click", (e)=>{
        let choice = e.target.getAttribute("class");
        rockPaperScissors.userPLay(choice);
    })
}