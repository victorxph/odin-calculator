//Variables to store the numbers and operator of the expression
let num1;

let num2;

let operator;

//Store the number buttons, and turn the nodelist inyo an array
let numberBtns = document.querySelectorAll('.numberBtn');
let arrayNumBtn = Array.from(numberBtns);

//Iterate through the number btn array
arrayNumBtn.forEach(numBtn => {
    
numBtn.addEventListener('click', setNumber);

});

//Variable for the number thats is currently being "typed"
let currentNum = document.querySelector('.currentNum');


//Function to take the content of the btn and set it to the num's variables
function setNumber(e) {
    
        let btnContent = Number(e.target.textContent);
    
    if (!expressionIsSet) {
        
        currentNum.textContent += `${parseFloat(btnContent)}`
        
        num1 = currentNum.textContent;
        console.log('num1: ', num1);

    } else if (expressionIsSet) {

        currentNum.textContent += `${parseFloat(btnContent)}`

        num2 = currentNum.textContent;
        console.log('num2: ', num2);

    }

    
}


//Get the 'clear' btn from the DOM, and add event listener to it
let clearBtn = document.querySelector('.clearBtn');
clearBtn.addEventListener('click', clear)


//Function to wipe the calc clean
function clear() {
    
    num1 = '';
    num2 = '';
    operator = '';
    
    currentNum.textContent = '';
    expressionDiv.textContent = '';

    expressionIsSet = false;
    
}

let deleteBtn = document.querySelector('.deleteBtn')
deleteBtn.addEventListener('click', deleteNum)

function deleteNum() {

    if (expressionIsSet == false) {

        if (num1.length > 1) {

            num1 = num1.slice(0, -1);

        } else {

            num1 = '';

        }

        console.log('num1: ', num1)
        currentNum.textContent = num1;
    } else if (expressionIsSet == true) {

        if (num2.length > 1) {

            num2 = num2.slice(0, -1);

        } else {

            num2 = '';

        }

        console.log('num2: ', num2)
        currentNum.textContent = num2;

    }  
    

}

//Get the operator buttons from the DOM, and iterates through it adding event listener
let operatorBtns = document.querySelectorAll('.operator');
operatorBtns.forEach(opBtn => {
    
    opBtn.addEventListener('click', setExpression)

});

//get the div '.expression' from the DOM
let expressionDiv = document.querySelector('.expression');

//Var the store a boolean verifying whether the expression is set or not
let expressionIsSet = false;

//Function to set the operator and update the div txt content
function setExpression (e) {

    operator = e.target.textContent;
    expressionDiv.textContent = `${num1} ${operator}`;
    currentNum.textContent = '';
    expressionIsSet = true;
    
    return operator
    
}

//Get the equal btn from the DOM
let equalBtn = document.querySelector('.equal')
equalBtn.addEventListener('click', operate)


//Function to execute the expression
function operate() {
    
    expressionIsSet = false;

    let res = 0;

    switch(operator) {

        case '+':
        res = +num1 + +num2;
        break;


        case '-':
        res = +num1 - +num2;
        break;


        case '×':
        res = +num1 * +num2;
        break;


        case '÷':
        res = +num1 / +num2;  
        break;

    }

    //Update the screen div
    expressionDiv.textContent = `${num1} ${operator} ${num2} =`

    //Verify whether the num is a integer or not
    if (!Number.isInteger(res)){

        currentNum.textContent = `${res.toFixed(3)}`
        
    } else {
        
        currentNum.textContent = `${res}`

    }

}