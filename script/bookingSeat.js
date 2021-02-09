// 인원수 선택 시 좌석 수 동일하게 맞춤
$(document).ready(function () {
  var adultNum = $('.adult option:selected').val();
  var adoleNum = $('.adole option:selected').val();
  var seniorNum = $('.senior option:selected').val();

  const maxPpl = adultNum + adoleNum + seniorNum;
  console.log(maxPpl);
});

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
