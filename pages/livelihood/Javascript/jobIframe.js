// For Iframe
const buttons = document.querySelectorAll('.read-btn');
const iframe = document.getElementById('jobIframe');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const url = button.getAttribute('data-url');
        iframe.src = url;
    });
});

// For Buttons 1 2 3
document.addEventListener("DOMContentLoaded", () => {
  const pageButtons = document.querySelectorAll(".page-button");
  const pages = document.querySelectorAll(".job-page");
  let currentPage = document.querySelector(".job-page[data-page='1']");
  currentPage.classList.add("active");

  const defaultBtn = document.querySelector('.page-button[data-page="1"]');
  if (defaultBtn) defaultBtn.classList.add("active");

  pageButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetPage = document.querySelector(`.job-page[data-page="${btn.dataset.page}"]`);
      
      if (!targetPage || targetPage === currentPage) return;

      pageButtons.forEach(b => b.classList.remove("active"));

      btn.classList.add("active");

      // Page fade animation
      currentPage.classList.remove("active");
      setTimeout(() => {
        currentPage.style.display = "none";
        targetPage.style.display = "block";
        setTimeout(() => {
          targetPage.classList.add("active");
          currentPage = targetPage;
        }, 10);
      }, 500);
    });
  });
});
