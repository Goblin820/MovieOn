const nav = document.getElementById('listAndnavList');
const rectTop = nav.getBoundingClientRect().top + window.pageYOffset;

window.addEventListener('scroll', () => {
  console.log(window.pageYOffset);
  console.log('\n' + rectTop);
  if (window.pageYOffset > rectTop) {
    nav.style.position = 'fixed';
    nav.style.top = 0;
  } else {
    nav.style.position = 'static';
    nav.style.top = '';
  }
});
