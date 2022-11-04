// Напиши скрипт створення і очищення колекції елементів.
//  Користувач вводить кількість елементів в input і натискає кнопку Створити,
//   після чого рендериться колекція. Натисненням на кнопку Очистити,
//    колекція елементів очищається.

/* <div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>

Створи функцію createBoxes(amount), яка приймає один параметр - число.
 Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

Розміри найпершого <div> - 30px на 30px.
Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
Всі елементи повинні мати випадковий колір фону у форматі HEX.
 Використовуй готову функцію getRandomHexColor для отримання кольору. */

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const form = document.querySelector("#controls");
const boxesEl = document.querySelector("#boxes");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

let arrayOfBoxes = [];
let boxSize = 30;
let numberOfBoxes = 0;

const onCreateBtn = () => {
  boxesEl.insertAdjacentHTML('beforeend', arrayOfBoxes.join(""));
  arrayOfBoxes = [];
};
const onDestroyBtn = () => {
  boxesEl.innerHTML = "";
  boxSize = 30;
};

const formActive = (event) => {
  numberOfBoxes = Number(event.currentTarget.value);
  let number = 0;
  while (number < numberOfBoxes) {
    arrayOfBoxes.push(
      `<div style='background-color: ${getRandomHexColor()}; height: ${boxSize}px; width: ${boxSize}px; border: 1px solid #000;'></div>`
    );
    console.log(arrayOfBoxes)
    number += 1;
    boxSize += 10;
  }
};

createBtn.addEventListener("click", onCreateBtn);
destroyBtn.addEventListener("click", onDestroyBtn);
form.firstElementChild.addEventListener("blur", formActive);
