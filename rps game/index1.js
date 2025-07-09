let user=0;
let comp=0;

const choices=document.querySelectorAll(".choice");
const message1=document.querySelector(".message");
const userscore=document.querySelector(".us");
const compscore=document.querySelector(".co");

const compchoice=()=>{
    let options=["rock","paper","scissors"];
    let opti=Math.floor(Math.random()*3);
    return options[opti];
}

const playgame=(userchoice)=>{
    console.log("user choice = ", userchoice);
    const comp=compchoice();
    console.log("computer choice = ", comp);
    if(userchoice===comp){
        console.log("It is a draw");
        message1.innerText="DRAW. PLAY AGAIN";
        message1.style.backgroundColor="black";
        
    }
    else{
        let userWin = true;
    if (userchoice === "rock") {
      userWin = comp === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userWin = comp === "scissors" ? false : true;
    } else {
      userWin = comp === "rock" ? false : true;
    }
    showwinner(userWin, userchoice, comp);
    }
};
const showwinner=(userWin)=>{
    if(userWin){
        user++;
        userscore.innerText=user;
        console.log("you win");
        message1.innerText="YOU WIN!";
        message1.style.backgroundColor="green";
    }
    else{
        comp++;
        compscore.innerText=comp;
        console.log("you lose");
        message1.innerText="YOU LOSE";
        message1.style.backgroundColor="red";
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});

const restartBtn = document.getElementById("restart");
restartBtn.addEventListener("click", () => {
    user = 0;
    comp = 0;
    userscore.innerText = user;
    compscore.innerText = comp;
    message1.innerText = "Play your move";
    message1.style.backgroundColor = "black";
});


