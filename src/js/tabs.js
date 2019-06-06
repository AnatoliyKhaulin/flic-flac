$('.tabs__link').click(function(){
  var tab_id = $('.tabs__content').attr('id');
  var datatarget=$(this).attr('data-target');
  if($("#"+datatarget==tab_id)){
    $('.tabs__link').removeClass('is-active');
    $('.tabs__content').removeClass('is-active');

    $(this).addClass('is-active');
    $("#"+datatarget).addClass('is-active');
  } else {
    $('.tabs__content').html('Нет информации');
  }
});
