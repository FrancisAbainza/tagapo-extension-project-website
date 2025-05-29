/* header */
const menu = document.querySelector('#menu');
const close = document.querySelector('#close');
const nav = document.querySelector('#nav');
const header = document.querySelector('#header')
const body = document.querySelector('body');
const headerHeight = header.getBoundingClientRect().height;

menu.addEventListener('click', () => {
  nav.classList.add('open-nav');
})

close.addEventListener('click', () => {
  nav.classList.remove('open-nav');
})

window.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    body.style.marginTop = headerHeight + 'px';
    header.classList.add('sticky');
  } else {
    body.style.marginTop = '0px';
    header.classList.remove('sticky');
  }
});

/* subheader */
function updateDateTime() {
  const now = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  };
  const formatted = now.toLocaleString('en-US', options);
  document.getElementById('datetime').textContent = "Philippine Standard Time: " + formatted;
}

setInterval(updateDateTime, 1000);
updateDateTime();