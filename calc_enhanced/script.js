let display = document.getElementById('display');
let historyList = document.getElementById('history-list');
let currentInput = '';
let operator = '';
let previousInput = '';
let historyVisible = false;

function appendNumber(number) {
  if (currentInput.includes('.') && number === '.') return;
  currentInput += number;
  updateDisplay();
}

function appendOperator(op) {
  if (currentInput === '' && previousInput === '') return;
  if (currentInput === '' && previousInput !== '') {
    operator = op;
    return;
  }
  if (previousInput === '') {
    previousInput = currentInput;
    currentInput = '';
    operator = op;
    return;
  }
  calculateResult();
  operator = op;
}

function appendDot() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay();
  }
}

function clearDisplay() {
  currentInput = '';
  operator = '';
  previousInput = '';
  updateDisplay();
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function calculateResult() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  if (isNaN(prev) || isNaN(current)) return;
  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = prev / current;
      break;
    case '%':
      result = prev % current;
      break;
    default:
      return;
  }
  const historyEntry = `${previousInput} ${operator} ${currentInput} = ${result}`;
  addHistory(historyEntry);
  currentInput = result.toString();
  operator = '';
  previousInput = '';
  updateDisplay();
}

function updateDisplay() {
  display.textContent = currentInput === '' ? '0' : currentInput;
}

function addHistory(entry) {
  const listItem = document.createElement('li');
  listItem.textContent = entry;
  historyList.appendChild(listItem);
}

function clearHistory() {
  historyList.innerHTML = '';
}

function toggleHistory() {
  const history = document.getElementById('history');
  historyVisible = !historyVisible;
  if (historyVisible) {
    history.style.display = 'block';
    document.querySelector('.toggle-history').textContent = 'Hide History';
  } else {
    history.style.display = 'none';
    document.querySelector('.toggle-history').textContent = 'Show History';
  }
}
