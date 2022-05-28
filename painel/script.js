'use strict';

const list = document.querySelector('.js-list');

const createItem = (item) => {
  const li = document.createElement('li');
  li.classList.add('item');
  li.innerHTML = `
    <img src="${item.img}" alt="">
    <a href="${item.url}" target="_blank"> Ver projeto </a>
  `;
  list.appendChild(li);
};

const items = async () => {
  const data = await fetch('./painel/items.json');
  const dataArray = await data.json();
  dataArray.forEach((item) => createItem(item));
};

items();
