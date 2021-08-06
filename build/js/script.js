const btnToggle = document.querySelector('.main-nav__btn');
const navMenu = document.querySelector('.main-nav__list');
const body = document.querySelector('body');
const menuItems = document.querySelectorAll('.main-nav__item a');

navMenu.classList.add('main-nav__list--closed');
btnToggle.classList.remove('main-nav__btn--closed');
btnToggle.classList.add('main-nav__btn--burger');

const closeMenu = () => {
  btnToggle.classList.remove('main-nav__btn--cross');
  btnToggle.classList.add('main-nav__btn--burger');
  navMenu.classList.remove('main-nav__list--opened');
  navMenu.classList.add('main-nav__list--closed');
  body.classList.remove('body-lock');
};

if (menuItems) {
  menuItems.forEach((item) => {
    item.addEventListener('click', (evt) => {
      evt.preventDefault();

      if (window.matchMedia('(max-width: 1023px)').matches) {
        closeMenu();
      }
      document
        .querySelector(evt.target.getAttribute('href'))
        .scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
    });
  });
}

if (btnToggle) {
  btnToggle.addEventListener('click', () => {
    if (btnToggle.classList.contains('main-nav__btn--burger')) {
      btnToggle.classList.remove('main-nav__btn--burger');
      btnToggle.classList.add('main-nav__btn--cross');
      navMenu.classList.remove('main-nav__list--closed');
      navMenu.classList.add('main-nav__list--opened');
      body.classList.add('body-lock');
    } else {
      closeMenu();
    }
  });
}

const phoneInput = document.querySelector('#phone');
const inputValidity = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

// const onPhoneConfirmValidity = function () {
//   let symbolsArr = phoneInput.value.split(' ');

//   symbolsArr.forEach((symbol) => {
//     const isLetters = symbol.search(inputValidity);

//     if (isLetters < 0) {
//       phoneInput.setCustomValidity('Телефон должен содержать только цифры!');

//       return;
//     } else {
//       phoneInput.setCustomValidity('');
//     }
//   });
// };

const onPhoneConfirmValidity = () => {
  if (!inputValidity.test(phoneInput.value)) {
    phoneInput.setCustomValidity('Телефон должен содержать только цифры!');

    return;
  }

  phoneInput.setCustomValidity('');
}

phoneInput.addEventListener('input', onPhoneConfirmValidity);
