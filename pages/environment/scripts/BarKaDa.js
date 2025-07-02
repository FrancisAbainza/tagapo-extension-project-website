/* Lamok Buster */ 

let currentIndex = 0;

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


requestAnimationFrame(() => {
  container.appendChild(items[0]);
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".item").forEach((item) => {
    const title = item.dataset.title || '';
    const text = item.dataset.text || '';
    const images = JSON.parse(item.dataset.images || '[]');

    // Clear any existing content
    item.innerHTML = "";

    // Create photo carousel structure
    const photos = document.createElement("div");
    photos.className = "photos";
    photos.innerHTML = `
      <div class="photos-container">
        <div class="photos-collection">
          <div class="photo-wrap">
            <div class="sub-carousel">
              <span class="sub-arrow left" onclick="changeSlide(this, -1)">&#10094;</span>
              <div class="sub-slides"></div>
              <span class="sub-arrow right" onclick="changeSlide(this, 1)">&#10095;</span>
            </div>
          </div>
        </div>
      </div>
    `;

    // Add images into sub-slides
    const slidesContainer = photos.querySelector(".sub-slides");
    images.forEach((src) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = title;
      img.loading = "lazy";
      slidesContainer.appendChild(img);
    });

    // Create content block
    const content = document.createElement("div");
    content.className = "content";

    const nameDiv = document.createElement("div");
    nameDiv.className = "name";
    nameDiv.textContent = title;

    const infoDiv = document.createElement("div");
    infoDiv.className = "info";
    infoDiv.textContent = text;

    content.appendChild(nameDiv);
    content.appendChild(infoDiv);

    // Append everything into the item
    item.appendChild(photos);
    item.appendChild(content);
  });
});



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