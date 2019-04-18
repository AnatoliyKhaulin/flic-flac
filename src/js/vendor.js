import '@babel/polyfill';
import svg4everybody from 'svg4everybody';
import $ from 'jquery';

svg4everybody();

window.$ = $;
window.jQuery = $;

let images = [...document.querySelectorAll('img')];

for (let image of images) {
  if (image.height > image.width) {
    image.classList.add('vertical-image');
  } else {
    image.classList.add('horizontal-image');
  }
}

