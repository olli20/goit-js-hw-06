const userName = document.querySelector('#name-output');
const textInput = document.querySelector('#name-input');

textInput.addEventListener("input", (event) => {
    if (event.currentTarget.value.trim() != '') {
        userName.textContent = event.currentTarget.value;
    } else { userName.textContent = 'Anonymous' }
});


