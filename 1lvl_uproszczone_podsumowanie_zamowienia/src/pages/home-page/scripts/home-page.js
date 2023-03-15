/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import "../styles/home-page.scss";

const paymentButton = document.querySelector(".card-actions__payment");
const loader = document.querySelector(".card-actions__loader");

paymentButton.addEventListener("click", function () {
  loader.classList.remove("card-actions__loader-hidden");
});
