let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let btn = document.getElementsByClassName('btn')[0];

// let btn = document.createElement("button");
// btn.appendChild(document.createTextNode("Get Random Color"));
// btn.classList.add("btn", "btn-light","btn-lg");
// body.appendChild(btn);

body.style.background = `linear-gradient(to right,${color1.value},${color2.value})`;
css.textContent = body.style.background + ";";

function setGradient() {
	body.style.background = `linear-gradient(to right,${color1.value},${color2.value})`;

	css.textContent = body.style.background + ";";
}

function setColor() {
	let color1 = getRandomColor();
	let color2 = getRandomColor();

	body.style.background = `linear-gradient(to right,${color1},${color2})`;
	css.textContent = body.style.background + ";";
}

function getRandomColor() {
	let color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
	return color;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btn.addEventListener("click", setColor);

