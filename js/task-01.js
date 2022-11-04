const itemTitles = document.querySelectorAll('#categories .item h2');

const itemTitlesOuput = (array) => {
    console.log('Number of categories: ', array.length);

    array.forEach((item) => {
        console.log("Category: ", item.textContent);
        const listLength = item.nextElementSibling.children.length;
        console.log("Elements: ", listLength);
    });
}

itemTitlesOuput(itemTitles);


// const itemTitlesOuput = (array) => {
//     console.log('Number of categories: ', array.length);

//     array.forEach((item, index) => {
//         console.log("Category: ", item.textContent);
//         const list = document.querySelectorAll(`#categories .item:nth-child(${index + 1}) li`);
//         console.log("Elements: ", list.length);
//     });
// }
