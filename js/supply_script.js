var boxHeight, packerySizer, isotop;

$(function ($) {

    packerySizer = $('.packerySizer');

    isotop = $('#grid');

    isotop.imagesLoaded(function () {

        fitPackeryHeight();

        isotop.one('arrangeComplete', function () {
            isotop.addClass('loaded');
        });

        isotop.isotope({
            layoutMode: 'packery',
            transitionDuration: 0,
            packery: {
                gutter: 0
            },
            itemSelector: '.box',
            percentPosition: true
        });

    });

});

function fitPackeryHeight() {
    boxHeight = packerySizer.height() + 80;

    isotop.find('.box').height(boxHeight);
    isotop.find('.box.tall').height(22 + boxHeight * 2);
}

$(window).resize(function () {

    fitPackeryHeight();

    isotop.isotope('arrange');
});