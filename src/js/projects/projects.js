// import Swiper JS
import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';

// ==============================================================

// const refs = {
//   btnSeeProject: document.querySelector('.btn-project'),
// };

// refs.btnSeeProject.addEventListener('click', () => {
//   window.open('https://github.com/serhiilukianenkodev/portfolio', '_blank');
// });

// ==============================================================

const swiperProjects = new Swiper('.swiper-projects', {
  modules: [Navigation, Keyboard, Mousewheel],

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  direction: 'horizontal',
  slidesPerView: 1,

  simulateTouch: true,

  grabCursor: true,

  hashNavigation: {
    watchState: true,
  },

  keyboard: {
    enabled: true,
    pageUpDown: true,
  },

  mousewheel: {
    sensitivity: 1,
  },

  speed: 800,

  loop: false,
});
