var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 24,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 24,
        }
    }
});