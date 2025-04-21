// declaring variable

var randomLoc = Math.floor(Math.random() *5);
var shipLocations = [randomLoc, randomLoc + 1, randomLoc + 2];

var guess
var hits = 0;
var guesses = 0;
var isSunk = false;

// Game logic

while (isSunk == false) {
    guess = prompt("Ready!. Aim!. Fire! (enter number 0-6)");

    if (guess == null) {
        alert("Thank you for playing!");
        break;
    }

    guess = parseInt(guess, 10);
    //Convert input to a number base 10

    if (isNaN(guess) || guess < 0 || guess > 6) {
        alert("Please enter a valid number between 0 and 6!");
        continue;
        // skip the code
    }
    
    guesses++;

    const hitIndex = shipLocations.indexOf(guess);
   
    if (hitIndex !== -1) { // -1 means not  found
        alert ("Hits!");
        shipLocations.splice(hitIndex, 1);
        hits++;
        if (shipLocations.length == 0) {
            inSunk = true;
        }
    } else {
        alert("Miss!")
    }
}

var accuracy = (guess > 0 ? (hits / guesses) * 100 : 0). toFixed(3);
var stats = "You took " +guesses + " guesses to sink the battleship! " + "\n" + "Accuracy: " + accuracy + "%";
var stats = "You sank my battleship at: " + guesses + "guesses" + "and your accuracy is: " + (3/guesses);
alert(stats);