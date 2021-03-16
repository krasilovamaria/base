/* стилизует селекты с помощью плагина choices
лучше код ниже переделать в цикл
https://github.com/jshjohnson/Choices 
https://codepen.io/dev_piki/pen/gyBwOm */
const getChoices = () => {
  let modalSales = document.querySelector('.modal-sales');

  if (!modalSales) {
    return;
  }

  // фильтр - "Стадия продаж" в "Еще фильтры"
  let customTemplates = new Choices(document.querySelector('.modal-sales#choices-single-custom-templates'), {
    removeItemButton: false,
    searchEnabled: false,
    itemSelectText: '',
  });

  // фильтр - "Тип квартир" в "Еще фильтры"
  let customTemplates2 = new Choices(document.querySelector('.modal-apartment#choices-single-custom-templates'), {
    removeItemButton: false,
    searchEnabled: false,
    itemSelectText: '',
  });

  // сбрасывает при клике на кнопку "очистить" option который выбрал пользователь
  let buttonClean = document.querySelector('.js-clean-more-filter');
  buttonClean.addEventListener('click', function () {
    // эмулирует клик
    // очищает список
    customTemplates.clearChoices();
    // установливает обратно список
    customTemplates.setValue(['продано', 'продажи от застройщика приостановлены', 'продажи от застройщика не начаты', 'открыто бронирование', 'идут продажи от застройщика', 'любая']);
    customTemplates2.clearChoices();
    customTemplates2.setValue(['без апартаментов', 'апартаменты', 'не важно']);
  });
};

export {getChoices};
