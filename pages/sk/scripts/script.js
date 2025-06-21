
let scrollContainer = document.querySelector(".sk-gallery");
let backbtn = document.getElementById("backbtn");
let nexbtn = document.getElementById("nextbtn");



nextbtn.addEventListener("click", () => {
    scrollContainer.style, scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 2000;
});

backbtn.addEventListener("click", () => {
    scrollContainer.style, scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 2000;
});

document.addEventListener('DOMContentLoaded', function () {
    // Tab navigation
    const navButtons = document.querySelectorAll('.nav-btn');
    const eventSections = document.querySelectorAll('.events-section');

    navButtons.forEach(button => {
        button.addEventListener('click', function () {
            navButtons.forEach(btn => btn.classList.remove('active'));
            eventSections.forEach(section => section.classList.remove('active'));

            this.classList.add('active');
            const targetId = this.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });

    const $carousel = $('.carousel');
    const instance = M.Carousel.init($carousel[0], {
        fullWidth: false,
        indicators: false,
        duration: 200,
        onCycleTo: function () {

            updateContent();
        }
    });


    function updateContent() {
        const $activeItem = $carousel.find('.carousel-item.active');
        const newBgImage = $activeItem.data('bg');
        const newDate = $activeItem.data('date');
        const newTitle = $activeItem.data('title');
        const newDesc = $activeItem.data('desc');

        // Fade out text
        $('.event-date, .event-title, .event-description').addClass('text-transition-out');

        // After fade out completes, update content and fade in
        setTimeout(() => {
            // Update background
            $('#mainBanner').css('background-image', `url(${newBgImage})`);

            // Update text content
            $('.event-date').text(newDate);
            $('.event-title').text(newTitle);
            $('.event-description').text(newDesc);

            // Fade in new content
            $('.event-date, .event-title, .event-description')
                .removeClass('text-transition-out')
                .addClass('text-transition-in');

            // Remove transition class after animation completes
            setTimeout(() => {
                $('.event-date, .event-title, .event-description').removeClass('text-transition-in');
            }, 400);
        }, 400);
    }

    $('#nextSlideBtn').click(function () {
        instance.next();
    });

    $('#prevSlideBtn').click(function () {
        instance.prev();
    });

    // Add click event for carousel items
    $('.carousel-item').click(function () {
        const index = $(this).index();
        instance.set(index);
    });

    // Initialize first slide
    updateContent();
});

/* header */
function initializeHeaderScript() {
  const header = document.querySelector('#header');
  const menu = document.querySelector('#menu');
  const close = document.querySelector('#close');
  const nav = document.querySelector('#nav');
  const body = document.querySelector('body');
  const headerHeight = header.getBoundingClientRect().height;

  menu.addEventListener('click', () => {
    nav.classList.add('open-nav');
  })

  close.addEventListener('click', () => {
    nav.classList.remove('open-nav');
  })

  window.addEventListener('scroll', () => {
    if (window.scrollY > headerHeight) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
      header.classList.remove('animate-fadein-delayed');
      header.classList.remove('hidden');
    }
  });
}

/* footer */
function initializeFooterScript() {
  const currentYearElement = document.querySelector('#currentYearElement');
  const date = new Date();
  const currentYear = date.getFullYear();

  currentYearElement.textContent = currentYear;
}

initializeHeaderScript();
initializeFooterScript();
