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
