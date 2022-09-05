"use strict";

window.addEventListener("DOMContentLoaded", function () {
  // init Masonry
  // || "collection.grid"
  var artworkGrid = document.querySelector(".artwork-grid");
  var artworkMasonry = new Masonry(artworkGrid, {
    itemSelector: ".artwork-item",
    columnWidth: ".artwork-sizer",
    percentPosition: true,
    gutter: ".artwork-gutter",
    horizontalOrder: true
  });
  imagesLoaded(artworkGrid).on("progress", function () {
    // layout Masonry after each image loads
    artworkMasonry.layout();
  });
  var swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 1,
    freeMode: true,
    autoplay: {
      delay: 3000,
      disabledOnInteraction: false
    },
    initialSlide: 1,
    breakpoints: {
      // 768: {
      //     slidesPerView: 2,
      //     spaceBetween: 24,
      // },
      1024: {
        slidesPerView: 3,
        spaceBetween: 24,
        centeredSlides: true
      }
    },
    pagination: {
      el: ".artists-pagination"
    }
  });
  var mobileSearchBtn = document.querySelector("#mobile-search-btn");
  var mobileMenuBtn = document.querySelector("#mobile-menu-btn");
  var logo = document.querySelector("#logo");
  var headerRightItems = document.querySelector("#header-right-items");
  var returnToHeaderBtn = document.querySelector("#return-to-header-btn");
  var search = document.querySelector("#search");
  var mobileNavMenu = document.querySelector("#mobile-nav-menu");
  mobileSearchBtn.addEventListener("click", function (e) {
    logo.classList.add("hidden");
    headerRightItems.classList.add("w-full");
    mobileMenuBtn.classList.add("hidden");
    returnToHeaderBtn.classList.remove("hidden");
    search.classList.remove("hidden");
  });
  returnToHeaderBtn.addEventListener("click", function () {
    logo.classList.remove("hidden");
    headerRightItems.classList.remove("w-full");
    mobileMenuBtn.classList.remove("hidden");
    returnToHeaderBtn.classList.add("hidden");
    search.classList.add("hidden");
  });
  mobileMenuBtn.addEventListener("click", function () {
    mobileNavMenu.classList.toggle("hidden");
  });
});
//# sourceMappingURL=all.js.map
