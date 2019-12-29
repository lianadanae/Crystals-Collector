$(document).ready(function(){

// // The player will be shown a random number at the start of the game. 
// Should be between 19 - 120
for(var i = 0; i < 4; i++); {
var randomNbr = Math.floor(Math.random() * ((120 - 19) + 1) + 19); 
$('#randomnumber').html(randomNbr);
}


// // Each crystal should have a random hidden value between 1 - 12.
var btn1 = Math.floor(Math.random() * 12) + 1;
var btn2 = Math.floor(Math.random() * 12) + 1;
var btn3 = Math.floor(Math.random() * 12) + 1;
var btn4 = Math.floor(Math.random() * 12) + 1;


// // When the player clicks on a crystal, it will add a specific amount 
// of points to the player's total score.
var wins = 0;
var losses = 0;


var totalScore = 0;
$('#totalScore').text(totalScore);

function win() {
    wins = wins + 1;
    $('#wins').text(wins);
    reset();
}

function lose() {
    losses = losses + 1;
    $('#losses').text(wins);
    reset();
}  

function reset(){
    randomNbr = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    btn1 = Math.floor(Math.random() * 12) + 1;
    btn2 = Math.floor(Math.random() * 12) + 1;
    btn3 = Math.floor(Math.random() * 12) + 1;
    btn4 = Math.floor(Math.random() * 12) + 1;
    totalScore = 0;
    $('#randomnumber').html(randomNbr);
}

// // Your game will hide this amount until the player clicks a crystal.
// // When they do click one, update the player's score counter.

// $(".crystals").on('click', function () {
    $('.btn1').click(() => {
        totalScore = totalScore + btn1
        $('#totalScore').text(totalScore);
        if (totalScore === randomNbr) {
            win();
            reset();
           
        } else if (totalScore > randomNbr) {
            lose();
            reset();
            
        }
    })

    $('.btn2').click(() => {
        totalScore = totalScore + btn2
        $('#totalScore').text(totalScore);
        if (totalScore === randomNbr) {
            win();
            reset();
           
        } else if (totalScore > randomNbr) {
            lose();
            reset();
            
        }
    })

    $('.btn3').click(() => {
        totalScore = totalScore + btn3
        $('#totalScore').text(totalScore);
        if (totalScore === randomNbr) {
            win();
            reset();
           
        } else if (totalScore > randomNbr) {
            lose();
            reset();
            
        }
    })

    $('.btn4').click(() => {
        totalScore = totalScore + btn4
        $('#totalScore').text(totalScore);
        if (totalScore === randomNbr) {
            win();
            reset();
           
        } else if (totalScore > randomNbr) {
            lose();
            reset();
            
        }
    })
});
// // The player wins if their total score matches the random number 
// from the beginning of the game.


// // The player loses if their score goes above the random number.


// // The game restarts whenever the player wins or loses.

// // When the game begins again, the player should see a new random number.
//  Also, all the crystals will have four new hidden values. Of course, 
//  the user's score (and score counter) will reset to zero.



// // The app should show the number of games the player wins and loses. 
// To that end, do not refresh the page as a means to restart the game.