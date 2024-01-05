
var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var level = 0;

var start = false;

$(".btn").click(function(){

    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);

});

$(document).keydown(function(){

    if(!start){

        $("h1").text("Level "+level);
    }

    nextSequence();

    start = true;

});

function startOver(){

    level = 0;
    gamePattern = [];
    start = false;

}

function nextSequence(){
    
    userClickedPattern = [];

    var randomNumber = Math.floor(Math.random()*4);

    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    $("#"+randomChosenColor).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);

    level++;

    $("h1").text("Level "+level);

}



function playSound(name){

    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();

}

function animatePress(currentColor){

    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel){

    
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){

        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
              nextSequence();
            }, 1000);
        }
       
    }else{

        playSound("wrong");

        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);

        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
    

    

}





