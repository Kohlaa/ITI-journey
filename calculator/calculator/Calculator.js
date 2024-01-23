let currentInput = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';

function EnterNumber(value) {
    currentInput += value;
    document.getElementById('Answer').value = currentInput;
}

function EnterOperator(value) {
    operator = value;
    firstOperand = currentInput;
    currentInput = '';
}

function EnterEqual() {
    secondOperand = currentInput;
    let result = calculate(parseFloat(firstOperand), parseFloat(secondOperand), operator);
    document.getElementById('Answer').value = result;
    currentInput = result.toString();
}

function EnterClear() {
    currentInput = '';
    operator = '';
    firstOperand = '';
    secondOperand = '';
    document.getElementById('Answer').value = '';
}

function calculate(firstOperand, secondOperand, operator) {
    switch (operator) {
        case '+':
            return firstOperand + secondOperand;
        case '-':
            return firstOperand - secondOperand;
        case '*':
            return firstOperand * secondOperand;
        case '/':
            if (secondOperand === 0) {
                return 'Error: Division by zero';
            }
            return firstOperand / secondOperand;
        default:
            return 'Error: Invalid operator';
    }
}
