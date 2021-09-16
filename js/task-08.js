//^ ЕЩЕ В ПРОЦЕССЕ

//^     Напиши скрипт создания и очистки коллекции элементов.

//^     Пользователь вводит количество элементов в input и нажимает кнопку Создать,
//^       после чего рендерится коллекция.

//^     При нажатии на кнопку Очистить, коллекция элементов очищается.

//^     Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
//^     Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

//^     Каждый созданный div:
//^         -Имеет случайный rgb цвет фона
//^         -Размеры самого первого div - 30px на 30px
//^         -Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px

//^     Создай функцию destroyBoxes(), которая очищает div#boxes.

// function createBoxes(amount) {
//   return amount;
// }

const body = document.querySelector('body');
const input = document.querySelector('input');
const addBtn = document.querySelector('[data-action="render"]');
const clearBtn = document.querySelector('[data-action="destroy"]');

console.log(body);
console.log(input);
console.log(addBtn);
console.log(clearBtn);

addBtn.addEventListener('click', addDiv);
clearBtn.addEventListener('click', destroyBoxes);

function addDiv() {
  // body.insertAdjacentHTML('beforeend', '<ul></ul>');
  // document.createElement('div');
  // body.append('div');
}

function destroyBoxes() {
  // body.remove('div');
}
var picHolder = document.getElementById('picHolder');
var img = document.createElement('img');
img.src = 'images/stone3.jpg';
picHolder.appendChild(img);
