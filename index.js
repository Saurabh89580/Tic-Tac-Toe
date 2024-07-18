let btn = document.querySelectorAll(".box");
let restbtn = document.querySelector("#reset-btn");
let newGame = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".win");
let msg = document.querySelector("#win-msg");

let turnO = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 8],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8], 
];

const resetGame = () => {
    turnO = true;
    enablebtn();
    msgcontainer.classList.add("hide");
};


btn.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        CheckWinner();
    });
});
const disablebtn = () => {
    for (let box of btn) {
        box.disabled = true;
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`
    msgcontainer.classList.remove("hide");
    disablebtn();
}

const enablebtn = () => {
    for(let box of btn) {
        box.disabled = false;
        box.innerText = "";
    }
}

const CheckWinner = () => {
    for(let pattern of winPattern) {
        let pos1Val = btn[pattern[0]].innerText;
        let pos2Val = btn[pattern[1]].innerText;
        let pos3Val = btn[pattern[2]].innerText;
        
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val == pos2Val && pos2Val == pos3Val) {
                console.log("Winner" , pos1Val);
                
                showWinner(pos1Val);
            }
        }
    }
};

newGame.addEventListener("click",resetGame);
restbtn.addEventListener("click", resetGame);
