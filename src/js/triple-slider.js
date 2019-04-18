import Glide from '@glidejs/glide';

let glide = new Glide('.glide--triple', {
  type: 'carousel',
  autoplay: false,
  perView: 3,
  gap: 34,
});

glide.mount();
