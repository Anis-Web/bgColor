let firstColor = document.getElementById("firstColor");
let secoundColor = document.getElementById("secoundColor");
let thirdColor = document.getElementById("thirdColor");

function gradient() {
    document.body.style.background = `linear-gradient(to right, ${firstColor.value}, ${secoundColor.value}, ${thirdColor.value})`;
}

firstColor.addEventListener("input", gradient);
secoundColor.addEventListener("input", gradient);
thirdColor.addEventListener("input", gradient);