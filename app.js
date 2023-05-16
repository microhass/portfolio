const menuIcon = document.querySelector('.menu-icon');
const closeMenuIcon = document.querySelector('.close-menu');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu ul li');

const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.close-popup');
const backgroundBlur = document.querySelector('.background');

menuIcon.addEventListener('click', () => {
  menu.classList.add('show-menu');
  document.body.classList.add('menu-open');
});

closeMenuIcon.addEventListener('click', () => {
  menu.classList.remove('show-menu');
  document.body.classList.remove('menu-open');
});

[...menuLinks].forEach((link) => link.addEventListener('click', () => {
  menu.classList.remove('show-menu');
  document.body.classList.remove('menu-open');
}));

closePopup.addEventListener('click', () => {
  popup.classList.add('hide-popup');
  backgroundBlur.classList.add('hide-popup');
});
