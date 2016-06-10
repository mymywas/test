//function sliderIndex() {
//    var swiper = new Swiper('.MysSwiper-container', {
//        pagination: '.swiper-pagination',
//        effect: 'coverflow',
//        grabCursor: true,
//        centeredSlides: true,
//        slidesPerView: 'auto',
//        loop: true,
//        speed: 3000,
//        autoplay: 3000,
//        coverflow: {
//            rotate: 50,
//            stretch: 0,
//            depth: 400,
//            modifier: 1,
//            width: 500,
//            height: 500,
//            coverwidth: 500,
//            slideShadows: true
//        }
//    });
//}
//sliderIndex();
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
    }
});