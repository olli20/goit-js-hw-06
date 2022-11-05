const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const currentList = document.querySelector('#ingredients');

const newList = [];

ingredients.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    listItem.classList.add('list-item');

    newList.push(listItem);
});

currentList.append(...newList);






// solution 2
// //choose empty list
// const currentList = document.querySelector('#ingredients');

// //create new list in memory
// const render = (listArray) => {
//   const newList = document.createElement("ul");
//   newList.id = '#ingredients';
  
//   listArray.forEach(item => {
//     const newListItem = document.createElement("li");
//     newListItem.textContent = item;
//     newListItem.classList.add('item');

//     //add new item to a new list
//     newList.appendChild(newListItem);
//   });
  
//   //replace empty list with a new one with one operation in DOM
//   currentList.parentNode.replaceChild(newList, currentList);
// }

// render(ingredients);


// solution 1, not good
// const list = document.querySelector('#ingredients');
// const render = (listOfItems) => {

//   listOfItems.forEach(item => {
//     const newListItem = document.createElement("li");
//     newListItem.textContent = item;
//     newListItem.classList.add('item');   
//     list.appendChild(newListItem);
//   });
// }

// render(ingredients);

