import Glide from '@glidejs/glide';

let glide = new Glide('.glide--single', {
  type: 'carousel',
  autoplay: 6000,
  hoverpause: false,
  animationDuration: 1000,
  animationTimingFunc: 'ease-in-out',
});

glide.mount();
