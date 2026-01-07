// Get display element AFTER page loads
const display = document.getElementById("display");

/* Append number or operator */
function appendValue(value) {
    display.value += value;
}

/* Clear entire display */
function clearDisplay() {
    display.value = "";
}

/* Delete last character (DEL button) */
function deleteLast() {
    if (display.value.length > 0) {
        display.value = display.value.slice(0, -1);
    }
}

/* Calculate result */
function calculate() {
    try {
        if (display.value === "") return;
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

/* Square function */
function square() {
    if (display.value === "") return;

    let num = Number(display.value);
    if (!isNaN(num)) {
        display.value = num * num;
    }
}
