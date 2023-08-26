let background = document.getElementById("background");
let lava = document.getElementById("lava");
let leftbottom = document.getElementById("left-bottom");
let lefttop = document.getElementById("left-top");
let righttop = document.getElementById("right-top");
let bottomright = document.getElementById("bottom-right");
let bottomrocks = document.getElementById("bottom-rocks");
let toprocks = document.getElementById("top-rocks");
let text = document.getElementById("text");
let frontrock = document.getElementById("front-rock");
let bottombg = document.getElementById("background-bg");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  console.log(value);
  if (value < 400) {
    bottomrocks.style.display = "block";
    bottomrocks.style.top = value * 2.5 + "px";
    text.style.display = "block";
    text.style.marginTop = value * 2.5 + "px";
    frontrock.style.left = value * -2.5 + "px";
    toprocks.style.top = value * -2.5 + "px";
    // bottomright.style.right = value * -10.5 + "px";
  } else {
    text.style.display = "none";
    bottomrocks.style.display = "none";
  }
  bottombg.style.top = value * -2.5 + "px";
});
ScrollReveal().reveal(".sec");
