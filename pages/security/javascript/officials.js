$(document).ready(function () {
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

  let currentIndex = 3;
  const $carousel = $('.bpat-content .carousel');
  const $name = $("#name");
  const $position = $("#position");
  const $description = $("#description");

  function updateContent(index) {
    const fullName = contentData[index].name.trim().split(" ");
    const firstName = fullName.slice(0, -1).join(" ");
    const lastName = fullName[fullName.length - 1];
    const nameHTML = `${firstName} <span style="color:#eb0000">${lastName}</span>`;
    
    // Fade out all content first
    $name.add($position).add($description).stop().animate({ opacity: 0 }, 400, function() {
      // Update content when invisible
      $name.html(nameHTML);
      $position.text(contentData[index].position);
      $description.text(contentData[index].description);
      
      // Fade in new content
      $name.add($position).add($description).animate({ opacity: 1 }, 300);
    });
  }

  // Initialize carousel
  $carousel.carousel({
    fullWidth: false,
    indicators: false,
    noWrap: false,
    onCycleTo: function (ele) {
      currentIndex = $(ele).index();
      updateContent(currentIndex);
    }
  });

  // Set initial position
  $carousel.carousel('set', currentIndex);

  // Navigation buttons
  $('#nextBtn').click(function (e) {
    e.preventDefault();
    $carousel.carousel('next');
  });

  $('#prevBtn').click(function (e) {
    e.preventDefault();
    $carousel.carousel('prev');
  });

  // Initialize with fade-in effect
  $name.css('opacity', 0);
  $position.css('opacity', 0);
  $description.css('opacity', 0);
  updateContent(currentIndex);
});
