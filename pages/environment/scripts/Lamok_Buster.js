document.querySelectorAll('.photo-set').forEach((photoSet) => {
    const collection = photoSet.querySelector('.photos-collection') || photoSet.querySelector('.photos-collection-two');
    const arrows = photoSet.querySelectorAll('.arrow');
    let index = 0;
    const total = collection.children.length;

    arrows.forEach((arrow) => {
        arrow.addEventListener('click', () => {
            const imageWidth = collection.children[0].offsetWidth;
            if (arrow.classList.contains('left')) {
                index = Math.max(index - 1, 0);
            } else {
                index = Math.min(index + 1, total - 1);
            }
            collection.style.transform = `translateX(-${index * imageWidth}px)`;
        });
    });
});

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

function scrollPhotoWraps(direction) {
    const containers = document.querySelectorAll('.photos-container-two, .photos-container');

    containers.forEach(container => {
        const wrap = container.querySelector('.photo-wrap');
        if (!wrap) return;

        const scrollAmount = wrap.offsetWidth;
        container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    });
}
