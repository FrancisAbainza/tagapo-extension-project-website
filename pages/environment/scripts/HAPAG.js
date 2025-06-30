document.addEventListener("DOMContentLoaded", function () {
  const slideButton1 = document.getElementById("slide-button1");
  const slide1 = document.querySelector(".slide-front-1");
  const slide1Back = document.querySelector(".slide-back-1");
  const backToSlide1 = document.getElementById("previous-button1");

  const viewMoreButton1 = document.getElementById("viewMoreBtn1");
  const moreContent1 = document.querySelector(".more-content-1");
  const hideBtn1 = document.getElementById("collapse1");

  const slideButton2 = document.getElementById("slide-button2");
  const slide2 = document.querySelector(".slide-front-2");
  const slide2Back = document.querySelector(".slide-back-2");
  const backToSlide2 = document.getElementById("previous-button2");
  const viewMoreButton2 = document.getElementById("viewMoreBtn2");
  const moreContent2 = document.querySelector(".more-content-2");
  const hideBtn2 = document.getElementById("collapse2");

  const slideButton3 = document.getElementById("slide-button3");
  const slide3 = document.querySelector(".slide-front-3");
  const slide3Back = document.querySelector(".slide-back-3");
  const backToSlide3 = document.getElementById("previous-button3");

  const viewMoreButton3 = document.getElementById("viewMoreBtn3");
  const moreContent3 = document.querySelector(".more-content-3");
  const hideBtn3 = document.getElementById("collapse3");

  // Slide 1
  slideButton1.addEventListener("click", function () {
    slide1.style.display = "none";
    moreContent1.style.display = "none";
    slide1Back.style.display = "block";
  });

  backToSlide1.addEventListener("click", function () {
    slide1Back.style.display = "none";
    slide1.style.display = "block";
  });

  viewMoreButton1.addEventListener("click", function () {
    moreContent1.style.display = "block";
    moreContent1.scrollIntoView({ behavior: "smooth" });
  });

  hideBtn1.addEventListener("click", function () {
    moreContent1.style.display = "none";
    slide1.scrollIntoView({ behavior: "smooth" });
  });

  // Slide 2
  slideButton2.addEventListener("click", function () {
    slide2.style.display = "none";
    moreContent2.style.display = "none";
    slide2Back.style.display = "block";
  });

  backToSlide2.addEventListener("click", function () {
    slide2Back.style.display = "none";
    slide2.style.display = "block";
  });

  viewMoreButton2.addEventListener("click", function () {
    moreContent2.style.display = "block";
    moreContent2.scrollIntoView({ behavior: "smooth" });
  });

  hideBtn2.addEventListener("click", function () {
    moreContent2.style.display = "none";
    slide2.scrollIntoView({ behavior: "smooth" });
  });


  //Slide 3
  slideButton3.addEventListener("click", function () {
    slide3.style.display = "none";
    moreContent3.style.display = "none";
    slide3Back.style.display = "block";
  });

  backToSlide3.addEventListener("click", function () {
    slide3Back.style.display = "none";
    slide3.style.display = "block";
  });

  viewMoreButton3.addEventListener("click", function () {
    moreContent3.style.display = "block";
    moreContent3.scrollIntoView({ behavior: "smooth" });
  });

  hideBtn3.addEventListener("click", function () {
    moreContent3.style.display = "none";
    slide3.scrollIntoView({ behavior: "smooth" });
  });
});
