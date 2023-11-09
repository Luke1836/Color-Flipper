const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.getElementById("btn");
const color = document.querySelector(".color");

button.addEventListener("click", function() {
    let hexCode="#";
    for(let i =0;i<6;i++)
        hexCode += hex[getRandomElement()];

    document.body.style.backgroundColor = hexCode;
    color.textContent = hexCode;
})

function getRandomElement() {
    return Math.floor(Math.random() * hex.length);
}