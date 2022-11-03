let counterValue = 0;
const spanCounter = document.querySelector('#value');

const refs = {
    span: document.querySelector('#value'),
    buttonMinusOne: document.querySelector('#counter button:first-child'),
    buttonPlusOne: document.querySelector('#counter button:last-child'),
}

const render = () => {
    refs.span.textContent = counterValue;
}

refs.buttonMinusOne.addEventListener('click', () => {
    counterValue -= 1;
    render();
});

refs.buttonPlusOne.addEventListener('click', () => {
    counterValue += 1;
    render();
});