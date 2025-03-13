import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
// import Swiper
import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';

const gallery = document.querySelector('.reviews-gallery');
const updateCardHeight = () => {
  const items = document.querySelectorAll('.reviews-text');
  const max = [...items].reduce((max, el) => {
    return max < el.offsetHeight ? el.offsetHeight : max;
  }, 0);

  items.forEach(el => (el.style.height = `${max}px`));
};

getAllFoto();

const swiper = new Swiper('.reviews-swiper', {
  modules: [Navigation, Keyboard, Mousewheel],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev ',
  },
  direction: 'horizontal',
  grabCursor: true,
  simulateTouch: true,
  keyboard: {
    enabled: true,
    pageUpDown: true,
  },
  mousewheel: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 4,
    },
  },
  speed: 400,
  spaceBetween: 16,
  wrapperClass: 'reviews-gallery',
});

async function getAllFoto() {
  try {
    const result = await axios.get(
      `https://portfolio-js.b.goit.study/api/reviews`
    );
    makeGallery(result.data);
    updateCardHeight();
  } catch (error) {
    const messageErr = `<li class="reviews-item-error">
        <div class="reviews-content">
          <p class="reviews-error">Not found</p>
        </div>
      </li>
    `;
    console.log(messageErr);

    gallery.insertAdjacentHTML('beforeend', messageErr);

    const target = document.querySelector('.reviews-error');
    const options = {
      rootMargin: '0px',
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(arr => {
      if (arr[0].isIntersecting)
        messageAllert('ERROR', `Sorry, ${error}!`, ' #ef4040');
      console.log(arr[0]);
    }, options);

    observer.observe(target);
  }
}

function messageAllert(message, text, backColor) {
  iziToast.show({
    position: 'topRight',
    title: message,
    titleColor: 'white',
    message: text,
    messageSize: '24px',
    messageLineHeight: '24px',
    messageColor: 'white',
    backgroundColor: backColor,
    theme: 'dark',
  });
}

function makeGallery(array) {
  // =========================================== gallery
  const listImages = array
    .map(
      element =>
        `<li class="swiper-slide">
      
          <div class="reviews-thumb">
            <img
              src="${element.avatar_url}"
              alt="foto"
              width="48"
              class="reviews-image"
            />
          </div>
          <div class="reviews-content">
            <h3 class="reviews-member">${element.author}</h3>
            <p class="reviews-text">${element.review}
            </p>
         
          </div>
        </li>
    `
    )
    .join(' ');
  gallery.insertAdjacentHTML('beforeend', listImages);
}
