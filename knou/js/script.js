$(function(){
  $('.popup_switch_btn').on('click',function(){
    if($('.header .ico_arrow').hasClass('rotate')) {
      $('.header .ico_arrow').removeClass('rotate').text('팝업닫기');
    } else {
      $(this).children('.header .ico_arrow').addClass('rotate').text('팝업열기');
    }
  })

  $('.single_slide').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    // autoplay: true,
    autoplaySpeed: 2000,
  });
});