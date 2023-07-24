// Number Guesser Game
let low = 1;
let high;
let guess;

function getRandomInt(high) {
  return Math.floor(Math.random() * high) + 1;
}
let correct_ans = getRandomInt(10);

for (let i = 0; i < 3; i++) {
  guess = prompt("Enter a number between 1 to 10");

  if (guess > 10) {
    alert("Enter the Input less than 11 (1-10).");
    i--;
  } else if (guess <= 10 && guess != 0) {
    if (guess == correct_ans) {
      alert("You Win!!!");
      document.getElementById("display").innerHTML = "<h1>You Win!!!</h1>";
      break;
    } else if (guess <= correct_ans) {
      alert(`Correct answer is greater than ${guess}!`);
    } else if (guess > correct_ans) {
      alert(`Correct answer is smaller than ${guess}!`);
    }
  } else if (guess == 0) {
    alert("Enter the Input (1-10).");
    i--;
  } else {
    alert("Please Enter the Input.");
  }
}

let value = guess;
if (correct_ans == guess) {
  document.getElementById("display").innerHTML = "<h1>You Win!!!</h1>";
} else {
  document.getElementById("display").innerHTML =
    "<h2>You lose!!!</h2> Try Again!";
}
