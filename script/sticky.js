const nav = document.getElementById('listAndnavList');
const rectTop = nav.getBoundingClientRect().top + window.pageYOffset;

window.addEventListener('scroll', () => {
  if (rectTop < window.pageYOffset) {
    nav.style.position = 'fixed';
    nav.style.top = 0;
  } else {
    nav.style.position = 'static';
    nav.style.top = '';
  }
});
