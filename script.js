let numberBtns = document.querySelectorAll('.numberBtn');
numberBtns.forEach(btn => btn.addEventListener('click', setCurrentNumber));

let operatorBtns = document.querySelectorAll('.operator');
 operatorBtns.forEach(btn => btn.addEventListener('click', setExpression));

let equalBtn = document.querySelector('.equal');
equalBtn.addEventListener('click', operate);

let clearBtn = document.querySelector('.clearBtn');
clearBtn.addEventListener('click', clear);

let deleteBtn = document.querySelector('.deleteBtn')
deleteBtn.addEventListener('click', deleteNum);

let currentNumDiv = document.querySelector('.currentNum');

let expressionDiv = document.querySelector('.expression');

let num1 = null;
let num2 = null;

function add(a, b) {

    return +a + +b;

}

function subtract(a, b){

    return +a - +b;

}

function multiply(a, b){

    return +a * +b;

}

function divide(a, b){

    return +a / +b;

}

let isExpressionSet = false;

function setCurrentNumber(e) {

    let btnContent = e.target.textContent;

    if (currentNumDiv.textContent == '0') resetScreen();

    if (btnContent == '.'){

        if (currentNumDiv.textContent.includes('.')) {

            return

        } else {

            if(currentNumDiv.textContent == 0) {

                currentNumDiv.textContent += `0${btnContent}`

            } else {

                currentNumDiv.textContent += btnContent

            }

        }

    } else {

        currentNumDiv.textContent += btnContent;
        
    }

}

function resetScreen() {

    currentNumDiv.textContent = '';

}

function clear() {

    currentNumDiv.textContent = '0';
    expressionDiv.textContent = '';
    num1 = null;
    num2 = null;

}

function deleteNum() {

    currentNumDiv.textContent = currentNumDiv.textContent.slice(0, -1);

    if(equalPressed){
        
        res = Number(currentNumDiv.textContent);
    
    }
    
    if (currentNumDiv.textContent == '') {
        
        currentNumDiv.textContent = '0';
   
    }

}

let operator;

let operatorTest;

let toggleExpression = false;

let eTarget;

function setExpression(e) {

    operator = e.target.textContent;
    console.log(operator)
    eTarget = e.target.textContent;
    
    if(isExpressionSet && num1){
        
        num2 = currentNumDiv.textContent
        
    }
    
    if (num1 && num2){
        
        operatorTest = expressionDiv.textContent.slice(expressionDiv.textContent.length - 1);
        
        toggleExpression = true;
        operate();

    }

    if(num1 == null) {

        num1 = +currentNumDiv.textContent
        expressionDiv.textContent = `${num1} ${operator}`
        currentNumDiv.textContent = '0'
        isExpressionSet = true;
        
    } else if (num1 && isExpressionSet && toggleExpression == false) {
        
        expressionDiv.textContent = `${num1} ${operator}`
        
    }
    
}

let res = null;

let equalPressed = false;

function operate(e){

    num2 = currentNumDiv.textContent;

    if(e){

        toggleExpression = false;
        equalPressed = true;
        operator = expressionDiv.textContent.slice(expressionDiv.textContent.length - 1);

    }

    if(toggleExpression && eTarget != operatorTest){

        operator = operatorTest;

    }

    if(!toggleExpression && equalPressed && res != null){

        num1 = res;

    }

    switch(operator) {

        case '+':
        res = add(num1, num2)
        break;
        
        case '-':
        res = subtract(num1, num2)
        break;
        
        case '×':
        res = multiply(num1, num2)
        break;

        case '÷':
        res = divide(num1, num2)
        break;

        }
        
        currentNumDiv.textContent = `${res}`
        
        if(e && !toggleExpression){

            expressionDiv.textContent = `${num1} ${operator} ${num2} =`;
            currentNumDiv.textContent = `${res}`
    
        }

        if(toggleExpression){
    
            expressionDiv.textContent = `${res} ${eTarget}`;
            currentNumDiv.textContent = '0'
            num1 = res;
            num2 = null;
    
        }

    }
    
    