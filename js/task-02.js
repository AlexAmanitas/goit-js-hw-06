const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');

const elements = ingredients.map(el => {
  const ingredientsItemRef = document.createElement('li');
  ingredientsItemRef.classList.add('.item');
  ingredientsItemRef.textContent = `${el}`;
  return ingredientsItemRef;
});
ingredientsRef.append(...elements);
