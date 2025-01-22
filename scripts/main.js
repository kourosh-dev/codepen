const header = document.querySelector('.js-header');
const codepenIcon = document.querySelector('.js-icon-codepen');
const adsImg = document.querySelector('.js-ads');
const btnOpenMenu = document.querySelector('.js-button-open-menu');
const graphicElm = document.querySelector('.js-graphic-btn');
const arrow = document.querySelector('.js-arrow-rotate');

btnOpenMenu.addEventListener('click', () => {
  if (header.style.display === 'block') {
    header.style.display = 'none';
    arrow.style.transform = 'rotate(0)';
    graphicElm.classList.remove('opened-tooltip');
  } else {
    arrow.style.transform = 'rotate(180deg)';
    header.style.display = 'block';
    graphicElm.classList.add('opened-tooltip');
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 830) {
    header.style.display = 'block';
  }
});

