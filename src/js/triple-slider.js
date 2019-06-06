import Glide from '@glidejs/glide';

let tripleSliderContainer = document.querySelector('.glide--triple');

if(tripleSliderContainer) {
  let glide = new Glide(tripleSliderContainer, {
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
}
