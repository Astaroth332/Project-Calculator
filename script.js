function sum(num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
}

function pro(num1, num2) {
    return parseFloat(num1) * parseFloat(num2);}


function dif(num1, num2) {
    return parseFloat(num1) - parseFloat(num2);}

function qou(num1, num2) {
    return parseFloat(num1) / parseFloat(num2);}


function operate(num1, operator, num2) {

    switch(operator) {
        case "+" :
            return sum(num1,num2)
        break;
        case "-" :
            return dif(num1,num2)
        break;  
        case "*" :
            return pro(num1,num2)
        break;  
        case "/" :
            return qou(num1,num2)
        break;  

    }
}

const display = document.querySelector('#display');

function addToDisplay(input) {
   display.value += input;
}

addToDisplay("0")

const clear = document.querySelector('#clear');
const equal = document.querySelector('#equal');
const buttonContainerForNumber = document.querySelector('.button-container');
const buttonsForNumbers = buttonContainerForNumber.querySelectorAll('button');

let firstOperand = "";
let secondOperand = "";
let operator = "";
let isNewNum = false;
let clearDisplay = false;
buttons.forEach((button) => {
    button.addEventListener('click', () => {

   
        if (clearDisplay) {
            display.value = "";
            clearFirstNumberIfZeroForSecondOperand = false;
        }


        if (clearInitialValue) {
            display.value = "";
            clearInitialValue = false;
        }

        if (clearDisplayAfterOperator) {
            display.value = "";
            clearDisplayAfterOperator = false;
        }

        if (isNewNum) {     
            secondOperand += button.id;
            addToDisplay(button.id)
            activateDeleteInFirstOperand = false;
            activateDeleteInSecondOperand = true;
        }   else {
            firstOperand += button.id;
            addToDisplay(button.id);
            activateDeleteInFirstOperand = true;
        }

    });
});

const buttonForOperatorContainer = document.querySelector('.button-operator');
const buttonForOperator = buttonForOperatorContainer.querySelectorAll('button'); 

let specialCaseForDivide = false;

add.addEventListener('click' , () => {
    operator = "+";
    isNewNum = true;
    clearDisplay = true;
    
});

sub.addEventListener('click' , () => {
    operator = "-";
    isNewNum = true;
    clearDisplay = true;
    
});

div.addEventListener('click' , () => {
    operator = "/";
    isNewNum = true;
    clearDisplay = true;
    
});

mul.addEventListener('click' , () => {
    operator = "*";
    isNewNum = true;
    clearDisplay = true;
    
});






equal.addEventListener('click', () => {
    if (firstOperand !== undefined || secondOperand !== undefined || operator !== undefined) {
        let result = operate(firstOperand, operator, secondOperand);
        display.value = "";
        let modifiedResult = result.slice(0,-1);
        addToDisplay(modifiedResult);
        firstOperand = modifiedResult;
        secondOperand = "";
        isNewNum = true;
    }
});








