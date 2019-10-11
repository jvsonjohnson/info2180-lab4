"use strict";

window.onload = function() {
  let turn = "X";
  if (turn === "X") {
    turn = "O";
  } else {
    turn = "X";
  }

  var board = document.getElementById("board");
  var squares = board.getElementsByTagName("div");

  for (var i = 0; i < squares.length; i += 1) {
    squares[i].classList.add("square");
    squares[i].addEventListener("click", function() {
      this.classList.add(turn);
      this.innerHTML = turn;
    });

    // this.innerHTML = "x";
  }
  console.log(squares);
};
