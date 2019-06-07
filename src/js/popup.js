let $popupLink = $('.show-popup');
let $popupContainer = $('.popup');
let $popupClose = $('.popup__close');

let openPopup = (e) => {
  e.preventDefault();
  let $this = $(e.currentTarget);
  let $thisTarget = $this.data('target');
  let $popupName;

  $popupContainer.each(function (index, item) {
    $popupName = $(this).attr('id');
    if($popupName === $thisTarget) {
      $(this).addClass('show');
    }
  });
};

let closePopup = (e) => {
  e.preventDefault();
  $popupContainer.removeClass('show');
};

$popupLink.on('click', openPopup);
$popupClose.on('click', closePopup);
