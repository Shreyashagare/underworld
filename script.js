// acessing all the the required element

let leftbottom = document.getElementById("left-bottom");
let lefttop = document.getElementById("left-top");
let righttop = document.getElementById("right-top");
let bottomright = document.getElementById("bottom-right");
let bottomrocks = document.getElementById("bottom-rocks");
let toprocks = document.getElementById("top-rocks");
let text = document.getElementById("text");
let frontrock = document.getElementById("front-rock");
let bottombg = document.getElementById("background-bg");

//add a event of scrolling vericaly

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  console.log(value); // just to get the scroll value
  //creating if else loop so that after the scroll value reaches 420 the the animating stops
  if (value < 420) {
    bottomrocks.style.display = "block";
    bottomrocks.style.top = value * 2.5 + "px"; //animating the layers
    text.style.display = "block";
    text.style.marginTop = value * 2.5 + "px";
    frontrock.style.left = value * -2.5 + "px";
    toprocks.style.top = value * -2.5 + "px";
  } else {
    text.style.display = "none";
    bottomrocks.style.display = "none";
  }
});
