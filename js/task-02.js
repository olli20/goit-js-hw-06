const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// не по тз
const render = (array) => {

  array.forEach(itemText => {
    const newListItem = document.createElement("li");
    newListItem.textContent = itemText;
    newListItem.classList.add('item');
    const list = document.querySelector('#ingredients');
    list.append(newListItem);
  });
}

render(ingredients);
 