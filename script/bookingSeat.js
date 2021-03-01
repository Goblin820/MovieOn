$(document).ready(function () {
  const movieName = localStorage.getItem('selectedName');
  $('#movie-name').text(movieName);

  const location = localStorage.getItem('selectedLocation');
  const date = localStorage.getItem('date');
  const time = localStorage.getItem('selectedTime');
  const movieInfo = `${location}<br> ${date}<br> ${time}`;
  $('#review-desc').html(movieInfo);

  // let $selectionSeat = $('#selection-seat');
  // $selectionSeat.children().click(function (e) {
  //   console.log(e.target);
  // });
  createSeats();
  movieNumberSelectChangeEvent();
  seatClickEvent();
  btnResultEvent();
});

function createSeats() {
  const rowMax = 12;
  const columnMax = 12;
  let charCodeNum = 65;
  let charCodeString = '';
  let parentClassName = '';
  const $selectionSeat = $('#selection-seat');

  let parentElement = null;
  let firstChildElement = null;
  let childElement = null;
  let randNum = 0;
  for (let i = 0; i < columnMax; ++i) {
    charCodeString = String.fromCharCode(charCodeNum++);

    if (i % 2 == 1) parentClassName = 'row-odd';
    else parentClassName = 'row-even';

    parentElement = document.createElement('div');
    parentElement.classList.add(parentClassName);

    firstChildElement = document.createElement('div');
    firstChildElement.classList.add('seat-num');
    firstChildElement.innerText = charCodeString;

    parentElement.appendChild(firstChildElement);

    for (let k = 0; k < rowMax; k++) {
      childElement = document.createElement('div');
      childElement.classList.add('seat');
      childElement.innerText = `${charCodeString}-${k}`;

      randNum = Math.round(Math.random() * 100 + 1);
      if (randNum % 5 == 0) {
        childElement.classList.add('occupied');
      }
      if (parentClassName == 'row-odd' && k % 2 == 1) {
        childElement.classList.add('none-seat');
      } else if (parentClassName == 'row-even' && k % 2 == 0) {
        childElement.classList.add('none-seat');
      }
      parentElement.appendChild(childElement);
    }

    $selectionSeat.append(parentElement);
  }
}

const targetStateObj = {
  array: [],
  max: 0,
};

function movieNumberSelectChangeEvent() {
  const $movieSelect = $('#movie');

  $movieSelect.change(function (e) {
    targetStateObj.max = $movieSelect.val();
    for (let i = 0; i < targetStateObj.array.length; i++) {
      if (targetStateObj.array[i]) {
        targetStateObj.array[i].classList.remove('selecting');
      }
    }
    targetStateObj.array = [];
    createSelectedSeatTable();
  });
}
function seatClickEvent() {
  $('#selection-seat')
    .children()
    .click(function (e) {
      if (e.target.classList.contains('row-even')) return;
      if (e.target.classList.contains('row-odd')) return;
      if (e.target.classList.contains('occupied')) return;
      if (e.target.classList.contains('none-seat')) return;

      targetStateObj.max = $('#movie').val();
      if (targetStateObj.max == 0) return;

      if (e.target.classList.contains('selecting') == true) {
        const findIndex = targetStateObj.array.indexOf(e.target);
        if (findIndex != -1) {
          targetStateObj.array[findIndex] = null;
          e.target.classList.remove('selecting');
        }
      } else {
        let isChanged = false;
        const arrlength = targetStateObj.array.length;
        for (let i = 0; i < arrlength; i++) {
          if (targetStateObj.array[i] == null) {
            e.target.classList.add('selecting');
            targetStateObj.array[i] = e.target;
            isChanged = true;
            break;
          }
        }
        if (isChanged == false && arrlength < targetStateObj.max) {
          e.target.classList.add('selecting');
          targetStateObj.array.push(e.target);
        }
      }
      createSelectedSeatTable();
    });
}

function createSelectedSeatTable() {
  const selectedArray = [];

  for (let i = 1; i < 5; i++) {
    const selectedElement = $(`#selected-seat-table-${i}`);
    selectedArray.push(selectedElement);
    selectedElement.text('');
  }

  for (let i = 0; i < targetStateObj.array.length; i++) {
    if (targetStateObj.array[i] != null)
      selectedArray[i].text(targetStateObj.array[i].innerText);
  }
}

function btnResultEvent() {
  const $btnResult = $('#btn-next');
  $btnResult.click(function (e) {
    let seatResult = '';

    for (let i = 1; i < 5; i++) {
      const selectedElement = $(`#selected-seat-table-${i}`);
      const text = selectedElement.text();
      if (1 < text.length) {
        if (seatResult != '') seatResult += ', ' + text;
        else seatResult += text;
      }
    }
    if (seatResult == '') {
      alert('좌석을 선택해주세요!');
      return;
    }

    const movieName = localStorage.getItem('selectedName');
    const location = localStorage.getItem('selectedLocation');
    const date = localStorage.getItem('date');
    const time = localStorage.getItem('selectedTime');

    let resultMessage = `예매 성공! 
    영화: ${movieName}
    장소: ${location}
    날짜: ${date}
    시간: ${time}
    좌석: ${seatResult}`;

    localStorage.setItem('selectedSeat', seatResult);

    alert(resultMessage);
    document.location.replace('../html/index.html');
  });
}

/* ------------------------- 과거 코드 ----------------------- //


// 인원수 선택 시 좌석 수 동일하게 맞춤
// var sel = document.getElementsByClassName('adult');
// function getTotalNumber(sel) {
//   var opt;
//   for (var i = 0, len = sel.options.length; i < len; i++) {
//     opt = sel.options[i];
//     if (opt.selected === true) {
//       break;
//     }
//   }
//   return opt;
// }

// var opt = getTotalNumber(sel);

// console.log(opt.value);
// let selectedSeats = [];

// 좌석 선택 시 css 추가, 선택좌석란에 추가
// const selection = document.getElementById('selection-seat');
// selection.addEventListener('click', (e) => {
//   if (
//     e.target.classList.contains('seat') &&
//     !e.target.classList.contains('occupied')
//   ) {
//     e.target.classList.toggle('selecting');
//   }
// });

// $('#selection-seat').click(function (e) {
//   const seatName = document.getElementsByClassName('seat');
//   console.log(seatName);
//   var $selected = $(e.target);
//   const rows = 12,
//     cols = 12;
//   var seatArray = new Array(rows);
//   for (let i = 0; i < seatArray.length; i++) {
//     seatArray[i] = new Array(cols);
//   }
//   console.log('etarget: ' + e.target);
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       //   switch(i) {
//       //   case 0:
//       //     selectedSeats.push('A' + j);
//       //     localStorage.setItem('selectedSeat', selectedSeats);
//       //     console.log(seatArray[i][j]);
//       //     break;
//       //   case 1:
//       //     seatArray[i][j] = 'B' + seatName[i];
//       //     localStorage.setItem('selectedSeat', 'B' + j);
//       //     console.log(seatArray[i][j]);
//       //     break;
//       //   case 2:
//       //     seatArray[i][j] = 'C' + seatName[i];
//       //     localStorage.setItem('selectedSeat', 'C' + j);
//       //     console.log(seatArray[i][j]);
//       //     break;
//       //   case 3:
//       //     seatArray[i][j] = 'D' + seatName[i];
//       //     localStorage.setItem('selectedSeat', 'D' + j);
//       //     console.log(seatArray[i][j]);
//       //     break;
//       //   case 4:
//       //     seatArray[i][j] = 'E' + seatName[i];
//       //     localStorage.setItem('selectedSeat', 'E' + j);
//       //     console.log(seatArray[i][j]);
//       //     break;
//       //   case 5:
//       //     seatArray[i][j] = 'F' + seatName[i];
//       //     localStorage.setItem('selectedSeat', 'F' + j);
//       //     console.log(seatArray[i][j]);
//       //     break;
//       //   case 6:
//       //     seatArray[i][j] = 'G' + seatName[i];
//       //     localStorage.setItem('selectedSeat', 'G' + j);
//       //     console.log(seatArray[i][j]);
//       //     break;
//       //   case 7:
//       //     seatArray[i][j] = 'H' + seatName[i];
//       //     localStorage.setItem('selectedSeat', 'H' + j);
//       //     console.log(seatArray[i][j]);
//       //     break;
//       //   case 8:
//       //     seatArray[i][j] = 'I' + seatName[i];
//       //     localStorage.setItem('selectedSeat', 'I' + j);
//       //     console.log(seatArray[i][j]);
//       //     break;
//       //   case 9:
//       //     seatArray[i][j] = 'J' + seatName[i];
//       //     localStorage.setItem('selectedSeat', 'J' + j);
//       //     console.log(seatArray[i][j]);
//       //     break;
//       //   case 10:
//       //     seatArray[i][j] = 'K' + seatName[i];
//       //     localStorage.setItem('selectedSeat', 'K' + j);
//       //     console.log(seatArray[i][j]);
//       //     break;
//       //   case 11:
//       //     seatArray[i][j] = 'L' + seatName[i];
//       //     localStorage.setItem('selectedSeat', 'L' + j);
//       //     console.log(seatArray[i][j]);
//       //     break;
//       // }
//     }
//   }
// });

*/
