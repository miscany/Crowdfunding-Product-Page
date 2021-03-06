window.onload = () => {
  // Variables

  const dropdownButton = document.querySelector(".dropdown-button");
  const dropdown = document.querySelector(".dropdown");
  const pledgebuttons = document.querySelectorAll(".reward-button");
  const pledgePage = document.querySelector(".reward-popup");
  const closePledgePageButton = document.querySelector(".close-reward-page");
  const backgroundCover = document.querySelector(".abs-cover");

  // Creates list of pledge articles based on the number in their id (Ex. 1,2,3)
  const pledgePopupArticles = [1, 2, 3].map((i) => {
    return document.querySelector(`.reward-popup-${i}`);
  });

  // Creates list of pledge icons (green circles) based on the number in their id (Ex. 1,2,3)
  const pledgeIcons = [1, 2, 3].map((i) => {
    return document.querySelector(`#icon-${i}`);
  });
  const enterPledgeDropdowns = [1, 2, 3].map((i) => {
    return document.querySelector(`#enter-pledge-${i}`);
  });
  const pledgeTopButtons = [1, 2, 3].map((i) => {
    return document.querySelector(`#pledge-top-button-${i}`);
  });

  const pledgeContinueButtons = document.querySelectorAll(".continue");
  const thankyouPage = document.querySelector(".thank-you");
  const thankyouPageButton = document.querySelector("#got-it");

  // Functions

  // Set background to dark-mode
  function navbarClick() {
    backgroundOverlay();
  }
  function backgroundOverlay(hide) {
    backgroundCover.style.display == "none"
      ? (backgroundCover.style.display = "block")
      : (backgroundCover.style.display = "none");

    if (hide === true) {
      backgroundCover.style.display = "none";
    }
  }

  // Set background to dark-grey when first reward-buttons are clicked
  function pledgeBackground() {}
  // Display thank you screen when pledge button is clicked
  function toggleThankyou() {
    closePledgePage();
    if (thankyouPage.style.display == "block") {
      thankyouPage.style.display = "none";
      backgroundOverlay(true);
    } else {
      thankyouPage.style.display = "block";
      backgroundOverlay();
    }
  }

  function clearPledges() {
    // Goes through each article and removes styling
    pledgePopupArticles.forEach((article) => {
      article.classList.remove("active-border");
    });
    // Goes through each icon and removes styling
    pledgeIcons.forEach((icon) => {
      icon.classList.remove("active-icon");
    });
    enterPledgeDropdowns.forEach((pledge) => {
      pledge.style.display = "none";
    });
  }

  function highlightPledge(pledgeIndex) {
    clearPledges(); // Calls function to remove styling from each pledge article
    pledgePopupArticles[pledgeIndex - 1].classList.add("active-border");
    pledgeIcons[pledgeIndex - 1].classList.add("active-icon");
    enterPledgeDropdowns[pledgeIndex - 1].style.display = "block";
  }
  // Close pledge-reward page when 'X' is clicked
  function closePledgePage() {
    backgroundOverlay(); // Toggles the background shade
    pledgePage.style.display = "none";
  }
  // Show pledge-reward page on click
  function showPledgePage(element) {
    // Finds the selected pledge based on the what number it contains (Ex. 1,2,3)

    let regex = /[0-9]/g;
    let rewardIndex = element.id.match(regex).join("");
    highlightPledge(parseInt(rewardIndex));
    // Display the pledge-reward page

    pledgePage.style.display = "block";
  }

  // Shows or hides dropdown based on top-right hamburger click
  function toggleDropdown() {
    let img = "";
    if (dropdown.style.display == "none") {
      dropdown.style.display = "block";
      img = "./images/icon-close-menu.svg";
    } else {
      dropdown.style.display = "none";
      img = "./images/icon-hamburger.svg";
    }
    dropdownButton.firstElementChild.src = img;
  }

  // Event Listeners

  dropdownButton.addEventListener("click", toggleDropdown);
  dropdownButton.addEventListener("click", backgroundOverlay);

  pledgebuttons.forEach((button) => {
    button.addEventListener("click", () => {
      showPledgePage(button);
      navbarClick();
    });
  });

  closePledgePageButton.addEventListener("click", closePledgePage);

  pledgeTopButtons.forEach((button) => {
    button.addEventListener("click", () => {
      showPledgePage(button);
    });
  });

  pledgeContinueButtons.forEach((button) => {
    button.addEventListener("click", toggleThankyou);
  });
  thankyouPageButton.addEventListener("click", toggleThankyou);
  document.querySelector(".bookmark-wrapper").addEventListener("click", () => {
    let bookmarkElements = document.querySelectorAll(".color-bookmark");
    bookmarkElements.forEach((element) => {
      element.classList.contains("filter")
        ? element.classList.remove("filter")
        : element.classList.add("filter");
    });
  });
};
