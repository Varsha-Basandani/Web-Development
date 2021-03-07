var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelector(".img1");

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png"; //dice1.png - dice6.png

var randomImageSource2 = "images/" + randomDiceImage2; //images/dice1.png - images/dice6.png

var image2 = document.querySelector(".img2");

image2.setAttribute("src", randomImageSource2);


if(randomNumber1>randomNumber2)
document.querySelector("h1").innerHTML="Player 1 wins!";

else if(randomNumber1<randomNumber2)
document.querySelector("h1").innerHTML="Player 2 wins!";

else
document.querySelector("h1").innerHTML="Draw!";
