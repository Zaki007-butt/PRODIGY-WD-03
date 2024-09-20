let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let mssgContainer = document.querySelector(".msg-container");
let mssg = document.querySelector("#msg");
let turn0 = true;
let count = 0;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) =>{
    box.addEventListener("click", () => {
        count++;
        console.log(count);
        console.log("box is clicked");
        if(turn0){
            box.innerText = 'O';
            turn0 = false;
        }
        else{
            box.innerText = 'X';
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
        checkDraw(count);
    });
});

const checkDraw = (count) =>{
    if(count === 9){
        mssg.innerText = `Game is Draw`;
        mssgContainer.classList.remove("hide");
        resetBtn();
    }
}


const resetGame = () =>{
    turn0 = true;
        for(let box of boxes){
            box.disabled = false;
            box.innerText = "";
        }
    mssgContainer.classList.add("hide");
}

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const showWinner = (winner) =>{
    mssg.innerText =  `Congratulations, Winner is ${winner}`;
    mssgContainer.classList.remove("hide");
    disableBoxes();
    resetGame();
}

const checkWinner = () =>{
    for(let pattern of winPatterns){
       // console.log(pattern[0], pattern[1], pattern[2]);
       // console.log(
          //  boxes[pattern[0]].innerText,
           // boxes[pattern[1]].innerText, 
            //boxes[pattern[2]].innerText);

            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;

            if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
                if(pos1Val === pos2Val && pos2Val === pos3Val){
                    console.log("Winner", pos1Val);
                    showWinner(pos1Val);
            }
        }
    }
}

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);