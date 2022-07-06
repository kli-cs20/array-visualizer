// Array Visualizer

// HTML Variables
containerEl = document.getElementById("container")

// global Variable
let myData = [];
for (let n = 1; n <= 100; n++) {
    myData.push(Math.random() * 600);
}

// Display Data
drawArray();

function drawArray() {
    let outputStr = "";
    for (let i = 0; i < myData.length; i++) {
        outputStr += `<div style="height: ${myData[i]}px"></div>`
    }
    containerEl.innerHTML = outputStr;
}
