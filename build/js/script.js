const btnToggle = document.querySelector('.main-nav__btn');
const navMenu = document.querySelector('.main-nav__list');
const body = document.querySelector('body');
const itemContainer = document.querySelector('.main-nav__item');
const menuItem = document.querySelector('.main-nav__item a');

navMenu.classList.add('main-nav__list--closed');

if (typeof btnToggle !== 'undefined') {
  btnToggle.addEventListener('click', () => {
    if (btnToggle.classList.contains('main-nav__btn--burger')) {
      btnToggle.classList.remove('main-nav__btn--burger');
      btnToggle.classList.add('main-nav__btn--cross');
      navMenu.classList.remove('main-nav__list--closed');
      navMenu.classList.add('main-nav__list');
      body.classList.add('body-lock');

      itemContainer.onclick = (evt) => {
        if (evt.target === menuItem) {
          console.log('SHIT')
          body.classList.remove('body-lock')
        }
      }

    } else {
      btnToggle.classList.remove('main-nav__btn--cross');
      btnToggle.classList.add('main-nav__btn--burger');
      navMenu.classList.remove('main-nav__list');
      navMenu.classList.add('main-nav__list--closed');
      body.classList.remove('body-lock');
    }
  });
}

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();

    const blockID = anchor.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}

const phoneInput = document.querySelector('#phone');
const inputValidity = /[^a-z]+/g;

const onPhoneConfirmValidity = function () {
  let symbolsArr = phoneInput.value.split(' ');

  symbolsArr.forEach((symbol) => {
    const isLetters = symbol.search(inputValidity);

    if (isLetters < 0) {
      phoneInput.setCustomValidity('Телефон должен содержать только цифры!');

      return;
    } else {
      phoneInput.setCustomValidity('');
    }
  });
};

phoneInput.addEventListener('input', onPhoneConfirmValidity);
