const notScrollClassName = 'no-scroll';
function OnLoginWindow() {
  console.log('이거 머야');
  document.body.classList.add(notScrollClassName);
  LoginAppendFetch();
}
function OffLoginWindow() {
  document.body.classList.remove(notScrollClassName);
  LoginRemove();
}

function LoginAppendFetch() {
  fetch('../html/login.html').then(function (response) {
    response.text().then(function (text) {
      document.body.innerHTML += text;
    });
  });
}
function LoginRemove() {
  const loginRoot = document.getElementById('login-root');
  document.body.removeChild(loginRoot);
}

function MovingPageBySignup() {
  window.location.href = '../html/signup.html';
}

function OnLogin() {
  const loginData = {
    id: $('#login-id').val(),
    password: $('#login-password').val(),
  };

  $.ajax({
    url: '../db/login.php',
    data: loginData,
    dataType: 'json',
    success: function (response) {
      if (response == null) return;

      // 로그인 성공
      if (response.result == 301) {
      }
      // 로그인 실패
      else if (response.result == 302) {
      }
    },
  });
}
