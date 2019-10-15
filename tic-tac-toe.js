"use strict";

window.onload = function() {
  var board = document.getElementById("board");
  var squares = board.getElementsByTagName("div");
  var status = document.getElementById("status");
  var btn = document.getElementsByTagName("button");
  let playerTurn = "X";
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  var winner = null;

  for (var i = 0; i < squares.length; i += 1) {
    squares[i].classList.add("square");
    squares[i].innerHTML = "";
    squares[i].addEventListener("mouseover", function() {
      this.classList.add("hover");
    });
    squares[i].addEventListener("mouseout", function() {
      this.classList.remove("hover");
    });
  }

  this.positions = Array.from(document.querySelectorAll(".square"));
  const positions = this.positions;

  function checkWinner() {
    var winn = false;
    winningCombos.forEach(winningCombo => {
      const pos0InnerText = positions[winningCombo[0]].innerHTML;
      const pos1InnerText = positions[winningCombo[1]].innerHTML;
      const pos2InnerText = positions[winningCombo[2]].innerHTML;
      const isWinningCombo =
        pos0InnerText != "" &&
        pos0InnerText === pos1InnerText &&
        pos1InnerText === pos2InnerText;

      if (isWinningCombo) {
        winn = true;
      }
    });
    return winn;
  }

  function resetGame() {
    btn[0].addEventListener("click", function() {
      for (var i = 0; i < squares.length; i += 1) {
        squares[i].classList.remove("X");
        squares[i].classList.remove("O");
        squares[i].innerHTML = "";
        status.classList.remove("you-won");
        status.innerHTML =
          "Move your mouse over a square and click to play an X or an O.";
        playerTurn = "X";
        winner = null;
      }
    });
  }

  function switchTurn() {
    if (playerTurn === "X") {
      playerTurn = "O";
    } else {
      playerTurn = "X";
    }
  }

  function playGame() {
    for (var i = 0; i < squares.length; i += 1) {
      squares[i].addEventListener("click", function() {
        if (winner === null) {
          if (this.innerHTML.length < 1) {
            this.classList.add(playerTurn);
            this.innerHTML = playerTurn;

            if (checkWinner()) {
              status.innerHTML =
                "Congratulations! " + playerTurn + " is the Winner!";
              status.classList.add("you-won");
              winner = playerTurn;
            }
            switchTurn();
          }
        }
      });
    }
  }
  resetGame();
  playGame();
};
