$(function(){
  $('.popup_switch_btn').on('click',function(){
    if($('.header .ico_arrow').hasClass('rotate')) {
      $('.header .ico_arrow').removeClass('rotate').text('팝업닫기');
    } else {
      $(this).children('.header .ico_arrow').addClass('rotate').text('팝업열기');
    }
  })

  $('.single_slide').slick({
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 1500,
    dots: true,
    arrows: false,
  });

  // $('.multiple_slide').slick({
  //   infinite: true,
  //   slidesToShow: 3,
  //   lidesToScroll: 1,

  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true,
  //         autoplay: true,
  //         autoplaySpeed: 1500,
  //       }
  //     },
  //   ]
  //});

  $('.pause').on('click', function(){
    $(this).hide();
    $('.play').show();
    $('.single_slide').slick('slickPause');

  });
  $('.play').on('click', function(){
    $(this).hide();
    $('.pause').show();
    $('.single_slide').slick('slickPlay');
  });
});