var movieTempArray = [];
var movieNameArray = [];
var datenow = new Date();
var MAX_DATE = '05월31일2021';
// console.log(plusZero(datenow.getHours()-9));
// console.log("Today's date: " + plusZero(datenow.getDate()));
// console.log(movieAll[0].available[0].info[0].duration);

function plusZero(hour) {
  if (hour < 10) {
    return '0' + hour;
  } else {
    return hour;
  }
}

// 영화 리스트 toggle
$(document).ready(function () {
  $('#movie-list')
    .children()
    .click(function (e) {
      if ($(this).css('color') == 'rgb(0, 0, 0)') {
        $(this).css('background-color', 'rgb(66, 66, 66)');
        $(this).css('color', 'rgb(255, 255, 255)');
        var name = $(e.target).text();
        var $nameOthers = $('#movie-list').children().not(e.target);
        $nameOthers.css('background-color', 'rgb(217, 226, 225)');
        $nameOthers.css('color', 'rgb(0, 0, 0)');
        // localStorage에 영화이름 한개 저장
        if (movieNameArray.length == 1) {
          movieNameArray.pop();
          movieNameArray.push(name);
        } else {
          movieNameArray.push(name);
        }
        localStorage.setItem('selectedName', movieNameArray);
      } else if ($(this).css('color') == 'rgb(255, 255, 255)') {
        $(this).css('background-color', 'rgb(217, 226, 225)');
        $(this).css('color', 'rgb(0, 0, 0)');
        movieNameArray.pop(e.target);
        // localStorage.removeItem('selectedName');
        var names = localStorage.getItem('selectedName');
      }
    });
});

// 영화 리스트 toggle
$(document).ready(function () {
  $('.theater-list-big')
    .children()
    .click(function () {
      console.log($(this).css('color'));
      if ($(this).css('color') == 'rgb(0, 0, 0)') {
        $(this).css('background-color', 'rgb(66, 66, 66)');
        $(this).css('color', 'rgb(255, 255, 255)');
      } else if ($(this).css('color') == 'rgb(255, 255, 255)') {
        $(this).css('background-color', 'rgb(217, 226, 225)');
        $(this).css('color', 'rgb(0, 0, 0)');
      }
    });
});
$(document).ready(function () {
  $('.theater-list-small')
    .children()
    .click(function () {
      console.log($(this).css('color'));
      if ($(this).css('color') == 'rgb(0, 0, 0)') {
        $(this).css('background-color', 'rgb(66, 66, 66)');
        $(this).css('color', 'rgb(255, 255, 255)');
      } else if ($(this).css('color') == 'rgb(255, 255, 255)') {
        $(this).css('background-color', 'rgb(217, 226, 225)');
        $(this).css('color', 'rgb(0, 0, 0)');
      }
    });
});

// 종합 인포 toggle
$(document).ready(function () {
  $('#time-list')
    .children()
    .click(function () {
      if ($(this).css('color') == 'rgb(0, 0, 0)') {
        $(this).css('background-color', 'rgb(66, 66, 66)');
        $(this).css('color', 'rgb(255, 255, 255)');
      } else if ($(this).css('color') == 'rgb(255, 255, 255)') {
        $(this).css('background-color', 'rgb(217, 226, 225)');
        $(this).css('color', 'rgb(0, 0, 0)');
      }
    });
});

// 캘린더 클릭 토글, 날짜 선택시 캘린더 navbar 조정
$(function () {
  $('.btn-calendar')
    .datepicker({
      dateFormat: 'mm월dd일(yy년)',
      dayNamesMin: ['월', '화', '수', '목', '금', '토', '일'],
      monthNames: [
        '1월',
        '2월',
        '3월',
        '4월',
        '5월',
        '6월',
        '7월',
        '8월',
        '9월',
        '10월',
        '11월',
        '12월',
      ],
      nextText: '다음달',
      prevText: '이전달',
      minDate: 0,
      maxDate: MAX_DATE,
      onSelect: function (date) {
        let ddInt = parseInt(plusZero(date.substring(3, 5)));
        // 캘린더 navbar 조정
        var $dates = $('.movie-booking-calendar ul');
        const btnPrev =
          '<span id="btn-prev-date"><i class="fas fa-chevron-left"></i></span>';
        const btnNext =
          '<span id="btn-next-date"><i class="fas fa-chevron-right"></i></span>';
        $dates.empty();
        for (let i = 0; i < 9; i++) {
          let lists = '<span>' + ddInt + '일</span>';
          if (i == 0) {
            $dates.append(btnPrev);
          } else if (i == 8) {
            $dates.append(btnNext);
          } else if (i == 1) {
            if (ddInt >= 28) {
              $dates.append('<span id="selected">' + ddInt + '일</span>');
              ddInt = 1;
            } else {
              $dates.append('<span id="selected">' + ddInt + '일</span>');
              ddInt++;
            }
          } else {
            if (ddInt >= 28) {
              $dates.append(lists);
              ddInt = 1;
            } else {
              $dates.append(lists);
              ddInt++;
            }
          }
        }

        // prev, next 버튼 클릭 시 날짜 이동
        const btnPrevCal = $('#btn-prev-date');

        localStorage.setItem('date', date);
        alert(date + '를 선택하였습니다.'), $(this).hide();
      },
    })
    .hide();
  $('#btn-calendar').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('.btn-calendar').toggle();
  });
  $('.btn-calendar').click(function (e) {
    e.stopPropagation();
  });
  $('body').click(function () {
    $('.btn-calendar').hide();
  });
});

/******************* 영화, 극장, 시간 렌더링 ********************/
// 로컬 스토리지에서 데이터(배열) 반환
const movieArray = JSON.parse(localStorage.getItem('movie'));
const theaterArray = JSON.parse(localStorage.getItem('theater'));

/********************* MAIN FUNCTION CALLS *********************/
createMovieList(movieArray);
createTheaterList(theaterArray);
$(document).ready(function () {
  $('.theater-list-small').click(function () {
    // reset
    document.getElementById('time-list').innerHTML = '';
    createTimeline(movieAll);
  });
});
/****************************************************************/

// 영화 목록 생성 함수
function createMovieList(data) {
  for (let i = 0; i < movieAll.length; i++) {
    var $movieList = $('#movie-list');
    var lists = '<li>' + data[i].movieNames + '</li>';
    $movieList.append(lists);
  }
}

// 극장 대분류 생성 함수
function createTheaterList(data) {
  for (let i = 0; i < theaterAll.length; i++) {
    var $theaterListBig = $('.theater-list-big');
    var lists = '<li>' + data[i].name + '</li>';
    $theaterListBig.append(lists);
  }
}

// 극장 소분류 생성 (극장 대분류 클릭 시)
$('.theater-list-big').click(function (e) {
  var $theaterSelected = $(e.target).text();
  var $theaterOthers = $('.theater-list-big').children().not(e.target);
  switch ($theaterSelected) {
    case '서울':
      $('.theater-list-small').empty();
      for (let i = 0; i < theaterAll[0].nameSpecific.length; i++) {
        var $theaterListSmall = $('.theater-list-small');
        var lists = '<li>' + theaterAll[0].nameSpecific[i] + '</li>';
        $theaterListSmall.append(lists);
      }
      $theaterOthers.css('background-color', 'rgb(217, 226, 225)');
      $theaterOthers.css('color', 'rgb(0, 0, 0)');
      break;
    case '경기':
      $('.theater-list-small').empty();
      for (let i = 0; i < theaterAll[1].nameSpecific.length; i++) {
        var $theaterListSmall = $('.theater-list-small');
        var lists = '<li>' + theaterAll[1].nameSpecific[i] + '</li>';
        $theaterListSmall.append(lists);
      }
      $theaterOthers.css('background-color', 'rgb(217, 226, 225)');
      $theaterOthers.css('color', 'rgb(0, 0, 0)');
      break;
    case '인천':
      $('.theater-list-small').empty();
      for (let i = 0; i < theaterAll[2].nameSpecific.length; i++) {
        var $theaterListSmall = $('.theater-list-small');
        var lists = '<li>' + theaterAll[2].nameSpecific[i] + '</li>';
        $theaterListSmall.append(lists);
      }
      $theaterOthers.css('background-color', 'rgb(217, 226, 225)');
      $theaterOthers.css('color', 'rgb(0, 0, 0)');
      break;
  }
});

// 극장 소분류 선택
$('.theater-list-small').click(function (e) {
  var $selectedTheater = $(e.target).text();
  var $theaterOthers = $('.theater-list-small').children().not(e.target);
  localStorage.setItem('selectedLocation', $selectedTheater);
  // $('.theater-list-small').not('#selected').preventDefault();
  if ($(e.target).css('color') == 'rgb(0, 0, 0)') {
    $(e.target).css('background-color', 'rgb(66, 66, 66)');
    $(e.target).css('color', 'rgb(255, 255, 255)');
  } else if ($(e.target).css('color') == 'rgb(255, 255, 255)') {
    $(e.target).css('background-color', 'rgb(217, 226, 225)');
    $(e.target).css('color', 'rgb(0, 0, 0)');
  }
  $theaterOthers.css('background-color', 'rgb(217, 226, 225)');
  $theaterOthers.css('color', 'rgb(0, 0, 0)');
});

// 타임라인 생성 (영화시간, 영화이름, {세부장소, 관, 좌석현황})
let tempTime, tempTitle, tempInfo;
function createTimeline(data) {
  var $timeline = $('#time-list');
  const movieName = localStorage.getItem('selectedName');
  const theaterName = localStorage.getItem('selectedLocation');
  for (let i = 0; i < data.length; i++) {
    var movieFound = false;
    var theaterFound = false;
    for (let j = 0; j < data[i].available.length; j++) {
      let localIndex = 0;
      for (let k = 0; k < data[i].available[j].info.length; k++) {
        if (
          movieName == data[i].movieNames &&
          theaterName == data[i].available[j].name
        ) {
          console.log(movieName, data[i].movieNames);
          var selectedMovieName = data[i].movieNames;
          // console.log(selectedMovieName);
          if (movieName == data[i].movieNames) {
            movieFound = true;
          }

          var selectedTheaterName = data[i].available[j].name;
          // console.log(selectedTheaterName);
          if (theaterName == data[i].available[j].name) {
            theaterFound = true;
          }

          var movieDuration = data[i].available[j].info[k].duration;
          var movieDurationSub = data[i].available[j].info[k].duration.substr(
            0,
            2
          );
          var movieSection = data[i].available[j].info[k].section;
          var seatAvail = data[i].available[j].info[k].seatAvail;
          var seatMax = data[i].available[j].info[k].seatMax;
          // console.log(movieDuration, movieSection, seatAvail, seatMax);
          if (plusZero(datenow) > movieDurationSub) {
            if (movieFound == true && theaterFound == true) {
              var lists =
                '<li id="selectedInfo"> <div class="time-duration">' +
                movieDuration +
                '</div><div class="time-title">' +
                selectedMovieName +
                '</div><div class="time-info">' +
                selectedTheaterName +
                '<br />' +
                movieSection +
                '<br />' +
                seatAvail +
                '/' +
                seatMax +
                '</div> </li>';

              /**
               * <li id="selectedInfo">
               *  <div class="time-duration">
               *    10:00~12:07
               *  </div>
               *  <div class="time-title">
               *    극장판 귀멸의 칼날: 무한열차편
               *  </div>
               *  <div class="time-info">
               *    강남  <br />
               *    4관  <br />
               *    잔여석 / 최대석
               *  </div>
               * </li>
               *
               */

              $timeline.append(lists);
            }
            localStorage.setItem(
              'selectedDuration(' + localIndex + ')',
              movieDuration
            );
            localStorage.setItem(
              'selectedMovieSection(' + localIndex + ')',
              movieSection
            );
            localStorage.setItem(
              'selectedSeatAvail(' + localIndex + ')',
              seatAvail
            );
            localStorage.setItem(
              'selectedSeatMax(' + localIndex + ')',
              seatMax
            );
            localIndex++;
          }
        }
      }
    }
  }
}

// 최종인포 선택
$(document).ready(function () {
  $('#time-list').click(function (e) {
    if (e.target.classList.contains('selectedInfo')) {
      e.target.classList.toggle('selected');
    } else if (
      e.target.classList.contains('time-duration') ||
      e.target.classList.contains('time-title') ||
      e.target.classList.contains('time-info')
    ) {
      e.target.parentElement.classList.toggle('selected');
      let currentSelectedInfo = $('#selectedInfo.selected').innerHTML;
      console.log(currentSelectedInfo);
    }
  });
});

// 좌석선택 클릭 시 영화 정보 저장, 영화 미선택 시 alert
$(document).ready(function () {
  $('.btn-confirm').click(function () {
    alert(localIndex);
  });
});
