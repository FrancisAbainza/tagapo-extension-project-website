/* Carousel*/
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