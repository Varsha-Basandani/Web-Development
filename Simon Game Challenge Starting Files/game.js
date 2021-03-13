
var buttonColours=["red", "blue", "green", "yellow"];

var gamePattern=[];
var userClickedPattern=[];
var level=0;
var started = false;

$(".btn").click(function(){
     var userChosenColour = $(this).attr("id");
     userClickedPattern.push(userChosenColour);
      console.log(userClickedPattern);
      playSound(userChosenColour);
      animatePress(userChosenColour);
      checkAnswer(userClickedPattern.length-1);
    });

$(document).keypress(function() {
  if (!started) {

    
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

function nextSequence(){
	 userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
	
	var randomNumber =Math.floor(4*Math.random());
	var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    animatePress(randomChosenColour);
    console.log(gamePattern);
    
}

function playSound(name){

var audio = new Audio("sounds/" + name+ ".mp3");
    audio.play();


}

function animatePress(currentColor){
	$("#" + currentColor).addClass("pressed");
	setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel){
if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
      if (userClickedPattern.length === gamePattern.length){

        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

    } else {

		      console.log("wrong");
		      playSound("wrong");
		      $("body").addClass("game-over");
			  setTimeout(function () {
		      $("body").removeClass("game-over");
		      }, 200);
		      $("#level-title").text("Game Over, Press Any Key to Restart");
		      startOver();
    }
}


function startOver(){
	level=0;
	gamePattern=[];
    started=false;
}

