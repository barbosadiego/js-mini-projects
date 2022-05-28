'use strict';
const container = document.getElementById('items-list');
const newItem = document.getElementById('new-item');
const button = document.getElementById('button');

// const banco1 = [
//   { item: 'comer caviar', status: '' },
//   { item: 'correr à tarde', status: 'checked' },
//   { item: 'ver filmes', status: '' },
//   { item: 'comprar cocada', status: '' },
// ];

const getBanco = () => JSON.parse(localStorage.getItem('task-list')) ?? [];
const setBanco = (banco) =>
  localStorage.setItem('task-list', JSON.stringify(banco));

function startItems(banco) {
  clearDisplay();
  banco = getBanco();
  banco.forEach((task, index) => createItem(task.item, task.status, index));
}

function createItem(item, status, index) {
  const label = document.createElement('label');
  label.innerHTML = `
    <input type="checkbox" name="" id="" ${status} data-index=${index}>
    <p class="item" id="item">${item}</p>
    <input type="button" value="X" data-index=${index}>
  `;
  container.appendChild(label);
}

function insertItem() {
  const task = newItem.value;
  const banco = getBanco();
  banco.push({ item: task, status: '' });
  setBanco(banco);
  updateDisplay();
  newItem.value = '';
}

function deleteItem(index) {
  const banco = getBanco();
  banco.splice(index, 1);
  setBanco(banco);
  updateDisplay();
}

function updateItem(index) {
  const banco = getBanco();
  banco[index].status = banco[index].status === '' ? 'checked' : '';
  setBanco(banco);
  updateDisplay();
}

function handleStatus(event) {
  const element = event.target;
  if (element.type === 'button') {
    const index = element.dataset.index;
    deleteItem(index);
    updateDisplay();
  } else if (element.type === 'checkbox') {
    const index = element.dataset.index;
    updateItem(index);
  }
}

function updateDisplay() {
  clearDisplay();
  const banco = getBanco();
  banco.forEach((task, index) => createItem(task.item, task.status, index));
}

function clearDisplay() {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}

button.addEventListener('click', insertItem);
container.addEventListener('click', handleStatus);

startItems(getBanco);
