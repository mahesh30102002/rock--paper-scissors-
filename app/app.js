 let userScore = 0;
 let compScore = 0;

 const items = document.querySelectorAll(".item");
 const msg = document.querySelector("#msg");
 const userScorePara = document.querySelector("#user-score");
 const compScorePara = document.querySelector("#comp-score");

const draw = () => {
    console.log("your game was draw");
    msg.innerText = "your game is draw ! play aggain";
    msg.style.background = "orange";

}

const showWin = (userWin) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "you won the game";
        msg.style.background = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "yous lose ! play again";
        msg.style.background = "red";
    }

}

 const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    Math.floor(Math.random() * 3);
    const idx = Math.floor(Math.random() * 3);
    return options[idx]; 
 }


const game = (userChoice) =>{
 console.log("user clicked on = ", userChoice);
 const compChoice = genCompChoice();
 console.log("comp choice is = ", compChoice);


 if(userChoice === compChoice){
    draw();
 
 } 
 else {

     let userWin = true ;
     if(userChoice == "rock"){
        userWin = compChoice === "paper" ? false : true;
     }
     else if(userChoice == "paper"){
        userWin = compChoice === "scissors" ? false : true;
     }
     else{
      
        userWin = compChoice === "rock" ? false : true ; 
    }
    showWin(userWin);
 }

}

 items.forEach((item) => {
    item.addEventListener("click" , () => {

        const userChoice = item.getAttribute("id");
        game(userChoice);
       
    } )
 })