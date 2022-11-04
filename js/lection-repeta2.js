const refs = {
    magicBtn: document.querySelector('.js-magic-btn'),
    heroTitle: document.querySelector('.hero__title'),
    heroImage: document.querySelector('.hero__image'),
};

// console.log(refs);

refs.magicBtn.addEventListener('click', () => {
    refs.heroImage.src = 'https://www.vets4pets.com/siteassets/species/cat/kitten/istock-1170736928-1.jpg';
    refs.heroTitle.textContent = "I can do it";
});

const removeBtn = document.querySelector('button[data-action="remove"]');
removeBtn.addEventListener('click', () => {
    refs.heroImage.src = '';
});

const createBtn = document.querySelector('button[data-action="create"]');
createBtn.addEventListener('click', () => {
    refs.heroImage.src = 'https://www.vets4pets.com/siteassets/species/cat/kitten/istock-1170736928-1.jpg';
});

