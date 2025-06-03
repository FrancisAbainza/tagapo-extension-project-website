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
function initializeMapScript() {
  const subdivisions = [
    { id: "#locationMarcopolo", name: "Marco Polo Place Subdivision", purok: "Purok 1" },
    { id: "#locationZavalla3", name: "Zavalla 3 Compound", purok: "Purok 1" },
    { id: "#locationDonPablo", name: "Don Pablo Compound", purok: "Purok 1" },
    { id: "#locationAlinsod", name: "Alinsod Compound", purok: "Purok 2" },
    { id: "#locationAmarante", name: "Amarante Compound", purok: "Purok 2" },
    { id: "#locationBatitis", name: "Batitis Compound", purok: "Purok 2" },
    { id: "#locationAmihan", name: "Amihan Subdivision", purok: "Purok 3" },
    { id: "#locationFarmview", name: "Farmview Compound", purok: "Purok 3" },
    { id: "#locationRichfield", name: "Richfield Subdivision", purok: "Purok 3" },
    { id: "#locationJb", name: "JB Village Compound", purok: "Purok 3" },
    { id: "#locationFairfield", name: "Fairfield Subdivision", purok: "Purok 3" },
    { id: "#locationRosada", name: "Rosada Subdivision", purok: "Purok 3" },
    { id: "#locationDonaRosina", name: "Doña Rosina Compound", purok: "Purok 3" },
    { id: "#locationProgressive", name: "Progressive Village Compound", purok: "Purok 4" },
    { id: "#locationBuenaRosa10", name: "Buena Rosa 10 Compound", purok: "Purok 4" },
    { id: "#locationCataquiz", name: "Cataquiz Compound", purok: "Purok 4" },
    { id: "#locationAhas", name: "Ahas Compound", purok: "Purok 5" },
    { id: "#locationFlorenceville", name: "Florenceville Comp", purok: "Purok 6" },
    { id: "#locationVilladeoro", name: "Villa De Oro Subdivision", purok: "Purok 6" },
    { id: "#locationRomanville", name: "Romanville Compound", purok: "Purok 6" },
    { id: "#locationRosewood", name: "Rosewood Compound", purok: "Purok 6" },
    { id: "#locationRosaflor", name: "Rosaflor Subdivision", purok: "Purok 6" },
    { id: "#locationHoward", name: "Howard Compound", purok: "Purok 7" },
    { id: "#locationLimpo", name: "Limpo Compound", purok: "Purok 7" },
    { id: "#locationMetrogate", name: "Metrogate Compound", purok: "Purok 7" },
    { id: "#locationGruenvilleII", name: "Gruenville II Compound", purok: "Purok --" },
    { id: "#locationIlemHomes", name: "Ilem Homes Compound", purok: "Purok --" },
    { id: "#locationTionco", name: "Tionco Compound", purok: "Purok --" },
    { id: "#locationCelinaHomes5", name: "Celina Homes 5 Compound", purok: "Purok --" },
    { id: "#locationAnros", name: "Anros Compound", purok: "Purok --" },
    { id: "#locationPambuanAlley", name: "Pambuan Alley Compound", purok: "Purok --" },
    { id: "#locationPerlas", name: "Perlas Compound", purok: "Purok --" },
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

    if (currentPage === subdivisions.length - 1) {
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
  });
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
  const sectors = document.querySelector('#sectors');
  const map = document.querySelector('#map');


  observeElement(header, "animate-fadein-delayed");
  observeElement(subheader, "animate-fadein-delayed");
  observeElement(bannerBg, "animate-movedown-delayed");
  observeElement(bannerTitle, "animate-movedown");
  observeElement(bannerDesc, "animate-fadein-delayed");
  observeElement(bannerBtn, "animate-fadein-delayed");
  observeElement(historyBg, "animate-fadein");
  observeElement(historyCard, "animate-scaleup");
  observeElement(sectors, "animate-scaleup");
  observeElement(map, "animate-scaleup");
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
initializeFooterScript();
initializeIntersectAnimations();

document.querySelector('#mapContainer').addEventListener('click', function(e) {
  const rect = this.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  console.log(`top: ${y.toFixed(2)}%; left: ${x.toFixed(2)}%;`);
});