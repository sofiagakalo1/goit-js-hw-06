// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
//  перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість смиволів повинна бути в інпуті, зазначається
//  в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим,
//  якщо неправильна кількість - червоним.

const validationInput = document.querySelector("#validation-input");
const dataLength = Number(validationInput.dataset.length);

// console.log(validationInput);
// console.log(dataLength);

const onValidationInput = (event) => {
  const validationInputLength = event.currentTarget.value.length;
  if (validationInputLength === dataLength) {
    validationInput.className = "valid";
  } else if (event.currentTarget.value === '') {
    validationInput.className = '';
  } else {
    validationInput.className = "invalid";
  }
};

validationInput.addEventListener("blur", onValidationInput);
