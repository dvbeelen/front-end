//Set variables
let gameScore = 0;
let gameEnd = document.getElementById("endGame");
let gameSong = document.getElementsByClassName("gameSong");
let genreImg = document.getElementsByClassName("genreImg");
let genres = document.getElementsByClassName("genres")
let chosenGenre = document.getElementById("chosenGenre");
let p = 0;


//When players chooses song in the songSelect-screen, that choice is saved and stored on the game- and resultscreen
function startGame(){
  if (p == 1){
    gameSong[0].src = genreImg[0].src;
    gameSong[1].src = genreImg[0].src;
  } else if (p == 2){
    gameSong[0].src = genreImg[1].src;
    gameSong[1].src = genreImg[1].src;
  } else if (p == 3){
    gameSong[0].src = genreImg[2].src;
    gameSong[1].src = genreImg[2].src;
  } else if (p == 4){
    gameSong[0].src = genreImg[3].src;
    gameSong[1].src = genreImg[3].src;
  }

  //Adds 150 points to players score every 5 seconds, simulates real gameplay
  setInterval(function upScore() {
    gameScore = gameScore + 150;
    document.getElementById("score").innerHTML = gameScore;
  }, 5000);
}

//Stops the adding of score, gives player endresult
gameEnd.addEventListener("click", function gameEnd(){
  gameScore = gameScore
  document.getElementById("endScore").innerHTML = gameScore
})

