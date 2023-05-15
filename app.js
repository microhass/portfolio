console.log('hello');
const menuIcon = document.querySelector('.menu-icon');
const closeMenuIcon = document.querySelector('.close-menu');
const menu = document.querySelector('.menu');
menuIcon.addEventListener('click', () => {
  menu.classList.add('show-menu');
  document.body.classList.add('menu-open');
});
closeMenuIcon.addEventListener('click', () => {
  menu.classList.remove('show-menu');
  document.body.classList.remove('menu-open');
});
