const fontSizeInput = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

fontSizeInput.addEventListener('input', (event) => {
    text.style.fontSize = `${event.currentTarget.value}px`;
});