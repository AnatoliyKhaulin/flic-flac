import Glide from '@glidejs/glide';

let fivesSliderContainer = document.querySelector('.glide--fives');

if(fivesSliderContainer) {
  let glide = new Glide(fivesSliderContainer, {
    type: 'carousel',
    autoplay: false,
    perView: 5,
    gap: 16,
    breakpoints: {
      1024: {
        gap: 8,
      },
      768: {
        perView: 3,
      },
      600: {
        perView: 1,
      },
    },
  });

  glide.mount();
}
