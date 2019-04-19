let catalogItems = document.querySelectorAll('.catalog-list__item');

if (/Mobi/.test(navigator.userAgent)) {
  for (let i = 0; i < catalogItems.length; i++) {
    let catalogItem = catalogItems[i];

    catalogItem.addEventListener('click', () => {
      let catalogItemList = catalogItem.querySelector('.catalog-list__list');

      if (catalogItem.classList.contains('active')) {
        catalogItem.classList.remove('active');
        catalogItemList.classList.remove('active');
      } else {
        catalogItem.classList.add('active');
        catalogItemList.classList.add('active');
      }
    });
  }
}
