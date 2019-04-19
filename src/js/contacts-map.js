let adressCordOne = [59.844050, 30.386979];
let adressCordTwo = [60.026132, 30.317916];
let adressCordThree = [59.940271, 30.265374];

let contactsAdressOne = document.querySelector('#contactsAdressOne');
let contactsAdressTwo = document.querySelector('#contactsAdressTwo');
let contactsAdressThree = document.querySelector('#contactsAdressThree');

function init() {

  // Карта первая вкладка

  let contactsMap = new ymaps.Map("contactsMap", {
    center: adressCordOne,
    zoom: 9,
  }, {
    searchControlProvider: 'yandex#search',
  });

  contactsMap.controls.add(new ymaps.control.ZoomControl({
    options: {
      position: {
        left: 10,
        bottom: 70,
      },
    },
  }));

  onePlacemark = new ymaps.Placemark(adressCordOne, {
    hintContent: '«ФЛИК ФЛЯК» КУПЧИНО:',
    balloonContent: '192284, Санкт-Петербург, ул. Купчинская, 4 (корп. 4)',
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: './images/sprites/svg/flac_location_map.svg',
    // Размеры метки.
    iconImageSize: [123, 63],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-5, -38],
  });

  twoPlacemark = new ymaps.Placemark(adressCordTwo, {
    hintContent: '«ФЛИК ФЛЯК» ОЗЕРКИ:',
    balloonContent: '192284, Санкт-Петербург, пр. Энгельса 98',
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: './images/sprites/svg/flac_location_map.svg',
    // Размеры метки.
    iconImageSize: [123, 63],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-5, -38],
  });

  threePlacemark = new ymaps.Placemark(adressCordThree, {
    hintContent: '«ФЛИК ФЛЯК» ВАСИЛЕОСТРОВСКАЯ:',
    balloonContent: 'метро Василеостровская, 16 линия В.О. д. 45',
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: './images/sprites/svg/flac_location_map.svg',
    // Размеры метки.
    iconImageSize: [123, 63],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-5, -38],
  });

  contactsMap.geoObjects
    .add(onePlacemark)
    .add(twoPlacemark)
    .add(threePlacemark);

  contactsMap.controls.remove('geolocationControl');
  contactsMap.controls.remove('searchControl');
  contactsMap.controls.remove('trafficControl');
  contactsMap.controls.remove('typeSelector');
  contactsMap.controls.remove('fullscreenControl');
  contactsMap.controls.remove('rulerControl');
  contactsMap.controls.remove('zoomControl');
  contactsMap.behaviors.disable('scrollZoom');
  contactsMap.behaviors.disable('drag');

  $(window).on('resize', function () {
    setTimeout(function () {
      contactsMap.container.fitToViewport();
    }, 250);
  });

  contactsAdressOne.addEventListener('click', (e) => {
    e.preventDefault();
    contactsMap.setCenter(adressCordOne, 17);
  });
  contactsAdressTwo.addEventListener('click', (e) => {
    e.preventDefault();
    contactsMap.setCenter(adressCordTwo, 17);
  });
  contactsAdressThree.addEventListener('click', (e) => {
    e.preventDefault();
    contactsMap.setCenter(adressCordThree, 17);
  });
}

ymaps.ready(init);
