if (/Mobi/.test(navigator.userAgent)) {
  let dropdownLinks = document.querySelectorAll('.js-nav-link');

  let headerNav = document.querySelector('.main-nav__dropdown');

  for (let i = 0; i < dropdownLinks.length; i++) {
    let dropdownLink = dropdownLinks[i];

    let showHideDropdown = (event) => {
      event.preventDefault();

      if (dropdownLink.classList.contains('open')) {
        dropdownLink.classList.remove('open');
      } else {
        dropdownLink.classList.add('open');
      }

      if (headerNav.classList.contains('open')) {
        headerNav.classList.remove('open');
      } else {
        headerNav.classList.add('open');
      }
    };

    dropdownLink.addEventListener('touchstart', showHideDropdown);
  }
}
