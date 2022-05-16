'use strict';

const keys = document.querySelectorAll('div[id*="key"]');
const operators = document.querySelectorAll('div[id*="Operator"]');
const display = document.getElementById('display');
let operator = null;
let newNumber = true;
let previousNumber = null;

const changeDisplay = (number) => {
  if (!newNumber) {
    display.textContent += number;
  } else {
    display.textContent = number;
    newNumber = false;
  }
};

const pendingOperation = () => operator !== null;

const calculate = () => {
  let result = null;
  let atualNumber = null;
  newNumber = true;

  if (pendingOperation()) {
    atualNumber = parseFloat(display.textContent.replace(',','.'));
    switch (operator) {
      case '-':
        result = previousNumber - atualNumber;
        break;
      case '+':
        result = previousNumber + atualNumber;
        break;
      case '*':
        result = previousNumber * atualNumber;
        break;
      case '/':
        result = previousNumber / atualNumber;
        break;
    }
    changeDisplay(result.toLocaleString('pt-BR'));
  }
};

const activeKey = ({ target }) => {
  const number = target.textContent;
  changeDisplay(number);
};

const activeOperator = ({ target }) => {
  if (!newNumber) {
    calculate();
    newNumber = true;
    previousNumber = parseFloat(display.textContent.replace(',','.'));
    operator = target.textContent;
  }
};

const equalOperator = () => {
  if (!newNumber) {
    calculate();
    previousNumber = null;
    operator = null;
  }
};

const clearDisplay = () => (display.textContent = '');

const clearMemory = () => {
  clearDisplay();
  previousNumber = null;
  operator = null;
  newNumber = true;
};

const inverter = () =>
  (display.textContent = (parseFloat(display.textContent.replace(',','.')) * -1).toLocaleString('pt-BR'));

const backspace = () =>
  (display.textContent = display.textContent.slice(0, -1));

const insertComma = () => {
  const hasValue = () => display.textContent.length > 0;
  const isDecimal = () => display.textContent.indexOf(',') !== -1;
  if (!hasValue()) {
    display.textContent = '0,';
    newNumber = false;
  } else {
    if (!isDecimal()) {
      display.textContent += ',';
      newNumber = false
    }
  }
};

// Keyboard map ************************************************



// Event Listeners *********************************************

keys.forEach((key) => key.addEventListener('click', activeKey));

operators.forEach((operator) =>
  operator.addEventListener('click', activeOperator),
);

document.getElementById('equal').addEventListener('click', equalOperator);

document.getElementById('clearDisplay').addEventListener('click', clearDisplay);

document.getElementById('clearMemory').addEventListener('click', clearMemory);

document.getElementById('inverter').addEventListener('click', inverter);

document.getElementById('backspace').addEventListener('click', backspace);

document.getElementById('comma').addEventListener('click', insertComma);
