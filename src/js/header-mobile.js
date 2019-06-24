let headerTopLine = document.querySelector('.top-nav');
let headerBottomLine = document.querySelector('.main-header__bottom');
let headerTopContainer = document.querySelector('.main-header__top .container');
let menuBtn = document.querySelector('.js-burger-btn');
let	menuBurger = menuBtn.querySelector('.main-header__burger');
let	topHeaderNavList = document.querySelector('.js-top-header-nav-list');
let	contactsShowBtn = document.querySelector('.js-contacts-show');
let	contactsHiddenMobile = document.querySelector('.header-contacts');
let	headerSocialLinks = document.querySelector('.main-header .social-nav');
let	headerLogo = document.querySelector('.header-logo');
let	signForm = document.querySelector('.sign-form');

function insertAfter(elementInstertAfter, parentElement) {
  return parentElement.parentNode.insertBefore(elementInstertAfter, parentElement.nextSibling);
}

if (window.innerWidth < 1024) {
  headerBottomLine.appendChild(headerTopLine);
  topHeaderNavList.prepend(signForm);
  insertAfter(headerSocialLinks, headerLogo);

  menuBtn.addEventListener('click', () => {
    if (menuBurger.classList.contains('active')) {
      menuBurger.classList.remove('active');
      topHeaderNavList.classList.remove('active');
    } else {
      menuBurger.classList.add('active');
      topHeaderNavList.classList.add('active');
    }
  });

  contactsShowBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (contactsShowBtn.classList.contains('active')) {
      contactsShowBtn.classList.remove('active');
      contactsHiddenMobile.classList.remove('active');
    } else {
      contactsShowBtn.classList.add('active');
      contactsHiddenMobile.classList.add('active');
    }
  });

  $(document).ready(function() {
    var s = $(".header-cart__link");
    var pos = s.position();
    $(window).scroll(function() {
      var windowpos = $(window).scrollTop();
      if (windowpos >= pos.top) {
        s.addClass("is-fixed");
      } else {
        s.removeClass("is-fixed");
      }
    });
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
