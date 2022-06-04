'use strict';

const slide = document.querySelector('.slide');
const wrapper = document.querySelector('.slide-wrapper');
const dist = {
  initialPosition: 0,
  finalPosition: 0,
  movePosition: 0,
  moviment: 0,
};

const moveSlide = (position) => {
  dist.movePosition = position;
  slide.style.transform = `translate3d(${position}px, 0, 0)`
};

const updatePosition = (clientX) => {
  dist.moviment = (dist.initialPosition - clientX) * 1.6;
  return dist.finalPosition - dist.moviment;
};

const onMove = (event) => {
  const pointerPosition = event.clientX;
  const finalPosition = updatePosition(pointerPosition);
  moveSlide(finalPosition)
  console.log(dist);
};

const onEnd = (event) => {
  wrapper.removeEventListener('mousemove', onMove);
  dist.finalPosition = dist.movePosition;
  console.log('saiu');
};

const onStart = (event) => {
  event.preventDefault();
  dist.initialPosition = event.clientX;
  wrapper.addEventListener('mousemove', onMove);
  console.log('entrou');
};

wrapper.addEventListener('mousedown', onStart);
wrapper.addEventListener('mouseup', onEnd);
