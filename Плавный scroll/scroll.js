'use strict';
// И в html пишем такой текст:
// <a class="promo__scroll" href="#advantages" aria-label="scroll">Скролл вниз</a>
// <section class="advantages" id="advantages">

// плавный скролл
var linkNav = document.querySelectorAll('[href^="#"]');
var V = 0.5;
for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener('click', function (e) {
    e.preventDefault();
    var w = window.pageYOffset;
    var hash = e.currentTarget.href.replace(/[^#]*(.*)/, '$1');
    var t = document.querySelector(hash).getBoundingClientRect().top;
    var start = null;
    requestAnimationFrame(step);
    function step(time) {
      if (start === null) {
        start = time;
      }
      var progress = time - start;
      var r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
      window.scrollTo(0, r);
      if (r !== w + t) {
        requestAnimationFrame(step);
      } else {
        location.hash = hash;
      }
    }
  }, false);
}

// или так

// плавный скролл
const smoothScroll = () => {
  const buttonScroll = document.querySelector('.button.overflow__application');
  if (!buttonScroll) {
    return;
  }
  let V = 0.5;
  buttonScroll.addEventListener('click', function (e) {
    // отменяем стандартное поведение
    e.preventDefault();
    // производим прокрутку
    let w = window.pageYOffset;
    // к id элемента, к которому нужно перейти
    let hash = e.currentTarget.href.replace(/[^#]*(.*)/, '$1');
    // отступ от окна браузера до id
    let t = document.querySelector(hash).getBoundingClientRect().top;
    let start = null;
    // функция анимации
    requestAnimationFrame(step);
    function step(time) {
      if (start === null) {
        start = time;
      }
      let progress = time - start;
      let r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
      window.scrollTo(0, r);
      if (r !== w + t) {
        requestAnimationFrame(step);
      } else {
        // URL с хэшем location.hash
        location.hash = hash;
      }
    }
  }, false);
};

export {smoothScroll};

