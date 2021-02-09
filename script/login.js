const notScrollClassName = 'no-scroll';
function OnLoginWindow() {
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

const loginData = {
  id: '',
  password: '',
};

function OnLogin() {
  loginData.id = $('#login-id').val();
  loginData.password = $('#login-password').val();
  if (loginData.id.length == 0) {
    alert('아이디를 입력해주세요!');
    return;
  }
  if (loginData.password.length == 0) {
    alert('비밀번호를 입력해주세요!');
    return;
  }

  $.ajax({
    url: '../db/login.php',
    type: 'get',
    data: {
      id: loginData.id,
      password: loginData.password,
    },
    dataType: 'json',
    success: function (response) {
      if (response == null) return;

      // 로그인 성공
      if (response.result == 301) {
        alert('로그인 성공! id: ' + response.resultData);
        location.reload(true);
      }
      // 로그인 실패 - 아이디 없음
      else if (response.result == 302) {
        alert('로그인 실패! 아이디가 존재하지 않습니다!');
      }
      // 로그인 실패 - 비밀번호 틀림
      else if (response.result == 303) {
        alert('로그인 실패! 비밀번호가 잘못 되었습니다!');
      } else {
        console.log(response);
      }
    },
    error: function (request, status, error) {
      alert('서버 연결에 실패하였습니다.(로그인)');
      console.log(request + '\n');
      console.log(status + '\n');
      console.log(error + '\n');
    },
  });
}

function OnLogout() {
  $.ajax({
    url: '../db/loginSession.php',
    type: 'get',
    data: {
      id: 'null',
    },
    dataType: 'json',
    success: function (response) {
      if (response.result == 401) {
        alert('로그아웃!');
        location.reload(true);
      }
    },
    error: function (request, status, error) {
      alert('서버 연결에 실패하였습니다.(로그아웃)');
      console.log(request + '\n');
      console.log(status + '\n');
      console.log(error + '\n');
    },
  });
}

// 각 페이지에서 로그인 체크
function LoginCheck() {
  $.ajax({
    url: '../db/loginSession.php',
    type: 'get',
    dataType: 'text',
    success: function (response) {
      // 로그인 되어있는 아이디가 있는 경우
      if (response.length != 0 && response.length < 50) {
        $('#login').remove();
        $('#signup').remove();
        $('#loginBar')[0].innerHTML +=
          '<li class="li-right"><a href="#none" onclick="OnLogout()">로그아웃</a></li>';
      }
    },
    error: function (request, status, error) {
      alert('서버 연결에 실패하였습니다.(로그인 세션)');
      console.log(request + '\n');
      console.log(status + '\n');
      console.log(error + '\n');
    },
  });
}

LoginCheck();
