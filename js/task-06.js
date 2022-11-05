const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', () => {

    if (textInput.value.length == textInput.getAttribute('data-length')) {
        if (textInput.classList.contains('invalid')) {
            textInput.classList.replace('invalid', 'valid');
        } else if (!textInput.classList.contains('valid')) {
            textInput.classList.add('valid');
        }       
    } else {
        if (textInput.classList.contains('valid')) {
            textInput.classList.replace('valid', 'invalid');
        } else if (!textInput.classList.contains('invalid')) {
            textInput.classList.add('invalid');
        }       
    }
});