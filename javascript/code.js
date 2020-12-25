let mobileNavMenu = document.querySelector(".navLinks-container");
let introBoxButton = document.querySelector(".introduction-box a");
let introBox = document.querySelector(".introduction-box");

document.onclick = function (e) {
  let target = e.target;

  if (target.closest(".menu-icon-container"))
    mobileNavMenu.classList.toggle("navLinks-displayer");
  else if (target.closest(".navLinks-container")) return;
  else {
    if (mobileNavMenu.classList.contains("navLinks-displayer")) {
      mobileNavMenu.classList.remove("navLinks-displayer");
    }
  }
};

introBoxButton.onclick = function () {
  introBox.style.display = "none";
};
