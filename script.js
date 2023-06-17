function add (a, b) {
    return a + b;
}
function subtract (a, b) {
    return a - b;
}
function multiply (a, b) {
    return a * b;
}
function divide (a, b) {
    return a / b;
}

function operate(firstNumber, secondNumber, operator){
    switch(operator){
        case "+":
            return add(firstNumber, secondNumber);
        case "-":
            return subtract(firstNumber, secondNumber);
        case "X":
            return multiply(firstNumber, secondNumber);
        case "÷":
            return divide(firstNumber, secondNumber);
    }
}

function populateDisplay(str){
    const display = document.querySelector("#display");
    display.textContent += str; 
}

function resetDisplay(){
    document.querySelector("#display").textContent = "";
}

let firstNumber = 0;
let secondNumber = 0;
let operator = "";

const numbers = document.querySelectorAll('.number');
numbers.forEach(button => button.addEventListener('click', () => populateDisplay(button.textContent)) );

const operators = document.querySelectorAll('.operator');
operators.forEach(button => button.addEventListener('click', () => {
    populateDisplay(button.textContent)
    operator = button.textContent}) );


const equalsButton = document.querySelector('#equal');
equalsButton.addEventListener('click', () =>{
    const arr = document.querySelector('#display').textContent.split(operator);
    firstNumber = arr[0];
    secondNumber = arr[1];
    resetDisplay();
    populateDisplay(operate(+firstNumber,+secondNumber, operator));
});
