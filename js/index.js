var memory1 = null;
var memory2 = null;
var actually = 0;
var operation = 0;
var maxlength = 40;

function addDigit(dig) {
    if (actually.toString().length > maxlength) {
        actually = "Error";
    }
    else {
        if (actually === 0) {
            actually = +dig;
        }
        else {
            actually = +(actually.toString() + dig.toString());
        }
    }
    document.Calculator.Display.value = actually;
}

function dot() {
    if (actually.length == 0) {
        actually = "0.";
    }
    else if (actually.toString().indexOf(".") == -1) {
        actually = actually + ".";
    }
    document.Calculator.Display.value = actually;
}

function clearAll() {
    actually = 0;
    memory1 = null;
    memory2 = null;
    operation = 0;
    document.Calculator.Display.value = actually;
}

function clearLastSymbol() {
    if (actually.toString().length > 0) {
        let result = actually.toString().substring(0, actually.toString().length - 1);
        actually = +result;
    }
    else {
        actually = 0;
    }
    document.Calculator.Display.value = actually;
}

function operate(op) {
    if (memory1 == null) {
        memory1 = +document.Calculator.Display.value;
        actually = 0;
        operation = op;
        document.Calculator.Display.value = op;
    } 
    else if (isNaN(document.Calculator.Display.value)) {
        operation = op;
        document.Calculator.Display.value = op;
    }
    else if (memory2 == null) {
        memory2 = +actually;
        actually = 0; 
    }
    if (memory1 != null && memory2 != null) {
        calculate(); 
    }
    operation = op;  
}

function calculate() {
    switch (operation) {
        case "+":
            actually = memory1 + memory2;
            break;
        case "-":
            actually = memory1 - memory2;
            break;
        case "*":
            actually = memory1 * memory2;
            break;
        case "/":
                actually = memory1 / memory2;
            break;
        default:
            actually = "Not supported operation";
            break;
    }
    document.Calculator.Display.value = actually;
    memory1 = actually;
    memory2 = null;
    actually = 0;
}

function equal() {
    memory2 = +actually;
    calculate();
    memory1 = null;
}

function changePlus() {
    if (actually > 0) {
        actually = +('-' + actually);
    }
    else if (actually < 0) {
        actually = actually.toString().slice(1);
    }
    document.Calculator.Display.value = actually;
}