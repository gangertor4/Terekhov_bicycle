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

const phoneInput = document.querySelector('.form__input--phone');
const inputValidity = /[^a-z]+/g;

const onPhoneConfirmValidity = function () {
  let symbolsArr = phoneInput.value.split(' ')

  symbolsArr.forEach((symbol) => {
    const isLetters = symbol.search(inputValidity);

    if (isLetters < 0) {
      phoneInput.setCustomValidity('Телефон должен содержать только цифры!')

      return
    } else {
      phoneInput.setCustomValidity('')
    }
  })
}

phoneInput.addEventListener('input', onPhoneConfirmValidity)