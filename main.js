// Array Visualizer

// HTML Variables
containerEl = document.getElementById("container")

// global Variable
let myData = [];
for (let n = 1; n <= 50; n++) {
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

// Key Event
document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
    if (event.keyCode === 38) {
        // splice(beginning index, how many to remove, value(s) to add)
        let middleIndex = Math.round(myData.length / 2);
        myData.splice(middleIndex, 0, Math.random() * 600);
    } else if (event.keyCode === 40) {
        // Down arrow - remove element from middle
        let middleIndex = Math.round(myData.length / 2);
        myData.splice(middleIndex, 1);
    } else if (event.keyCode === 37) {
        console.log(Math.min(...myData));
    } else if (event.keyCode === 39) {
        console.log(Math.max(...myData));
    }

    // if (event.keyCode === 38) {
    //     // Up arrow - Push value to end of the array
    //     myData.push(Math.random() * 600);
    // } else if (event.keyCode === 40) {
    //     // Down arrow - pop value from end of array
    //     let poppedValue = myData.pop();
    //     console.log(poppedValue);
    // }

    // Redraw Array
    drawArray();
}