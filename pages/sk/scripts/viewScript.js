// Gallery scroll functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all galleries and their navigation buttons
    const galleries = document.querySelectorAll('.sk-gallery');
    
    // First gallery controls
    const backBtn1 = document.getElementById('backbtn');
    const nextBtn1 = document.getElementById('nextbtn');
    
    // Second gallery controls
    const backBtn2 = document.getElementById('backbtn2');
    const nextBtn2 = document.getElementById('nextbtn2');

    // Third gallery controls
    const backBtn3 = document.getElementById('backbtn3');
    const nextBtn3 = document.getElementById('nextbtn3');

    // Fourth gallery controls
     const backBtn4 = document.getElementById('backbtn4');
    const nextBtn4 = document.getElementById('nextbtn4');

    // Fifth gallery controls
    const backBtn5 = document.getElementById('backbtn5');
    const nextBtn5 = document.getElementById('nextbtn5');
    
    // Function to scroll gallery
    function scrollGallery(gallery, direction) {
        const scrollAmount = gallery.clientWidth; // Scroll by one gallery width
        
        if (direction === 'next') {
            gallery.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        } else if (direction === 'prev') {
            gallery.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        }
    }
    
    // First gallery button events
    if (backBtn1 && nextBtn1 && galleries[0]) {
        backBtn1.addEventListener('click', () => {
            scrollGallery(galleries[0], 'prev');
        });
        
        nextBtn1.addEventListener('click', () => {
            scrollGallery(galleries[0], 'next');
        });
    }
    
    // Second gallery button events
    if (backBtn2 && nextBtn2 && galleries[1]) {
        backBtn2.addEventListener('click', () => {
            scrollGallery(galleries[1], 'prev');
        });
        
        nextBtn2.addEventListener('click', () => {
            scrollGallery(galleries[1], 'next');
        });
    }

    if (backBtn3 && nextBtn3 && galleries[2]) {
        backBtn3.addEventListener('click', () => {
            scrollGallery(galleries[2], 'prev');
        });
        
        nextBtn3.addEventListener('click', () => {
            scrollGallery(galleries[2], 'next');
        });
    }

    if (backBtn4 && nextBtn4 && galleries[3]) {
        backBtn4.addEventListener('click', () => {
            scrollGallery(galleries[3], 'prev');
        });
        
        nextBtn4.addEventListener('click', () => {
            scrollGallery(galleries[3], 'next');
        });
    }

    if (backBtn5 && nextBtn5 && galleries[4]) {
        backBtn5.addEventListener('click', () => {
            scrollGallery(galleries[4], 'prev');
        });
        
        nextBtn5.addEventListener('click', () => {
            scrollGallery(galleries[4], 'next');
        });
    }

    
    
    // Optional: Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            // Scroll both galleries left
            galleries.forEach(gallery => scrollGallery(gallery, 'prev'));
        } else if (e.key === 'ArrowRight') {
            // Scroll both galleries right
            galleries.forEach(gallery => scrollGallery(gallery, 'next'));
        }
    });
    
});