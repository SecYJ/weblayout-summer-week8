"use strict";

window.addEventListener("DOMContentLoaded", function () {
  AOS.init();

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
    if (!element) return;
    imagesLoaded(element).on("progress", function () {
      // layout Masonry after each image loads
      masonry.layout();
    });
  };

  var artworkGrid = document.querySelector("#artwork-grid");

  if (artworkGrid) {
    var options = {
      itemSelector: ".artwork-item",
      gutter: ".artwork-gutter",
      columnWidth: ".artwork-sizer"
    };
    masonryInit(artworkGrid, options);
  }

  new Swiper("#artists-swiper", {
    slideClass: "artist-slide",
    slideActiveClass: "artist-slide-active",
    slidePrevClass: "artist-slide-prev",
    slideNextClass: "artist-slide-next",
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    initialSlide: 1,
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 24,
        centeredSlides: true
      }
    },
    pagination: {
      el: ".artists-pagination",
      clickable: true
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

  if (artworkBtn && collectionBtn) {
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
  }

  var productItems = document.querySelector("#product-items");

  if (productItems) {
    var _options2 = {
      gutter: ".product-gutter",
      columnWidth: ".product-sizer",
      itemSelector: ".product-item"
    };
    masonryInit(productItems, _options2);
  }

  var productFilterBtn = document.querySelector("#product-filter-btn");
  var productNavState = false;

  var toggleProductNav = function toggleProductNav() {
    var productNavbar = document.querySelector("#product-navbar");
    var navbarCloseBtn = document.querySelector("#product-navbar-close-btn");

    if (!productNavState) {
      productNavbar.classList.remove("-translate-x-full");
      navbarCloseBtn.addEventListener("click", toggleProductNav);
    } else {
      productNavbar.classList.add("-translate-x-full");
      navbarCloseBtn.removeEventListener("click", toggleProductNav);
    }

    productNavState = !productNavState;
  };

  if (productFilterBtn) {
    productFilterBtn.addEventListener("click", toggleProductNav);
  }

  var artIntro = document.querySelector("#art-introduction");

  if (artIntro) {
    var _options3 = {
      gutter: ".art-intro-gutter",
      columnWidth: ".art-intro-sizer",
      itemSelector: ".art-intro-item"
    };
    masonryInit(artIntro, _options3);
  }

  new Swiper("#other-works-swiper", {
    loop: true,
    slideClass: "other-works-slide",
    slidesPerView: 2,
    spaceBetween: 24,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 24
      }
    },
    pagination: {
      clickable: true,
      el: ".other-works-pagination"
    }
  });
  var exploreItems = document.querySelector("#explore-items");

  if (exploreItems) {
    var _options4 = {
      gutter: ".explore-gutter",
      columnWidth: ".explore-sizer",
      itemSelector: ".explore-item"
    };
    masonryInit(exploreItems, _options4);
  }

  var walletBtn = document.querySelector("#wallet-btn");
  var mobileWalletBtn = document.querySelector("#mobile-wallet-btn");
  var walletCloseBtn = document.querySelector("#wallet-modal-close-btn");

  var toggleWalletModal = function toggleWalletModal(e) {
    e.preventDefault();
    var walletModal = document.querySelector("#wallet-modal");
    walletModal.classList.toggle("pointer-events-none");
    walletModal.classList.toggle("opacity-0");
    walletModal.classList.toggle("-translate-x-full");
  };

  walletBtn.addEventListener("click", toggleWalletModal);
  mobileWalletBtn.addEventListener("click", toggleWalletModal);
  walletCloseBtn.addEventListener("click", toggleWalletModal);
});
//# sourceMappingURL=all.js.map
