// GENERATE RANDOM NUMBERS.
const  randomNumber = Math.round(Math.random() * 20)
console.log(randomNumber);

// ACTION RESET BUTTON.
const resetBtn = document.getElementById("again").addEventListener("click", ()=> {
    location.reload()
})

// ATTEMPT.
const attemptCount = document.getElementById("attempt-count");
let initialScore = 0

// STATUS
let message = document.getElementById("high");
let correct = document.getElementById("correct");

// INPUT NUMBER AND CHECK BUTTON.
const inputField = document.getElementById("input-field");
const checkBtn = document.getElementById("check-btn");

let guessNumber = document.getElementById("guess-number").innerText = randomNumber;

// MANAGE SHOW HIDE.
let hide = document.querySelector(".hide");


checkBtn.addEventListener("click", () => {
attemptCount.innerText = initialScore + 1;
    initialScore++
    const getValue = inputField.value;
    inputField.value = ""
    
    if (getValue == guessNumber) {
        message.innerText = "🎉Congratulation you got Correct number🎉"
        hide.style.display = 'none'
    } else if (getValue > guessNumber) {
        message.innerText = "💎Its high number."
        hide.style.display = 'block'
    } else if (getValue < guessNumber) {
        message.innerText = "💍Its low number."
        hide.style.display = 'block'
    }
})