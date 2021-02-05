$(document).on('click', '.toggleBG', function () {
  var toggleBG = $(this);
  var toggleFG = $(this).find('.toggleFG');
  var left = toggleFG.css('left');
  if (left == '30px') {
    toggleBG.css('background', '#CCCCCC');
    toggleActionStart(toggleFG, 'TO_LEFT');
  } else if (left == '0px') {
    toggleBG.css('background', 'red');
    toggleActionStart(toggleFG, 'TO_RIGHT');
  }
});

// 토글 버튼 이동
function toggleActionStart(toggleBtn, LR) {
  var intervalID = setInterval(function () {
    var left = parseInt(toggleBtn.css('left'));
    left += LR == 'TO_RIGHT' ? 5 : -5;
    if (left >= 0 && left <= 30) {
      left += 'px';
      toggleBtn.css('left', left);
    }
  }, 10);
  setTimeout(function () {
    clearInterval(intervalID);
  }, 201);
}

$(document).on('click', '.btn-movie-img-hover-booking', function(){
  $(this).parent().setAttribute('href', "./bookingSeat.html");
});