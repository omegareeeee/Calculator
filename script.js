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
    if(b == 0){
        return "can't divide by 0";
    }
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

function operatorClicked(){
    let operators = document.querySelectorAll('.operator');
    operators.forEach((item) =>{
        if(item.classList.contains('clicked')){
            item.classList.toggle('clicked');
            return true;
        }
    });
}

let firstNumber = 0;
let secondNumber = 0;
let previousSum = 0;
let operator = "";

const numbers = document.querySelectorAll('.number');
numbers.forEach(button => button.addEventListener('click', () => {
    populateDisplay(button.textContent);

    if(operatorClicked())[
        
    ]
}) );

const operators = document.querySelectorAll('.operator');
operators.forEach(button => button.addEventListener('click', () => {
    firstNumber = document.querySelector('#display').textContent;
    button.classList.add('clicked');
    resetDisplay();
    operator = button.textContent;
}) );


const equalsButton = document.querySelector('#equal');
equalsButton.addEventListener('click', () =>{
    secondNumber = document.querySelector('#display').textContent;
    resetDisplay();
    console.log("first : "+firstNumber, "second: "+secondNumber, operator);
    previousSum = operate(+firstNumber,+secondNumber, operator);
    populateDisplay(previousSum);
});

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    resetDisplay()
    firstNumber = 0;
    secondNumber = 0;
});
