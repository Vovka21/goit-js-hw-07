//^  Напиши скрипт, который бы при потере фокуса на 'input',
//^  проверял его содержимое на правильное количество символов.

//^   Сколько символов должно быть в 'input', указывается в его атрибуте data-length.
//^   Если введено подходящее количество, то border 'input' становится зеленым,
//^     если неправильное - красным.
//^   Для добавления стилей, используй CSS-классы valid и invalid.

const input = document.querySelector('input');
console.log(input);

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  if (input.value.length === 6) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
}
