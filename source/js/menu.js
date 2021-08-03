const btnToggle = document.querySelector('.main-nav__btn');
const navMenu = document.querySelector('.main-nav__list');

navMenu.classList.add('main-nav__list--closed');

if (typeof btnToggle !== 'undefined') {
  btnToggle.addEventListener('click', () => {
    if (btnToggle.classList.contains('main-nav__btn--burger')) {
      btnToggle.classList.remove('main-nav__btn--burger');
      btnToggle.classList.add('main-nav__btn--cross');
      navMenu.classList.remove('main-nav__list--closed');
      navMenu.classList.add('main-nav__list');
    } else {
      btnToggle.classList.remove('main-nav__btn--cross');
      btnToggle.classList.add('main-nav__btn--burger');
      navMenu.classList.remove('main-nav__list');
      navMenu.classList.add('main-nav__list--closed');
    }
  });
}
