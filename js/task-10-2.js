function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  boxes: document.querySelector('#boxes'),
  userInput: document.querySelector('#controls input'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
}

refs.createBtn.addEventListener('click', () => {
    const currentInput = refs.userInput.value;
    const bunchOfBoxes = [];

    let initialWidth = 30;

    for (let i = 0; i < currentInput; i += 1) {
      console.log(initialWidth);
      const oneBox = document.createElement('div');
      oneBox.style = `width: ${initialWidth}px; height: ${initialWidth}px; background-color: ${getRandomHexColor()};`;
      bunchOfBoxes.push(oneBox);
      initialWidth += 10;
    }
    refs.boxes.append(...bunchOfBoxes);
  });

refs.destroyBtn.addEventListener('click', () => {
  refs.boxes.innerHTML = '';
});




