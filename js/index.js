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
