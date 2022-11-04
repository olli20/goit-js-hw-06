// const magicBtn = document.querySelector('.js-magic-btn');

// magicBtn.addEventListener('click', () => {
//     const navLinksRef = document.querySelectorAll('.site-nav__link');
//     console.log(navLinksRef);
// });

// const currentPage = '/contacts';

// const linkRef = document.querySelector(`.site-nav__link[href="${currentPage}"]`);
// console.log(linkRef);

// linkRef.classList.add('site-nav__link--current');

const navRef = document.querySelector('.site-nav');

const firstNavItemRef = navRef.previousElementSibling;

console.log(firstNavItemRef);



