//^     В HTML есть пустой список ul#ingredients.

//^     <ul id="ingredients"></ul>
//^     В JS есть массив строк.

//^     const ingredients = [
//^     'Картошка',
//^     'Грибы',
//^     'Чеснок',
//^     'Помидоры',
//^     'Зелень',
//^     'Приправы',
//^     ];

//^     Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//^     после чего вставит все li за одну операцию в список ul.ingredients.
//^     Для создания DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const allIngredients = document.querySelector('#ingredients');

const liFirst = document.createElement('li');
liFirst.textContent = ingredients[0];

const liSecond = document.createElement('li');
liSecond.textContent = ingredients[1];

const liThird = document.createElement('li');
liThird.textContent = ingredients[2];

const liFourth = document.createElement('li');
liFourth.textContent = ingredients[3];

const liFifth = document.createElement('li');
liFifth.textContent = ingredients[4];

const liSixth = document.createElement('li');
liSixth.textContent = ingredients[5];

const allLi = allIngredients.append(
  liFirst,
  liSecond,
  liThird,
  liFourth,
  liFifth,
  liSixth,
);
