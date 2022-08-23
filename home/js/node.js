var btn = document.getElementById('mobile__hamburger');
var menu = document.querySelector('.menu');
var announsment = document.getElementsByClassName('announsment')[0];
var exit = document.getElementsByClassName('announsment__close__icon')[0];
var nav = document.getElementsByClassName('header__nav')[0];
var opener = document.getElementsByClassName('opener')[0];
var play__icon = document.getElementsByClassName('play__btn')[0];
var player = document.getElementById('player');

btn.addEventListener('click', () => {
  menu.classList.toggle('open');
});

exit.addEventListener('click', () => {
  announsment.classList.add('delete__add');
  nav.classList.add('top');
  opener.classList.add('opener__modal');
});

play__icon.addEventListener('click', () => {
  player.onplay;
});
