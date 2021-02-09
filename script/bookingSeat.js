// 인원수 선택 시 좌석 수 동일하게 맞춤
$(document).ready(function () {
  var adultNum = $('.adult option:selected').val();
  var adoleNum = $('.adole option:selected').val();
  var seniorNum = $('.senior option:selected').val();

  const maxPpl = adultNum + adoleNum + seniorNum;
  console.log(maxPpl);
});

// 좌석 선택 시 선택좌석란에 추가
