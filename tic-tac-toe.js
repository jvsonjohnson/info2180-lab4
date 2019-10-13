"use strict";

window.onload = function() {
  var board = document.getElementById("board");
  var squares = board.getElementsByTagName("div");
  var status = document.getElementById("status");
  var winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  var plays = new Array();
  let playerTurn = "X";

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

  function checkWinner(squares, playerTurn) {
    if (
      squares[0].innerHTML === playerTurn &&
      squares[1].innerHTML === playerTurn &&
      squares[2].innerHTML === playerTurn
    ) {
      return true;
    }

    if (
      squares[3].innerHTML === playerTurn &&
      squares[4].innerHTML === playerTurn &&
      squares[5].innerHTML === playerTurn
    ) {
      return true;
    }

    if (
      squares[6].innerHTML === playerTurn &&
      squares[7].innerHTML === playerTurn &&
      squares[8].innerHTML === playerTurn
    ) {
      return true;
    }

    if (
      squares[0].innerHTML === playerTurn &&
      squares[3].innerHTML === playerTurn &&
      squares[6].innerHTML === playerTurn
    ) {
      return true;
    }

    if (
      squares[1].innerHTML === playerTurn &&
      squares[4].innerHTML === playerTurn &&
      squares[7].innerHTML === playerTurn
    ) {
      return true;
    }

    if (
      squares[2].innerHTML === playerTurn &&
      squares[5].innerHTML === playerTurn &&
      squares[8].innerHTML === playerTurn
    ) {
      return true;
    }

    if (
      squares[0].innerHTML === playerTurn &&
      squares[4].innerHTML === playerTurn &&
      squares[8].innerHTML === playerTurn
    ) {
      return true;
    }

    if (
      squares[2].innerHTML === playerTurn &&
      squares[4].innerHTML === playerTurn &&
      squares[6].innerHTML === playerTurn
    ) {
      return true;
    }
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
        if (this.innerHTML.length < 1) {
          this.classList.add(playerTurn);
          this.innerHTML = playerTurn;
          if (checkWinner(squares, playerTurn)) {
            status.innerHTML =
              "Congratulations! " + playerTurn + " is the Winner!";
            status.classList.add("you-won");
          }
          switchTurn();
        }
      });
    }
  }

  playGame();

  console.log(squares);
  console.log(plays);
};
