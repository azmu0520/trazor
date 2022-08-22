const swiper = new Swiper('.swiper1', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper2 = new Swiper('.swiper2', {
  navigation: {
    nextEl: '.swiper-button-next-2',
    prevEl: '.swiper-button-prev-2',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});

const swiper3 = new Swiper('.swiper3', {
  slidesPerView: 2,
  breakpoints: {
    800: {
      slidesPerView: 3,
    },
  },
});
