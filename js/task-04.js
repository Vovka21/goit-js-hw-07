//^ Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

//^ Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//^ Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//^ Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const counterValue = {
  value: 0,
  increment() {
    this.value += 1;
  },

  decrement() {
    this.value -= 1;
  },
};

const btn = document.querySelectorAll('button');
const valueEl = document.querySelector('#value');
console.log(btn[0]);
console.log(btn[1]);
console.log(valueEl);

btn[1].addEventListener('click', () => {
  counterValue.increment();
  valueEl.textContent = counterValue.value;
});

btn[0].addEventListener('click', () => {
  counterValue.decrement();
  valueEl.textContent = counterValue.value;
});
