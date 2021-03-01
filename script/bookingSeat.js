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
let selectedSeats = [];

// 좌석 선택 시 css 추가, 선택좌석란에 추가
const selection = document.getElementById('selection-seat');
selection.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selecting');
  }
});

$('#selection-seat').click(function (e) {
  const seatName = document.getElementsByClassName('seat');
  // console.log(seatName);
  var $selected = $(e.target);
  const rows = 12,
    cols = 12;
  var seatArray = new Array(rows);
  for (let i = 0; i < seatArray.length; i++) {
    seatArray[i] = new Array(cols);
  }
  console.log('etarget: ' + e.target);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      //   switch(i) {
      //   case 0:
      //     selectedSeats.push('A' + j);
      //     localStorage.setItem('selectedSeat', selectedSeats);
      //     console.log(seatArray[i][j]);
      //     break;
      //   case 1:
      //     seatArray[i][j] = 'B' + seatName[i];
      //     localStorage.setItem('selectedSeat', 'B' + j);
      //     console.log(seatArray[i][j]);
      //     break;
      //   case 2:
      //     seatArray[i][j] = 'C' + seatName[i];
      //     localStorage.setItem('selectedSeat', 'C' + j);
      //     console.log(seatArray[i][j]);
      //     break;
      //   case 3:
      //     seatArray[i][j] = 'D' + seatName[i];
      //     localStorage.setItem('selectedSeat', 'D' + j);
      //     console.log(seatArray[i][j]);
      //     break;
      //   case 4:
      //     seatArray[i][j] = 'E' + seatName[i];
      //     localStorage.setItem('selectedSeat', 'E' + j);
      //     console.log(seatArray[i][j]);
      //     break;
      //   case 5:
      //     seatArray[i][j] = 'F' + seatName[i];
      //     localStorage.setItem('selectedSeat', 'F' + j);
      //     console.log(seatArray[i][j]);
      //     break;
      //   case 6:
      //     seatArray[i][j] = 'G' + seatName[i];
      //     localStorage.setItem('selectedSeat', 'G' + j);
      //     console.log(seatArray[i][j]);
      //     break;
      //   case 7:
      //     seatArray[i][j] = 'H' + seatName[i];
      //     localStorage.setItem('selectedSeat', 'H' + j);
      //     console.log(seatArray[i][j]);
      //     break;
      //   case 8:
      //     seatArray[i][j] = 'I' + seatName[i];
      //     localStorage.setItem('selectedSeat', 'I' + j);
      //     console.log(seatArray[i][j]);
      //     break;
      //   case 9:
      //     seatArray[i][j] = 'J' + seatName[i];
      //     localStorage.setItem('selectedSeat', 'J' + j);
      //     console.log(seatArray[i][j]);
      //     break;
      //   case 10:
      //     seatArray[i][j] = 'K' + seatName[i];
      //     localStorage.setItem('selectedSeat', 'K' + j);
      //     console.log(seatArray[i][j]);
      //     break;
      //   case 11:
      //     seatArray[i][j] = 'L' + seatName[i];
      //     localStorage.setItem('selectedSeat', 'L' + j);
      //     console.log(seatArray[i][j]);
      //     break;
      // }
    }
  }
});
