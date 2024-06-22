window.addEventListener('scroll', function () {
  const header = document.getElementById('header');
  const logo = document.getElementById('logo');
  const headerTexts = document.querySelectorAll('.header-text');
  if (window.scrollY > 0) {
    header.classList.remove('header-transparent');
    header.classList.add('header-colored');
    logo.classList.remove('logo-large');
    logo.classList.add('logo-small');
    headerTexts.forEach((text) => text.classList.add('text-black'));
  } else {
    header.classList.remove('header-colored');
    header.classList.add('header-transparent');
    logo.classList.remove('logo-small');
    logo.classList.add('logo-large');
    headerTexts.forEach((text) => text.classList.remove('text-black'));
  }
});
