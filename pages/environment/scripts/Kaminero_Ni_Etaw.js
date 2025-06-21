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
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        }, 250);
    }

    function closeDropdown() {
        dropdown.classList.remove('active');
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
            }, 300);
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

document.querySelectorAll('.slider-img').forEach(slide => {
    slide.addEventListener('click', () => {
        document.querySelectorAll('.slider-img').forEach(s => s.classList.remove('active'));
        slide.classList.add('active');

        const learnMoreBtn = slide.querySelector('.learn-more-btn');
        if (learnMoreBtn && !document.querySelector('.expanded-dropdown').classList.contains('active')) {
            setTimeout(() => {
                learnMoreBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 170);
        }
    });
});