import Glide from '@glidejs/glide';

let onceSliderContainer = document.querySelector('.glide--single');

if (onceSliderContainer !== null) {
  let glide = new Glide(onceSliderContainer, {
    type: 'carousel',
    autoplay: 6000,
    hoverpause: false,
    animationDuration: 1000,
    animationTimingFunc: 'ease-in-out',
  });

  glide.mount();
}
