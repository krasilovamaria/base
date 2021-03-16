// в html подключаем jquery&inputmask.js и main.js пишем эту строчку
$('input[type=tel]').mask('+ 7 (999) 999-9999');

// или так, когда много tel
/* eslint-disable no-undef */
// Подключает imaskjs для все input[type="tel"]
const getImask = () => {
    let inputs = document.querySelectorAll('input[type="tel"]');
  
    if (!inputs) {
      return;
    }
  
    let maskOptions = {
      // задает вид mask
      mask: '+{7} 000 000 00 00',
      // скрывает маску до ввода значений
      lazy: true,
    };
  
    if (inputs.length > 0) {
      inputs.forEach((input) => {
        // eslint-disable-next-line new-cap
        IMask(input, maskOptions);
      });
    }
  };
  
  export {getImask};