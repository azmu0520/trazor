var btn = document.getElementById('mobile__hamburger');
var menu = document.querySelector('.menu');
btn.addEventListener('click', () => {
  menu.classList.toggle('open');
});
