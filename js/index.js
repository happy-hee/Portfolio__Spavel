/**
 * 예약 캘린더
 * https://mymth.github.io/vanillajs-datepicker/#/?id=using-from-browser
 */

const checkinInput = document.querySelector('input[name="checkinInput"]');
const checkoutInput = document.querySelector('input[name="checkoutInput"]');
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
 * 슬라이드
 * https://swiperjs.com/
 */
// Planet 슬라이드 적용
const planetSlide = document.querySelector(".planetSlide");
const planetSwiper = new Swiper(planetSlide, {
  slidesPerView: "auto",
  loop: false,
  clickable: true,
  allowTouchMove: true,
  // 네비게이션
  navigation: {
    prevEl: ".skip-navigation__btn--prev",
    nextEl: ".skip-navigation__btn--next",
  },
  // 스크롤바
  scrollbar: {
    el: ".slide__scrollbar",
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
const newsSlide = document.querySelector(".newsSlide");
const newsSwiper = new Swiper(newsSlide, {
  slidesPerView: "auto",
  loop: false,
  clickable: true,
  allowTouchMove: true,
  spaceBetween: 14,
  // 스크롤바
  scrollbar: {
    el: ".slide__scrollbar",
    hide: true,
  },
  // 접근성
  a11y: {
    enabled: true,
    nextSlideMessage: "Next Slide",
    prevSlideMessage: "Prev Slide",
    slideLabelMessage: "{{index}} / {{slidesLength}}",
  },
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
const accordionItems = document.querySelectorAll(".accordionItem");
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
 * Contact 전송하기
 */

const submitContact = () => {
  alert("Successfully sent");
};

/**
 * 구글 지도
 */
window.initMap = () => {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
};
