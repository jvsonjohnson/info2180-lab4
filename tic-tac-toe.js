"use strict";

window.onload = function() {
  const board = document.getElementById("board");
  const squares = board.getElementsByTagName("div");
  const status = document.getElementById("status");
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

  let playerTurn = "X";
  var turn = [];

  for (var i = 0; i < squares.length; i += 1) {
    squares[i].classList.add("square");
    squares[i].addEventListener("mouseover", function() {
      this.classList.add("hover");
    });
    squares[i].addEventListener("mouseout", function() {
      this.classList.remove("hover");
    });
  }

  function noCheats(square) {
    if (square.classList.contains("X") || square.classList.contains("O")) {
      return true;
    } else {
      return false;
    }
  }

  function switchTurn() {
    if (playerTurn === "X") {
      playerTurn = "O";
    } else {
      playerTurn = "X";
    }
  }

  function XandO() {
    for (var i = 0; i < squares.length; i += 1) {
      squares[i].addEventListener("click", function() {
        noCheats(squares[i]);
        if (noCheats === false) {
          this.classList.add(playerTurn);
          this.innerHTML = playerTurn;
          switchTurn();
        }
      });
    }
  }

  XandO();

  // this.innerHTML = "x";

  console.log(squares);
};
