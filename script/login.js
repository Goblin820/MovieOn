const notScrollClassName = 'no-scroll';
function OnLoginWindow() {
  document.body.classList.add(notScrollClassName);
}
function OffLoginWindow() {
  document.body.classList.remove(notScrollClassName);
}
