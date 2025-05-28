/* main-header */
const menu = document.querySelector('#menu')
const close = document.querySelector('#close')
const nav = document.querySelector('#nav')

menu.addEventListener('click', () => {
  nav.classList.add('open-nav')
})

close.addEventListener('click', () => {
  nav.classList.remove('open-nav')
})

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