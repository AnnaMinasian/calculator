var Memory1 = null;
var Memory2 = null;
var Actually = 0;
var operation = 0;
var maxlength = 40;

function addDigit(dig) {
    if (Actually.toString().length > maxlength) {
        Actually = "Error";
    }
    else {
        if (Actually === 0) {
            Actually = +dig;
        }
        else {
            Actually = +(Actually.toString() + dig.toString());
        }
    }
    document.Calculator.Display.value = Actually;
}

function dot() {
    if (Actually.length == 0) {
        Actually = "0.";
    }
    else if (Actually.toString().indexOf(".") == -1) {
        Actually = Actually + ".";
    }
    document.Calculator.Display.value = Actually;
}

function clearAll() {
    Actually = 0;
    Memory1 = null;
    Memory2 = null;
    operation = 0;
    document.Calculator.Display.value = Actually;
}

function clearLastSymbol() {
    if (Actually.toString().length > 0) {
        let result = Actually.toString().substring(0, Actually.toString().length - 1);
        Actually = +result;
    }
    else {
        Actually = 0;
    }
    document.Calculator.Display.value = Actually;
}

function operate(op) {
    if (Memory1 == null) {
        Memory1 = +Actually;
        Actually = 0;
        operation = op;
        document.Calculator.Display.value = op;
    } 
    else if (isNaN(document.Calculator.Display.value)) {
        operation = op;
        document.Calculator.Display.value = op;
    }
    else if (Memory2 == null) {
        Memory2 = +Actually;
        Actually = 0; 
    }
    if (Memory1 != null && Memory2 != null) {
        calculate(); 
    }
    operation = op;  
}

function calculate() {
    switch (operation) {
        case "+":
            Actually = Memory1 + Memory2;
            break;
        case "-":
            Actually = Memory1 - Memory2;
            break;
        case "*":
            Actually = Memory1 * Memory2;
            break;
        case "/":
                Actually = Memory1 / Memory2;
            break;
        default:
            Actually = "Not supported operation";
            break;
    }
    document.Calculator.Display.value = Actually;
    Memory1 = Actually;
    Memory2 = null;
    Actually = 0;
}