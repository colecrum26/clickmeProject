const button = document.getElementById("changeColor");
const box = document.getElementById("clickMe");

const changeColor = () => { 
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    box.style.backgroundColor = "#" + randomColor;
    clickMe.innerHTML = "#" + randomColor;
}

button.addEventListener("click", changeColor);
