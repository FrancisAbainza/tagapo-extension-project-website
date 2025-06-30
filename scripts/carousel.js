export function initializeCarouselScript(mainCarousel, carouselItems, breakpoints, gap) {
  const carouselContainer = mainCarousel.querySelector('#carouselContainer');
  const carouselNavigateButtonsContainer = mainCarousel.querySelector('#carouselNavigateButtonsContainer');
  let carouselItemCount = 0;

  function getNumberOfItemsPerPage() {
    const viewportWidth = window.innerWidth;

    for (const breakpoint of breakpoints) {
      if (viewportWidth >= breakpoint.viewportWidth) {
        return breakpoint.numOfItems;
      }
    }
  }

  function renderItems() {
    carouselItems.forEach((carouselItem) => {
      carouselContainer.innerHTML += carouselItem;
      carouselItemCount++;
    });
    
    carouselContainer.style.gap = `${gap}px`;
  }

  // Method for adding responsive width for carousel items
  function applyResponsiveItemWidth() {
    const items = mainCarousel.getElementsByClassName('item');
    const viewportWidth = window.innerWidth;

    for (const breakpoint of breakpoints) {
      if (viewportWidth >= breakpoint.viewportWidth) {
        const itemSize = 100 / breakpoint.numOfItems;
        const gapSize = gap * (breakpoint.numOfItems - 1) / breakpoint.numOfItems;
        const finalItemWidth = `calc(${itemSize}% - ${gapSize}px)`;

        Array.from(items).forEach(item => {
          item.style.width = finalItemWidth;
        });

        break;
      }
    }
  }

  function renderCarouselNavButtons() {
    const numOfItemsPerPage = getNumberOfItemsPerPage();
    let lastPage;

    /* Determine the maximum amount of page using this formula: 
    Math.ceil(x / y) - 1 
    x = total items
    y = items per page
    */
    lastPage = Math.ceil(carouselItemCount / numOfItemsPerPage);

    carouselNavigateButtonsContainer.innerHTML = "";
    for (let i = 0; i < lastPage; i++) {
      carouselNavigateButtonsContainer.innerHTML += `
        <button data-committee-carousel-nav-btn></button>
      `
    }
  }

  function initializeCarouselButtonsScript() {
    const items = mainCarousel.getElementsByClassName('item');
    const carouselLeftBtn = mainCarousel.querySelector('#carouselLeftBtn');
    const carouselRightBtn = mainCarousel.querySelector('#carouselRightBtn');
    let carouselNavButtons;
    let currentPage = 0;

    carouselLeftBtn.addEventListener('click', () => {
      changePage(currentPage - 1);
      updateUI();
    });

    carouselRightBtn.addEventListener('click', () => {
      changePage(currentPage + 1);
      updateUI();
    });

    // Adds event listener to carousel navigation buttons
    function initializeCarouselNavButtonsScript() {
      carouselNavButtons = mainCarousel.querySelectorAll('[data-committee-carousel-nav-btn]');
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

    // Updates carousel container transform and buttons visibility
    function updateUI() {
      const itemWidth = items[0].getBoundingClientRect().width;
      const numOfItemsPerPage = getNumberOfItemsPerPage();
      let itemsPassed;
      let lastPage;

      /* Set both button's visibility to visible */
      carouselLeftBtn.style.visibility = 'visible';
      carouselRightBtn.style.visibility = 'visible';

      /* Determine the number of items the carousel have passed base on the current page */
      itemsPassed = numOfItemsPerPage * currentPage;

      /* Determine the maximum amount of page using this formula: 
      Math.ceil(o / c) - 1 
      o = number of 
      c = number of items
      */
      lastPage = Math.ceil(carouselItemCount / numOfItemsPerPage) - 1;

      /* Prevent the itemsPassed from exceeding (number of  - number of items per page) */
      if (itemsPassed > carouselItemCount - numOfItemsPerPage) {
        itemsPassed = carouselItemCount - numOfItemsPerPage;
      }

      /* Remove the right button when the carousel reaches the last page */
      if (currentPage === lastPage) {
        carouselRightBtn.style.visibility = 'hidden';
      }

      /* Remove the left button when the carousel reaches the first page */
      if (currentPage === 0) {
        carouselLeftBtn.style.visibility = 'hidden';
      }

      /* Apply the carousel container transform value by adding
      1. Total width of all items passed
      2. total width of all the gaps passed
      */
      carouselContainer.style.transform = `translateX(-${(itemWidth * itemsPassed) + (gap * itemsPassed)}px)`
    }

    // Reset the carousel transform when the screen resizes to prevent unorganized transform state and rerender navigation buttons and their script
    function initializeWindowResizeEventScript() {
      let lastWidth = window.innerWidth;

      window.addEventListener('resize', () => {
        const currentWidth = window.innerWidth;

        if (currentWidth !== lastWidth) {
          lastWidth = currentWidth;
          applyResponsiveItemWidth();
          renderCarouselNavButtons();
          initializeCarouselNavButtonsScript();
          changePage(0);
          updateUI();
        }
      });
    }

    updateUI();
    initializeCarouselNavButtonsScript();
    initializeWindowResizeEventScript();
  }

  renderItems();
  applyResponsiveItemWidth();
  renderCarouselNavButtons();
  initializeCarouselButtonsScript();
}