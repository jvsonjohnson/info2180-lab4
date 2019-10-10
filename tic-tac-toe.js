"use strict";

window.onload = function() {
  var board = document.getElementById("board");
  var squares = board.getElementsByTagName("div");
  for (var i = 0; i < squares.length; i += 1) {
    squares[i].classList.add("square");
  }
};
