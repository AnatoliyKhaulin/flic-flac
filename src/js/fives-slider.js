import Glide from '@glidejs/glide';

let fivesSliderContainer = document.querySelector('.glide--fives');

if(fivesSliderContainer) {
  let glide = new Glide(fivesSliderContainer, {
    type: 'carousel',
    autoplay: false,
    perView: 5,
    gap: 16,
    breakpoints: {
      1200: {
        perView: 4,
        gap: 8
      },
      1024: {
        perView: 3,
        gap: 8,
      },
      768: {
        perView: 3,
      },
      680: {
        perView: 2,
      },
      600: {
        perView: 1,
      },
    },
  });

  glide.mount();
}
