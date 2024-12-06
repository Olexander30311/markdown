const item = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.querySelector("#btn");
const elementContainer = document.querySelector("#element");



btn.addEventListener("click", () => {
    let color = "#";

    for (let i = 0; i < 6; i++){
        color += item[Math.floor(Math.random() * item.length)]; 
    }

    elementContainer.style.backgroundColor = color;
});

