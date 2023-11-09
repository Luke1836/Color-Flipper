const colors = ["green", "red", "#f15025", "rgba(133,122,200,0.9)", "#34f1a3"];
const button = document.querySelector('#btn');
const color = document.querySelector(".color");

button.addEventListener("click", function() {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * (colors.length))
}