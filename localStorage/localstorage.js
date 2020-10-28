'use strict';

// localStorage - сохраняет данные в локальном хранилище 
// (это данные, которые хранятся бессрочно и будут доступны даже после перезагрузки браузера)

var username = popup.querySelector('[name=username]');
var phone = popup.querySelector('[name=phone]');
var popupField = popup.querySelector('[name=popup-field]');

popup.addEventListener('submit', function () {
  localStorage.setItem('username', username.value);
  localStorage.setItem('phone', phone.value);
  localStorage.setItem('popupField', popupField.value);
});
