var movieTempArray = [];
var movieName = [];
var datenow = new Date();
// console.log(plusZero(datenow.getHours()-9));

console.log(movieAll[0].available[0].info[0].duration);
console.log(movieAll.length);
console.log(movieAll[0].available.length);
console.log(movieAll[0].available[0].info.length);

function plusZero(hour) {
  if(hour < 10) {
     return "0"+hour;
  }
  else {
    return hour;
  }
}

// movie list toggle
$(document).ready(function () {
  $('#movie-list')
    .children()
    .click(function (e) {
      if ($(this).css('color') == 'rgb(0, 0, 0)') {
        $(this).css('background-color', 'rgb(66, 66, 66)');
        $(this).css('color', 'rgb(255, 255, 255)');
        var name = $(e.target).text();
        movieName.push(name);
        if (movieName.length > 3) {
          alert('최대 3개의 영화까지 선택 가능합니다.');
          movieName.pop();
        }
        localStorage.setItem('selectedName', movieName);
      } else if ($(this).css('color') == 'rgb(255, 255, 255)') {
        $(this).css('background-color', 'rgb(217, 226, 225)');
        $(this).css('color', 'rgb(0, 0, 0)');
        // localStorage.removeItem('selectedName');
        var names = localStorage.getItem('selectedName');
      }
    });
});

// theater list toggle
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

// timeline list toggle
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

// function clickEffect(e) {
//   $(e)
//     .children()
//     .click(function () {
//       if ($(this).css('color') == 'rgb(0, 0, 0)') {
//         $(this).css('background-color', 'rgb(66, 66, 66)');
//         $(this).css('color', 'rgb(255, 255, 255)');
//       } else if ($(this).css('color') == 'rgb(255, 255, 255)') {
//         $(this).css('background-color', 'rgb(217, 226, 225)');
//         $(this).css('color', 'rgb(0, 0, 0)');
//       }
//     });
// }

// 캘린더 클릭 토글, 날짜 선택시 캘린더 navbar 조정
var MAX_DATE = '31-May-2021';
$(function () {
  $('.btn-calendar')
    .datepicker({
      dateFormat: 'dd-MM-yy',
      minDate: 0,
      maxDate: MAX_DATE,
      onSelect: function (date) {
        alert(date + '를 선택하였습니다.'), $(this).hide();
        console.log(date.substring(0, 2));
        // console.log($(this).date.getDate());
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

createMovieList(movieArray);
createTheaterList(theaterArray);

// 영화 목록 생성 함수
function createMovieList(data) {
  for (let i = 0; i < movieAll.length; i++) {
    var $movieList = $('#movie-list');
    var lists = '<li>' + data[i].name + '</li>';
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
  switch ($theaterSelected) {
    case '서울':
      $('.theater-list-small').empty();
      for (let i = 0; i < theaterAll[0].nameSpecific.length; i++) {
        var $theaterListSmall = $('.theater-list-small');
        var lists =
          '<li onclick="selected()">' + theaterAll[0].nameSpecific[i] + '</li>';
        $theaterListSmall.append(lists);
      }
      break;
    case '경기':
      $('.theater-list-small').empty();
      for (let i = 0; i < theaterAll[1].nameSpecific.length; i++) {
        var $theaterListSmall = $('.theater-list-small');
        var lists = '<li>' + theaterAll[1].nameSpecific[i] + '</li>';
        $theaterListSmall.append(lists);
      }
      break;
    case '인천':
      $('.theater-list-small').empty();
      for (let i = 0; i < theaterAll[2].nameSpecific.length; i++) {
        var $theaterListSmall = $('.theater-list-small');
        var lists = '<li>' + theaterAll[2].nameSpecific[i] + '</li>';
        $theaterListSmall.append(lists);
      }
      break;
  }
});

// 극장 소분류 선택
$('.theater-list-small').click(function(e) {
  var $selectedTheater = $(e.target).text();
  localStorage.setItem('selectedLocation', $selectedTheater);
})


/*

<ul id="time-list">
  <li>
    <div class="time-duration">17:30~19:35</div>
    <div class="time-title">세 자매 l 2D</div>
    <div class="time-info">동대문<br />8관<br />82/152</div>
  </li>
</ul> 

*/


// 타임라인 생성 (영화시간, 영화이름, {세부장소, 관, 좌석현황})
function createTimeline(data) {
  var $timeline = $('#time-list');
  var info = {
    duration: data.duration,
  }
  const movieName = localStorage.getItem('selectedName');
  const theaterName = localStorage.getItem('selectedLocation');
  movieTimelines = [];
  movieTimeline = [];
  for(let i = 0; i < movieAll.length; i++) {
    for(let j = 0; j < movieAll[i].available.length; j++) {
      for(let k = 0; k < movieAll[i].available[j].info.length; k++) {
        if(theaterName == movieAll[i][j][k]) {
          
        }
      }
    }
  }
}
