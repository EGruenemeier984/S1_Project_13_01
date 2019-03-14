"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1

   Author: 
   Date:   
   
   Filename: bw_review.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers.
      
   lightStars(e)
      Function that colors the stars representing the user rating
      for the book.
      
   turnOffStars(e)
      Function that restores the stars to empty colors, removing
      the user rating for the book.

   updateCount()
      Updates the count of characters in the wordCountBox
      element.

   countCharacters(textStr)
      Returns the number of a non-whitespace characters
      within textStr

*/
// This loads the init function as the window loads.
window.onload = init();
// This function intializes the stars as the user hover over them and creates event listeners so more function can thake place.
function init() {
    var stars = document.querySelectorAll("span#stars img");

    for (var i = 0; i < stars.length; i++) {
        stars[i].style.cursor = "pointer";
        stars[i].addEventListener("mouseenter", lightStars);
    }
    document.getElementById("comment").addEventListener("keyup", updateCount);
}
// This function ligts up the stars as they are hovered over and when they are ckicked the number is saved and displayed.
function lightStars() {
    var starNumber = event.target.alt;
    var stars = document.querySelectorAll("span#stars img");
    for (var i = 0; i < starNumber; i++) {
        stars[i].src = "bw_star2.png";
    }
    for (var j = starNumber; j < 5; j++) {
        stars[j].src = "bw_star.png"
    }
    document.getElementById("rating").value = starNumber + " stars";
    event.target.addEventListener("mouseleave", turnOffStars);
    event.target.addEventListener("click",
        function () {
            event.target.removeEventListener("mouseleave", turnOffStars);
        }
    );
}
// This function turns the stars to an image that isn't lighten up.
function turnOffStars() {
    var stars = document.querySelectorAll("span#stars img");
    for (var i = 0; i < stars.length; i++) {
        stars[i].src = "bw_star.png";
    }
    document.getElementById("rating").value = "";
}
// This function updates the word count for the textarea along with chaging the background and font color if the word count exceeds 1000 words.
function updateCount() {
    var commentText = document.getElementById("comment").value;
    var charCount = countCharacters(commentText);
    var wordCountBox = document.getElementById("wordCount");
    wordCountBox.value = charCount + "/1000";
    if (charCount > 1000) {
        wordCountBox.style.backgroundColor = "red";
        wordCountBox.style.color = "white";
    } else {
        wordCountBox.style.backgroundColor = "white";
        wordCountBox.style.color = "black";
    }

}

/*=================================================================*/

function countCharacters(textStr) {
    var commentregx = /\s/g;
    var chars = textStr.replace(commentregx, "");
    return chars.length;
}