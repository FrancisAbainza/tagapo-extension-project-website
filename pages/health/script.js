// For initializing Header
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

// Script for Hovering Cards
function setupHoverCard(cardId, summaryHTML, detailHTML) {
    const card = document.getElementById(cardId);
    if (!card) return;

    const text = card.querySelector(".card-text");
    if (!text) return;

    const summaryEl = document.createElement('div');
    summaryEl.className = 'card-summary';
    summaryEl.innerHTML = summaryHTML;

    const detailEl = document.createElement('div');
    detailEl.className = 'card-detail';
    detailEl.innerHTML = detailHTML;
    detailEl.setAttribute('hidden', true);

    text.innerHTML = '';
    text.append(summaryEl, detailEl);

    const showDetail = () => {
        summaryEl.hidden = true;
        detailEl.removeAttribute('hidden');
    };

    const showSummary = () => {
        detailEl.hidden = true;
        summaryEl.removeAttribute('hidden');
    };

    // Define mobile click toggle logic
    const mobileToggle = () => {
        if (detailEl.hidden) showDetail();
        else showSummary();
    };

    // Helper to remove all listeners if needed
    const removeAllListeners = () => {
        card.removeEventListener('click', mobileToggle);
        card.removeEventListener('mouseenter', showDetail);
        card.removeEventListener('mouseleave', showSummary);
        card.removeEventListener('focusin', showDetail);
        card.removeEventListener('focusout', showSummary);
    };

    // Setup listeners based on screen size
    const setupListeners = () => {
        removeAllListeners();
        if (window.matchMedia("(max-width: 768px)").matches) {
            // Mobile behavior
            card.addEventListener('click', mobileToggle);
        } else {
            // Desktop behavior
            card.addEventListener('mouseenter', showDetail);
            card.addEventListener('mouseleave', showSummary);
            card.addEventListener('focusin', showDetail);
            card.addEventListener('focusout', showSummary);
        }
    };

    // Initial listener setup
    setupListeners();

    // Optional: re-check on resize for responsive behavior
    window.addEventListener('resize', setupListeners);
}

const arrowSVG = `
      <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 10V0L5 5L0 10Z" fill="#2A1613" />
      </svg>`;

setupHoverCard(
    "mon",
    `<div class="note">${arrowSVG} Checkup for <br> Adult and Kids</div>`,
    `<div class = "hidden" style="padding-top: 50px; font-size: 14px;"> ${arrowSVG} <span style="line-height: 40px"><strong style"color: #eb0000">Kids:</strong> Cough, colds, fever.<br></span>
   ${arrowSVG} <strong style="color: #eb0000;">Adults:</strong> Blood pressure monitoring, hypertension, medicine/maintenance
   follow-ups, general medical inquiries, and dog/cat bite consultations.</div>`
);

setupHoverCard(
    "tue",
    `<div class="note"><strong>Morning</strong><br>
   <p>${arrowSVG} Diabetic<p> <br>
  <strong>Afternoon</strong> <br>
   <p>${arrowSVG} General Consultation<p></div>`,
    `<div class="hidden" style="padding: 20px 0; font-size: 14px;"><strong style="line-height: 40px; font-size: 16px;">MORNING</strong> <br>
  ${arrowSVG} <span>Procedure:</span> Only Random Blood Sugar (RBS) is taken. <br>
  ${arrowSVG} If diagnosed with diabetes, patients will receive free short-term medication. <br>
  ${arrowSVG} <span>Note: </span> No requirements such as ID are needed. However, once the free
  medication is used up, follow-up check-ups at hospitals are required to assess if new
  prescriptions are needed. <br>
  <strong style="line-height: 40px; font-size: 16px;">AFTERNOON</strong> <br>
  ${arrowSVG} Only for minor concerns such as fever, cough, colds, and general discomfort.</div>`
);

setupHoverCard(
    "wed",
    `<div class="note">${arrowSVG} Immunization Day For Babies.</div>`,
    `<div class="hidden" style="padding: 20px 0; font-size: 14px;"><span id="red-desc"><strong>For Babies:</strong> Free vaccines and Vitamins</span> <br>
  <p style="line-height: 30px">Vaccines Offered:</p>
  <div style="font-size: 12px; padding-left: 20px;">
  ${arrowSVG} BCG (Bacillus Calmette-Guérin) <br>
  ${arrowSVG} Penta (5 in 1) <br>
  ${arrowSVG} OPV (Oral Polio Vaccine) <br>
  ${arrowSVG} PCV (Pneumococcal Vaccine) <br>
  ${arrowSVG} IPV (Inactived Polio Vaccine) <br>
  ${arrowSVG} Measles <br>
  ${arrowSVG} MMR (Measles-Mumps-Rubella) <br>
  ${arrowSVG} Vitamin A <br><br>
  </div>
  <span id="red-desc"><strong>For Mothers: </strong>Free Vitamins.</span>
  <span id="b-desc"><strong>Requirement: </strong>If the child was born in a private hospital, a
  document from the attending physician indicating the vaccines already administered is
  required to avoid duplication.</span></div>`
);

setupHoverCard(
    "thu",
    `<div class="note">${arrowSVG} Maternal Day</div>`,
    `<div style="padding: 20px 0px; font-size: 14px;">${arrowSVG} <strong>Services offered for pregnant woman: </strong> <br>
  Free check-ups for HIV Screening and RBS to monitor for diabetes. <br>
  ${arrowSVG} No ultrasound services at the Barangay; referrals are made 
  to the Municipal Health Office for ultrasound. <br> <br>
  <strong>Free Vitamins</strong> <br>
  <span id="list">${arrowSVG} <strong>For Mothers: </strong> Ferrous Sulfate <br></span>
  <span id="list">${arrowSVG} <strong>For Babies: </strong> Ascorbic Acid and Multivitamins</span></div>`
)
setupHoverCard(
    "fri",
    `<div class="note">${arrowSVG} Maternal Day</div>`,
    `<div class="hidden" style="padding: 20px 0px; font-size: 14px;">${arrowSVG} For minor illnesses such as cough, colds, 
  blood pressure check-ups, minor wounds, or animal bites. <br></div>`
)
setupHoverCard(
    "weeknd_sun",
    `<div>${arrowSVG} <strong>Rest Day</strong><div>`,
    `<div style="display: flex; justify-content: center; align-items: center;align-contents: center;"><em>(no consultation on weekends)</em</div>`
)
setupHoverCard(
    "weeknd_sat",
    `<div>${arrowSVG} <strong>Rest Day</strong><div>`,
    `<em>(no consultation on weekends)</em`
)

/*
function setupHoverCard(cardId, summaryHTML, detailHTML) {
  const card = document.getElementById(cardId);
  const text = card.querySelector(".card-text");
  text.innerHTML = summaryHTML;

  card.addEventListener("mouseenter", () => {
    text.innerHTML = detailHTML;
  });

  card.addEventListener("mouseleave", () => {
    text.innerHTML = summaryHTML;
  });
}
*/

/*
function setupClickCard(cardId, summaryHTML, detailHTML) {
  const card = document.getElementById(cardId);
  const text = card.querySelector(".card-text");
  let showingDetail = false;

  text.innerHTML = summaryHTML;

  card.addEventListener("click", () => {
    if (showingDetail) {
      text.innerHTML = summaryHTML;
    } else {
      text.innerHTML = detailHTML;
    }
    showingDetail = !showingDetail;
  });
}
*/

// Define at module level (not global)

const originalContentMap = {};

function setupPartialToggle(buttonClass, toggleSectionClass, newHTMLMap) {
    const buttons = document.querySelectorAll(`.${buttonClass}`);

    buttons.forEach(button => {
        const targetId = button.dataset.target;
        const container = document.getElementById("detail1"); // shared container
        const toggleSection = container.querySelector(`.${toggleSectionClass}`);

        if (!originalContentMap[targetId]) {
            originalContentMap[targetId] = toggleSection.innerHTML;
        }

        button.addEventListener("click", () => {
            toggleSection.classList.add("fade-out");

            setTimeout(() => {
                toggleSection.innerHTML = newHTMLMap[targetId] + `
            <br><button class="solid-button" id="back-btn">&times;</button>
          `;
                toggleSection.classList.remove("fade-out");

                // Back button restores original and rebinds buttons
                const backBtn = toggleSection.querySelector("#back-btn");
                if (backBtn) {
                    backBtn.addEventListener("click", () => {
                        toggleSection.classList.add("fade-out");

                        setTimeout(() => {
                            toggleSection.innerHTML = originalContentMap[targetId];
                            toggleSection.classList.remove("fade-out");

                            setupPartialToggle(buttonClass, toggleSectionClass, newHTMLMap); // Re-attach all
                        }, 400); // match fade duration
                    });
                }
            }, 400);
        });
    });
}

setupPartialToggle("solid-button", "toggle-section", {
    "detail2": `
    <div class="modal-container" id="modal-1">
            <div class="modal-content">
                <div class="header">
                    <div class="img-content">
                        <img src="./images/assets/fam_planning_2.jpg" alt="Family Planning Counseling">
                        <div class="title">
                            <p><span>FAMILY </span></p>
                            <p><span>PLANNING </span></p>
                            <p> COUNSELING</p>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <div class="grid">
                        <div class="box-1">
                            <div class="list">
                                <p>
                                    <span>
                                        <svg width="27" height="27" viewBox="0 0 37 37" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M23.5877 25.7458L25.746 23.5874L20.0418 17.8833V10.7916H16.9585V19.1166L23.5877 25.7458ZM18.5002 33.9166C16.3675 33.9166 14.3634 33.5119 12.4877 32.7025C10.612 31.8931 8.98037 30.7947 7.59287 29.4072C6.20537 28.0197 5.10693 26.3881 4.29756 24.5124C3.48818 22.6367 3.0835 20.6326 3.0835 18.4999C3.0835 16.3673 3.48818 14.3631 4.29756 12.4874C5.10693 10.6117 6.20537 8.98013 7.59287 7.59263C8.98037 6.20513 10.612 5.10669 12.4877 4.29731C14.3634 3.48794 16.3675 3.08325 18.5002 3.08325C20.6328 3.08325 22.637 3.48794 24.5127 4.29731C26.3884 5.10669 28.02 6.20513 29.4075 7.59263C30.795 8.98013 31.8934 10.6117 32.7028 12.4874C33.5121 14.3631 33.9168 16.3673 33.9168 18.4999C33.9168 20.6326 33.5121 22.6367 32.7028 24.5124C31.8934 26.3881 30.795 28.0197 29.4075 29.4072C28.02 30.7947 26.3884 31.8931 24.5127 32.7025C22.637 33.5119 20.6328 33.9166 18.5002 33.9166ZM18.5002 30.8333C21.9175 30.8333 24.8274 29.632 27.2299 27.2296C29.6323 24.8272 30.8335 21.9173 30.8335 18.4999C30.8335 15.0826 29.6323 12.1727 27.2299 9.77023C24.8274 7.3678 21.9175 6.16659 18.5002 6.16659C15.0828 6.16659 12.1729 7.3678 9.77048 9.77023C7.36805 12.1727 6.16683 15.0826 6.16683 18.4999C6.16683 21.9173 7.36805 24.8272 9.77048 27.2296C12.1729 29.632 15.0828 30.8333 18.5002 30.8333Z"
                                                fill="#1D1B20" />
                                        </svg> Available daily (9:00 AM - 4:00 PM)
                                    </span>
                                </p>

                                <p>
                                    <span>
                                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.1665 24.0834V9.91675L21.2498 17.0001L14.1665 24.0834Z"
                                                fill="black" />
                                        </svg> One-on-one counseling sessions
                                    </span>
                                </p>

                            </div>

                            <h3>PROCESS: </h3>
                            <div class="box">
                                <div class="red-box">
                                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <ellipse cx="15.1218" cy="15.1218" rx="15" ry="15"
                                            transform="rotate(0.46719 15.1218 15.1218)" fill="#EB0000" />
                                        <path
                                            d="M12.0007 7.73988L12.017 5.74795L16.5288 5.78474L16.3873 23.1362L14.1794 23.1182L14.3046 7.75867L12.0007 7.73988Z"
                                            fill="white" />
                                    </svg>
                                </div>
                                <p>
                                    Before the actual session, a staff member will explain the appropriate and
                                    inappropriate
                                    methods based on the individual’s health condition.
                                </p>
                            </div>
                        </div>
                        <div class="box-2">
                            <div class="box">
                                <div class="red-box">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="15.0005" cy="15" r="14.8792" transform="rotate(0.46719 15.0005 15)"
                                            fill="#EB0000" />
                                        <path
                                            d="M9.02358 21.2678C11.0688 19.6525 12.6717 18.3295 13.8321 17.2989C14.9927 16.2523 15.9696 15.1643 16.7628 14.0347C17.5722 12.8893 17.9814 11.7646 17.9904 10.6606C17.9988 9.62063 17.7495 8.80257 17.2424 8.20642C16.7513 7.59439 15.9458 7.28381 14.8259 7.27468C13.7379 7.26581 12.8871 7.60288 12.2735 8.2859C11.6761 8.95305 11.3487 9.85441 11.2915 10.99L9.17953 10.9728C9.25814 9.18135 9.81341 7.80183 10.8453 6.83421C11.8773 5.86659 13.2012 5.38937 14.8171 5.40255C16.4651 5.41598 17.7653 5.8826 18.7179 6.8024C19.6864 7.72233 20.1641 8.98227 20.1511 10.5822C20.1403 11.9102 19.7297 13.2029 18.9194 14.4603C18.1253 15.7019 17.2203 16.7985 16.2045 17.7503C15.1888 18.686 13.8919 19.7795 12.3136 21.0307L20.5693 21.098L20.5545 22.9219L9.01086 22.8278L9.02358 21.2678Z"
                                            fill="white" />
                                    </svg>
                                </div>
                                <p>
                                    A pre-checkup is conducted to screen for conditions like varicose veins, goiter,
                                    or
                                    high
                                    blood pressure, which can affect the suitability of certain contraceptive
                                    methods
                                    (e.g.,
                                    pills).

                                </p>

                            </div>
                        </div>
                        <div class="box-3">
                            <div class="box">
                                <div class="red-box">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="14.9995" cy="15" r="14.8792" transform="rotate(0.46719 14.9995 15)"
                                            fill="#EB0000" />
                                        <path
                                            d="M9.16612 10.0366C9.29012 8.56559 9.8675 7.41826 10.8982 6.59464C11.929 5.77102 13.2603 5.36586 14.8923 5.37917C15.9803 5.38804 16.9146 5.59566 17.6953 6.00204C18.4921 6.39255 19.0878 6.92543 19.4823 7.60067C19.8928 8.27604 20.0946 9.03771 20.0877 9.88568C20.0796 10.8776 19.7847 11.7313 19.2028 12.4466C18.637 13.162 17.8972 13.6199 16.9835 13.8205L16.9826 13.9405C18.0204 14.205 18.8403 14.7157 19.4421 15.4726C20.044 16.2295 20.34 17.216 20.33 18.4319C20.3226 19.3439 20.1079 20.1662 19.6859 20.8988C19.264 21.6154 18.6354 22.1782 17.8001 22.5875C16.9647 22.9967 15.963 23.1965 14.7951 23.187C13.0991 23.1731 11.7108 22.7218 10.63 21.833C9.54933 20.9281 8.95165 19.6592 8.83697 18.0262L10.9489 18.0434C11.0531 19.0043 11.4387 19.7915 12.1057 20.4049C12.7727 21.0184 13.6662 21.3297 14.7862 21.3388C15.9061 21.348 16.7564 21.0669 17.3371 20.4956C17.9339 19.9085 18.2361 19.1509 18.2437 18.2229C18.2535 17.023 17.8605 16.1557 17.0649 15.6212C16.2692 15.0867 15.0634 14.8129 13.4474 14.7997L12.8954 14.7952L12.9103 12.9713L13.4863 12.976C14.9584 12.972 16.0723 12.741 16.8281 12.2832C17.5839 11.8093 17.9659 11.0764 17.974 10.0845C17.9809 9.23648 17.7065 8.55422 17.1507 8.03767C16.6109 7.52125 15.829 7.25887 14.805 7.25052C13.8131 7.24243 13.011 7.4919 12.3988 7.99892C11.7867 8.50595 11.4211 9.19099 11.3021 10.054L9.16612 10.0366Z"
                                            fill="white" />
                                    </svg>
                                </div>
                                <p>
                                    The chosen method will depend on the individual's medical history and current health
                                    status.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  `,
    "detail1": `
    <div class="modal-container" id="modal-2">
            <div class="modal-content">
                <div class="header">
                    <div class="image-content">
                        <img src="./images/assets/timbang.jpg" alt="Feeding Program">
                    </div>
                </div>
                <div class="title">
                    <p><span>FEEDING</span> PROGRAM</p>
                </div>
                <div class="info">
                    <h3>IMPLEMENTATION: </h3>
                    <div class="box-1">
                        The program is conducted annually and, for 2025, it officially began in mid-March.
                    </div>
                </div>
                <div class="content">
                    <div class="grid-1">
                        <div class="box-1">
                            <div class="list">
                                <p>
                                    <span>
                                        <svg width="37" height="27" viewBox="0 0 37 37" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M23.5877 25.7458L25.746 23.5874L20.0418 17.8833V10.7916H16.9585V19.1166L23.5877 25.7458ZM18.5002 33.9166C16.3675 33.9166 14.3634 33.5119 12.4877 32.7025C10.612 31.8931 8.98037 30.7947 7.59287 29.4072C6.20537 28.0197 5.10693 26.3881 4.29756 24.5124C3.48818 22.6367 3.0835 20.6326 3.0835 18.4999C3.0835 16.3673 3.48818 14.3631 4.29756 12.4874C5.10693 10.6117 6.20537 8.98013 7.59287 7.59263C8.98037 6.20513 10.612 5.10669 12.4877 4.29731C14.3634 3.48794 16.3675 3.08325 18.5002 3.08325C20.6328 3.08325 22.637 3.48794 24.5127 4.29731C26.3884 5.10669 28.02 6.20513 29.4075 7.59263C30.795 8.98013 31.8934 10.6117 32.7028 12.4874C33.5121 14.3631 33.9168 16.3673 33.9168 18.4999C33.9168 20.6326 33.5121 22.6367 32.7028 24.5124C31.8934 26.3881 30.795 28.0197 29.4075 29.4072C28.02 30.7947 26.3884 31.8931 24.5127 32.7025C22.637 33.5119 20.6328 33.9166 18.5002 33.9166ZM18.5002 30.8333C21.9175 30.8333 24.8274 29.632 27.2299 27.2296C29.6323 24.8272 30.8335 21.9173 30.8335 18.4999C30.8335 15.0826 29.6323 12.1727 27.2299 9.77023C24.8274 7.3678 21.9175 6.16659 18.5002 6.16659C15.0828 6.16659 12.1729 7.3678 9.77048 9.77023C7.36805 12.1727 6.16683 15.0826 6.16683 18.4999C6.16683 21.9173 7.36805 24.8272 9.77048 27.2296C12.1729 29.632 15.0828 30.8333 18.5002 30.8333Z"
                                                fill="#1D1B20" />
                                        </svg> Monday to Friday, 9:00 AM - 11:00 AM
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <svg width="37" height="27" viewBox="0 0 37 37" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M18.5002 33.9166C18.1404 33.9166 17.8321 33.8138 17.5752 33.6082C17.3182 33.4027 17.1255 33.1329 16.997 32.7989C16.5088 31.36 15.8922 30.011 15.147 28.752C14.4276 27.493 13.4127 26.0155 12.1022 24.3197C10.7918 22.6239 9.72551 21.0051 8.90329 19.4635C8.10676 17.9218 7.7085 16.0589 7.7085 13.8749C7.7085 10.8687 8.74912 8.32492 10.8304 6.24367C12.9373 4.13672 15.4939 3.08325 18.5002 3.08325C21.5064 3.08325 24.0502 4.13672 26.1314 6.24367C28.2384 8.32492 29.2918 10.8687 29.2918 13.8749C29.2918 16.2131 28.8422 18.1659 27.9429 19.7332C27.0693 21.2749 26.0543 22.8037 24.8981 24.3197C23.5106 26.1697 22.4571 27.7114 21.7377 28.9447C21.0439 30.1523 20.4658 31.4371 20.0033 32.7989C19.8748 33.1586 19.6693 33.4412 19.3866 33.6468C19.1297 33.8267 18.8342 33.9166 18.5002 33.9166ZM18.5002 28.4051C18.937 27.5315 19.4252 26.6708 19.9647 25.8228C20.53 24.9749 21.3522 23.8444 22.4314 22.4312C23.5363 20.9923 24.4356 19.669 25.1293 18.4614C25.8488 17.228 26.2085 15.6992 26.2085 13.8749C26.2085 11.7423 25.4505 9.93082 23.9345 8.44054C22.4443 6.92457 20.6328 6.16658 18.5002 6.16658C16.3675 6.16658 14.5432 6.92457 13.0272 8.44054C11.537 9.93082 10.7918 11.7423 10.7918 13.8749C10.7918 15.6992 11.1387 17.228 11.8325 18.4614C12.5519 19.669 13.4641 20.9923 14.5689 22.4312C15.6481 23.8444 16.4575 24.9749 16.997 25.8228C17.5623 26.6708 18.0634 27.5315 18.5002 28.4051ZM18.5002 17.7291C19.5793 17.7291 20.4915 17.3565 21.2366 16.6114C21.9818 15.8662 22.3543 14.9541 22.3543 13.8749C22.3543 12.7957 21.9818 11.8836 21.2366 11.1385C20.4915 10.3933 19.5793 10.0208 18.5002 10.0208C17.421 10.0208 16.5088 10.3933 15.7637 11.1385C15.0186 11.8836 14.646 12.7957 14.646 13.8749C14.646 14.9541 15.0186 15.8662 15.7637 16.6114C16.5088 17.3565 17.421 17.7291 18.5002 17.7291Z"
                                                fill="#1D1B20" />
                                        </svg> Barangay Court
                                    </span>
                                </p>
                            </div>
                            <h3>PROCESS: </h3>
                            <div class="box">
                                <div class="red-box">

                                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <ellipse cx="15.1218" cy="15.1218" rx="15" ry="15"
                                            transform="rotate(0.46719 15.1218 15.1218)" fill="#EB0000" />
                                        <path
                                            d="M12.0007 7.73988L12.017 5.74795L16.5288 5.78474L16.3873 23.1362L14.1794 23.1182L14.3046 7.75867L12.0007 7.73988Z"
                                            fill="white" />
                                    </svg>
                                </div>
                                <p>
                                    <span>
                                        The Barangay Nutrition Scholars (BNS) conduct Operation Timbang, a
                                        house-to-house
                                        visit
                                        to assess the nutritional status and weight of children in each subdivision.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="grid-2">
                        <div class="box-2">
                            <div class="box">
                                <div class="red-box" id="one">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="15" cy="15" r="14.8792" transform="rotate(0.46719 15 15)"
                                            fill="#EB0000" />
                                        <path
                                            d="M9.02309 21.2678C11.0683 19.6525 12.6712 18.3295 13.8316 17.2989C14.9922 16.2523 15.9691 15.1643 16.7623 14.0347C17.5717 12.8893 17.9809 11.7646 17.9899 10.6606C17.9984 9.62063 17.749 8.80257 17.2419 8.20642C16.7508 7.59439 15.9453 7.28381 14.8254 7.27468C13.7374 7.26581 12.8866 7.60288 12.2731 8.2859C11.6756 8.95305 11.3482 9.85441 11.291 10.99L9.17904 10.9728C9.25765 9.18135 9.81292 7.80183 10.8448 6.83421C11.8768 5.86659 13.2007 5.38937 14.8166 5.40255C16.4646 5.41598 17.7648 5.8826 18.7174 6.8024C19.6859 7.72233 20.1636 8.98227 20.1506 10.5822C20.1398 11.9102 19.7292 13.2029 18.9189 14.4603C18.1248 15.7019 17.2198 16.7985 16.204 17.7503C15.1883 18.686 13.8914 19.7795 12.3131 21.0307L20.5689 21.098L20.554 22.9219L9.01037 22.8278L9.02309 21.2678Z"
                                            fill="white" />
                                    </svg>
                                </div>
                                <p>
                                    <span>
                                        Data on underweight children is submitted to the City Nutrition Office for
                                        verification
                                        and
                                        budgeting.
                                    </span>
                                </p>
                            </div>
                            <div class="box">
                                <div class="red-box" id="two">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="14.9995" cy="15" r="14.8792" transform="rotate(0.46719 14.9995 15)"
                                            fill="#EB0000" />
                                        <path
                                            d="M9.16612 10.0366C9.29012 8.56559 9.8675 7.41826 10.8982 6.59464C11.929 5.77102 13.2603 5.36586 14.8923 5.37917C15.9803 5.38804 16.9146 5.59566 17.6953 6.00204C18.4921 6.39255 19.0878 6.92543 19.4823 7.60067C19.8928 8.27604 20.0946 9.03771 20.0877 9.88568C20.0796 10.8776 19.7847 11.7313 19.2028 12.4466C18.637 13.162 17.8972 13.6199 16.9835 13.8205L16.9826 13.9405C18.0204 14.205 18.8403 14.7157 19.4421 15.4726C20.044 16.2295 20.34 17.216 20.33 18.4319C20.3226 19.3439 20.1079 20.1662 19.6859 20.8988C19.264 21.6154 18.6354 22.1782 17.8001 22.5875C16.9647 22.9967 15.963 23.1965 14.7951 23.187C13.0991 23.1731 11.7108 22.7218 10.63 21.833C9.54933 20.9281 8.95165 19.6592 8.83697 18.0262L10.9489 18.0434C11.0531 19.0043 11.4387 19.7915 12.1057 20.4049C12.7727 21.0184 13.6662 21.3297 14.7862 21.3388C15.9061 21.348 16.7564 21.0669 17.3371 20.4956C17.9339 19.9085 18.2361 19.1509 18.2437 18.2229C18.2535 17.023 17.8605 16.1557 17.0649 15.6212C16.2692 15.0867 15.0634 14.8129 13.4474 14.7997L12.8954 14.7952L12.9103 12.9713L13.4863 12.976C14.9584 12.972 16.0723 12.741 16.8281 12.2832C17.5839 11.8093 17.9659 11.0764 17.974 10.0845C17.9809 9.23648 17.7065 8.55422 17.1507 8.03767C16.6109 7.52125 15.829 7.25887 14.805 7.25052C13.8131 7.24243 13.011 7.4919 12.3988 7.99892C11.7867 8.50595 11.4211 9.19099 11.3021 10.054L9.16612 10.0366Z"
                                            fill="white" />
                                    </svg>
                                </div>
                                <p>
                                    Once approved, the Feeding Program is launched.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="list-box">
                    <h3>BENEFECIARIES: </h3>
                    <span><svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.6 13.2L14.65 6.15L13.25 4.75L7.6 10.4L4.75 7.55L3.35 8.95L7.6 13.2ZM2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H16C16.55 0 17.0208 0.195833 17.4125 0.5875C17.8042 0.979167 18 1.45 18 2V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM2 16H16V2H2V16Z"
                                fill="#1D1B20" />
                        </svg> Underweight and malnourished children
                    </span>
                    <span><svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.6 13.2L14.65 6.15L13.25 4.75L7.6 10.4L4.75 7.55L3.35 8.95L7.6 13.2ZM2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H16C16.55 0 17.0208 0.195833 17.4125 0.5875C17.8042 0.979167 18 1.45 18 2V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM2 16H16V2H2V16Z"
                                fill="#1D1B20" />
                        </svg> Pregnant Women (Buntis Feeding)
                    </span>
                    <span><svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.6 13.2L14.65 6.15L13.25 4.75L7.6 10.4L4.75 7.55L3.35 8.95L7.6 13.2ZM2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H16C16.55 0 17.0208 0.195833 17.4125 0.5875C17.8042 0.979167 18 1.45 18 2V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM2 16H16V2H2V16Z"
                                fill="#1D1B20" />
                        </svg> Lactating Mothers
                    </span>
                    <span><svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.6 13.2L14.65 6.15L13.25 4.75L7.6 10.4L4.75 7.55L3.35 8.95L7.6 13.2ZM2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H16C16.55 0 17.0208 0.195833 17.4125 0.5875C17.8042 0.979167 18 1.45 18 2V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM2 16H16V2H2V16Z"
                                fill="#1D1B20" />
                        </svg> Mothers who are underweight or nutritionally at-risk
                    </span>
                </div>
            </div>
        </div>
  `,
    "detail3": `
            <div class="modal-container" id="modal-3">
            <div class="modal-content">
                <div class="header">
                    <div class="img-content">
                        <img src="./images/assets/zumba_2.jpg" alt="Zumba Sessions">
                    </div>
                    <div class="title">
                        <p><span>ZUMBA</span> SESSIONS</p>
                    </div>
                </div>

                <div class="content">
                    <div class="grid">
                        <div class="box-1">
                            <p>
                                <span>
                                    <svg width="37" height="27" viewBox="0 0 37 37" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M23.5877 25.7458L25.746 23.5874L20.0418 17.8833V10.7916H16.9585V19.1166L23.5877 25.7458ZM18.5002 33.9166C16.3675 33.9166 14.3634 33.5119 12.4877 32.7025C10.612 31.8931 8.98037 30.7947 7.59287 29.4072C6.20537 28.0197 5.10693 26.3881 4.29756 24.5124C3.48818 22.6367 3.0835 20.6326 3.0835 18.4999C3.0835 16.3673 3.48818 14.3631 4.29756 12.4874C5.10693 10.6117 6.20537 8.98013 7.59287 7.59263C8.98037 6.20513 10.612 5.10669 12.4877 4.29731C14.3634 3.48794 16.3675 3.08325 18.5002 3.08325C20.6328 3.08325 22.637 3.48794 24.5127 4.29731C26.3884 5.10669 28.02 6.20513 29.4075 7.59263C30.795 8.98013 31.8934 10.6117 32.7028 12.4874C33.5121 14.3631 33.9168 16.3673 33.9168 18.4999C33.9168 20.6326 33.5121 22.6367 32.7028 24.5124C31.8934 26.3881 30.795 28.0197 29.4075 29.4072C28.02 30.7947 26.3884 31.8931 24.5127 32.7025C22.637 33.5119 20.6328 33.9166 18.5002 33.9166ZM18.5002 30.8333C21.9175 30.8333 24.8274 29.632 27.2299 27.2296C29.6323 24.8272 30.8335 21.9173 30.8335 18.4999C30.8335 15.0826 29.6323 12.1727 27.2299 9.77023C24.8274 7.3678 21.9175 6.16659 18.5002 6.16659C15.0828 6.16659 12.1729 7.3678 9.77048 9.77023C7.36805 12.1727 6.16683 15.0826 6.16683 18.4999C6.16683 21.9173 7.36805 24.8272 9.77048 27.2296C12.1729 29.632 15.0828 30.8333 18.5002 30.8333Z"
                                            fill="#1D1B20" />
                                    </svg> Every Monday and Friday at 4:30 PM
                                </span>
                            </p>
                            <p>
                                <span>
                                    <svg width="37" height="27" viewBox="0 0 37 37" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M18.5002 33.9166C18.1404 33.9166 17.8321 33.8138 17.5752 33.6082C17.3182 33.4027 17.1255 33.1329 16.997 32.7989C16.5088 31.36 15.8922 30.011 15.147 28.752C14.4276 27.493 13.4127 26.0155 12.1022 24.3197C10.7918 22.6239 9.72551 21.0051 8.90329 19.4635C8.10676 17.9218 7.7085 16.0589 7.7085 13.8749C7.7085 10.8687 8.74912 8.32492 10.8304 6.24367C12.9373 4.13672 15.4939 3.08325 18.5002 3.08325C21.5064 3.08325 24.0502 4.13672 26.1314 6.24367C28.2384 8.32492 29.2918 10.8687 29.2918 13.8749C29.2918 16.2131 28.8422 18.1659 27.9429 19.7332C27.0693 21.2749 26.0543 22.8037 24.8981 24.3197C23.5106 26.1697 22.4571 27.7114 21.7377 28.9447C21.0439 30.1523 20.4658 31.4371 20.0033 32.7989C19.8748 33.1586 19.6693 33.4412 19.3866 33.6468C19.1297 33.8267 18.8342 33.9166 18.5002 33.9166ZM18.5002 28.4051C18.937 27.5315 19.4252 26.6708 19.9647 25.8228C20.53 24.9749 21.3522 23.8444 22.4314 22.4312C23.5363 20.9923 24.4356 19.669 25.1293 18.4614C25.8488 17.228 26.2085 15.6992 26.2085 13.8749C26.2085 11.7423 25.4505 9.93082 23.9345 8.44054C22.4443 6.92457 20.6328 6.16658 18.5002 6.16658C16.3675 6.16658 14.5432 6.92457 13.0272 8.44054C11.537 9.93082 10.7918 11.7423 10.7918 13.8749C10.7918 15.6992 11.1387 17.228 11.8325 18.4614C12.5519 19.669 13.4641 20.9923 14.5689 22.4312C15.6481 23.8444 16.4575 24.9749 16.997 25.8228C17.5623 26.6708 18.0634 27.5315 18.5002 28.4051ZM18.5002 17.7291C19.5793 17.7291 20.4915 17.3565 21.2366 16.6114C21.9818 15.8662 22.3543 14.9541 22.3543 13.8749C22.3543 12.7957 21.9818 11.8836 21.2366 11.1385C20.4915 10.3933 19.5793 10.0208 18.5002 10.0208C17.421 10.0208 16.5088 10.3933 15.7637 11.1385C15.0186 11.8836 14.646 12.7957 14.646 13.8749C14.646 14.9541 15.0186 15.8662 15.7637 16.6114C16.5088 17.3565 17.421 17.7291 18.5002 17.7291Z"
                                            fill="#1D1B20" />
                                    </svg> Barangay Plaza
                                </span>
                            </p>
                        </div>
                        <div class="box-2">
                            <h3>DETAILS: </h3>
                            <div class="box">
                                <p id="one">
                                    Led by Barangay Health Workers (BHW) but open to everyone.
                                </p>
                                <p id="two">
                                    No registration or fees required. Anyone who sees an ongoing session can freely
                                    join
                                    in.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  `
});

/* footer */
function initializeFooterScript() {
    const currentYearElement = document.querySelector('#currentYearElement');
    const date = new Date();
    const currentYear = date.getFullYear();

    currentYearElement.textContent = currentYear;
}

initializeHeaderScript();
initializeFooterScript();