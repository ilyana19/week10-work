document.addEventListener("DOMContentLoaded", function(e) {
  var mainContainer = document.querySelector("main");
  var tile;
  var status = document.getElementById("status");
  var currentPlayer = 1;

  function drawBoard() {
    var board = document.createElement("div");
    board.classList.add("board");
    mainContainer.appendChild(board);

    for (var i = 0; i < 9; i++) {
      var tile = document.createElement("div");
      tile.classList.add("tile");
      tile.setAttribute("id", "tile-" + (i+1));
      tile.addEventListener("click", playerMoves);
      board.appendChild(tile);
    }
  }

  function playerMoves() {
    if (this.innerHTML === '') {
      if (currentPlayer === 1) {
        console.log("player one puts X");
        this.innerHTML = "X";
        currentPlayer = 2;
      } else if (currentPlayer === 2) {
        console.log("player two puts O");
        this.innerHTML = "O";
        currentPlayer = 1;
      }
    }
  }

  //IFFE game start, declares and calls it immediately
  (function gameStart(){
    status.innerHTML = "Player " + currentPlayer + "'s turn";
    drawBoard();
  }());
});