let headerTopLine = document.querySelector('.top-nav');
let headerBottomLine = document.querySelector('.main-header__bottom');
let headerTopContainer = document.querySelector('.main-header__top .container');
let menuBtn = document.querySelector('.js-burger-btn');
let	menuBurger = menuBtn.querySelector('.main-header__burger');
let	topHeaderNavList = document.querySelector('.js-top-header-nav-list');

if (window.innerWidth < 1024) {
  headerBottomLine.appendChild(headerTopLine);

  menuBtn.addEventListener('click', () => {
    if (menuBurger.classList.contains('active')) {
      menuBurger.classList.remove('active');
      topHeaderNavList.classList.remove('active');
    } else {
      menuBurger.classList.add('active');
      topHeaderNavList.classList.add('active');
    }
  });
}

window.addEventListener('resize', () => {
  if (window.innerWidth < 1024) {
    headerBottomLine.appendChild(headerTopLine);

    menuBtn.addEventListener('click', () => {
      if (menuBurger.classList.contains('active')) {
        menuBurger.classList.remove('active');
        topHeaderNavList.classList.remove('active');
      } else {
        menuBurger.classList.add('active');
        topHeaderNavList.classList.add('active');
      }
    });
  } else {
    headerTopContainer.prepend(headerTopLine);
  }
});
