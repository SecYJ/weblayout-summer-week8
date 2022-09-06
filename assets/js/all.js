"use strict";

window.addEventListener("DOMContentLoaded", function () {
  var masonryInit = function masonryInit(element, options) {
    var gutter = options.gutter,
        columnWidth = options.columnWidth,
        itemSelector = options.itemSelector;
    var masonry = new Masonry(element, {
      itemSelector: itemSelector,
      columnWidth: columnWidth,
      gutter: gutter,
      percentPosition: true,
      horizontalOrder: true
    });
    imagesLoaded(element).on("progress", function () {
      // layout Masonry after each image loads
      masonry.layout();
    });
  };

  var artworkGrid = document.querySelector("#artwork-grid");
  console.log(artworkGrid);

  if (artworkGrid) {
    var options = {
      itemSelector: ".artwork-item",
      gutter: ".artwork-gutter",
      columnWidth: ".artwork-sizer"
    };
    masonryInit(artworkGrid, options);
  }

  var swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 1,
    freeMode: true,
    resizeObserver: true,
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
  var artworkBtn = document.querySelector("#artwork-btn");
  var collectionBtn = document.querySelector("#collection-btn");

  var showcaseTabSwitch = function showcaseTabSwitch(e) {
    var _e$target$dataset;

    var targetString = ((_e$target$dataset = e.target.dataset) === null || _e$target$dataset === void 0 ? void 0 : _e$target$dataset.targetEl) || e.target.parentElement.dataset.targetEl;
    var closeEl = targetString === "#collection-items" ? "#artwork-items" : "#collection-items";
    document.querySelector(closeEl).classList.add("hidden");
    document.querySelector(targetString).classList.remove("hidden");
    document.querySelector(targetString).classList.add("border-black");

    if (targetString === "#collection-items") {
      var _options = {
        itemSelector: ".collection-item",
        gutter: ".collection-gutter",
        columnWidth: ".collection-sizer"
      };
      masonryInit("#collection-items", _options);
      artworkBtn.classList.remove("border-gray-dark");
      artworkBtn.classList.remove("border-b-gray-light");
      artworkBtn.classList.add("border-transparent");
      artworkBtn.classList.add("border-b-gray-dark");
      artworkBtn.classList.add("text-gray-dark");
      collectionBtn.classList.remove("border-transparent");
      collectionBtn.classList.add("border-gray-dark");
      collectionBtn.classList.add("border-b-gray-light");
      collectionBtn.classList.remove("text-gray-dark");
      return;
    }

    collectionBtn.classList.remove("border-gray-dark");
    collectionBtn.classList.remove("border-b-gray-light");
    collectionBtn.classList.add("border-transparent");
    collectionBtn.classList.add("border-b-gray-dark");
    collectionBtn.classList.add("text-gray-dark");
    artworkBtn.classList.add("border-gray-dark");
    artworkBtn.classList.add("border-b-gray-light");
    artworkBtn.classList.remove("border-transparent");
    artworkBtn.classList.remove("border-b-gray-dark");
    artworkBtn.classList.remove("text-gray-dark");
  };

  collectionBtn.addEventListener("click", showcaseTabSwitch);
  artworkBtn.addEventListener("click", showcaseTabSwitch);
});
//# sourceMappingURL=all.js.map
