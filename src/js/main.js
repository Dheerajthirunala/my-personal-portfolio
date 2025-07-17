// Show or hide back to top button
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});
