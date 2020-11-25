'use strict'

var tabBtn = document.querySelectorAll('button');
var tabContent = document.querySelectorAll('.tab-content');

Object.keys(tabBtn).forEach(function (index) {
  tabBtn[index].addEventListener('click', function (ev) {

    for(var i = 0; i < tabBtn.length; i++){
      tabBtn[i].classList.remove('active-btn');
      tabContent[i].classList.remove('active-content');
    }

    ev.target.classList.add('active-btn');
    tabContent[index].classList.add('active-content');
  });
});