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
