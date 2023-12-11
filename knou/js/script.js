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

  $('.publish_list_slide').slick({
    infinite: true,
    // fade: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 1000,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    dots: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
  });

  $('.local_univ_slide').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 1000,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
  });
  $('.local_univ_slide').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){ 
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.slide_count').html("<span class='now'>" + i + "</span><span class='total'>" + slick.slideCount + "</span>");
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
    $('.single_slide, .publish_list_slide, .local_univ_slide').slick('slickPause');

  });
  $('.play').on('click', function(){
    $(this).hide();
    $('.pause').show();
    $('.single_slide, .publish_list_slide, .local_univ_slide').slick('slickPlay');
  });

  $('.shortcut_btn').on('click', function(){
    if($('.shortcut_inner').hasClass('is_open')){
      $('.shortcut_inner').removeClass('is_open');
    } else {
      $('.shorcut_inner').removeClass('is_open');
      $(this).parent('.shorcut_inner').addClass('is_open');
    }
  })
});