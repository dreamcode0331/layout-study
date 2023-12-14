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

  $('.popup_slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 1000,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
  });
  
  $('.pause').on('click', function(){
    $(this).hide();
    $('.play').show();
    $('.single_slide, .publish_list_slide, .local_univ_slide, popup_slide').slick('slickPause');

  });

  $('.play').on('click', function(){
    $(this).hide();
    $('.pause').show();
    $('.single_slide, .publish_list_slide, .local_univ_slide, popup_slide').slick('slickPlay');
  });

  // slide
  var slide = function() {
    $('.shortcut_dropdown_box').hide();
    $('.shortcut_dropdown_btn').click(function(){
      if($(this).parent().hasClass('is_open')){
        $(this).parent().removeClass('is_open');
        $(this).next().slideUp();
      }else{
        $('.shortcut_dropdown').removeClass('is_open');
        $(this).parent().addClass('is_open');
        $('.shortcut_dropdown_box').slideUp();
        $(this).next().slideDown();
      }
    });
  }
  
  // shortcutSlide
  var shortcutSlide = function() {
    $('.shortcut_dropdown_btn').click(function(){
      if($(this).parent().hasClass('is_open')){
        $(this).parent().removeClass('is_open');
      }else{
        $('.shortcut_dropdown').removeClass('is_open');
        $(this).parent().addClass('is_open');
      }
    });
  }
  shortcutSlide();

});