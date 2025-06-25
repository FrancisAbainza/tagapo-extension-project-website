/* header */
function initializeHeaderScript() {
  const header = document.querySelector('#header');
  const menu = document.querySelector('#menu');
  const close = document.querySelector('#close');
  const nav = document.querySelector('#nav');
  const body = document.querySelector('body');
  const headerHeight = header.getBoundingClientRect().height;

  body.style.marginTop = headerHeight + 'px';

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

/* subheader */
function initializeSubheaderScript() {
  function updateDateTime() {
    const now = new Date();
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    };
    const formatted = now.toLocaleString('en-US', options);
    document.getElementById('datetime').textContent = "Philippine Standard Time: " + formatted;
  }

  setInterval(updateDateTime, 1000);
  updateDateTime();
}

document.addEventListener('DOMContentLoaded', () => {
  initializeIntersectAnimations();
});

function initializeIntersectAnimations() {
  const header = document.querySelector('header')
  const bannerBg = document.querySelector('#bannerBg');
  const bannerTitle = document.querySelector('#bannerTitle');
  const bannerDesc = document.querySelector('#bannerDesc');
  const bannerBtn = document.querySelector('#bannerBtn');

  observeElement(header, "animate-movedown-delayed")
  observeElement(bannerBg, "animate-movedown-delayed");
  observeElement(bannerTitle, "animate-movedown");
  observeElement(bannerDesc, "animate-fadein-delayed");
  observeElement(bannerBtn, "animate-fadein-delayed");
  /*observeElement(medCheckups, "animate-scaleup");*/
}

/* Reusables */
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
/* Carousel*/
$(document).ready(function() {
  const contentData = [
    {
      name: "Allan Urisantos",
      position: "BPAT Chief Head",
      description: "He leads, organizes, and mobilizes the Barangay Peacekeeping Action Team (BPAT) to effectively implement community-oriented policing and public safety programs, ensuring peace, order, and security within the barangay."
    },
    {
      name: "Jonard Barroso",
      position: "BPAT Deputy Chief Head",
      description: "To assist the BPAT Chief in the leadership, organization, and mobilization of the Barangay Peacekeeping Action Team (BPAT) to ensure the effective implementation of community-oriented policing and public safety programs, thereby contributing to peace, order, and security within the barangay."
    },
    {
      name: "Eduardo Realco",
      position: "BPAT Team Supervisor",
      description: "Ensures the effective and coordinated operation of multiple BPAT teams or specific operational areas, providing oversight, guidance, and support to Team Leaders and members, and reporting directly to the BPAT Chief or Deputy Chief on the overall peace and order situation and BPAT performance within their assigned area."
    },
    {
      name: "Ramir Paje",
      position: "BPAT Team Supervisor",
      description: "Ensures the effective and coordinated operation of multiple BPAT teams or specific operational areas, providing oversight, guidance, and support to Team Leaders and members, and reporting directly to the BPAT Chief or Deputy Chief on the overall peace and order situation and BPAT performance within their assigned area."
    },
    {
      name: "Renato Diaz",
      position: "BPAT Team Supervisor",
      description: "Ensures the effective and coordinated operation of multiple BPAT teams or specific operational areas, providing oversight, guidance, and support to Team Leaders and members, and reporting directly to the BPAT Chief or Deputy Chief on the overall peace and order situation and BPAT performance within their assigned area."
    }
  ];

  let currentIndex = 0;
  const $name = $("#name");
  const $position = $("#position");
  const $description = $("#description");

 function updateContent(index) {
  const fullName = contentData[index].name.trim().split(" ");
  const firstName = fullName.slice(0, -1).join(" ");
  const lastName = fullName[fullName.length - 1];
  const nameHTML = `${firstName} <span style="color:#eb0000">${lastName}</span>`;

  // Fade to new content by animating opacity only
  $name.stop().animate({ opacity: 0.1 }, 300, function () {
    $(this).html(nameHTML).animate({ opacity: 1 }, 300);
  });

  $position.stop().animate({ opacity: 0.1 }, 300, function () {
    $(this).text(contentData[index].position).animate({ opacity: 1 }, 300);
  });

  $description.stop().animate({ opacity: 0.1 }, 300, function () {
    $(this).text(contentData[index].description).animate({ opacity: 1 }, 300);
  });
}
 

  const $carousel = $('.carousel');


  $carousel.carousel({
    
    onCycleTo: function (ele) {
      const index = $(ele).index();
      updateContent(index);
    }
  });


  $('#nextBtn').click(function () {
    $carousel.carousel('next');
  });

  $('#prevBtn').click(function () {
    $carousel.carousel('prev');
  });
});

initializeHeaderScript();
initializeFooterScript();
initializeIntersectAnimations();





