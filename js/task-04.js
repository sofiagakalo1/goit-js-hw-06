// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const counter = document.querySelector("#value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
// console.log(counter);
// console.log(decrementBtn);
// console.log(incrementBtn);

let counterValue = 0;
const render = () => {
  // counter.innerHTML = '';
  // counter.insertAdjacentHTML('afterbegin', `${counterValue}`);
  counter.textContent = counterValue;
};

const onDecrementBtn = () => {
  counterValue = counterValue - 1;
  // counterValue -=1;
  render();
};

const onIncrementBtn = () => {
  counterValue += 1;
  render();
};

render();

decrementBtn.addEventListener("click", onDecrementBtn);
incrementBtn.addEventListener("click", onIncrementBtn);
