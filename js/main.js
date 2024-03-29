var swiper = new Swiper('#wrap', {
  // 좌우버튼 등록
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
  // 페이지네이션 추가
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  },
  loop: true,
  spaceBetween: 50,
  speed: 1100,
  slidesPerView: 'auto', // 지정한 넓이 값으로 적용
  centeredSlides: true, // 현재 활성화 패널을 항상 가로 가운데 배치
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 50,
    slideShadows: false,
    depth: 400, // 3d 요소의 왜곡률
    stretch: -100,  // 주변 패널을 밀어냄, 양수 : 주변 패널을 당김
  },
  autoplay: {
    delay: 2500,
  }
});

const btnStart = document.querySelector('.start-btn');
const btnStop = document.querySelector('.stop-btn');

btnStart.addEventListener('click', (e) => {
  swiper.autoplay.start();
  btnStart.classList.add('on');
  btnStop.classList.remove('on');
});

btnStop.addEventListener('click', (e) => {
  swiper.autoplay.stop();
  btnStop.classList.add('on');
  btnStart.classList.remove('on');
});