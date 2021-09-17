//^     Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
//^     и изменяет инлайн - стиль span#text обновляя свойство font - size.
//^     В результате при перетаскивании ползунка будет меняться размер текста.

const slider = document.querySelector('input');
console.log(slider);
const text = document.querySelector('#text');
console.log(text);

slider.addEventListener('input', changeSize);
slider.value = 16;
function changeSize() {
  text.style.fontSize = slider.value + 'px';
}
