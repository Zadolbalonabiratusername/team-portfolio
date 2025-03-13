import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';

const swiper = new Swiper('.swiper-skills', {
  modules: [Navigation, Keyboard, Mousewheel],
  slidesPerView: 'auto',
  navigation: true,
  keyboard: true,
  mousewheel: true,
  direction: 'horizontal',
  loop: true,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
    1440: {
      slidesPerView: 6,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
  },
  on: {
    click: ({ activeIndex, clickedIndex }) => {
      if (activeIndex === clickedIndex) return;
      swiper.slideNext();
    },
  },
});
