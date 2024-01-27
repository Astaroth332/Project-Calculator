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

const clear = document.querySelector('#clear');
const equal = document.querySelector('#equal');
const buttonContainerForNumber = document.querySelector('.button-container');
const buttonsForNumbers = buttonContainerForNumber.querySelectorAll('button');

let firstOperand = "";
let secondOperand = "";
let operator = "";
let isNewNum = false;
let clearDisplay = false;
let result = '';
let beginAddingNumber = true;


function initialZeroValue() {
    const input = document.querySelector('#display');
    input.value = "0";
}

initialZeroValue();

buttonsForNumbers.forEach((button) => {
    button.addEventListener('click', () => {

        if (button.id == 0 && firstOperand.length == 0) {
            initialZeroValue();
        }   else {
       

        if (beginAddingNumber) {
            display.value = "";
            beginAddingNumber = false;
        }


   
        if (clearDisplay) {
            display.value = "";
            clearDisplay = false;
        }

        if (isNewNum) {     
            secondOperand += button.id;
            addToDisplay(button.id)
        }   else {
            firstOperand += button.id;
            addToDisplay(button.id);
        }

    }


    });
});

const buttonForOperatorContainer = document.querySelector('.button-operator');
const buttonForOperator = buttonForOperatorContainer.querySelectorAll('button'); 


buttonForOperator.forEach(button => {
    button.addEventListener('click', () => {
        isNewNum = true;
        clearDisplay = true;

        if (firstOperand !== "" && operator !== "" && secondOperand !== "") {
    
            result = String(operate(parseFloat(firstOperand), operator, 
            parseFloat(secondOperand)));
            let convertNumber = Number(result);
            display.value = +(Math.round(convertNumber + "e+2") + "e-2");

            firstOperand = result;
            secondOperand = "";
          
        } 

        operator = button.id;

        switch(operator) {
            case "add":
                operator = "+";
                break;
            case "sub":
                operator = "-";
                break;
            case "div":
                operator = "/";
                break;
            case "mul":
                operator = "*";
                break;
        }
    });
});


equal.addEventListener('click', () => {

    if (firstOperand == "" || secondOperand == "" || operator == "") {
    initialZeroValue()
    } else {

    display.value = "";
    result = String(operate(parseFloat(firstOperand), operator, 
    parseFloat(secondOperand)));
    let convertToNumber = Number(result);
    addToDisplay(+(Math.round(convertToNumber + "e+2") + "e-2"));
    }
})













