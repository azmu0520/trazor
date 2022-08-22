var color = document.querySelectorAll('.color');
var choice = document.querySelectorAll('.choice__wrap');
var plan = document.querySelectorAll('.plan__input');

let selectField = document.querySelector('.select__field');
let selectOptions = document.querySelector('.select__options');
let options = document.getElementsByClassName('option');
let languageSelect = document.querySelector('.language-select');
let selectIcon = document.querySelector('.select__icon');

selectField.prepend(options[0].firstElementChild.cloneNode(true));

for (let option of options) {
  option.addEventListener('click', () => {
    let fch = option.firstElementChild;
    let clone = fch.cloneNode(true);
    selectField.firstElementChild.replaceWith(clone);
    selectOptions.classList.toggle('hidden');
    selectIcon.classList.toggle('rotate');
  });
}
selectField.addEventListener('click', () => {
  selectOptions.classList.toggle('hidden');
  selectIcon.classList.toggle('rotate');
});

document.addEventListener('mouseup', function (e) {
  if (!languageSelect.contains(e.target)) {
    selectOptions.classList.add('hidden');
    selectIcon.classList.toggle('rotate');
  }
});

var title = document.querySelector('#title');
color.forEach((item, index) => {
  item.addEventListener('click', () => {
    item.classList.toggle('color--active');
    title.innerHTML = `Color: <span> ${item.getAttribute('name')} </span>`;
    color.forEach((val, valIn) => {
      if (index !== valIn) {
        val.classList.remove('color--active');
      }
    });
  });
});

choice.forEach((item, index) => {
  item.addEventListener('click', () => {
    item.classList.toggle('choice__active');
    choice.forEach((val, valIn) => {
      if (index !== valIn) {
        val.classList.remove('choice__active');
      }
    });
  });
});
