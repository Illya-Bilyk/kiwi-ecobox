const swiper = new Swiper('.sample-slider', {
  loop: true,
  // autoplay: {
  //   _delay: 2000,
  //   get delay() {
  //     return this._delay;
  //   },
  //   set delay(value) {
  //     this._delay = value;
  //   },
  // },
  pagination: {
    el: '.swiper-pagination',
    // type: 'progressbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
