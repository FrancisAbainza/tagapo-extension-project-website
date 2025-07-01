/* Lamok Buster */ 
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) 
})


const carouselIndexes = [];

function scrollPhotoWraps(button, direction) {
    const container = button.closest('.photos')?.querySelector('.photos-container');
    if (!container) return;

    const wraps = container.querySelectorAll('.photo-wrap');
    if (!wraps.length) return;

    const wrapWidth = wraps[0].offsetWidth;
    const totalWraps = wraps.length;

    // Use container as unique identifier for index
    const containerId = Array.from(document.querySelectorAll('.photos-container')).indexOf(container);
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

/* Kaminero ni Etaw */

document.addEventListener('DOMContentLoaded', () => {
    let carouselIndex = 0;
    let totalImages = 0;
    let carouselImages = [];
    let activeButton = null;

    const dropdown = document.querySelector('.expanded-dropdown');
    const dropdownTitle = document.getElementById('dropdown-title');
    const dropdownText = document.getElementById('dropdown-text');
    const carouselContainer = document.getElementById('dropdown-carousel');

    function updateCarousel() {
        const container = document.querySelector('.carousel-wrapper');
        const imageWidth = container.offsetWidth;
        carouselContainer.style.transform = `translateX(-${carouselIndex * imageWidth}px)`;
    }

    function populateDropdown(button) {
        const title = button.dataset.title;
        const text = button.dataset.text;
        const images = JSON.parse(button.dataset.images || '[]');

        dropdownTitle.textContent = title;
        dropdownText.textContent = text;

        carouselContainer.innerHTML = '';
        images.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = '';
            carouselContainer.appendChild(img);
        });

        carouselIndex = 0;
        totalImages = images.length;
        carouselImages = carouselContainer.children;

        updateCarousel();
    }

    function openDropdown() {
        dropdown.classList.add('active');

        setTimeout(() => {
            const collapseBtn = document.getElementById('collapse-btn');
            if (collapseBtn) {
                collapseBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }, 220);
    }

    function closeDropdown() {
        dropdown.classList.remove('active');
        
        const containerRow = document.querySelector('.row');
        if (containerRow) {
            setTimeout(() => {
                containerRow.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'  
                });
            }, 200);
        }
    }

    document.querySelectorAll('.learn-more-btn').forEach(button => {
        button.addEventListener('click', () => {
            if (activeButton === button && dropdown.classList.contains('active')) {
                closeDropdown();
                activeButton = null;
                return;
            }

            closeDropdown();
            setTimeout(() => {
                populateDropdown(button);
                openDropdown();
                activeButton = button;
            }, 50);
        });
    });

    document.querySelector('.collapse-btn').addEventListener('click', () => {
        closeDropdown();
        activeButton = null;
    });

    document.querySelectorAll('.arrow').forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('right') && carouselIndex < totalImages - 1) {
                carouselIndex++;
                updateCarousel();
            } else if (btn.classList.contains('left') && carouselIndex > 0) {
                carouselIndex--;
                updateCarousel();
            }
        });
    });
});

/* Back to Top */

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
