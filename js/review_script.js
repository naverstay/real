var reviewsBlock, reviewSlider;


$(function ($) {

    reviewsBlock = $('.reviewsSlider');

    initReviewSlider();


});


function initReviewSlider() {

    if (parseInt(scrn) <= 720) {

        if (!reviewSlider) {

            reviewSlider = new Swiper(reviewsBlock.find('.swiper-container')[0], {
                loop: false,
                setWrapperSize: true,
                slidesPerView: 1,
                spaceBetween: 10,
                //swipeHandler: galleryBlock[0],
                //centeredSlides: true,
                prevButton: reviewsBlock.find('.swiper-button-prev'),
                nextButton: reviewsBlock.find('.swiper-button-next'),
                pagination: reviewsBlock.find('.swiper-pagination'),
                paginationClickable: true,
                onDestroy: function (swp) {
                    console.log(swp);
                }
            });
        }

    } else {
        if (reviewSlider) {
            reviewSlider.destroy(true, true);

            reviewsBlock.find('.swiper-pagination').empty();

            reviewSlider = void 0;

        }
    }
}

$(window).on('resize', function () {


    initReviewSlider();


});