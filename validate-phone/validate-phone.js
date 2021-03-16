// запрещает отправку формы, еслии введен не весь номер телефона
const validatePhone = () => {
  let form = document.querySelector('.project__form');
  let input = document.getElementById('userphone');

  // если на странице нет form, то не ищем
  if (!form) {
    return;
  }

  // запрещает отправку формы если цифр телефона меньше 11
  form.addEventListener('submit', function (evt) {
    evt.preventDefault();

    let value = input.value;
    // eslint-disable-next-line radix
    let num = parseInt(value.replace(/[^\d]/g, ''));
    let tel = num.toString();

    if (tel.length !== 11) {
      evt.return = false;
    } else {
      // eslint-disable-next-line no-invalid-this
      this.submit();
    }

  });
};

export {validatePhone};
