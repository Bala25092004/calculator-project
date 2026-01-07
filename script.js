const display = document.getElementById("display");
function appendValue(value) {
    display.value += value;
}
function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    if (display.value.length > 0) {
        display.value = display.value.slice(0, -1);
    }
}

function calculate() {
    try {
        if (display.value === "") return;
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

function square() {
    if (display.value === "") return;

    let num = Number(display.value);
    if (!isNaN(num)) {
        display.value = num * num;
    }
}
