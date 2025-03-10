var location = 3;
var location = 4;
var location = 5;

var guess;
var hits = 0;
var guesses;

var isSunk = false;

// game logic 

while (isSunk == false) {
    guess = promt("Ready , Aim , Fire! 🔥 (Enter number 0-6)");

    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!")
    } else {
        guesses = guess + 1;

        if (guess == location || guess == location2 || guess == location3) {
            hits = hits + 1;

            if (hits == 3) {
                isSunk = true;
                alert("You sank my battleship!🤪🤪")
            }
        }
    }
}

var stats = "You sank my battleship at: " + guesses + " guesses" + " and your accuracy is: " + (3/guesses);

alert(stats);