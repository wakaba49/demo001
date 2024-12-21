const menuBtn = document.querySelector('.menu-btn');
const spMenu = document.querySelector('.sp-menu');
const menuClose = document.querySelector('.menu-close');

menuBtn.addEventListener('click', () => {
  spMenu.style.display = 'block';
});

menuClose.addEventListener('click', () => {
  spMenu.style.display = 'none';
});