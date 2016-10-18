var priceData, data_url = 'prices/all.html';

$(function ($) {
    var priceTableLoader = $('.priceTableLoader'), priceTitle = $('.priceTitle'), surpriseSlider;

    function priceLoader(cls, title, desc) {
        priceTableLoader.find('.price_table_row').hide();
        priceTableLoader.find('.' + cls).show();
        priceTitle.text(title);

        $('.priceDescription').hide();

        scrollTo(0, 0);

        $('.priceDescription[data-description=' + desc + ']').show();
    }

    $('.priceLoadBtn').on('click', function () {
        var firedEl = $(this);

        //$.ajax({
        //    type: "GET",
        //    url: firedEl.attr('href')
        //}).done(function (data) {
        //    priceTableLoader.html(data);
        //});

        priceLoader(firedEl.attr('href'), firedEl.attr('data-title'), firedEl.attr('data-description') || 2);

        firedEl.closest('.menuList').find('.aside_m_item.active').removeClass('active');

        firedEl.parent().addClass('active');

        if (!firedEl.closest('.collapseBlock').length) {
            $('.collapseBlock').slideUp();
        }

        $body.removeClass('open_aside_menu');

        return false;
    });


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

        if (!isOpened || firedEl.parent().hasClass('active')) {
            $('.collapseBlock').not(firedEl.next('.collapseBlock')).slideUp();
            firedEl.next('.collapseBlock').slideToggle();
        }

        firedEl.closest('.menuList').find('.aside_m_item.active').removeClass('active');

        firedEl.parent().addClass('active');

        priceLoader(firedEl.attr('href'), firedEl.attr('data-title'), firedEl.attr('data-description') || 2);

        return false;
    });


    $('.priceFirstLoad').click();

    $body.addClass('open_aside_menu');


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