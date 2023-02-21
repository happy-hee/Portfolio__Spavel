/**
 * Javascript 를 사용한 script
 * ==========================================================================
 */

/**
 * 모바일 GNB 열기/닫기
 */
const headerGnb = document.querySelector(".header__gnb");
const gnbOpenBtn = document.querySelector(".gnb__open-btn");
const gnbCloseBtn = document.querySelector(".gnb__close-btn");

//사이드메뉴 열기
gnbOpenBtn.addEventListener("click", () => {
  headerGnb.classList.add("gnb--open");
  gnbOpenBtn.style.display = "none";
  gnbCloseBtn.style.display = "block";
});

//사이드메뉴 닫기
gnbCloseBtn.addEventListener("click", () => {
  headerGnb.classList.remove("gnb--open");
  gnbOpenBtn.style.display = "block";
  gnbCloseBtn.style.display = "none";
});

/**
 * GNB 클릭시 해당 섹션으로 이동
 */
const clickToSection = function (navItems) {
  const sections = document.querySelectorAll("section");
  navItems.forEach((item, index) => {
    item.addEventListener("click", (e) => {
      e.preventDefault(); // a 태그의 기본 동작(링크 연결) 방지
      const sectionTop = sections[index].offsetTop - 50;
      window.scroll({ top: sectionTop, behavior: "smooth" });
    });
  });
};

const gnbItems = document.querySelectorAll(".gnb__item");
const footerNavItems = document.querySelectorAll(".footer__nav-item");
// GNB에 섹션 이동
clickToSection(gnbItems);
// Footer 네비게이션에 섹션 이동
clickToSection(footerNavItems);

/**
 * GNB 스크롤 스파이
 */
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const gnbItems = document.querySelectorAll(".gnb__item");

  sections.forEach((section, index) => {
    const top = window.scrollY; //스크롤 위치
    const sectionTop = section.offsetTop - 50; //섹션 상단 스크롤 위치
    const sectionHeight = section.offsetHeight; //섹션 높이값

    gnbItems.forEach((gnbItem) => {
      // 스크롤 위치가 섹션 상단 스크롤 위치보다 크고 && 섹션높이값보다 작을 경우
      if (top >= sectionTop && top < sectionTop + sectionHeight) {
        gnbItem.classList.remove("active");
        // 해당 index 메뉴의 클래스에 active 클래스명을 추가
        gnbItems[index].classList.add("active");
      }
    });
  });
});

/**
 * GNB 스크롤 내릴시 스타일 변경
 */
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 71) {
    document.querySelector(".header").classList.add("scrolled");
  } else {
    document.querySelector(".header").classList.remove("scrolled");
  }
});

/**
 * 랭크 탭 메뉴
 */
const tabItem = document.querySelectorAll(".rank__tab-item");
const tabContent = document.querySelectorAll(".rank__tab-content");

tabItem.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.preventDefault(); // a 태그의 기본 동작(링크 연결) 방지
    tabContent.forEach((content) => {
      content.classList.remove("active");
    });

    tabItem.forEach((content) => {
      content.classList.remove("active");
    });

    tabItem[index].classList.add("active");
    tabContent[index].classList.add("active");
  });
});

/**
 * 아코디언 메뉴
 */
const accordionItems = document.querySelectorAll(".accordion__item");
accordionItems.forEach((accordionItem) => {
  // 클릭시 active
  accordionItem.addEventListener("click", () => {
    accordionItem.classList.toggle("active");
  });

  // 엔터시 active
  accordionItem.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
      accordionItem.classList.toggle("active");
    }
  });
});

/**
 * 스크롤 방향에 따라 탑 버튼 숨기기
 */
const topBtn = document.querySelector(".top-btn");
// 이전 스크롤 위치
let lastScrollY = 0;
// 스크롤 이벤트
window.addEventListener("scroll", (e) => {
  // 현재 스크롤 위치(스크롤을 했을 경우 위치)
  let currentScrollY = window.scrollY;

  // 이전 스크롤 위치가 현재 스크롤 위치보다 작을 경우 (스크롤 DOWN)
  if (lastScrollY < currentScrollY) {
    topBtn.classList.remove("hidden");
    // 이전 스크롤 위치가 현재 스크롤 위치보다 클 경우 (스크롤 UP)
  } else {
    topBtn.classList.add("hidden");
  }

  // 이전 스크롤 위치에 현재 스크롤 위치 저장
  lastScrollY = currentScrollY;
});

/**
 * Reserve 예약 버튼 클릭시 얼럿
 */
const reserveBtn = document.querySelector("#reserveBtn");
reserveBtn.addEventListener("click", () => {
  alert("Successfully reserved!");
});

/**
 * Contact 전송하기
 */
const submitContact = () => {
  alert("Successfully sent!");
};

/**
 * 슬라이드
 * https://swiperjs.com/
 */
// Planet 슬라이드 적용
const planetSlide = document.querySelector("#planetSlide");
const planetSwiper = new Swiper(planetSlide, {
  slidesPerView: "auto",
  loop: false,
  clickable: true,
  allowTouchMove: true,
  watchOverflow: true, //마우스 클릭으로 슬라이드 이동
  // 네비게이션
  navigation: {
    prevEl: "#planetPrev",
    nextEl: "#planetNext",
  },
  // 스크롤바
  scrollbar: {
    el: "#planetScrollbar",
    hide: true,
  },
  // 접근성
  a11y: {
    enabled: true,
    nextSlideMessage: "Next Slide",
    prevSlideMessage: "Prev Slide",
    slideLabelMessage: "{{index}} / {{slidesLength}}",
  },
  spaceBetween: 14,
  // 반응형 breakpoints
  breakpoints: {
    // when window width is >= 768px
    768: {
      spaceBetween: 30,
    },
    // when window width is >= 1024px
    1024: {
      spaceBetween: 40,
    },
  },
});

//News 슬라이드 적용
const newsSlide = document.querySelector("#newsSlide");
const newsSwiper = new Swiper(newsSlide, {
  slidesPerView: "auto",
  loop: false,
  clickable: true,
  allowTouchMove: true,
  spaceBetween: 14,
  // 네비게이션
  navigation: {
    prevEl: "#newsPrev",
    nextEl: "#newsNext",
  },
  // 스크롤바
  scrollbar: {
    el: "#newsScrollbar",
    hide: true,
  },
  // 접근성
  a11y: {
    enabled: true,
    nextSlideMessage: "Next Slide",
    prevSlideMessage: "Prev Slide",
    slideLabelMessage: "{{index}} / {{slidesLength}}",
  },
  breakpoints: {
    1024: {
      slidesPerView: 3, //브라우저가 1024보다 클 때
    },
  },
});

/**
 * 예약 캘린더
 * https://mymth.github.io/vanillajs-datepicker/#/?id=using-from-browser
 */

const checkinInput = document.querySelector('input[id="checkinInput"]');
const checkoutInput = document.querySelector('input[id="checkoutInput"]');
//input 에 기본적으로 오늘 날짜 표시
checkinInput.value = new Date();
checkoutInput.value = new Date();

// 캘린더 옵션
const datePickerOption = {
  language: "en", //언어
  autohide: true, //날짜 선택 후 캘린더 숨김 여부
  format: "yyyy-mm-dd", //날짜 포맷
  todayHighlight: true, //오늘 날짜 하이라이트
  minDate: "today", // 선택 가능한 최소 날짜
  maxDate: "2050/12/31", //선택 가능한 최대 날짜
  beforeShowDay(date) {
    if (date.getMonth() == new Date().getMonth()) {
      switch (date.getDate()) {
        case 4:
          return {
            content: '<span data-tooltip title="Example tooltip">4</span>',
            classes: "background-warning",
          };
        case 8:
          return false;
        case 12:
          return "text-success";
      }
    }
  },
};

const checkinDatepicker = new Datepicker(checkinInput, datePickerOption);
const checkoutDatepicker = new Datepicker(checkoutInput, datePickerOption);

/**
 * 구글 지도
 */
window.initMap = () => {
  // 지도 위치
  const korea = { lat: 37.56, lng: 127 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: korea,
  });
  // 마커
  const marker = new google.maps.Marker({
    position: korea,
    map: map,
  });
};

/**
 * 스크롤 애니메이션 효과
 * https://michalsnik.github.io/aos/
 */
AOS.init({
  offset: 0, // 트리거 포인트 offset (px)
  delay: 0, // 딜레이 (0 ~ 3000)
  duration: 800, // 시간
});
