document.addEventListener("DOMContentLoaded", function(e) {
  var mainContainer = document.querySelector("main");
  var currentPlayer = 1;
  var moves = 0;
  var player = 1; // really just there for status
  var status = document.getElementById("status");
  status.innerHTML = "Player " + currentPlayer + "'s turn"; // set default

  var winCases = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];

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
        this.innerHTML = "X";
        player = 1;
        currentPlayer = 2;
      } else if (currentPlayer === 2) {
        this.innerHTML = "O"
        player = 2;
        currentPlayer = 1;
      }
      moves++;
    }

    status.innerHTML = "Player " + currentPlayer + "'s turn";
    checkWinner();
  }

  function checkWinner() {
    var tiles = document.querySelectorAll(".tile");
    for (var i = 0; i < winCases.length; i++) {
      var tile1 = tiles[winCases[i][0]-1].innerHTML;
      var tile2 = tiles[winCases[i][1]-1].innerHTML;
      var tile3 = tiles[winCases[i][2]-1].innerHTML;

      if (tile1 === tile2 && tile2 === tile3 && tile3 !== '') {
        status.innerHTML = "Player " + player + " wins!";
        tiles.forEach(function(tile) {
          tile.removeEventListener("click", playerMoves);
        });
      } else if (moves === 9 && tile1 !== tile2 && tile2 !== tile3 && tile3 !== ''){
        status.innerHTML = "It's a draw!";
      }
    }
  }

  //IFFE game start, declares and calls it immediately
  (function gameStart(){
    drawBoard();
  }());
});