// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його
//   поточне значення в span#name-output.
//   Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const nameOutput = document.querySelector("#name-output");
const nameInput = document.querySelector("#name-input");

const onNameInput = (event) => {
  if (event.currentTarget.value === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = event.currentTarget.value;
  }
};
nameInput.addEventListener("input", onNameInput);

// nameInput.addEventListener("input", (event) => {
//     nameOutput.textContent = event.currentTarget.value;
// });
