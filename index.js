

// Declare variables
let attempts = 3;
let randomNum = Math.floor(Math.random() * 100 + 1);

const guess = document.getElementById("guess");
const submit = document.getElementById("submit");
const hint = document.getElementById("hint");
const attemptsText = document.getElementById("attempts");

// Event Listeners
submit.addEventListener("click",checkGuess);

function checkGuess(){
    const userValue = Number(guess.value);
    attempts++;
    // Conditionals
    if (userValue === randomNum) {
    //     hint.textContent =
    //    ("Congratulations, you guessed it!");
    } else if (userValue < randomNum) {
        hint.textContent = " Too low! Try again.";
    } else {
        hint.textContent = "To high! Try again.";
        console.log("else");
    }

    attemptsText.textContent = "Attempts:" + attempts;
}

