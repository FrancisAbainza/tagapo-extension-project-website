import { locations } from './data.js';

/* header */
function initializeHeaderScript() {
  const header = document.querySelector('#header');
  const menu = document.querySelector('#menu');
  const close = document.querySelector('#close');
  const nav = document.querySelector('#nav');
  const body = document.querySelector('body');

  menu.addEventListener('click', () => {
    nav.classList.add('open-nav');
  })

  close.addEventListener('click', () => {
    nav.classList.remove('open-nav');
  })

  window.addEventListener('scroll', () => {
    const headerHeight = header.getBoundingClientRect().height;

    if (window.scrollY > headerHeight) {
      body.style.marginTop = headerHeight + 'px';
      header.classList.add('sticky');
    } else {
      body.style.marginTop = '0px';
      header.classList.remove('sticky');
      header.classList.remove('animate-fadein-delayed');
      header.classList.remove('hidden');
    }
  });
}

/* subheader */
function initializeSubheaderScript() {
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
      hour12: true,
    };
    const formatted = now.toLocaleString('en-US', options);
    document.getElementById('datetime').textContent = "Philippine Standard Time: " + formatted;
  }

  setInterval(updateDateTime, 1000);
  updateDateTime();
}

/* history */
function initializeHistoryScript() {
  const carouselLeftBtn = document.querySelector('#carouselLeftBtn');
  const carouselRightBtn = document.querySelector('#carouselRightBtn');
  const carouselContainer = document.querySelector('#carouselContainer');
  let currentPage = 0;

  carouselLeftBtn.addEventListener('click', () => {
    currentPage--;

    /* Make the right button visible */
    carouselRightBtn.style.visibility = 'visible';

    /* Add translate x to the carousel container to move to the current image */
    carouselContainer.style.transform = `translateX(calc(-${100 * currentPage}% - ${12 * currentPage}px))`;

    if (currentPage === 0) {
      carouselLeftBtn.style.visibility = 'hidden';
    }
  });

  carouselRightBtn.addEventListener('click', () => {
    currentPage++;

    /* Make the left button visible */
    carouselLeftBtn.style.visibility = 'visible';

    /* Add translate x to the carousel container to move to the current image */
    carouselContainer.style.transform = `translateX(calc(-${100 * currentPage}% - ${12 * currentPage}px))`;

    if (currentPage === 5) {
      carouselRightBtn.style.visibility = 'hidden';
    }
  });
}

/* map */
async function initializeMapScript() {
  function renderMap() {
    const mapCarouselContainer = document.querySelector('#mapCarouselContainer');
    const mapContainer = document.querySelector('#mapContainer');
    locations.forEach((location) => {
      /* Render the images in the carousel */
      mapCarouselContainer.innerHTML += `<img src="${location.image.src}" alt="${location.image.alt}">`

      /* Render the markers in the map */
      mapContainer.innerHTML += `
      <button data-marker class="marker ${location.marker.class}" id="${location.marker.id}" style="top: ${location.marker.coordinates.top}; left: ${location.marker.coordinates.left};">
        <svg viewBox="0 0 26 37" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_1616_1787" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="26"
            height="37">
            <path d="M13 36C13 36 1 22 1 13C1 6.38 6.38 1 13 1C19.62 1 25 6.38 25 13C25 22 13 36 13 36Z" fill="white"
              stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M13 18C15.7614 18 18 15.7614 18 13C18 10.2386 15.7614 8 13 8C10.2386 8 8 10.2386 8 13C8 15.7614 10.2386 18 13 18Z"
              fill="black" />
          </mask>
          <g mask="url(#mask0_1616_1787)">
            <path d="M37 -5H-11V43H37V-5Z" fill="#EB0000" />
          </g>
        </svg>
        <p>${location.marker.text}</p>
      </button>
    `
    });
  }

  renderMap();

  const mapCarouselLeftBtn = document.querySelector('#mapCarouselLeftBtn');
  const mapCarouselRightBtn = document.querySelector('#mapCarouselRightBtn');
  const mapCarouselContainer = document.querySelector('#mapCarouselContainer');
  const mapCardTitle = document.querySelector('#mapCardTitle');
  const mapCardPurok = document.querySelector('#mapCardPurok');
  const markers = document.querySelectorAll('[data-marker]');
  let currentPage = 0;

  mapCarouselLeftBtn.addEventListener('click', () => {
    /* Remove active-location class from previous marker  */
    const previousLocationMarker = document.querySelector(`#${locations[currentPage].marker.id}`);
    previousLocationMarker.classList.remove("active-location");

    currentPage--;

    /* Add active-location class to current marker  */
    const currentLocationMarker = document.querySelector(`#${locations[currentPage].marker.id}`);
    currentLocationMarker.classList.add("active-location");

    /* Add translate x to the carousel container to move to the current image */
    mapCarouselContainer.style.transform = `translateX(calc(-${100 * currentPage}% - ${12 * currentPage}px))`;

    /* Update card labels */
    mapCardTitle.textContent = locations[currentPage].name;
    mapCardPurok.textContent = locations[currentPage].purok;

    /* Make the right button visible */
    mapCarouselRightBtn.style.visibility = 'visible';

    if (currentPage === 0) {
      mapCarouselLeftBtn.style.visibility = 'hidden';
    }
  });

  mapCarouselRightBtn.addEventListener('click', () => {
    /* Remove active-location class from previous marker  */
    const previousLocationMarker = document.querySelector(`#${locations[currentPage].marker.id}`);
    previousLocationMarker.classList.remove("active-location");

    currentPage++;

    /* Add active-location class to current marker  */
    const currentLocationMarker = document.querySelector(`#${locations[currentPage].marker.id}`);
    currentLocationMarker.classList.add("active-location");

    /* Add translate x to the carousel container to move to the current image */
    mapCarouselContainer.style.transform = `translateX(calc(-${100 * currentPage}% - ${12 * currentPage}px))`;

    /* Update card labels */
    mapCardTitle.textContent = locations[currentPage].name;
    mapCardPurok.textContent = locations[currentPage].purok;

    /* Make the left button visible */
    mapCarouselLeftBtn.style.visibility = 'visible';

    if (currentPage === locations.length - 1) {
      mapCarouselRightBtn.style.visibility = 'hidden';
    }
  });

  markers.forEach((marker, index) => {
    marker.addEventListener('click', () => {
      let previousLocationMarker = document.querySelector(`#${locations[currentPage].marker.id}`);
      previousLocationMarker.classList.remove("active-location");

      /* Set current page to the selected marker's index */
      currentPage = index;

      /* Add active-location class to current marker */
      marker.classList.add("active-location");

      /* Add translate x to the carousel container to move to the current image */
      mapCarouselContainer.style.transform = `translateX(calc(-${100 * currentPage}% - ${12 * currentPage}px))`;

      /* Update card labels */
      mapCardTitle.textContent = locations[currentPage].name;
      mapCardPurok.textContent = locations[currentPage].purok;

      /* Make both left and right buttons visible */
      mapCarouselLeftBtn.style.visibility = 'visible';
      mapCarouselRightBtn.style.visibility = 'visible';

      /* Conditionally set the visibility of the buttons based on the following conditions */
      if (currentPage === 0) {
        mapCarouselLeftBtn.style.visibility = 'hidden';
      }

      if (currentPage === locations.length - 1) {
        mapCarouselRightBtn.style.visibility = 'hidden';
      }
    })
  });
}

async function initializeIdApplicationScript() {
  const idApplicationStep1 = document.querySelector('#idApplicationStep1');
  const idApplicationStep2 = document.querySelector('#idApplicationStep2');
  const idApplicationStep3 = document.querySelector('#idApplicationStep3');
  const dotsOverlay1 = document.querySelector('#dotsOverlay1');
  const dotsOverlay2 = document.querySelector('#dotsOverlay2');

  function delay(seconds) {
    return new Promise(resolve => setTimeout(resolve, 1000 * seconds));
  }

  while (true) {
    dotsOverlay2.style.animation = 'unset';
    idApplicationStep1.classList.add('active-step');
    dotsOverlay1.style.animation = 'wipeToRight 4s linear forwards';
    await delay(4);
    idApplicationStep1.classList.remove('active-step');
    idApplicationStep2.classList.add('active-step');
    dotsOverlay1.style.animation = 'unwipeToRight 4s linear forwards';
    dotsOverlay2.style.animation = 'wipeToRight 4s linear forwards';
    await delay(4);
    idApplicationStep2.classList.remove('active-step');
    idApplicationStep3.classList.add('active-step');
    dotsOverlay2.style.animation = 'unwipeToRight 4s linear forwards';
    await delay(4);
    idApplicationStep3.classList.remove('active-step');
  }
}

/* footer */
function initializeFooterScript() {
  const currentYearElement = document.querySelector('#currentYearElement');
  const date = new Date();
  const currentYear = date.getFullYear();

  currentYearElement.textContent = currentYear;
}

/* General */
function initializeIntersectAnimations() {
  const header = document.querySelector('#header');
  const subheader = document.querySelector('#subheader');
  const bannerBg = document.querySelector('#bannerBg');
  const bannerTitle = document.querySelector('#bannerTitle');
  const bannerDesc = document.querySelector('#bannerDesc');
  const bannerBtn = document.querySelector('#bannerBtn');
  const historyBg = document.querySelector('#historyBg');
  const historyCard = document.querySelector('#historyCard');
  const map = document.querySelector('#map');
  const idApplication = document.querySelector('#idApplication');
  const sectors = document.querySelector('#sectors');

  observeElement(header, "animate-fadein-delayed");
  observeElement(subheader, "animate-fadein-delayed");
  observeElement(bannerBg, "animate-movedown-delayed");
  observeElement(bannerTitle, "animate-movedown");
  observeElement(bannerDesc, "animate-fadein-delayed");
  observeElement(bannerBtn, "animate-fadein-delayed");
  observeElement(historyBg, "animate-fadein");
  observeElement(historyCard, "animate-scaleup");
  observeElement(map, "animate-scaleup");
  observeElement(idApplication, "animate-scaleup");
  observeElement(sectors, "animate-scaleup");
}

/* Reusables */
function observeElement(element, className) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(className);
      }
    });
  });

  observer.observe(element);
}

/* Run all sections' script */
initializeHeaderScript();
initializeSubheaderScript();
initializeHistoryScript();
initializeMapScript();
initializeIdApplicationScript();
initializeFooterScript();
initializeIntersectAnimations();