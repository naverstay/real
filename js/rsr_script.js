var packerySizer, isotop, resizeTimer;

$(function ($) {

    packerySizer = $('.packerySizer');

    isotop = $('#grid');

    isotop.imagesLoaded(function () {

        isotop.one('arrangeComplete', function () {
            isotop.addClass('loaded');
        });

        isotop.isotope({
            //layoutMode: 'masonry',
            transitionDuration: 0,
            layoutMode: 'fitRows',
            fitRows: {
                gutter: 0
            },
            masonry: {
                gutter: 0
            },
            itemSelector: '.box',
            percentPosition: true
        });

    });

    isotop.find('.box .rsr_item').on('click', function () {
        var firedEl = $(this).parent();

        if (firedEl.hasClass('hovered')) {
            isotop.removeClass('hover');
            firedEl.removeClass('hovered').find('.rsr_info').slideUp(0);
            firedEl.attr('style', firedEl.attr('style').replace(/margin.+;/ig, ''));

            fitPackeryHeight();

        } else {
            firedEl.siblings().removeClass('hovered').find('.rsr_info').slideUp(0);

            firedEl.siblings().each(function (ind) {
                var box = $(this);

                box.attr('style', box.attr('style').replace(/margin.+;/ig, ''));
            });

            isotop.addClass('hover');
            
            firedEl.addClass('hovered').find('.rsr_info').width(isotop.parent().width()).slideDown(0);

            fitPackeryHeight();

            setTimeout(function () {
                scrollTo(firedEl.offset().top - 60, 600);
            }, 10);
        }

    });
    
});

function fitPackeryHeight() {

    var openBox = $('.box.hovered'), rowMargin = openBox.find('.rsr_info').height() + 45;

    openBox.css('marginBottom', rowMargin);

    openBox.find('.rsr_info').width(isotop.parent().width());

    isotop.isotope('arrange');

}

$(window).resize(function () {

    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(function () {
        fitPackeryHeight();
    }, 50);


});