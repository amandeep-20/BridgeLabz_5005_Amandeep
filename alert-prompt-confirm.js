alert("Welcome Aman!");

// 2. Prompt Example
const userName = prompt("What's your name?");
if (userName) {
  alert(`Hello, ${userName}!`);
} else {
  alert("You didn't enter your name.");
}

// 3. Confirm Example
const isReady = confirm("Are you ready to proceed?");
if (isReady) {
  alert("Great! Let's move.");
} else {
  alert("Okay, take your time!");
}