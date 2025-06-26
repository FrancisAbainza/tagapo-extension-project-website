/* header */
function initializeHeaderScript() {
  const header = document.querySelector('#header');
  const menu = document.querySelector('#menu');
  const close = document.querySelector('#close');
  const nav = document.querySelector('#nav');
  const body = document.querySelector('body');
  const headerHeight = header.getBoundingClientRect().height;
  const windowWidth = window.innerWidth;

  if (windowWidth >= 483) {
    body.style.marginTop = '114px'
  } else {
    body.style.marginTop = '119px'
  }

  menu.addEventListener('click', () => {
    nav.classList.add('open-nav');
  })

  close.addEventListener('click', () => {
    nav.classList.remove('open-nav');
  })

  window.addEventListener('scroll', () => {
    if (window.scrollY > headerHeight) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
      header.classList.remove('hidden');
    }
  });
}

/* footer */
function initializeFooterScript() {
  const currentYearElement = document.querySelector('#currentYearElement');
  const date = new Date();
  const currentYear = date.getFullYear();

  currentYearElement.textContent = currentYear;
}

initializeHeaderScript();
initializeFooterScript();