var nav_container,
    nav,
    doc,
    wnd,
    scrn,
    first_section,
    asideCaption,
    scrLoaders,
    scrollTimer,
    $body;

$(function ($) {

    $body = $("body");
    scrLoaders = $(".onScrollLoader");
    wnd = $(window);
    first_section = $('.slogan');
    doc = $(document);
    nav_container = $(".header");
    asideCaption = $(".asideCaption");
    nav = $(".main_menu");

    $body.addClass('show_tip_btn show_right_helper');

    setTimeout(function () {
        $body.removeClass('show_tip_btn');
    }, 4000);


    //$(".tabsBlock").tabs({
    //	activate: function(event, ui){
    //
    //		var curTab = $('#' + $(ui.newPanel).attr('id')), oldTab = $('#' + $(ui.oldPanel).attr('id'));
    //
    //		oldTab.find('.nicescrollBlock').getNiceScroll().hide();
    //
    //		curTab.find('.nicescrollBlock').getNiceScroll().resize().show();
    //
    //	}
    //});

    $('.openMobMenu').on('click', function () {

        $body.toggleClass('open_mob_menu');

        return false;
    });

    $('.asideMenuBtn').on('click', function () {

        $body.toggleClass('open_aside_menu');

        return false;
    });

    //$body.addClass('open_aside_menu');

    $('.subMenuOpen').on('click', function () {
        $('.menu_item.active').removeClass('active');
        $(this).toggleClass('opened');
        $('.subMenuList').slideToggle();

        return false;
    });

    $('.nicescrollBlock').each(function (ind) {
        var ns = $(this);

        ns.niceScroll({
            //cursorcolor       : "#666",
            //cursorfixedheight : 13,
            scrollspeed: 10,
            cursorwidth: 4,
            cursorborder: 'none',
            cursorborderradius: 0,
            bouncescroll: false,
            autohidemode: false,
            railsclass: ns.data('rails_class'),
            railpadding: {top: 0, right: 0, left: 0, bottom: 0}
        });

    });

    $('.scrollTo').on('click', function () {
        var firedEl = $(this);

        scrollTo($(firedEl.attr("href")).offset().top, 1000);

        return false;
    });


    resize_f();

    scroll_f();

    initPopup();

});

function initPopup() {


    $(".popupBtn").fancybox(
        {
            helpers: {
                title: null,
                overlay: {
                    locked: false,
                    css: {'background': 'rgba(33,33,33,.7)'}
                }
            },
            fitToView: false,
            autoSize: false,
            width: 900,
            height: 'auto',
            maxWidth: "98%",
            padding: 10, // отступ контента от краев окна
            imageScale: false, // Принимает значение true - контент(изображения) масштабируется по размеру окна, или false - окно вытягивается по размеру контента. По умолчанию - TRUE
            zoomOpacity: false,	// изменение прозрачности контента во время анимации (по умолчанию false)
            scrolling: 'no',
            //frameWidth: 920,	 // ширина окна, px (425px - по умолчанию)
            //frameHeight: 480, // высота окна, px(355px - по умолчанию)
            overlayShow: true, // если true затеняят страницу под всплывающим окном. (по умолчанию true). Цвет задается в jquery.fancybox.css - div#fancy_overlay 
            overlayOpacity: 1,	 // Прозрачность затенения 	(0.3 по умолчанию)
            //"hideOnContentClick": false, // Если TRUE  закрывает окно по клику по любой его точке (кроме элементов навигации). Поумолчанию TRUE		
            centerOnScroll: false, // Если TRUE окно центрируется на экране, когда пользователь прокручивает страницу		
            afterLoad: function (e) {
                $(".fancybox-wrap").addClass("fancy_popup");

                $body.removeClass('show_tip_btn show_right_helper');

            },
            afterClose: function (e) {

                $body.addClass('show_tip_btn show_right_helper');

                setTimeout(function () {
                    $body.removeClass('show_tip_btn');
                }, 4000);

            }
        });


    $('.validateMe').each(function (ind) {
        $(this).validationEngine({
            //binded                   : false,
            scroll: false,
            //showPrompts: false,
            showArrow: false,
            addSuccessCssClassToField: 'input_success',
            addFailureCssClassToField: 'input_error',
            //parentFieldClass: '.form_cell',
            //parentFormClass: '.order_block',
            promptPosition: "bottomLeft",
            //doNotShowAllErrosOnSubmit: true,
            //focusFirstField          : false,
            autoHidePrompt: false,
            autoHideDelay: 2000,
            autoPositionUpdate: true,
            //prettySelect             : true,
            //useSuffix                : "_VE_field",
            addPromptClass: 'real_mode',
            showOneMessage: false
        });
    });

}

$(window).on('resize', function () {
    resize_f();
});

$(window).on('scroll', function (e) {
    scroll_f(e);
});

function resize_f() {

    scrn = parseInt(window.getComputedStyle(
        document.querySelector('body'), ':before'
    ).getPropertyValue('content').replace(/'|"/ig, ''));

}

function scroll_f(e) {


    if (wnd.width() > 1024) {
        $('.subMenuList').slideUp();

        $('.subMenuOpen').removeClass('opened');
    }

    clearTimeout(scrollTimer);

    scrLoaders.each(function (ind) {
        var block = $(this);

        //console.log(wnd.height() , block.offset().top , doc.scrollTop() , parseInt(block.attr('data-scroll-offset') || 0));

        if (wnd.height() >= block.offset().top - doc.scrollTop() + parseInt(block.attr('data-scroll-offset') || 0)) {
            block.addClass(block.attr('data-scroll-class'));
        } else {
            block.removeClass(block.attr('data-scroll-class'));
        }
    });

    var scrollLeft = doc.scrollLeft();
    //nav_container.css({
    //    'marginLeft': (scrollLeft > 0 ? -scrollLeft : 0),
    //    'marginRight': (scrollLeft > 0 ? scrollLeft : 0)
    //});

    scrollTimer = setTimeout(function () {
        if ($(document).scrollTop() > first_section.outerHeight()) {
            nav_container.stop().addClass("sticky");
        } else {
            nav_container.stop().removeClass("sticky");
        }

        if (asideCaption.length) {

            //console.log($('.menuList').offset().top, $(document).scrollTop(), nav_container.outerHeight(), asideCaption.outerHeight());


            if ($(document).scrollTop() > nav_container.outerHeight() && $('.asideCaptionAnchor').offset().top - nav_container.outerHeight() - asideCaption.outerHeight() < $(document).scrollTop()) {
                asideCaption.stop().addClass("sticky");

            } else {
                asideCaption.stop().removeClass("sticky");
            }

            if (asideCaption.hasClass("sticky")) {
                $('.menuList').height(wnd.height() - nav_container.outerHeight() - asideCaption.outerHeight() - 20);
            } else {
                $('.menuList').height(wnd.height() + doc.scrollTop() - $('.asideCaptionAnchor').offset().top - 40);
            }

        }

    }, 10);
}

function scrollTo(pos, speed, callback) {

    $('html,body').animate({'scrollTop': pos}, speed);

    if (typeof(callback) == 'function') {
        callback();
    }
}

function initialize() {

    var MY_MAPTYPE_ID = 'custom_style';
    var mapOptions = {
            scrollwheel: false,
            //navigationControl: false,
            mapTypeControl: false,
            //scaleControl     : false,
            //draggable        : false,
            zoom: 16,
            center: new google.maps.LatLng(55.766193, 37.625828),
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
            },
            mapTypeId: MY_MAPTYPE_ID
        },
        featureOpts = [{
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [{"color": "#ccc5bd"}]
        }, {"featureType": "administrative.land_parcel", "stylers": [{"color": "#808080"}, {"visibility": "off"}]}, {}];

    var map = new google.maps.Map(document.getElementById('main_map'),
        mapOptions);

    var companyPos = new google.maps.LatLng(55.768193, 37.629228);

    map = new google.maps.Map(document.getElementById('main_map'), mapOptions);

    var styledMapOptions = {
        name: 'Custom Style'
    };

    var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
    map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

    var image = {
        url: 'i/marker.png',
        // This marker is 20 pixels wide by 32 pixels tall.
        size: new google.maps.Size(120, 86),
        // The origin for this image is 0,0.
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at 0,32.
        anchor: new google.maps.Point(0, 86)
    };

    var customMarker = {
        path: 'M115 0H5C2.24 0 0 2.24 0 5v50c0 2.76 2.24 5 5 5h10.01v26.01L37.58 60H115c2.76 0 5-2.24 5-5V5C120 2.24 117.76 0 115 0z',
        fillColor: '#ff395a',
        fillOpacity: 1,
        scale: 1,
        strokeColor: 'gold',
        strokeWeight: 0
    };

    var marker = new google.maps.Marker({
        position: companyPos,
        icon: image,
        map: map
    });

}

//google.maps.event.addDomListener(window, 'load', initialize);