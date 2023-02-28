// Slide out menu JS

// var serviceSlider = document.getElementById("service-slider");
// var serviceSliderNext = document.querySelector(".next-arrow");
// var serviceSliderPrev = document.querySelector(".prev-arrow");

var nav = document.getElementById("site-menu");
function navToggle() {
  var btn = document.getElementById("menuBtn");
  var nav = document.getElementById("menu");

  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
}

// serviceSliderNext.addEventListener("click", (evt) => {
//   console.log("hello");
//   evt.preventDefault();
//   serviceSlider.scrollBy({
//     left: 300,
//     behavior: "smooth",
//   });
// });

// serviceSliderPrev.addEventListener("click", (evt) => {
//   evt.preventDefault();
//   serviceSlider.scrollBy({
//     left: -300,
//     behavior: "smooth",
//   });
// });

// Popup CTA JS
var closePopup = document.getElementById("popupClose");
var popupContainer = document.getElementById("popupContainer");
var popupCallBtn = document.getElementById("popupCallBtn");
var popupQuoteBtn = document.getElementById("popupQuoteBtn");

setTimeout(function () {
  popupContainer.classList.remove("hidden");
}, 15000);

closePopup.addEventListener("click", (e) => {
  popupContainer.classList.add("hidden");
});

popupCallBtn.addEventListener("click", (e) => {
  popupContainer.classList.add("hidden");
});

popupQuoteBtn.addEventListener("click", (e) => {
  popupContainer.classList.add("hidden");
});

// Landing Page GA Dynamic Keyword Insertion
const dynamicParams = new URLSearchParams(window.location.search);
const locationParam = dynamicParams.get("location");
const headlineParam = dynamicParams.get("headline");

console.log("Dynamic Location: " + locationParam);
console.log("Dynamic Headline: " + headlineParam);

if (locationParam !== "") {
  // Alternative (window.location.href.indexOf("location") > -1)
  console.log("location param present");
  document.getElementById("dynamicLocation").innerHTML = locationParam.replace(
    /_/g,
    " "
  );
} else {
  console.log("location param not present");
}

if (headlineParam !== "") {
  // Alternative (window.location.href.indexOf("headline") > -1)
  console.log("headline param present");
  document.getElementById("dynamicHeadline").innerHTML = headlineParam.replace(
    /_/g,
    " "
  );
} else {
  console.log("headline param not present");
}
