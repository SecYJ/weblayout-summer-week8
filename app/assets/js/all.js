window.addEventListener("DOMContentLoaded", () => {
    const masonryInit = (element, options) => {
        const { gutter, columnWidth, itemSelector } = options;
        const masonry = new Masonry(element, {
            itemSelector,
            columnWidth,
            gutter,
            percentPosition: true,
            horizontalOrder: true,
        });
        imagesLoaded(element).on("progress", function () {
            // layout Masonry after each image loads
            masonry.layout();
        });
    };

    const artworkGrid = document.querySelector("#artwork-grid");
    console.log(artworkGrid);
    if (artworkGrid) {
        const options = {
            itemSelector: ".artwork-item",
            gutter: ".artwork-gutter",
            columnWidth: ".artwork-sizer",
        };
        masonryInit(artworkGrid, options);
    }

    const swiper = new Swiper(".swiper", {
        loop: true,
        slidesPerView: 1,
        freeMode: true,
        resizeObserver: true,
        autoplay: {
            delay: 3000,
            disabledOnInteraction: false,
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
                centeredSlides: true,
            },
        },
        pagination: {
            el: ".artists-pagination",
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
});
