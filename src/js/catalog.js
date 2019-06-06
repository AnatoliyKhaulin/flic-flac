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


let $catalogSidebarNavLink = $('.js-sidebar-nav-link');

$catalogSidebarNavLink.on('click', (e) => {
  let $this = $(e.currentTarget);
  let dropdownMenu = $this.find('.js-sidebar-nav-dropdown');

  if (dropdownMenu.length > 0) {
    e.preventDefault();
  }

  if(!$this.hasClass('open') && dropdownMenu.length > 0) {
    $this.addClass('open');
    dropdownMenu.addClass('open');
  } else {
    $this.removeClass('open');
    dropdownMenu.removeClass('open');
  }
});
