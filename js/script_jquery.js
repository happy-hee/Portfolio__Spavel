/**
 * jQuery를 사용한 script
 * ==========================================================================
 */
$(function () {
  /**
   * 모바일 GNB 열기/닫기
   */
  const headerGnb = $(".header__gnb");
  const gnbOpenBtn = $(".gnb__open-btn");
  const gnbCloseBtn = $(".gnb__close-btn");

  //사이드메뉴 열기
  gnbOpenBtn.off().on("click", function () {
    headerGnb.addClass("gnb--open");
    gnbCloseBtn.show();
    gnbOpenBtn.hide();
  });

  //사이드메뉴 닫기
  gnbCloseBtn.off().on("click", function () {
    headerGnb.removeClass("gnb--open");
    gnbCloseBtn.hide();
    gnbOpenBtn.show();
  });

  /**
   * GNB 클릭시 해당 섹션으로 이동
   */
  const clickToSection = function (targetItem) {
    targetItem.off().on("click", function (e) {
      e.preventDefault(); // a 태그의 기본 동작(링크 연결) 방지
      $("html, body").animate(
        { scrollTop: $(this.hash).offset().top - 50 },
        500
      );
    });
  };
  // GNB에 섹션 이동
  clickToSection($(".gnb__link"));
  // Footer 네비게이션에 섹션 이동
  clickToSection($(".footer__nav-link"));

  /**
   * GNB 스크롤 스파이
   */
  $(window).on("scroll", function () {
    $("section").each(function (index) {
      const top = $(window).scrollTop(); //스크롤 위치
      const sectionTop = $(this).offset().top - 51; //섹션 상단 스크롤 위치
      const sectionHeight = $(this).outerHeight();

      const gnbItems = $(".gnb__item");
      gnbItems.each(function () {
        // 스크롤 위치가 섹션 상단 스크롤 위치보다 크고 && 섹션높이값보다 작을 경우
        if (top >= sectionTop && top < sectionTop + sectionHeight) {
          $(this).removeClass("active");
          // 해당 index 메뉴의 클래스에 active 클래스명을 추가
          gnbItems.eq(index).addClass("active");
        }
      });
    });
  });

  /**
   * GNB 스크롤 내릴시 스타일 변경
   */
  $(window).on("scroll", function () {
    if ($(document).scrollTop() > 71) {
      $(".header").addClass("scrolled");
    } else {
      $(".header").removeClass("scrolled");
    }
  });

  /**
   * 랭크 탭 메뉴
   */
  const tabItem = $(".rank__tab-item");
  const tabContent = $(".rank__tab-content");

  tabItem.off().on("click", function (e) {
    e.preventDefault(); // a 태그의 기본 동작(링크 연결) 방지
    tabContent.removeClass("active");
    tabItem.removeClass("active");
    $(this).addClass("active");
    tabContent.eq($(this).index()).addClass("active");
  });

  /**
   * 아코디언 메뉴
   */
  const accordionItems = $(".accordion__item");
  accordionItems.each(function () {
    // 클릭시 active
    $(this)
      .off()
      .on("click", function () {
        $(this).toggleClass("active");
      });

    // 엔터시 active
    $(this).keyup(function (e) {
      if (e.keyCode === 13) {
        $(this).toggleClass("active");
      }
    });
  });

  /**
   * 스크롤 방향에 따라 탑 버튼 숨기기
   */
  const topBtn = $(".top-btn");
  // 이전 스크롤 위치
  let lastScrollY = 0;
  $(window).scroll(function () {
    // 현재 스크롤 위치(스크롤을 했을 경우 위치)
    let currentScrollY = $(this).scrollTop();
    // 이전 스크롤 위치가 현재 스크롤 위치보다 작을 경우 (스크롤 DOWN)
    if (currentScrollY > lastScrollY) {
      topBtn.removeClass("hidden");
      // 이전 스크롤 위치가 현재 스크롤 위치보다 클 경우 (스크롤 UP)
    } else {
      topBtn.addClass("hidden");
    }

    // 이전 스크롤 위치에 현재 스크롤 위치 저장
    lastScrollY = currentScrollY;
  });

  /**
   * Reserve 예약 버튼 클릭시 얼럿
   */
  $("#reserveBtn")
    .off()
    .on("click", function () {
      alert("Successfully reserved!");
    });
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
