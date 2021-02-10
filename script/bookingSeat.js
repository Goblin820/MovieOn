// 인원수 선택 시 좌석 수 동일하게 맞춤
var sel = document.getElementsByClassName('adult');
function getTotalNumber(sel) {
  var opt;
  for (var i = 0, len = sel.options.length; i < len; i++) {
    opt = sel.options[i];
    if (opt.selected === true) {
      break;
    }
  }
  return opt;
}

var opt = getTotalNumber(sel);

console.log(opt.value);

// 좌석 선택 시 css 추가, 선택좌석란에 추가
const selection = document.getElementById('selection-seat');
selection.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('seat select');
  }
});
