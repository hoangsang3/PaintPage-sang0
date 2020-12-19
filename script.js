const canvas = document.getElementById("draw");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "black";

function draw(x, y) {
    const circle = new Path2D();
    circle.arc(x, y, 5, 0, 20 * Math.PI);
    ctx.fill(circle);
}

let isMousedown = false;

canvas.addEventListener("mousedown", (e) => {
    isMousedown = true;
});

canvas.addEventListener("mouseup", (e) => {
    isMousedown = false;
});

canvas.addEventListener("mousemove", (e) => {
    if (!isMousedown) {
        return;
    }

    const { clientX, clientY } = e;
    const react = canvas.getBoundingClientRect();
    draw(clientX - react.left, clientY - react.top);
});

const colorPickers = [...document.getElementsByClassName("colorPicker")];
colorPickers.forEach((colorPicker) => {
    colorPicker.addEventListener("click", (e) => {
        ctx.fillStyle = e.target.style.backgroundColor;
    });
});

const btnClear = document.getElementById("btnClear");
btnClear.addEventListener("click", (e) => {
    ctx.clearRect(0, 0, 1000, 700);
});
