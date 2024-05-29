

var playerRed = "R";
var playerYellow = "Y";
var  currplayer = playerRed;

var gameOver = false;
var board;
var currcolumns;

var rows = 6;
var columns =7;

window.onload = function() {
    setGame();
}

function  setGame() {
    board = [];
    currcolumns = [5, 5, 5, 5, 5, 5, 5];


    for (let r = 0; r < rows; r++){
       let row = [];
       for (let c = 0; c < columns; c++){

         row.push(' ');
         let tile = document.createElement("div");
         tile.id = r.toString() + "-" + c.toString();
         tile.classList.add("tile");
         tile.addEventListener("click", setpiece);
         document.getElementById("board").append(tile);
       }
        board.push(row);
    }
}

function setpiece()
{
    if (gameOver) {
        return;
    }

    let croods = this.id. split("-"); 
    let r = parseInt(croods[0]);
    let c = parseInt(croods[1]);

 
  r = currcolumns[c];
  if (r < 0) {
    return;
 } 

    board[r][c] = currplayer;
    let tile = document.getElementById(r.toString() + "-" + c.toString());
    if (currplayer == playerRed)
     {
        tile.classList.add("red-piece");
        currplayer = playerYellow;

    }
    else 
    {
        tile.classList.add("yellow-piece");
        currplayer = playerRed;
    }

     r -= 1;
     currcolumns[c] = r ;

     checkWinner();
}


function checkWinner() 
{
  for (let r = 0; r < rows; r++)
  {
    for (let c = 0; c < columns - 3; c++)
    {
        if (board[r][c] != ' ')
        {
            if (board[r][c] == board[r][c+1] && board[r][c+1] == board[r][c+2] && board[r][c+2] == board[r][c+3])
             {
                setWinner(r, c);
                return;
            }
        }
    }
  }
  for (let c = 0; c < columns; c++){
    for (let r = 0; r < rows-3; r++){
        if (board[r][c] != ' '){
            if (board[r][c] == board[r+1][c] && board[r+1][c] == board[r+2][c] && board[r+2][c] == board[r+3][c]){
               setWinner(r, c);
               return;
            }

        }
    }
  }
  for (let r= 0; r < rows-3; r++){
    for (let c = 0; c < columns - 3; c++){
        if (board[r][c] != ' '){
            if (board[r][c] == board[r+1][c+1] && board[r+1][c+1] == board[r+2][c+2] && board[r+2][c+2] == board[r+3][c+3]){
                setWinner(r, c);
                return;
            }

        }
    }
  }
  for (let r =3; r < rows; r++){
    for (let c = 0; c < columns -3; c++){
        if (board[r][c] != ' '){
            if (board[r][c] == board[r-1][c+1] && board[r-1][c+1] == board[r-2][c+2] && board[r-2][c+2] == board[r-3][c+3]){
                setWinner(r, c)
                return;
            }

        }
    }
  }
}
function setWinner(r, c) 
{
    let winner = document.getElementById("winner");
    if (board[r][c] == playerRed) {
        winner.innerText = "Red wins";
    } else {
        winner.innerText = "Yellow wins";
    }
    gameOver = true;
}


