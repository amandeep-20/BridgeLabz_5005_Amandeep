{/* <button onclick="alert('Button Clicked!')">Click Me</button> //inline */}

const button = document.getElementById("myButton");
button.addEventListener("click", () => {
  console.log("Button was clicked!");
},false);

const link = document.getElementById("myLink");
link.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Default navigation prevented.");
});

const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.addEventListener("click", () => console.log("Parent clicked!"));
child.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Child clicked!");
});

