const header = document.querySelector('#header-element');
const burger = document.querySelector('#burger-icon');
const linksToSection = [
  ...document.querySelectorAll('.header .menu__item a'),
  ...document.querySelectorAll('.footer .footer__col--section-links .col-footer__item a')
];

header.classList.add('header--js');
burger.addEventListener('click', () => {
  header.classList.toggle('header-active');
  document.body.classList.toggle('_hidden');
});
linksToSection.forEach(link => {
  const idScrollElement = link.dataset.scrollto;

  link.addEventListener('click', (evt) => {
    evt.preventDefault();
    linkToSectionClickHandler(idScrollElement)
  });
});

function linkToSectionClickHandler(id) {
  const scrollToElement = document.querySelector(`#${id}`);
  const scrollTop = scrollToElement.getBoundingClientRect().top;
  window.scrollBy({
    top: scrollTop,
    behavior: 'smooth'
});
}
