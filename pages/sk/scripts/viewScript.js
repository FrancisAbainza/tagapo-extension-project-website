
// Event 1
const scrollContainer1 = document.querySelector(".sk-gallery");
const backBtn1 = document.getElementById("backbtn");
const nextBtn1 = document.getElementById("nextbtn");

if (scrollContainer1 && backBtn1 && nextBtn1) {
    nextBtn1.addEventListener("click", () => {
        scrollContainer1.scrollBy({ left: 430, behavior: "smooth" });
    });

    backBtn1.addEventListener("click", () => {
        scrollContainer1.scrollBy({ left: -430, behavior: "smooth" });
    });
}

// Event 2
const scrollContainer2 = document.querySelector(".sk-gallery2");
const backBtn2 = document.getElementById("backbtn2");
const nextBtn2 = document.getElementById("nextbtn2");

if (scrollContainer2 && backBtn2 && nextBtn2) {
    nextBtn2.addEventListener("click", () => {
        scrollContainer2.scrollBy({ left: 430, behavior: "smooth" });
    });

    backBtn2.addEventListener("click", () => {
        scrollContainer2.scrollBy({ left: -430, behavior: "smooth" });
    });
}

// Event 3
const scrollContainer3 = document.querySelectorAll(".sk-gallery")[1];
const backBtn3 = document.getElementById("backBtn3");
const nextBtn3 = document.getElementById("nextBtn3");

if (scrollContainer3 && backBtn3 && nextBtn3) {
    nextBtn3.addEventListener("click", () => {
        scrollContainer3.scrollBy({ left: 430, behavior: "smooth" });
    });

    backBtn3.addEventListener("click", () => {
        scrollContainer3.scrollBy({ left: -430, behavior: "smooth" });
    });
}

// Event 4
const scrollContainer4 = document.querySelectorAll(".sk-gallery2")[1];
const backBtn4 = document.getElementById("backBtn4");
const nextBtn4 = document.getElementById("nextBtn4");

if (scrollContainer4 && backBtn4 && nextBtn4) {
    nextBtn4.addEventListener("click", () => {
        scrollContainer4.scrollBy({ left: 430, behavior: "smooth" });
    });

    backBtn4.addEventListener("click", () => {
        scrollContainer4.scrollBy({ left: -430, behavior: "smooth" });
    });
}

// Event 5
const scrollContainer5 = document.querySelectorAll(".sk-gallery")[2];
const backBtn5 = document.getElementById("backbtn5");
const nextBtn5 = document.getElementById("nextbtn5");

if (scrollContainer5 && backBtn5 && nextBtn5) {
    nextBtn5.addEventListener("click", () => {
        scrollContainer5.scrollBy({ left: 430, behavior: "smooth" });
    });

    backBtn5.addEventListener("click", () => {
        scrollContainer5.scrollBy({ left: -430, behavior: "smooth" });
    });
}