// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item.
// Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст заголовка элемента(тега h2)
// и количество элементов в категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const allLiItem = document.querySelectorAll('#categories li.item');
console.log('В списке', allLiItem.length, 'категории.');

const header = document.querySelectorAll('#categories h2');
console.log('Категория:', header[0].textContent);

const allElAnimal = allLiItem[0].querySelectorAll('li');
console.log('Количество элементов:', allElAnimal.length);

console.log('Категория:', header[1].textContent);
const allElProduct = allLiItem[1].querySelectorAll('li');
console.log('Количество элементов:', allElProduct.length);

console.log('Категория:', header[2].textContent);
const allElTechno = allLiItem[2].querySelectorAll('li');
console.log('Количество элементов:', allElTechno.length);
