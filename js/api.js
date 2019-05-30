const imageWidth = 200; //sets the width of the fetched pictures
const imageHeight = 200; //sets the height of the fetched pictures
const images = document.getElementsByClassName("genreImg");
const musicTypes = ["classical music", "rock music", "hiphop music", "game music"]; //sets the search terms 
let x = 0

//a picture is fetched from API for every genre in the genres-array
for (i=0; i<musicTypes.length; i++){
fetch(`https://source.unsplash.com/${imageWidth}x${imageHeight}/?${musicTypes[i]}`)
    .then(data => fetchImages(data))
}

//fetched pictures are logged one by one on the slide-4 screen.
function fetchImages(data){   
    images[x].src = data.url;  
    x++
}


