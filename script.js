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
let clearDisplayAfterOperator = false;
let result = '';
let clearInitialValue = true;
let clearFirstNumberIfZeroForFirstOperand = true;
let clearFirstNumberIfZeroForSecondOperand = true;
let containOneDotForFirstOperand = false;
let containOneDotForSecondOperand = false;
let checkDotForFirstOperand = true;
let checkDotForSecondOperand = false;
let activateDeleteInFirstOperand = false;
let activateDeleteInSecondOperand = false;
let activateDeleteInResult = false;

buttonsForNumbers.forEach((button) => {
    button.addEventListener('click', (e) => {

        if (e.target.id === "." && checkDotForFirstOperand) {
            if (containOneDotForFirstOperand) {
            return;
        }
            containOneDotForFirstOperand = true;
        }
        
        if (checkDotForSecondOperand && e.target.id === ".") {
                if (containOneDotForSecondOperand) {
                    return;
            }
            containOneDotForSecondOperand = true;
        }

        if (clearDisplayAfterClearButton) {
            display.value = "";
            clearDisplayAfterClearButton = false;
        }

        if (clearValueIfIncomplete) {
            display.value = "";
            clearValueIfIncomplete = false;
        }

        if (firstOperand.charAt(0) === "0" && clearFirstNumberIfZeroForFirstOperand ) {
            display.value = "";     
            clearFirstNumberIfZeroForFirstOperand = false;
        }

        if (secondOperand.charAt(0) === "0" && clearFirstNumberIfZeroForSecondOperand) {
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

buttonForOperator.forEach(button => {
    button.addEventListener('click', () => {
        isNewNum = true;
        clearDisplayAfterOperator = true;
        checkDotForSecondOperand = true;
        checkDotForFirstOperand = false;

        if (firstOperand !== "" && operator !== "" && secondOperand !== "") {

            if (specialCaseForDivide && parseFloat(secondOperand) === 0 ) {
                display.value = "NOPE! CANNOT DIVIDE BY ZERO";
                return;
            }
    
            result = String(operate(parseFloat(firstOperand), operator, 
            parseFloat(secondOperand)));
            let convertNumber = Number(result);
            display.value = +(Math.round(convertNumber + "e+2") + "e-2");

            firstOperand = result;
            secondOperand = "";
            activateDeleteInSecondOperand = false;
            
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
                specialCaseForDivide = true;
                break;
            case "mul":
                operator = "*";
                break;
        }
    });
});
let clearValueIfIncomplete = false;

equal.addEventListener('click', () => {


    if (specialCaseForDivide && parseFloat(secondOperand) === 0) {
        display.value = "NOPE! CANNOT DIVIDE BY ZERO";
        return;
    }

    if (firstOperand == "" && secondOperand == "" && operator == "") {
        display.value = ""
        addToDisplay("0")
        clearValueIfIncomplete = true;
    } else if (operator == "" && secondOperand == "") {
        display.value = ""
        addToDisplay("0")
        firstOperand = "";
        clearValueIfIncomplete = true;
    } else if(secondOperand == "") {
        display.value = ""
        addToDisplay("0")
        firstOperand = "";
        operator = "";
        clearValueIfIncomplete = true; 
        isNewNum = false;
    }else{
    display.value = "";
    result = String(operate(parseFloat(firstOperand), operator, 
    parseFloat(secondOperand)));
    let convertToNumber = Number(result);
    addToDisplay(+(Math.round(convertToNumber + "e+2") + "e-2"));
    activateDeleteInSecondOperand = false;
    }
});

let clearDisplayAfterClearButton = false;

clear.addEventListener('click' , () => {
    if (firstOperand == "" && secondOperand == "" && operator == "") {
        display.value = ""
        addToDisplay("0")
        clearDisplayAfterClearButton = true;
    } else if (operator == "" && secondOperand == "") {
        display.value = ""
        addToDisplay("0")
        firstOperand = "";
        clearDisplayAfterClearButton = true;
    } else if(secondOperand == "") {
        display.value = ""
        addToDisplay("0")
        firstOperand = "";
        operator = "";
        clearDisplayAfterClearButton = true; 
        isNewNum = false;
    } else {
        display.value = "";
        addToDisplay("0")
        firstOperand = ""
        secondOperand = ""
        operator = ""
        clearDisplayAfterClearButton = true; 
        isNewNum = false;
    }

    
});


const buttonForDelete = document.querySelector('#delete');

buttonForDelete.addEventListener('click' , () => {

    if(activateDeleteInFirstOperand) {
        display.value = "";
        let modifiedFirstOperand = firstOperand.slice(0,-1);
        addToDisplay(modifiedFirstOperand);
        firstOperand = modifiedFirstOperand;
    }else if (activateDeleteInSecondOperand) {
        display.value = "";
        let modifiedSecondOperand = secondOperand.slice(0,-1);
        addToDisplay(modifiedSecondOperand);
        secondOperand = modifiedSecondOperand;
    }   else {
        display.value = "";
        let modifiedResult = result.slice(0,-1);
        addToDisplay(modifiedResult);
        firstOperand = modifiedResult;
        secondOperand = "";
        isNewNum = true;
    }
})







