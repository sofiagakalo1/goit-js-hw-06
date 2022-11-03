//Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const ingredientCreateLi = (ingredientsEl) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = ingredientsEl;
  ingredientItem.classList.add("item");
  console.log(ingredientItem);
  return ingredientItem;
};

const ingredientItems = ingredients.map(ingredientCreateLi);

ingredientsList.append(...ingredientItems);
console.log(ingredientItems);
