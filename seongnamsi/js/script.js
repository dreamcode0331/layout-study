$(function(){

  var dimmed = $('.dimmed');
  var menuLinkDepth1 = $('.header .gnb > .menu_list > .menu_item > .menu_link');
  var menuListDepthArea = '.header .gnb > .menu_list > .menu_item > .menu_list_depth_area';

  menuLinkDepth1.on('click', function(){
    dimmed.hide();
    dimmed.show();
    $(menuListDepthArea).removeClass('is_show')
    $(this).siblings(menuListDepthArea).addClass('is_show');
    menuLinkDepth1.removeClass('is_show');
    $(this).addClass('is_show');
  });
  menuLinkDepth1.on('mouseenter', function(){
    dimmed.hide();
    dimmed.show();
    $(menuListDepthArea).removeClass('is_show')
    $(this).siblings(menuListDepthArea).addClass('is_show');
    menuLinkDepth1.removeClass('is_show');
    $(this).addClass('is_show');
  });
  $(menuListDepthArea).on('mouseleave', function(){
    dimmed.hide();
    $(this).removeClass('is_show');
    menuLinkDepth1.removeClass('is_show');
  });

  // Swiper
  const swiper = new Swiper('.swiper_slide_horizon', {
    // slidesPerView: "auto",
    // spaceBetween: 10,
    loop: true,
    loopedSlides: 4,
    loopAdditionalSlides : 1,
    // autoplay: {
    //   delay: 5000,
    // },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoHeight : true,
  });
});