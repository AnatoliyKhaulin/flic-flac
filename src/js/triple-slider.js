import Glide from '@glidejs/glide';

let glide = new Glide('.glide--triple', {
  type: 'carousel',
  autoplay: false,
  perView: 3,
  gap: 34,
  breakpoints: {
    1024: {
      gap: 20,
    },
    768: {
      perView: 2,
    },
    600: {
      perView: 1,
    },
  },
});

glide.mount();
