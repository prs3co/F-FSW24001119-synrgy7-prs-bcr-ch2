const swiperElement = document.querySelector('swiper-container');
const buttonPrev = document.querySelector('.testimony__nav--prev');
const buttonNext = document.querySelector('.testimony__nav--next');

buttonPrev.addEventListener('click', () => {
  swiperElement.swiper.slidePrev();
});
buttonNext.addEventListener('click', () => {
  swiperElement.swiper.slideNext();
});

Object.assign(swiperElement, {
  slidesPerView: 1,
  spaceBetween: 24,
  breakpoints: {
      768: {
        slidesPerView: 'auto',
        spaceBetween: 32,
      },
    },
})
swiperElement.initialize();
