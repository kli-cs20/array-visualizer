// Array Visualizer

// HTML Variables
containerEl = document.getElementById("container")

// global Variable
let myData = [200, 500, 250, 550, 100, 300, 600];

// Display Data
drawArray();

function drawArray() {
    let outputStr = "";
    for (let i = 0; i < myData.length; i++) {
        outputStr += `<div>${myData[i]}</div>`
    }
    containerEl.innerHTML = outputStr;
}
