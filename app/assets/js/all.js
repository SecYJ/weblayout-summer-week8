window.addEventListener("DOMContentLoaded", () => {
    AOS.init();
    const masonryInit = (element, options) => {
        const { gutter, columnWidth, itemSelector } = options;
        const masonry = new Masonry(element, {
            itemSelector,
            columnWidth,
            gutter,
            percentPosition: true,
            horizontalOrder: true,
        });
        if (!element) return;
        imagesLoaded(element).on("progress", function () {
            // layout Masonry after each image loads
            masonry.layout();
        });
    };

    const artworkGrid = document.querySelector("#artwork-grid");
    if (artworkGrid) {
        const options = {
            itemSelector: ".artwork-item",
            gutter: ".artwork-gutter",
            columnWidth: ".artwork-sizer",
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
            disableOnInteraction: false,
        },
        initialSlide: 1,
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 24,
                centeredSlides: true,
            },
        },
        pagination: {
            el: ".artists-pagination",
            clickable: true,
        },
    });

    const mobileSearchBtn = document.querySelector("#mobile-search-btn");
    const mobileMenuBtn = document.querySelector("#mobile-menu-btn");
    const logo = document.querySelector("#logo");
    const headerRightItems = document.querySelector("#header-right-items");
    const returnToHeaderBtn = document.querySelector("#return-to-header-btn");
    const search = document.querySelector("#search");
    const mobileNavMenu = document.querySelector("#mobile-nav-menu");

    mobileSearchBtn.addEventListener("click", (e) => {
        logo.classList.add("hidden");
        headerRightItems.classList.add("w-full");
        mobileMenuBtn.classList.add("hidden");
        returnToHeaderBtn.classList.remove("hidden");
        search.classList.remove("hidden");
    });

    returnToHeaderBtn.addEventListener("click", () => {
        logo.classList.remove("hidden");
        headerRightItems.classList.remove("w-full");
        mobileMenuBtn.classList.remove("hidden");
        returnToHeaderBtn.classList.add("hidden");
        search.classList.add("hidden");
    });

    mobileMenuBtn.addEventListener("click", () => {
        mobileNavMenu.classList.toggle("hidden");
    });

    const artworkBtn = document.querySelector("#artwork-btn");
    const collectionBtn = document.querySelector("#collection-btn");

    if (artworkBtn && collectionBtn) {
        const showcaseTabSwitch = (e) => {
            const targetString =
                e.target.dataset?.targetEl ||
                e.target.parentElement.dataset.targetEl;
            const closeEl =
                targetString === "#collection-items"
                    ? "#artwork-items"
                    : "#collection-items";

            document.querySelector(closeEl).classList.add("hidden");
            document.querySelector(targetString).classList.remove("hidden");
            document.querySelector(targetString).classList.add("border-black");

            if (targetString === "#collection-items") {
                const options = {
                    itemSelector: ".collection-item",
                    gutter: ".collection-gutter",
                    columnWidth: ".collection-sizer",
                };

                masonryInit("#collection-items", options);

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

    const productItems = document.querySelector("#product-items");
    if (productItems) {
        const options = {
            gutter: ".product-gutter",
            columnWidth: ".product-sizer",
            itemSelector: ".product-item",
        };
        masonryInit(productItems, options);
    }

    const productFilterBtn = document.querySelector("#product-filter-btn");
    let productNavState = false;

    const toggleProductNav = () => {
        const productNavbar = document.querySelector("#product-navbar");
        const navbarCloseBtn = document.querySelector(
            "#product-navbar-close-btn"
        );

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

    const artIntro = document.querySelector("#art-introduction");
    if (artIntro) {
        const options = {
            gutter: ".art-intro-gutter",
            columnWidth: ".art-intro-sizer",
            itemSelector: ".art-intro-item",
        };
        masonryInit(artIntro, options);
    }

    new Swiper("#other-works-swiper", {
        loop: true,
        slideClass: "other-works-slide",
        slidesPerView: 2,
        spaceBetween: 24,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 24,
            },
        },
        pagination: {
            clickable: true,
            el: ".other-works-pagination",
        },
    });

    const exploreItems = document.querySelector("#explore-items");
    if (exploreItems) {
        const options = {
            gutter: ".explore-gutter",
            columnWidth: ".explore-sizer",
            itemSelector: ".explore-item",
        };
        masonryInit(exploreItems, options);
    }

    const walletBtn = document.querySelector("#wallet-btn");
    const mobileWalletBtn = document.querySelector("#mobile-wallet-btn");
    const walletCloseBtn = document.querySelector("#wallet-modal-close-btn");
    const toggleWalletModal = (e) => {
        e.preventDefault();
        const walletModal = document.querySelector("#wallet-modal");
        walletModal.classList.toggle("pointer-events-none");
        walletModal.classList.toggle("opacity-0");
        walletModal.classList.toggle("-translate-x-full");
    };

    walletBtn.addEventListener("click", toggleWalletModal);
    mobileWalletBtn.addEventListener("click", toggleWalletModal);
    walletCloseBtn.addEventListener("click", toggleWalletModal);
});
