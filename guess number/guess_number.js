let number = Math.floor(Math.random() * 10);
let result = document.getElementById("result");

function pressedButton() {
    let guessNumber = parseInt(document.getElementById("guess").value);

    if (guessNumber === number) {
        result.textContent = "CONGRATULATIONS" + number + "is the esecret number";
    } else if (guessNumber > number) {
        result.textContent = "the entered value is too high";
    } else if (guessNumber < number) {
        result.textContent = "the entered number is too low";
    }
}

