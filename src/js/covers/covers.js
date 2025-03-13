const refs = {
  covers: document.querySelector('.covers'),
  marquee: document.querySelector('.covers-animatior'),
};

const doAnimate = entries => {
    if (entries[0].isIntersecting) {
      refs.marquee.classList.add('animate');
    } else {
      refs.marquee.classList.remove('animate');
    }
};

const options = {
  root: null,
  threshold: 0.25,
};

const observer = new IntersectionObserver(doAnimate, options);

observer.observe(refs.covers);
