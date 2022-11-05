function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  magicBtn: document.querySelector('.change-color'),
  body: document.querySelector('body'),
  colorHex: document.querySelector('.color'),
}

refs.magicBtn.addEventListener('click', onClickBtnChangeBackground);

function onClickBtnChangeBackground() {
  const randomColor = getRandomHexColor();
  refs.body.style.backgroundColor = `${randomColor}`;
  refs.colorHex.textContent = randomColor;
}