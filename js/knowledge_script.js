var priceData, data_url = 'prices/all.html';

$(function ($) {
    var priceTableLoader = $('.priceTableLoader'), surpriseSlider;

    $('.priceLoadBtn').on('click', function () {
        var firedEl = $(this);

        $.ajax({
            type: "GET",
            url: firedEl.attr('href')
        }).done(function (data) {
            priceTableLoader.html(data);

            surpriseSlider = new Swiper('.surpriseSlider', {
                loop: false,
                setWrapperSize: true,
                slidesPerView: 'auto',
                spaceBetween: 9,
                freeMode: true
            });

        });

        firedEl.closest('.menuList').find('.aside_m_item.active').removeClass('active');

        firedEl.parent().addClass('active');

        return false;
    });

    if ($('.surpriseSlider').length) {
        surpriseSlider = new Swiper('.surpriseSlider', {
            loop: false,
            setWrapperSize: true,
            slidesPerView: 'auto',
            spaceBetween: 9,
            freeMode: true
        });
    }

    $('.collapseBtn').on('click', function () {
        var firedEl = $(this), isOpened = firedEl.next('.collapseBlock').is(':visible');

        //if (!isOpened) {
        //    $.ajax({
        //        type: "GET",
        //        url: firedEl.attr('href')
        //    }).done(function (data) {
        //        $('.priceTableLoader').html(data);
        //    });
        //}

        $('.collapseBlock').not(firedEl.next('.collapseBlock')).each(function (ind) {

            var list = $(this);

            if (list.parent().find('.aside_m_item.active').length) {
                list.parent().addClass('active');
            }
            
            list.slideUp();
        });

        firedEl.next('.collapseBlock').slideToggle();

        //firedEl.closest('.menuList').find('.aside_m_item.active').removeClass('active');

        if (firedEl.parent().find('.aside_m_item.active').length) {
            firedEl.parent().toggleClass('active', isOpened);
        }

        return false;
    });


    //$.ajax({
    //    type: "GET",
    //    url: data_url
    //}).done(function (data) {
    //    priceData = data;
    //    priceTableLoader.html(data);
    //
    //    $('.priceLoadBtn').on('click', function () {
    //        var firedEl = $(this);
    //
    //        firedEl.closest('.menuList').find('.aside_m_item.active').removeClass('active');
    //
    //        firedEl.parent().addClass('active');
    //
    //        return false;
    //    });
    //
    //});


});