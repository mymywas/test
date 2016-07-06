function sliderIndex() {
    var swiper = new Swiper('.MysSwiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        speed: 3000,
        autoplay: 3000,
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 400,
            modifier: 1,
            width: 500,
            height: 500,
            coverwidth: 500,
            slideShadows: true
        }
    });
}
sliderIndex();
