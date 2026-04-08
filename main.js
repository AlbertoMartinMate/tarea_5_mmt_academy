import './sass/app.scss'

const hamburger = document.querySelector('.header__hamburger');
const nav = document.querySelector('.header__nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('header__nav--open');
  hamburger.classList.toggle('header__hamburger--open');
});
