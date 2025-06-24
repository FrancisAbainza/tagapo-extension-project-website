import { locations } from './data.js';

/* locations */
function initializeLocationsScript() {
  const locationsCarouselContainer = document.querySelector('#locationsCarouselContainer');
  const navigateButtonsContainer = document.querySelector('#navigateButtonsContainer');

  function getNumberOfCardsPerPage() {
    const viewportWidth = window.innerWidth;
    let numOfCardsPerPage;

    if (viewportWidth >= 1400) {
      numOfCardsPerPage = 3;
    } else if (viewportWidth >= 920) {
      numOfCardsPerPage = 3;
    } else if (viewportWidth >= 700) {
      numOfCardsPerPage = 2;
    } else {
      numOfCardsPerPage = 1;
    }

    return numOfCardsPerPage;
  }

  function renderOfficialCards() {
    locations.forEach((official) => {
      locationsCarouselContainer.innerHTML += `
        <article class="official-card">
          <img src="${official.image.src}" alt="${official.image.alt}">
        </article>
      `
    });
  }

  function renderCarouselNavButtons() {
    const numOfCardsPerPage = getNumberOfCardsPerPage();
    let lastPage;

    /* Determine the maximum amount of page using this formula: 
    Math.ceil(o / c) - 1 
    o = number of locations
    c = number of cards
    */
    lastPage = Math.ceil(locations.length / numOfCardsPerPage);

    navigateButtonsContainer.innerHTML = "";
    for (let i = 0; i < lastPage; i++) {
      navigateButtonsContainer.innerHTML += `
        <button data-official-carousel-nav-btn></button>
      `
    }
  }

  function initializeCarouselButtonsScript() {
    const locationsCards = document.getElementsByClassName('official-card');
    const locationsCarouselLeftBtn = document.querySelector('#locationsCarouselLeftBtn');
    const locationsCarouselRightBtn = document.querySelector('#locationsCarouselRightBtn');
    let carouselNavButtons;
    let currentPage = 0;

    locationsCarouselLeftBtn.addEventListener('click', () => {
      changePage(currentPage - 1);
      updateUI();
    });

    locationsCarouselRightBtn.addEventListener('click', () => {
      changePage(currentPage + 1);
      updateUI();
    });

    // Adds event listener to carousel navigation buttons
    function initializeCarouselNavButtonsScript() {
      carouselNavButtons = document.querySelectorAll('[data-official-carousel-nav-btn]');
      carouselNavButtons[0].classList.add('active');

      carouselNavButtons.forEach((carouselNavButton, index) => {
        carouselNavButton.addEventListener("click", () => {
          changePage(index);
          updateUI();
        })
      });
    }

    // Changes current page
    function changePage(newPage) {
      const prevActiveNavButton = carouselNavButtons[currentPage];
      const currentActiveNavButton = carouselNavButtons[newPage];
      prevActiveNavButton.classList.remove('active');
      currentActiveNavButton.classList.add('active');

      currentPage = newPage;
    }

    // Updates carousel container transform
    function updateUI() {
      const locationsCardWidth = locationsCards[0].getBoundingClientRect().width;
      const numOfCardsPerPage = getNumberOfCardsPerPage();
      let cardsPassed;
      let lastPage;

      /* Set both button's visibility to visible */
      locationsCarouselLeftBtn.style.visibility = 'visible';
      locationsCarouselRightBtn.style.visibility = 'visible';

      /* Determine the number of cards the carousel have passed base on the current page */
      cardsPassed = numOfCardsPerPage * currentPage;

      /* Determine the maximum amount of page using this formula: 
      Math.ceil(o / c) - 1 
      o = number of locations
      c = number of cards
      */
      lastPage = Math.ceil(locations.length / numOfCardsPerPage) - 1;

      /* Prevent the cardsPassed from exceeding (number of locations - number of cards per page) */
      if (cardsPassed > locations.length - numOfCardsPerPage) {
        cardsPassed = locations.length - numOfCardsPerPage;
      }

      /* Remove the right button when the carousel reaches the last page */
      if (currentPage === lastPage) {
        locationsCarouselRightBtn.style.visibility = 'hidden';
      }

      /* Remove the left button when the carousel reaches the first page */
      if (currentPage === 0) {
        locationsCarouselLeftBtn.style.visibility = 'hidden';
      }

      /* Apply the carousel container transform value by adding
      1. Total width of all cards passed
      2. total width of all the gaps passed
      */
      locationsCarouselContainer.style.transform = `translateX(-${(locationsCardWidth * cardsPassed) + (24 * cardsPassed)}px)`
    }

    // Reset the carousel transform when the screen resizes to prevent unorganized transform state and rerender navigation buttons and their script
    function initializeWindowResizeEventScript() {
      let lastWidth = window.innerWidth;

      window.addEventListener('resize', () => {
        const currentWidth = window.innerWidth;

        if (currentWidth !== lastWidth) {
          lastWidth = currentWidth;
          renderCarouselNavButtons();
          initializeCarouselNavButtonsScript();
          changePage(0);
          updateUI();
        }
      });
    }

    initializeCarouselNavButtonsScript();
    initializeWindowResizeEventScript();
  }

  renderOfficialCards();
  renderCarouselNavButtons();
  initializeCarouselButtonsScript();
}

initializeLocationsScript();