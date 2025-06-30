import { initializeCarouselScript } from './carousel.js';
import { locations } from './data.js';

function initializeLocationsScript() {
  const locationsCarousel = document.querySelector('#locationsCarousel');
  const locationsBreakpoints = [
    { viewportWidth: 920, numOfItems: 3 },
    { viewportWidth: 700, numOfItems: 2 },
    { viewportWidth: 0, numOfItems: 1 },
  ];
  const locationsCarouselGap = 24;
  let locationsCarouselItems = [];
  locations.forEach((location) => {
    locationsCarouselItems.push(`
      <article class="location-card item">
        <img src="${location.image.src}" alt="${location.image.alt}">
      </article>
    `);
  })

  initializeCarouselScript(locationsCarousel, locationsCarouselItems, locationsBreakpoints, locationsCarouselGap);
}

initializeLocationsScript();