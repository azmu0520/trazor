var btn = document.getElementById('mobile__hamburger');
var menu = document.querySelector('.menu');
btn.addEventListener('click', () => {
  menu.classList.toggle('open');
});

var scroller = document.querySelector('#body');
var gift__box = document.querySelector('.gift__box');

document.body.addEventListener('click', () => {
  console.log(document.body.scrollTop);
});
