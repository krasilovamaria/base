/* добавляет загрузку файлов "Прикрепить файл"
и стилизует саму иконку файла */
const fileUpload = () => {
  let form = document.querySelector('.modal-project__form');
  let input = document.getElementById('upload-file');

  if (!form) {
    return;
  }

  // работает с загрузкой файлов в input(type"file") и их стилизацией
  input.addEventListener('change', function () {
    let addBtn = document.querySelector('.file__btn');
    let textAddBtn = document.querySelector('.file__add-text');
    let iconBlock = document.querySelector('.file-icon-box');

    let files = input.files;

    for (let i = 0; i < files.length; i++) {
      // получаем сам файл
      let file = files[i];
      // тип файла, его обрежем, чтобы получился только формат
      // type.split('/')[1]
      let type = file.type;

      iconBlock.innerHTML += '<p class="file__icon-item">' + '<button class="btn btn--burger-close file__icon-btn"></button>' + '<span class="file__item-name">' + file.name + '</span>' + '<span class="file__item-type">' + type.split('/')[1] + '</span>' + '</p>';

      // позволяет удалить файл
      let removeBtn = document.querySelectorAll('.file__icon-btn');
      removeBtn.forEach(function (btn) {
        btn.addEventListener('click', function (evt) {
          evt.preventDefault();
          // eslint-disable-next-line no-invalid-this
          this.parentElement.remove();
        });
      });
    }

    textAddBtn.innerHTML = 'прикрепить  еще файл';
    addBtn.classList.add('file__add-text-large');
  });
};

export {fileUpload};
