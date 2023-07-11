const swiperRev = new Swiper('.sample-slider', {
  loop: true,
  autoplay: {
    _delay: 2000,
    get delay() {
      return this._delay;
    },
    set delay(value) {
      this._delay = value;
    },
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
