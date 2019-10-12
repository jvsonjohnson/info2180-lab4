"use strict";

window.onload = function() {
  const board = document.getElementById("board");
  const squares = board.getElementsByTagName("div");
  let playerTurn = "X";

  for (var i = 0; i < squares.length; i += 1) {
    squares[i].classList.add("square");
    squares[i].addEventListener("mouseover", function() {
      this.classList.add("hover");
    });
    squares[i].addEventListener("mouseout", function() {
      this.classList.remove("hover");
    });
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
        this.classList.add(playerTurn);
        this.innerHTML = playerTurn;
        switchTurn();
      });
    }
  }

  XandO();
  // this.innerHTML = "x";

  console.log(squares);
};
