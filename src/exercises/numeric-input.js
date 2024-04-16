/*
* Numeric Input Component
*   HTML (initial state): <input type="text" class="c-numeric-input" />
*   Requirement:
*   - should only accept numeric value only such as: 1, 1.2, -5, or 1000
*   - if user enters leading zero, or .  when user moves focus away from the input, it should
*     change to correct format:
*       .1 ==> 0.1 and 01 => 1
*   - if user enter invalid character/value, HTML should change to this
*       <input type="text" class="c-numeric-input c-numeric-input--error" />
*       <span class="c-numeric-input__error-msg">invalid input</span>
*   - if user enter valid value and move focus away from the input HTML should change to this:
*       <input type="text" class="c-numeric-input c-numeric-input--valid" />
*   - if user focus on the input or user clear value from the input,
*     HTML should return to initial stage
*
* Lastly, please add some css for c-numeric-input--error and c-numeric-input--valid to show
* red or green border to the input
* */
const numericValue = document.querySelector('.c-numeric-input');
const errorMsg = document.querySelector('.c-numeric-input-error-msg');

const NumericInput = {
  init: () => {
    document.querySelectorAll('.c-numeric-input').forEach(elem => {
      console.log('TODO: Please see the above requirement for numeric input');
    });
  },
  validateInput : (ev) =>{ 
    const value = numericValue.value.trim();
    const isValid = /^-?\d*\.?\d*$/.test(value);
    if (!isValid) {
      numericValue.classList.add('c-numeric-input-error');
      numericValue.classList.remove('c-numeric-input-valid');
      errorMsg.style.display = 'inline';
    } else {
      numericValue.classList.remove('c-numeric-input-error');
      numericValue.classList.add('c-numeric-input-valid');
      errorMsg.style.display = 'none';
    }
  },
  focusOut : (ev) => {
    ev.preventDefault();
    console.log(ev.currentTarget.value);
    numericValue.classList.remove('c-numeric-input-error', 'c-numeric-input-valid');
    errorMsg.style.display = 'none';
    numericValue.value =(numericValue.value &&!Number.isInteger(numericValue.value))  ? parseFloat(numericValue.value) : numericValue.value;
  },
  blurIn: (ev) =>{
    ev.preventDefault();
    const value = numericValue.value.trim();
    const isValid = /^-?\d*\.?\d*$/.test(value);
    if (isValid) {
      numericValue.classList.add('c-numeric-input-valid');
    } else {
      numericValue.value = parseFloat(value) || '';
    }
  }
  
};
document.addEventListener('DOMContentLoaded', NumericInput.init);
numericValue.addEventListener('focusout',NumericInput.focusOut);
numericValue.addEventListener('blur',NumericInput.blurIn);
numericValue.addEventListener('input',NumericInput.validateInput);
export {NumericInput};

