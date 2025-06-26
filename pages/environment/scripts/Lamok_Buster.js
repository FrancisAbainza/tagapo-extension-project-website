const carouselIndexes = [];

function scrollPhotoWraps(button, direction) {
    const container = button.closest('.photos-one, .photos-two')?.querySelector('.photos-container, .photos-container-two');
    if (!container) return;

    const wraps = container.querySelectorAll('.photo-wrap');
    if (!wraps.length) return;

    const wrapWidth = wraps[0].offsetWidth;
    const totalWraps = wraps.length;

    // Use container as unique identifier for index
    const containerId = Array.from(document.querySelectorAll('.photos-container, .photos-container-two')).indexOf(container);
    if (typeof carouselIndexes[containerId] !== 'number') {
        carouselIndexes[containerId] = 0;
    }

    // Loop index
    carouselIndexes[containerId] = (carouselIndexes[containerId] + direction + totalWraps) % totalWraps;

    // Scroll to calculated position
    const scrollTo = carouselIndexes[containerId] * wrapWidth;
    container.scrollTo({ left: scrollTo, behavior: 'smooth' });
}


// Toggle overlay expansion
document.querySelectorAll(".photo-expand-overlay").forEach((overlay) => {
    overlay.addEventListener("click", () => {
        overlay.classList.toggle("expanded");
    });
});

const slideIndexes = [];

function changeSlide(button, direction) {
    const carousel = button.closest('.sub-carousel');
    const slidesContainer = carousel.querySelector('.sub-slides');
    const slides = slidesContainer.querySelectorAll('img');

    const carouselIndex = Array.from(document.querySelectorAll('.sub-carousel')).indexOf(carousel);
    if (!slideIndexes[carouselIndex]) slideIndexes[carouselIndex] = 0;

    slideIndexes[carouselIndex] = (slideIndexes[carouselIndex] + direction + slides.length) % slides.length;
    const offset = slideIndexes[carouselIndex] * -100;
    slidesContainer.style.transform = `translateX(${offset}%)`;
}
