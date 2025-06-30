import { initializeHeaderFooterScript } from "../scripts/headerFooter.js";

const backBtn = document.querySelector("#backBtn");
const featureArticle = document.querySelector("#featureArticle");

function observeElement(element, className) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(className);
      }
    });
  });

  observer.observe(element);
}

backBtn.addEventListener("click", () => {
  history.back();
});

observeElement(featureArticle, "animate-scaleup");
initializeHeaderFooterScript();