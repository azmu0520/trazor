var modal = document.getElementsByClassName('cart__modal')[0];
var exit = document.getElementsByClassName('modal__exit')[0];
var icon = document.getElementsByClassName('nav__cart__icon')[0];

exit.addEventListener('click', () => {
  modal.classList.remove('modal__open');
});

icon.addEventListener('click', () => {
  modal.classList.add('modal__open');
});
