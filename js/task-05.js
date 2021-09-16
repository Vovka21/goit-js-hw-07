//^     Напиши скрипт который, при наборе текста в 'input' input#name-input (событие input),
//^     подставляет его текущее значение в span#name - output.
//^     Если 'input' пустой, в 'span' должна отображаться строка 'незнакомец'.

//^     <input type="text" placeholder="Ваше имя?" id="name-input" />
//^     <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', onInputChange);

function onInputChange(event) {
  nameOutput.textContent = event.currentTarget.value;
  if (nameOutput.textContent === '') {
    nameOutput.textContent = 'незнакомец';
  }
}
