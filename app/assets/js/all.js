window.addEventListener("DOMContentLoaded", () => {
    // init Masonry
    // || "collection.grid"
    const artworkGrid = document.querySelector(".artwork-grid");
    const artworkMasonry = new Masonry(artworkGrid, {
        itemSelector: ".artwork-item",
        columnWidth: ".artwork-sizer",
        percentPosition: true,
        gutter: ".artwork-gutter",
        horizontalOrder: true,
    });
    imagesLoaded(artworkGrid).on("progress", function () {
        // layout Masonry after each image loads
        artworkMasonry.layout();
    });

    const swiper = new Swiper(".swiper", {
        loop: true,
        slidesPerView: 1,
        freeMode: true,
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
});
