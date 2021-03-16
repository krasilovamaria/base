// позволяет переходить к блокам из мобильного меню
let links = document.querySelectorAll('.js-href');

function linkClick(e) {
  // получает адрес ссылку для перехода
  let address = e.target.href;
  // переходит по ссылке
  window.location.href = address;
}

links.forEach(function (item) {
  item.addEventListener('click', linkClick);
});