// Напиши скрипт для создания галереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// <ul id="gallery"></ul>
// Используй массив объектов images для создания тегов img вложенных в li.
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флекс-боксами или гридами через css-классы.

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('#gallery');

gallery.insertAdjacentHTML('afterbegin', '<li></li>');
const liFirst = gallery.firstElementChild;
const imgFirst = document.createElement('img');
imgFirst.src = images[0].url;
imgFirst.alt = images[0].alt;
imgFirst.width = 400;
liFirst.appendChild(imgFirst);
console.log(imgFirst);

gallery.insertAdjacentHTML('beforeend', '<li></li>');
const liSecond = document.querySelectorAll('li');
const imgSecond = document.createElement('img');
imgSecond.src = images[1].url;
imgSecond.alt = images[1].alt;
imgSecond.width = 400;
liSecond[1].appendChild(imgSecond);
console.log(imgSecond);

gallery.insertAdjacentHTML('beforeend', '<li></li>');
const liThird = gallery.lastElementChild;
const imgThird = document.createElement('img');
imgThird.src = images[2].url;
imgThird.alt = images[2].alt;
imgThird.width = 400;
liThird.appendChild(imgThird);
console.log(imgThird);
