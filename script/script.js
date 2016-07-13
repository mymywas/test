function sliderIndex() {
    var swiper = new Swiper('.MysSwiper-container', {
        pagination: '.swiper-pagination',
        slideToClickedSlide: true,
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
$.apScrollTop().on('apstScrolledTo', function (evt, details) {
    console.log('apScrollTop: scrolledTo / position: ' + details.position);
});