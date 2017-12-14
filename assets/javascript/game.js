window.onload = function() {

console.log("hello");

// Create the variables
    var randomNumber;
    var wins = 0;
    var losses = 0;
    var gem1;
    var gem2;
    var gem3;
    var gem4;
    var totalscore;


// Display 0 for wins and losses before game starts
$('#wins').html(wins);
$('#losses').html(losses);

// Get random number for the computer to choose for target score
function getRandom(min, max) {
  return Math.floor(Math.random()*(max - min) + min);
}

function game() {
  if (totalscore === randomNumber) {
    wins++
    $('#wins').html(wins);
    alert("You Won");
    

  }
  else if (totalscore > randomNumber){
    losses++
    $('#losses').html(losses);
    alert("You lost, try again");
  }
}
// Set random number (19-120)
randomNumber = getRandom(19, 120);
$("#number").html(randomNumber);

// Set Gem 1 through 4 (1-12 points)

gem1 = getRandom(1,12);
console.log(gem1);

gem2 = getRandom(1,12);
console.log(gem2);

gem3 = getRandom(1,12);
console.log(gem3);

gem4 = getRandom(1,12);
console.log(gem4);



// Set total score to 0

totalscore = 0;
$("#totalscore").html(totalscore);
console.log(totalscore);
// Create the buttons in HTML and link them
$("#gem1").click(function() {
  totalscore= gem1 + totalscore;
  $("#totalscore").html(totalscore);
  console.log(totalscore);
 game();

});


$( "#gem2" ).click(function() {
   totalscore= gem2 + totalscore;
   $("#totalscore").html(totalscore);
   game()

});
$( "#gem3" ).click(function() {
   totalscore= gem3 + totalscore;;
   $("#totalscore").html(totalscore);
   game()
});
$( "#gem4" ).click(function() {
   totalscore= gem4 + totalscore;
   $("#totalscore").html(totalscore);
   game()
});


// Capture the click and add the gems value total score

// When total number = ramdon number add 1 to wins


// IF total score is greater than random number =loss
// Reset game 



}