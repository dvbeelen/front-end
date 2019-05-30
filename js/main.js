//Set variables
let genreImg = document.getElementsByClassName("genreImg");
let genres = document.getElementsByClassName("genres")
let gameSong = document.getElementsByClassName("gameSong");
let status = document.getElementById("status");
let startGame = document.getElementById("startGame")
let gameScore = 0;
let endGame = document.getElementById("endGame");
let restart = document.getElementById("restart")


//Adds the useButton function to all four pictures in the genres array
function setImages(){ 
  for(let i = 0; i < genreImg.length; i++){
    genreImg[i].addEventListener("click",()=> selectImage(i));
  }
}

function selectImage(i){
  //The item from the genres-array that corresponds with the i from the for loop is shown in the status-element
  status.innerHTML = genres[i].textContent;

  for(let ii = 0; ii < genreImg.length; ii++)
    if(i==ii){
      //When an image is clicked, its border-color is set to green.
      genreImg[ii].style.borderColor = "green";

      //When an image is clicked, the src of that image is given to the images on the game- and endgamescreen
      gameSong[0].src = genreImg[ii].src;
      gameSong[1].src = genreImg[ii].src;
      //If an image is deselected, its border goes from green back to black.
    } else {
      genreImg[ii].style.borderColor = "black";

    }
}

//This function adds a score of 150 to the total gameScore every 3 seconds. This is done to simulate how the app would function during gameplay. 
startGame.addEventListener("click", function startGame(){
    window.interval = setInterval(function upScore() {
    gameScore = gameScore + 150;
    document.getElementById("score").innerHTML = gameScore;
  }, 3000);
})


//Stops the adding of score, gives player endresult
endGame.addEventListener("click", function endGame(){
  document.getElementById("endScore").innerHTML = gameScore
})

//Clears the interval that has been building up on the Game-screen and sets score back to 0
restart.addEventListener("click", function restart(){
  clearInterval(window.interval)
  gameScore = 0
  document.getElementById("score").innerHTML = gameScore
})

 
setImages()