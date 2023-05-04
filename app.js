const menuIcon = document.querySelector('.menu-icon');
const closeMenuIcon = document.querySelector('.close-menu');
const menu = document.querySelector('.menu');

closeMenuIcon.addEventListener('click', () => {
  menu.classList.remove('show-menu');
});

menu.addEventListener('click', () => {
  menu.classList.add('show-menu');
  console.log(menu);
});

console.log('hello');
