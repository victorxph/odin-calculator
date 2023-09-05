let numberBtns = document.querySelectorAll('.numberBtn');
numberBtns.forEach(btn => btn.addEventListener('click', setCurrentNumber));

let operatorBtns = document.querySelectorAll('.operator');
//  */operatorBtns.forEach(btn => btn.addEventListener('click'));

let equalBtn = document.querySelector('.equal');
// equalBtn.addEventListener('click');

let clearBtn = document.querySelector('.clearBtn');
clearBtn.addEventListener('click', clear);

let deleteBtn = document.querySelector('.deleteBtn')
deleteBtn.addEventListener('click', deleteNum);

let currentNumDiv = document.querySelector('.currentNum');

function setCurrentNumber(e) {

    let btnContent = e.target.textContent;

    if (currentNumDiv.textContent == 0) resetScreen();

    if (btnContent == '.'){

        if (currentNumDiv.textContent.includes('.')) {

            return

        } else {

            currentNumDiv.textContent += btnContent;

        }

    } else {

        currentNumDiv.textContent += btnContent;
        
    }


}

function resetScreen() {

    currentNumDiv.textContent = '';

}

function clear () {

    currentNumDiv.textContent = '0';

}

function deleteNum() {

    currentNumDiv.textContent = currentNumDiv.textContent.slice(0, -1);

}