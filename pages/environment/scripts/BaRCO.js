document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.slider-img').forEach(slide => {
        slide.addEventListener('click', () => {
            document.querySelectorAll('.slider-img').forEach(s => s.classList.remove('active'));
            slide.classList.add('active');
        });
    });
});
