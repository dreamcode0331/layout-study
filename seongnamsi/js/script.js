// 통합검색 슬라이더
let move = 0
let speed = -1;
let result = true; // result 값이 true일 때 이미지가 슬라이드 된다.

function motion(){
  console.log('1111111111111111');
  if(result == true){
    move += speed;
    if(move <= -1000) {
      move = 0;
    }
    //오른쪽으로 슬라이드
    if(move > 0){
      move =- 1000;
    }
    document.getElementById("slideBox").style.left = move + "px";
  }
}

window.onload=function(){
  setInterval(motion, 30);
  var cloneSlide = document.getElementById("slideList").cloneNode(true); //복제
  document.getElementById("slideBox").appendChild(cloneSlide);

  
}

// 메인배너 슬라이드
const bannerSlide = new Swiper('.banner_slide', {
  focusableElements: 'input, select, option, textarea, video, label',
  speed: 1200,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// 배너 슬라이드 (row)
const bannerSlideRow = new Swiper('.banner_slide.row', {
  focusableElements: 'input, select, option, textarea, video, label',
  slidesPerView: 3,
  spaceBetween: 25,
  speed: 1500,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// 배너 슬라이드 (col)
const bannerSlideCol = new Swiper('.banner_slide.col', {
  focusableElements: 'input, select, option, textarea, video, label',
  slidesPerView: 1.4,
  spaceBetween: 20,
  speed: 1800,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// 배너 슬라이드 - 재생/정지 버튼
const btnPause = document.querySelector('.swiper-button-pause');
const btnPlay = document.querySelector('.swiper-button-play');
btnPause.addEventListener('click',() => console.log('멈춤', bannerSlide.autoplay.stop(), bannerSlideRow.autoplay.stop(), bannerSlideCol.autoplay.stop()));
btnPlay.addEventListener('click',() => console.log('재생', bannerSlide.autoplay.start(), bannerSlideRow.autoplay.start(), bannerSlideCol.autoplay.start()));

$('.banner_slide_btn.pause').on('click',function(){
  $('.banner_slide_btn.pause').hide().siblings('.banner_slide_btn.play').show();
})
$('.banner_slide_btn.play').on('click',function(){
  $('.banner_slide_btn.play').hide().siblings('.banner_slide_btn.pause').show();
})

// 탭메뉴 type2
function tabType2(){
  const tabServiceMenuBtn = document.querySelectorAll('.tab_area.type2 .tab_menu_btn');
  const tabServiceContItem = document.querySelectorAll('.press_list');

  tabServiceMenuBtn.forEach((item, i) => {
    item.addEventListener('click', () => {
      tabServiceContItem.forEach((content) => {
        content.classList.remove('is_on');
      });

      tabServiceMenuBtn.forEach((content) => {
        content.classList.remove('is_on');
      });

      tabServiceMenuBtn[i].classList.add('is_on');
      tabServiceContItem[i].classList.add('is_on');
    })
  })
}
tabType2();

// 탭메뉴 type3
function tabType3(){
  const tabServiceMenuBtn = document.querySelectorAll('.tab_area.type3 .tab_menu_btn');
  const tabServiceContItem = document.querySelectorAll('.tab_area.type3 .tab_cont_item');

  tabServiceMenuBtn.forEach((item, i) => {
    item.addEventListener('click', () => {
      tabServiceContItem.forEach((content) => {
        content.classList.remove('is_on');
      });

      tabServiceMenuBtn.forEach((content) => {
        content.classList.remove('is_on');
      });

      tabServiceMenuBtn[i].classList.add('is_on');
      tabServiceContItem[i].classList.add('is_on');
    })
  })
}
tabType3();


