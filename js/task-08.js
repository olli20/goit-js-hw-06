const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault(); 

    const inputData = {};
    const {
        elements: { email, password }
    } = event.currentTarget;
   
    if (email.value === "" || password.value === "") {
        alert("Please fill in all the fields!");
    } else {
        inputData.email = email.value;
        inputData.password = password.value;
        console.log(inputData);

        event.currentTarget.reset();
    }
}
