var css = document.querySelector("h3");
var [color1, color2] = document.querySelectorAll(".color");
var body = document.getElementById("gradient");

const setGradient = () => {
  body.style.background = _linearGradient();
  css.textContent = `background: ${body.style.background};`;
};

const _linearGradient = () => {
  return `linear-gradient(to right, ${color1.value}, ${color2.value})`;
};

window.addEventListener("load", setGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
