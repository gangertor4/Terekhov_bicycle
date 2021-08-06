const phoneInput = document.querySelector('#phone');
const inputValidity = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

const onPhoneConfirmValidity = () => {
  if (!inputValidity.test(phoneInput.value)) {
    phoneInput.setCustomValidity('Телефон должен содержать 10 цифр!');

    return;
  }

  phoneInput.setCustomValidity('');
}

phoneInput.addEventListener('input', onPhoneConfirmValidity);
