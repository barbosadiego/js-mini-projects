'use strict';

const sounds = {
  A: 'boom.wav',
  S: 'clap.wav',
  D: 'hihat.wav',
  F: 'kick.wav',
  G: 'openhat.wav',
  H: 'ride.wav',
  J: 'snare.wav',
  K: 'tink.wav',
  L: 'tom.wav',
};

const container = document.querySelector('#sounds-container');

const createDiv = (texto) => {
  const div = document.createElement('div');
  div.classList.add('key');
  div.setAttribute('id', texto);
  div.textContent = texto;
  container.appendChild(div);
};

const activeSound = (sound) => {
  const audio = new Audio(`./sounds/${sounds[sound]}`);
  audio.play();
};

const removeEffect = (letter) => {
  const remove = () => letter.classList.remove('active');
  letter.addEventListener('transitionend', remove);
};

const activeEffect = (letter) => {
  const item = document.getElementById(letter);
  item.classList.add('active');
  removeEffect(item);
};

const activeDiv = (event) => {
  let target = null;
  if (event.type == 'click') {
    target = event.target.id;
  } else {
    target = event.key.toUpperCase();
  }
  const validSound = sounds.hasOwnProperty(target);
  if (validSound) {
    activeSound(target);
    activeEffect(target);
  }
};

Object.keys(sounds).forEach(createDiv);
container.addEventListener('click', activeDiv);
window.addEventListener('keydown', activeDiv);
