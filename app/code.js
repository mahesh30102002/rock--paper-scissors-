let userScore = 0;
let compScore = 0;

const items = document.querySelectorAll(".item");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");




const draw = () => {
    console.log("your game is draw! play again")
    msg.innerText = "game draw ! play again";
    msg.style.background = "orange"; 

}

const showWin = (userWin) =>{
    if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = "you won";
    msg.style.background = "green"; 
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "you lose ! play again";
        msg.style.background = "red";
    }
}
const game = (userChoice) => {
    console.log("user clicked =" , userChoice);
    const compChoice = genCompChoice();
    console.log("comp clicked =" , compChoice);
    

    if (userChoice === compChoice){
        draw();
    }

    else{
        let userWin = true;
        if(userChoice == "rock"){
            userWin  = compChoice ==="paper "? false : true;
        }
        else if (userChoice == "paper"){
            userWin = compChoice === "scissors" ? false :true ;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWin(userWin);
    }
   
}

const genCompChoice = () => {
    const option = ["rock" , "paper" , "scissors"];
    Math.floor(Math.random () * 3);
    let idx =  Math.floor(Math.random () * 3);
    return option[idx];
    

}


 
items.forEach((item) => {
    item.addEventListener("click" , () => {

        userChoice = item.getAttribute("id");
    
        game(userChoice)

    })
})