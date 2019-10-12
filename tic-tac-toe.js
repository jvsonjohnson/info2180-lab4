"use strict";

window.onload = function() {
  var board = document.getElementById("board");
  var squares = board.getElementsByTagName("div");
  let playerTurn = "X";

  for (var i = 0; i < squares.length; i += 1) {
    squares[i].classList.add("square");
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
