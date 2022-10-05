'use strict';

const inputAmount = document.querySelector('#another-amount'),
        amountNumbers = document.querySelectorAll('.range-input');

function setNumber() {
    amountNumbers.forEach (elem => {
        if (elem.checked === true) {
            inputAmount.value = elem.value;
        }
    });
}

amountNumbers.forEach(elem => {
    elem.addEventListener('input', setNumber);
});

function setAnotherAmount() {
    if (inputAmount.value < 1) {
		inputAmount.value = '';
    }

    if (inputAmount.value > 9999) {
		inputAmount.value = inputAmount.value.slice(0, 4);
    }
    
    amountNumbers.forEach (elem => {
        if (inputAmount.value === elem.value) {
            elem.checked = true;
        } else {
            elem.checked = false;
        }
    });
}

inputAmount.addEventListener('input', setAnotherAmount);