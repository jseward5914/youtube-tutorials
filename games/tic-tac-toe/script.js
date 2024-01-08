const cell1 = document.getElementById("cell1");
const cell2 = document.getElementById("cell2");
const cell3 = document.getElementById("cell3");
const cell4 = document.getElementById("cell4");
const cell5 = document.getElementById("cell5");
const cell6 = document.getElementById('cell6');
const cell7 = document.getElementById('cell7');
const cell8 = document.getElementById('cell8');
const cell9 = document.getElementById('cell9');

let currentPlayer = "";

alert("The first player will now be randomly chosen.")

function checkForWin() {
    if (cell1.innerText == "X" && cell2.innertext == "X" && cell3.innerText == "X") {
        alert("You lose!");
        location.reload();
    } else if (cell4.innerText == "X" && cell5.innerText == "X" && cell6.innerText == "X") {
        alert("You lose!");
        location.reload();
    } else if (cell7.innerText == "X" && cell8.innerText == "X" && cell9.innerText == "X") {
        alert("You lose!");
        location.reload();
    } else if (cell1.innerText == "X" && cell4.innerText == "X" && cell7.innerText == "X") {
        alert("You lose!");
        location.reload();
    } else if (cell2.innerText == "X" && cell5.innerText == "X" && cell8.innerText == "X") {
        alert("You lose!");
        location.reload();
    } else if (cell3.innerText == "X" && cell6.innerText == "X" && cell9.innerText == "X") {
        alert("You lose!");
        location.reload();
    } else if (cell1.innerText == "X" && cell5.innerText == "X" && cell9.innerText == "X") {
        alert("You lose!");
        location.reload();
    } else if (cell3.innerText == "X" && cell5.innerText == "X" && cell7.innerText == "X") {
        alert("You lose!");
        location.reload();
    } if (cell1.innerText == "O" && cell2.innertext == "O" && cell3.innerText == "O") {
        alert("You win!");
        location.reload();
    } else if (cell4.innerText == "O" && cell5.innerText == "O" && cell6.innerText == "O") {
        alert("You win!");
        location.reload();
    } else if (cell7.innerText == "O" && cell8.innerText == "O" && cell9.innerText == "O") {
        alert("You win!");
        location.reload();
    } else if (cell1.innerText == "O" && cell4.innerText == "O" && cell7.innerText == "O") {
        alert("You win!");
        location.reload();
    } else if (cell2.innerText == "O" && cell5.innerText == "O" && cell8.innerText == "O") {
        alert("You win!");
        location.reload();
    } else if (cell3.innerText == "O" && cell6.innerText == "O" && cell9.innerText == "O") {
        alert("You win!");
        location.reload();
    } else if (cell1.innerText == "O" && cell5.innerText == "O" && cell9.innerText == "O") {
        alert("You win!");
        location.reload();
    } else if (cell3.innerText == "O" && cell5.innerText == "O" && cell7.innerText == "O") {
        alert("You win!");
        location.reload();
    } else if (
        cell1.innerText !== "" && 
        cell2.innerText !== "" && 
        cell3.innerText !== "" && 
        cell4.innerText !== "" && 
        cell5.innerText !== "" && 
        cell6.innerText !== "" && 
        cell7.innerText !== "" && 
        cell8.innerText !== "" && 
        cell9.innerText !== ""
    ) {
        alert("It's a tie!!!");
        location.reload();
    } else if (currentPlayer == "player") {
        playersTurn();
    } else {
        setTimeout(computersTurn, 2500);
    }
}

function computersTurn() {
    const randomNum = Math.round(Math.random() * 9);
    if (randomNum == 1 && cell1.innerText == "") {
        cell1.innerText = "X";
    } else if (randomNum == 2 && cell2.innerText == "") {
        cell2.innerText = "X";
    } else if (randomNum == 3 && cell3.innerText == "") {
        cell3.innerText = "X";
    } else if (randomNum == 4 && cell4.innerText == "") {
        cell4.innerText = "X";
    } else if (randomNum == 5 && cell5.innerText == "") {
        cell5.innerText = "X";
    } else if (randomNum == 6 && cell6.innerText == "") {
        cell6.innerText = "X";
    } else if (randomNum == 7 && cell7.innerText == "") {
        cell7.innerText = "X";
    } else if (randomNum == 8 && cell8.innerText == "") {
        cell8.innerText = "X";
    } else if (randomNum == 9 && cell9.innerText == "") {
        cell9.innerText = "X";
    } else {
        computersTurn();
    }
    currentPlayer = "player";
    checkForWin();
}

function playersTurn() {
    cell1.addEventListener("click", () => {
        if (cell1.innerText == "") {
            cell1.innerText = "O";
            currentPlayer = "computer";
            setTimeout(checkForWin, 1000);
        };
        
    });
    cell2.addEventListener("click", () => {
        if (cell2.innerText == "") {
            cell2.innerText = "O";
            currentPlayer = "computer";
            setTimeout(checkForWin, 1000);
        };

    });
    cell3.addEventListener("click", () => {
        if (cell3.innerText == "") {
            cell3.innerText = "O";
            currentPlayer = "computer";
            setTimeout(checkForWin, 1000);
        };

    });
    cell4.addEventListener("click", () => {
        if (cell4.innerText == "") {
            cell4.innerText = "O";
            currentPlayer = "computer";
            setTimeout(checkForWin, 1000);
        };

    });
    cell5.addEventListener("click", () => {
        if (cell5.innerText == "") {
            cell5.innerText = "O";
            currentPlayer = "computer";
            setTimeout(checkForWin, 1000);
        };

    });
    cell6.addEventListener("click", () => {
        if (cell6.innerText == "") {
            cell6.innerText = "O";
            currentPlayer = "computer";
            setTimeout(checkForWin, 1000);
        };

    });
    cell7.addEventListener("click", () => {
        if (cell7.innerText == "") {
            cell7.innerText = "O";
            currentPlayer = "computer";
            setTimeout(checkForWin, 1000);
        };

    });
    cell8.addEventListener("click", () => {
        if (cell8.innerText == "") {
            cell8.innerText = "O";
            currentPlayer = "computer";
            setTimeout(checkForWin, 1000);
        };

    });
    cell9.addEventListener("click", () => {
        if (cell9.innerText == "") {
            cell9.innerText = "O";
            currentPlayer = "computer";
            setTimeout(checkForWin, 1000);
        };

    });
}

function whoGoesFirst() {
    const randomNum = Math.round(Math.random() * 10);
    if (randomNum <= 5) {
        alert("You go first!");
        currentPlayer = "player";
        playersTurn();
    } else {
        alert("Computer goes first!");
        currentPlayer = "computer";
        setTimeout(computersTurn, 2500);
    }
} 

whoGoesFirst();

