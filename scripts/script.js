import { locations, officials } from './data.js';

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

/* officials */
function initializeOfficialsScript() {
  const officialsCarouselContainer = document.querySelector('#officialsCarouselContainer');
  const navigateButtons = document.querySelector('#navigateButtons');

  function renderOfficialCards() {
    officials.forEach((official) => {
      officialsCarouselContainer.innerHTML += `
        <article class="official-card">
          <img src="${official.image.src}" alt="${official.image.alt}">
          <div class="content">
            <div class="border"></div>
            <div class="text">
              <h3>${official.firstName} <br />${official.lastName}</h3>
              <p>${official.position}</p>
            </div>
            <div class="border"></div>
          </div>
        </article>
      `
    });
  }

  function renderCarouselNavButtons() {
    const viewportWidth = window.innerWidth;
    let numOfCardsPerPage;
    let lastPage;

    /* Determine the number of cards per page base on window width */
    if (viewportWidth >= 1400) {
      numOfCardsPerPage = 4;
    } else if (viewportWidth >= 920) {
      numOfCardsPerPage = 3;
    } else if (viewportWidth >= 700) {
      numOfCardsPerPage = 2;
    } else {
      numOfCardsPerPage = 1;
    }

    /* Determine the maximum amount of page using this formula: 
    Math.ceil(o / c) - 1 
    o = number of officials
    c = number of cards
    */
    lastPage = Math.ceil(officials.length / numOfCardsPerPage);

    navigateButtons.innerHTML = "";
    for (let i = 0; i < lastPage; i++) {
      navigateButtons.innerHTML += `
        <button data-official-carousel-nav-btn></button>
      `
    }
  }

  function initializeCarouselButtonsScript() {
    const officialsCards = document.getElementsByClassName('official-card');
    const officialsCarouselLeftBtn = document.querySelector('#officialsCarouselLeftBtn');
    const officialsCarouselRightBtn = document.querySelector('#officialsCarouselRightBtn');
    let carouselNavButtons;
    let currentPage = 0;

    officialsCarouselLeftBtn.addEventListener('click', () => {
      setActiveNavButton(currentPage, --currentPage)
      handleButtonClick();
    });

    officialsCarouselRightBtn.addEventListener('click', () => {
      setActiveNavButton(currentPage, ++currentPage)
      handleButtonClick();
    });

    function initializeCarouselNavButtonsScript() {
      carouselNavButtons = document.querySelectorAll('[data-official-carousel-nav-btn]');
      carouselNavButtons[currentPage].classList.add("active");

      carouselNavButtons.forEach((carouselNavButton, index) => {
        carouselNavButton.addEventListener("click", () => {
          const prevActiveButton = carouselNavButtons[currentPage];
          prevActiveButton.classList.remove('active');
          carouselNavButton.classList.add('active');

          currentPage = index;
          handleButtonClick();
        })
      });
    }

    function setActiveNavButton(prevPage, currentPage) {
      const prevActiveButton = carouselNavButtons[prevPage];
      const currentActiveButton = carouselNavButtons[currentPage];
      prevActiveButton.classList.remove('active');
      currentActiveButton.classList.add('active');
    }

    function handleButtonClick() {
      const officialsCardWidth = officialsCards[0].getBoundingClientRect().width;
      const viewportWidth = window.innerWidth;
      let numOfCardsPerPage;
      let cardsPassed;
      let lastPage;

      /* Set both button's visibility to visible */
      officialsCarouselLeftBtn.style.visibility = 'visible';
      officialsCarouselRightBtn.style.visibility = 'visible';

      /* Determine the number of cards per page base on window width */
      if (viewportWidth >= 1400) {
        numOfCardsPerPage = 4;
      } else if (viewportWidth >= 920) {
        numOfCardsPerPage = 3;
      } else if (viewportWidth >= 700) {
        numOfCardsPerPage = 2;
      } else {
        numOfCardsPerPage = 1;
      }

      /* Determine the number of cards the carousel have passed base on the current page */
      cardsPassed = numOfCardsPerPage * currentPage;

      /* Determine the maximum amount of page using this formula: 
      Math.ceil(o / c) - 1 
      o = number of officials
      c = number of cards
      */
      lastPage = Math.ceil(officials.length / numOfCardsPerPage) - 1;

      /* Prevent the cardsPassed from exceeding (number of officials - number of cards per page) */
      if (cardsPassed > officials.length - numOfCardsPerPage) {
        cardsPassed = officials.length - numOfCardsPerPage;
      }

      /* Remove the right button when the carousel reaches the last page */
      if (currentPage === lastPage) {
        officialsCarouselRightBtn.style.visibility = 'hidden';
      }

      /* Remove the left button when the carousel reaches the first page */
      if (currentPage === 0) {
        officialsCarouselLeftBtn.style.visibility = 'hidden';
      }

      /* Apply the carousel container transform value by adding
      1. Total width of all cards passed
      2. total width of all the gaps passed
      */
      officialsCarouselContainer.style.transform = `translateX(-${(officialsCardWidth * cardsPassed) + (24 * cardsPassed)}px)`
    }

    // Reset the carousel transfor when the screen resizes to prevent unorganized transform state
    window.addEventListener('resize', () => {
      currentPage = 0;
      officialsCarouselLeftBtn.style.visibility = 'hidden';
      officialsCarouselRightBtn.style.visibility = 'visible';
      officialsCarouselContainer.style.transform = 'translateX(0)';
      renderCarouselNavButtons();
      initializeCarouselNavButtonsScript();
    });

    initializeCarouselNavButtonsScript();
  }

  renderOfficialCards();
  renderCarouselNavButtons();
  initializeCarouselButtonsScript();
}

/* id application */
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

/* General */
function initializeIntersectAnimations() {
  const subheader = document.querySelector('#subheader');
  const bannerBg = document.querySelector('#bannerBg');
  const bannerTitle = document.querySelector('#bannerTitle');
  const bannerDesc = document.querySelector('#bannerDesc');
  const bannerBtn = document.querySelector('#bannerBtn');
  const historyBg = document.querySelector('#historyBg');
  const historyCard = document.querySelector('#historyCard');
  const map = document.querySelector('#map');
  const officials = document.querySelector('#officials');
  const idApplication = document.querySelector('#idApplication');
  const articles = document.querySelector('#articles');
  const sectors = document.querySelector('#sectors');

  observeElement(subheader, "animate-fadein-delayed");
  observeElement(bannerBg, "animate-movedown-delayed");
  observeElement(bannerTitle, "animate-movedown");
  observeElement(bannerDesc, "animate-fadein-delayed");
  observeElement(bannerBtn, "animate-fadein-delayed");
  observeElement(historyBg, "animate-fadein");
  observeElement(historyCard, "animate-scaleup");
  observeElement(map, "animate-scaleup");
  observeElement(officials, "animate-scaleup");
  observeElement(idApplication, "animate-scaleup");
  observeElement(articles, "animate-scaleup");
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
initializeSubheaderScript();
initializeHistoryScript();
initializeMapScript();
initializeOfficialsScript();
initializeIdApplicationScript();
initializeIntersectAnimations();