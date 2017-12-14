window.onload = function() {


// Create the variables
    var randomNumber;
    var wins = 0;
    var losses = 0;
    var gem1;
    var gem2;
    var gem3;
    var gem4;
    var totalscore;


// Display using IDs on HTML
$('#wins').html(wins);
$('#losses').html(losses);

// Get random number for the computer to choose for target score
function getRandom(min, max) {
  return Math.floor(Math.random()*(max - min) + min);
}


// Reset game once over
function Reset(){

// Set Gem 1 through 4 (1-12 points)

gem1 = getRandom(1,12);
console.log(gem1);

gem2 = getRandom(1,12);
console.log(gem2);

gem3 = getRandom(1,12);
console.log(gem3);

gem4 = getRandom(1,12);
console.log(gem4);

//Generate a random number when pages loads
randomNumber = getRandom(19, 120);
$("#number").html(randomNumber);

//Display 0 in totalscore before game starts
totalscore = 0;
$("#totalscore").html(totalscore);
console.log(totalscore);

// Create the buttons in HTML and link them with on click functions.
$("#gem1").click(function() {
  totalscore= gem1 + totalscore;
  $("#totalscore").html(totalscore);
  console.log(totalscore);
 game();
});

$( "#gem2" ).click(function() {
   totalscore= gem2 + totalscore;
   $("#totalscore").html(totalscore);
   game();
});

$( "#gem3" ).click(function() {
   totalscore= gem3 + totalscore;
   $("#totalscore").html(totalscore);
   game();
});

$( "#gem4" ).click(function() {
   totalscore= gem4 + totalscore;
   $("#totalscore").html(totalscore);
   game();
});

};
Reset();


function game() {
  if (totalscore === randomNumber) {
    wins++;
    $('#wins').html(wins);
    alert("You Won");
    Reset();
  }
  else if (totalscore > randomNumber){
    losses++;
    $('#losses').html(losses);
    alert("You lost, try again");
    Reset();
  }
  game();
};

};