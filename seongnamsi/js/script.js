// 통합검색 슬라이더
let move = 0
let speed = -1;
const result = true; // result 값이 true일 때 이미지가 슬라이드 된다.

function motion(){
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

// 메인배너 슬라이더
const bannerSlide = new Swiper('.swiper.banner_slide', {
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
const btnPause = document.querySelector('.swiper-button-pause');
const btnPlay = document.querySelector('.swiper-button-play');
btnPause.addEventListener('click',() => console.log('멈춤', bannerSlide.autoplay.stop()));
btnPlay.addEventListener('click',() => console.log('재생', bannerSlide.autoplay.start()));