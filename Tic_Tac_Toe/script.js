let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true; //playerX  , player0
const winpattern = [
  [0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8],
];

const resetgame = () => {
  turn0 = true;
  enableBoxes();
  msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turn0) { //X
      box.innerText = "0";
      turn0 = false;
    } else { //O
      box.innerText = "x"
      turn0 = true;
    }
    box.disabled = true;
    checkwinner();
  });
});

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;  // corrected typo
    box.innerText = "";
  }
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;  // corrected typo
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, the winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disableBoxes();
}

const checkwinner = () => {
  for (let pattern of winpattern) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("winner", pos1val);
        showWinner(pos1val);
      }
    }
  }
}

newgamebtn.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);  // corrected event listener assignment
