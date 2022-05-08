const images = [
  { id: 1, url: './img/img (1).jpg' },
  { id: 2, url: './img/img (2).jpg' },
  { id: 3, url: './img/img (3).jpg' },
  { id: 4, url: './img/img (4).jpg' },
  { id: 5, url: './img/img (5).jpg' },
  { id: 6, url: './img/img (6).jpg' },
  { id: 7, url: './img/img (7).jpg' },
  { id: 8, url: './img/img (8).jpg' },
  { id: 9, url: './img/img (9).jpg' },
];

const container = document.querySelector('.image-container');
const previousBtm = document.getElementById('previous');
const nextBtn = document.getElementById('next');

function load(images, container) {
  images.forEach((img) => {
    container.innerHTML += `<div class="container-item">
    <img class="img-item" src='${img.url}' />
    </div> `;
  });
}

load(images, container);

let imgArray = document.querySelectorAll('.container-item');

function previous() {
  const first = imgArray[0];
  container.appendChild(first);
  imgArray = document.querySelectorAll('.container-item');
}

function next() {
  const last = imgArray[imgArray.length - 1];
  container.insertBefore(last, imgArray[0]);
  imgArray = document.querySelectorAll('.container-item');
}

previousBtm.addEventListener('click', previous);
nextBtn.addEventListener('click', next);
