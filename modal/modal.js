import {disableScrolling, enableScrolling} from 'scroll-lock';

/* в html .modal(id='название окна') и кнопке открытия .js-modal, закрытия .js-close-modal в css .modal.active
Например,
pug - .modal.modal-confident(id="modal-confident")
scss - 
.modal-confident {display: none;}
.modal-confident.active {display: flex;} */

/* открывет модальные окна */
const openModal = () => { 
  let btnOpenModal = document.querySelectorAll('.js-modal');

  btnOpenModal.forEach(function (item) {
    item.addEventListener('click', function () {
      // получает id окна, которое нужно открыть
      // eslint-disable-next-line no-invalid-this
      let modalId = this.getAttribute('data-id');
      // находит модальное окно которое надо открыть
      let modalElem = document.getElementById(modalId);

      // добавляет класс active, что позволяет открыть окно
      modalElem.classList.add('active');

      let body = document.querySelector('body');
      // общий класс на body
      body.classList.add('modal-active');
      // запрещает прокрутку экрана при открытом меню
      disableScrolling();
    });
  });
};

/* закрывает модальные окна
в html .modal(id='название окна') и кнопке открытия .js-modal, закрытия .js-close-modal
в css .modal.active
*/
const closeModal = () => {
  let btnCloseModal = document.querySelectorAll('.js-close-modal');

  btnCloseModal.forEach(function (item) {
    item.addEventListener('click', function () {
      // получает id окна, которое нужно закрыть
      // eslint-disable-next-line no-invalid-this
      let modalId = this.getAttribute('data-id');
      // находит модальное окно которое надо открыть
      let modalElem = document.getElementById(modalId);

      // удаляет класс active, что позволяет закрыть окно
      modalElem.classList.remove('active');

      let body = document.querySelector('body');
      // общий класс на body
      body.classList.remove('modal-active');
      // разрешает прокрутку экрана
      enableScrolling();
    });
  });
};
