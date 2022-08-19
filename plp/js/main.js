var filterItem = document.querySelectorAll('.filter__item');

filterItem.forEach((el, key) => {
  console.log(el);
  el.addEventListener('click', () => {
    el.classList.toggle('filter__item--active');
    filterItem.forEach((ell, els) => {
      if (key !== els) {
        ell.classList.remove('filter__item--active');
      }
    });
  });
});
