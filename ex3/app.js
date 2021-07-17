let main = document.getElementById("main");
let colorCode = document.getElementById("color-code");
let changeBtn = document.getElementById("change-btn");
let coppyBtn = document.getElementById("copy-btn");

window.onload = changeColor()
changeBtn.addEventListener("click", changeColor)

function changeColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
      main.style.backgroundColor = color;
    }
    colorCode.value = color;
    return color;
}

coppyBtn.addEventListener("click", copyCode) 

function copyCode() {
    colorCode.select();
  document.execCommand("copy");
  }
