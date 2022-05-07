const img = document.querySelector('.image');
const buttons = document.querySelector('.buttons');
let index = 0;
let interval = null;

function turnOn({ target }) {
  stop();
  lights[target.id]();
}

function changeIndex(){
  index = index >= 2 ? index = 0 : ++index;
}

function changeLight() {
  const lightsArray = ['vermelho', 'amarelo', 'verde'];
  const lightActive = lightsArray[index];
  lights[lightActive]();
  changeIndex();
}

function stop(){
  clearInterval(interval)
}

const lights = {
  amarelo: () => img.setAttribute('src', './img/amarelo.png'),
  verde: () => img.setAttribute('src', './img/verde.png'),
  vermelho: () => img.setAttribute('src', './img/vermelho.png'),
  automatico: () => interval = setInterval(changeLight, 1000),
};

buttons.addEventListener('click', turnOn);
