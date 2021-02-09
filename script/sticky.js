const nav = document.getElementById('listAndnavList');
const rectTop = nav.getBoundingClientRect().top + window.pageYOffset;
const block = document.getElementById('stickyBlock');

window.addEventListener('scroll', () => {
  if (rectTop < window.pageYOffset) {
    nav.style.position = 'fixed';
    nav.style.animation = 'down 0.5s ease';
    block.style.display = 'block';
  } else {
    nav.style.position = 'sticky';
    nav.style.animation = 'up 1s ease';
    block.style.display = 'none';
  }
});
