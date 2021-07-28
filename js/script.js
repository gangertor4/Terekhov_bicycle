const btnToggle = document.querySelector('.main-nav__btn');
const navMenu = document.querySelector('.main-nav__list');

navMenu.classList.remove('main-nav__list--no-js');

btnToggle.addEventListener('click', function () {
  if (btnToggle.classList.contains('main-nav__btn--burger')) {
    btnToggle.classList.remove('main-nav__btn--burger');
    btnToggle.classList.add('main-nav__btn--cross');
    navMenu.classList.remove('main-nav__list--closed');
    navMenu.classList.add('main-nav__list--opened');
  } else {
    btnToggle.classList.remove('main-nav__btn--cross');
    btnToggle.classList.add('main-nav__btn--burger');
    navMenu.classList.remove('main-nav__list--opened');
    navMenu.classList.add('main-nav__list--closed');
}
})