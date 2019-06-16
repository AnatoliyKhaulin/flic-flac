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
let $catalogSidebarShow = $('.js-show-sidebar');
let $catalogGridShowMore = $('.catalog-grid__show-more');

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

$catalogSidebarShow.on('click', (e) => {
  e.preventDefault();
  let $this = $(e.currentTarget);
  let showText = $this.data('show-text');
  let hideText = $this.data('hide-text');

  if(!$this.hasClass('showed')) {
    $this.addClass('showed');
    $this.text(hideText);
    $('.catalog-sidebar').addClass('showed');
  } else {
    $this.removeClass('showed');
    $this.text(showText);
    $('.catalog-sidebar').removeClass('showed');
  }
});

$catalogGridShowMore.on('click', (e) => {
  e.preventDefault();
  let $this = $(e.currentTarget);

  $this.remove();

  if ($('.catalog-item').hasClass('catalog-item--hidden')) {
    $('.catalog-item').removeClass('catalog-item--hidden');
  }
});
