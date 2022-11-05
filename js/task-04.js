let counterCurrentValue = 0;

const refs = {
    counter: document.querySelector('#value'),
    btnMinusOne: document.querySelector('button[data-action="decrement"]'),
    btnPlusOne: document.querySelector('button[data-action="increment"]'),
};

const render = () => {
    refs.counter.textContent = counterCurrentValue;
};


// тут можна переписати з іф? тоді треба вибрати одразу дві кнопки
refs.btnMinusOne.addEventListener('click', () => {
    counterCurrentValue -= 1;
    render();
});

refs.btnPlusOne.addEventListener('click', () => {
    counterCurrentValue += 1;
    render();
});


// old version, selection without data atribute
// const refs = {
//     span: document.querySelector('#value'),
//     buttonMinusOne: document.querySelector('#counter button:first-child'),
//     buttonPlusOne: document.querySelector('#counter button:last-child'),
// }