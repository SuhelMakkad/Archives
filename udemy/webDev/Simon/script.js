var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var count = 0;
var level = 0;

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);
  level++;
  $("h1").text("Level  " + level);
}

function handelClick(id) {
  var userChosenColour = id;
  userClickedPattern.push(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
  console.log(userClickedPattern.length - 1);
}

function playSound(name) {
  var audio = new Audio('sounds/' + name + '.mp3');
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setInterval(function() {
  $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  if(userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if(userClickedPattern.length ===  gamePattern.length) {
    setTimeout(function() {
      nextSequence();
      userClickedPattern = [];
      }, 1000);
    }
  }
  else{
    playSound("wrong");
    $("h1").text("Game Over");
    $("body").addClass("game-over");
    setInterval(function() {
      $("body").removeClass("game-over");
    }, 200);
    setTimeout(function() {
      startOver();
    }, 2000);
  }
}

function startOver() {
  gamePattern = [];
  userClickedPattern = [];
  level = 0;
  count = 0;
  $("h1").text("Game Over ! Press A Key to Restart");

  $(document).bind("keypress click", function(event){
    count++;
    if(count === 1) {
      nextSequence();
    }
  });
}

$(document).bind("keypress click", function(event){
  count++;
  if(count === 1) {
    nextSequence();
  }
});


$(".btn").click(function(event) {
  handelClick(event.target.id);
  playSound(event.target.id);
});
