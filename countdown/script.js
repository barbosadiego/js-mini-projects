'use strict'
const displays = document.querySelectorAll('.display');

const formatTime = (time) => `0${time}`.slice(-2);

const showTime = (time) => {
  const seconds = formatTime(time % 60);
  const minutes = formatTime(Math.floor((time % (60 * 60)) / 60));
  const hours = formatTime(Math.floor((time % (60 * 60 * 24)) / (60 * 60)));
  const days = Math.floor(time / (60 * 60 * 24));

  const dataTime = [days, hours, minutes, seconds];

  displays.forEach((display, index) => {
    display.innerHTML = dataTime[index];
  });
};

const timer = (time) => {
  const counter = () => {
    // console.log(time);
    showTime(time);
    if (time === 0) clearInterval(id);
    time--;
  };
  const id = setInterval(counter, 1000);
};

const eventShow = () => {
  const atualDay = new Date().getDate();
  const atualMonth = new Date().getMonth();
  const atualYear = new Date().getFullYear();
  const today = Date.now();

  //Ajustando o tempo para sempre ser daqui a 10 dias
  const eventDate = new Date(atualYear, atualMonth, atualDay + 10, 20);

  return Math.floor((eventDate - today) / 1000);
};

timer(eventShow());
