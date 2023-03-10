/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import "../styles/home-page.scss";

const paymentButton = document.querySelector(".btn");
const loader = document.querySelector(".card__loader");

paymentButton.addEventListener("click", function () {
  loader.classList.remove("card__loader-hidden");
  paymentButton.textContent = "Processing payment...";
});
