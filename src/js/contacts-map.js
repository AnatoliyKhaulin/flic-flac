ymaps.ready(function () {
  let contactsMap = new ymaps.Map('contactsMap', {
      center: [55.751574, 37.573856],
      zoom: 9,
    }, {
      searchControlProvider: 'yandex#search',
    }),

    contactsPlacemark = new ymaps.Placemark(contactsMap.getCenter(), {
      hintContent: 'Флик Фляк',
      balloonContent: 'Мы здесь',
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: './images/sprites/svg/flac_location_map.svg',
      // Размеры метки.
      iconImageSize: [77, 70],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-5, -38],
    });

  contactsMap.geoObjects
    .add(contactsPlacemark);
  contactsMap.controls
    .remove('geolocationControl')
    .remove('trafficControl')
    .remove('typeSelector')
    .remove('fullscreenControl')
    .remove('rulerControl')
    .remove('zoomControl')
    .remove('searchControl');
  contactsMap.behaviors
    .disable('scrollZoom');
  // .disable('drag');

  contactsMap.controls.add(new ymaps.control.ZoomControl({options: { position: { right: 10, top: 70 }}}));
});
