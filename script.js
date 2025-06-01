/* header */
function initializeHeaderScript() {
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
}

initializeHeaderScript();

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

    if (currentPage === 2) {
      carouselRightBtn.style.visibility = 'hidden';
    }
  });
}

initializeHistoryScript();

/* map */
function initializeMapScript() {
  const subdivisions = [
    { id: "#locationVilladeoro", name: "Villa De Oro Subdivision", purok: "Purok 6" },
    { id: "#locationRosaflor", name: "Rosaflor Subdivision", purok: "Purok 7" },
    { id: "#locationRosewood", name: "Rosewood Compound", purok: "Purok 6" },
    { id: "#locationHoward", name: "Howard Compound", purok: "Purok 1" },
    { id: "#locationCataquiz", name: "Cataquiz Compound", purok: "Purok 7" },
    { id: "#locationFairfield", name: "Fairfield Subdivision", purok: "Purok --" },
    { id: "#locationProgressive", name: "Progressive Village Compound", purok: "Purok 4" },
    { id: "#locationAnros", name: "Anros Compound", purok: "Purok --" },
    { id: "#locationRichfield", name: "Richfield Subdivision", purok: "Purok --" },
    { id: "#locationAmihan", name: "Amihan Subdivision", purok: "Purok 3" },
    { id: "#locationTionco", name: "Tionco Compound", purok: "Purok --" },
    { id: "#locationFarmview", name: "Farmview Compound", purok: "Purok 3" },
    { id: "#locationJb", name: "JB Village Compound", purok: "Purok 1" },
    { id: "#locationRosada", name: "Rosada Subdivision", purok: "Purok 3" },
    { id: "#locationZavalla3", name: "Zavalla 3 Compound", purok: "Purok 7" },
    { id: "#locationMarcopolo", name: "Marco Polo Place Subdivision", purok: "Purok 1" },
  ]
  const mapCarouselLeftBtn = document.querySelector('#mapCarouselLeftBtn');
  const mapCarouselRightBtn = document.querySelector('#mapCarouselRightBtn');
  const mapCarouselContainer = document.querySelector('#mapCarouselContainer');
  const mapCardTitle = document.querySelector('#mapCardTitle');
  const mapCardPurok = document.querySelector('#mapCardPurok');
  const markers = document.querySelectorAll('[data-marker]');
  let currentPage = 0;

  mapCarouselLeftBtn.addEventListener('click', () => {
    /* Remove active-location class to previous marker  */
    let currentLocationId = subdivisions[currentPage].id;
    let currentLocationMarker = document.querySelector(currentLocationId);
    currentLocationMarker.classList.remove("active-location");

    currentPage--;

    /* Add active-location class to previous marker  */
    currentLocationId = subdivisions[currentPage].id;
    currentLocationMarker = document.querySelector(currentLocationId);
    currentLocationMarker.classList.add("active-location");

    /* Make the right button visible */
    mapCarouselRightBtn.style.visibility = 'visible';

    /* Add translate x to the carousel container to move to the current image */
    mapCarouselContainer.style.transform = `translateX(calc(-${100 * currentPage}% - ${12 * currentPage}px))`;

    /* Update card labels */
    mapCardTitle.textContent = subdivisions[currentPage].name;
    mapCardPurok.textContent = subdivisions[currentPage].purok;

    if (currentPage === 0) {
      mapCarouselLeftBtn.style.visibility = 'hidden';
    }
  });

  mapCarouselRightBtn.addEventListener('click', () => {
    /* Remove active-location class to previous marker  */
    let currentLocationId = subdivisions[currentPage].id;
    let currentLocationMarker = document.querySelector(currentLocationId);
    currentLocationMarker.classList.remove("active-location");

    currentPage++;

    /* Add active-location class to previous marker  */
    currentLocationId = subdivisions[currentPage].id;
    currentLocationMarker = document.querySelector(currentLocationId);
    currentLocationMarker.classList.add("active-location");

    /* Make the left button visible */
    mapCarouselLeftBtn.style.visibility = 'visible';

    /* Add translate x to the carousel container to move to the current image */
    mapCarouselContainer.style.transform = `translateX(calc(-${100 * currentPage}% - ${12 * currentPage}px))`;

    /* Update card labels */
    mapCardTitle.textContent = subdivisions[currentPage].name;
    mapCardPurok.textContent = subdivisions[currentPage].purok;

    if (currentPage === 15) {
      mapCarouselRightBtn.style.visibility = 'hidden';
    }
  });

  markers.forEach((marker, index) => {
    marker.addEventListener('click', () => {
      let currentLocationId = subdivisions[currentPage].id;
      let currentLocationMarker = document.querySelector(currentLocationId);
      currentLocationMarker.classList.remove("active-location");

      currentPage = index;

      /* Add active-location class to previous marker  */
      currentLocationId = subdivisions[currentPage].id;
      currentLocationMarker = document.querySelector(currentLocationId);
      currentLocationMarker.classList.add("active-location");

      /* Make both left and right buttons visible */
      mapCarouselLeftBtn.style.visibility = 'visible';
      mapCarouselRightBtn.style.visibility = 'visible';

      /* Add translate x to the carousel container to move to the current image */
      mapCarouselContainer.style.transform = `translateX(calc(-${100 * currentPage}% - ${12 * currentPage}px))`;

      /* Update card labels */
      mapCardTitle.textContent = subdivisions[currentPage].name;
      mapCardPurok.textContent = subdivisions[currentPage].purok;

      if (currentPage === 0) {
        mapCarouselLeftBtn.style.visibility = 'hidden';
      }

      if (currentPage === 15) {
        mapCarouselRightBtn.style.visibility = 'hidden';
      }
    })
  })
}

initializeMapScript();

/* footer */
function initializeFooterScript() {
  const currentYearElement = document.querySelector('#currentYearElement');
  const date = new Date();
  const currentYear = date.getFullYear();

  currentYearElement.textContent = currentYear;
}

initializeFooterScript();