const topLeft = document.querySelector("#topLeft");
const topRight = document.querySelector("#topRight");
const bottomLeft = document.querySelector("#bottomLeft");
const bottomRight = document.querySelector("#bottomRight");
const mainBox = document.querySelector("#mainBox");
const submitBtn = document.querySelector("#submitBtn");
const resetBtn = document.querySelector("#resetBtn");

function shapeShift() {
    mainBox.style.borderTopLeftRadius = `${topLeft.value}px`;
    mainBox.style.borderTopRightRadius = `${topRight.value}px`;
    mainBox.style.borderBottomLeftRadius = `${bottomLeft.value}px`;
    mainBox.style.borderBottomRightRadius = `${bottomRight.value}px`;
}

function resetAll() {
    mainBox.style.borderRadius = "0";
    topLeft.value = '';
    topRight.value = '';
    bottomLeft.value = '';
    bottomRight.value = '';
}

submitBtn.addEventListener("click", shapeShift)

resetBtn.addEventListener("click", resetAll)