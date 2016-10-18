var galleryBlock,
    bulletsBlock,
    titlesBlock,
    infosBlock,
    swpGallery,
    swpBullets,
    bulletContainer,
    bulletPointer,
    swpTitles,
    galSlide,
    swpDescriptions,
    galleryWrapper,
    hInterval,
    visTimer,

    design_set = [
        [
            {
                href: 'i/designs/ds_1/1/1.jpg'
            },
            {
                href: 'i/designs/ds_1/1/2.jpg'
            },
            {
                href: 'i/designs/ds_1/1/3.jpg'
            },
            {
                href: 'i/designs/ds_1/1/4.jpg'
            },
            {
                href: 'i/designs/ds_1/1/5.jpg'
            },
            {
                href: 'i/designs/ds_1/1/6.jpg'
            },
            {
                href: 'i/designs/ds_1/1/7.jpg'
            },
            {
                href: 'i/designs/ds_1/1/8.jpg'
            },
            {
                href: 'i/designs/ds_1/1/9.jpg'
            }
        ],
        [
            {
                href: 'i/designs/ds_1/2/1.jpg'
            },
            {
                href: 'i/designs/ds_1/2/2.jpg'
            },
            {
                href: 'i/designs/ds_1/2/3.jpg'
            },
            {
                href: 'i/designs/ds_1/2/4.jpg'
            },
            {
                href: 'i/designs/ds_1/2/6.jpg'
            },
            {
                href: 'i/designs/ds_1/2/7.jpg'
            },
            {
                href: 'i/designs/ds_1/2/8.jpg'
            },
            {
                href: 'i/designs/ds_1/2/9.jpg'
            },
            {
                href: 'i/designs/ds_1/2/10.jpg'
            },
            {
                href: 'i/designs/ds_1/2/11.jpg'
            },
            {
                href: 'i/designs/ds_1/2/12.jpg'
            },
            {
                href: 'i/designs/ds_1/2/13.jpg'
            },
            {
                href: 'i/designs/ds_1/2/14.jpg'
            },
            {
                href: 'i/designs/ds_1/2/15.jpg'
            }
        ],
        [
            {
                href: 'i/designs/ds_1/3/1.jpg'
            },
            {
                href: 'i/designs/ds_1/3/2.jpg'
            },
            {
                href: 'i/designs/ds_1/3/3.jpg'
            },
            {
                href: 'i/designs/ds_1/3/4.jpg'
            },
            {
                href: 'i/designs/ds_1/3/5.jpg'
            },
            {
                href: 'i/designs/ds_1/3/6.jpg'
            },
            {
                href: 'i/designs/ds_1/3/8.jpg'
            },
            {
                href: 'i/designs/ds_1/3/9.jpg'
            },
            {
                href: 'i/designs/ds_1/3/10.jpg'
            },
            {
                href: 'i/designs/ds_1/3/11.jpg'
            },
            {
                href: 'i/designs/ds_1/3/12.jpg'
            }
        ],
        [
            {
                href: 'i/designs/ds_1/4/1.jpg'
            },
            {
                href: 'i/designs/ds_1/4/2.jpg'
            },
            {
                href: 'i/designs/ds_1/4/3.jpg'
            },
            {
                href: 'i/designs/ds_1/4/4.jpg'
            },
            {
                href: 'i/designs/ds_1/4/5.jpg'
            },
            {
                href: 'i/designs/ds_1/4/6.jpg'
            },
            {
                href: 'i/designs/ds_1/4/7.jpg'
            }
        ],
        [
            {
                href: 'i/designs/ds_1/5/1.jpg'
            },
            {
                href: 'i/designs/ds_1/5/2.jpg'
            },
            {
                href: 'i/designs/ds_1/5/3.jpg'
            },
            {
                href: 'i/designs/ds_1/5/4.jpg'
            },
            {
                href: 'i/designs/ds_1/5/5.jpg'
            },
            {
                href: 'i/designs/ds_1/5/6.jpg'
            },
            {
                href: 'i/designs/ds_1/5/7.jpg'
            },
            {
                href: 'i/designs/ds_1/5/8.jpg'
            }
        ],
        [
            {
                href: 'i/designs/ds_1/6/1.jpg'
            },
            {
                href: 'i/designs/ds_1/6/2.jpg'
            },
            {
                href: 'i/designs/ds_1/6/3.jpg'
            },
            {
                href: 'i/designs/ds_1/6/3.png'
            },
            {
                href: 'i/designs/ds_1/6/4.jpg'
            },
            {
                href: 'i/designs/ds_1/6/5.jpg'
            },
            {
                href: 'i/designs/ds_1/6/6.jpg'
            },
            {
                href: 'i/designs/ds_1/6/9.jpg'
            },
            {
                href: 'i/designs/ds_1/6/10.jpg'
            },
            {
                href: 'i/designs/ds_1/6/11.jpg'
            },
            {
                href: 'i/designs/ds_1/6/12.jpg'
            },
            {
                href: 'i/designs/ds_1/6/13.jpg'
            },
            {
                href: 'i/designs/ds_1/6/14.jpg'
            },
            {
                href: 'i/designs/ds_1/6/15.jpg'
            },
            {
                href: 'i/designs/ds_1/6/16.jpg'
            },
            {
                href: 'i/designs/ds_1/6/17.jpg'
            },
            {
                href: 'i/designs/ds_1/6/18.jpg'
            }
        ],
        [
            {
                href: 'i/designs/ds_2/1/1.jpg'
            },
            {
                href: 'i/designs/ds_2/1/2.jpg'
            }
        ],
        [
            {
                href: 'i/designs/ds_2/2/1.jpg'
            },
            {
                href: 'i/designs/ds_2/2/2.jpg'
            }
        ],
        [
            {
                href: 'i/designs/ds_2/3/1.jpg'
            }
        ],
        [
            {
                href: 'i/designs/ds_3/1/1.jpg'
            },
            {
                href: 'i/designs/ds_3/1/2.jpg'
            },
            {
                href: 'i/designs/ds_3/1/3.jpg'
            },
            {
                href: 'i/designs/ds_3/1/4.jpg'
            }
        ],
        [
            {
                href: 'i/designs/ds_3/2/1.jpg'
            },
            {
                href: 'i/designs/ds_3/2/2.jpg'
            },
            {
                href: 'i/designs/ds_3/2/3.jpg'
            }
        ]
    ];


$(function ($) {

    galleryBlock = $('#photos_gallery');
    bulletsBlock = $('#photos_bullets');
    titlesBlock = $('#photos_titles');
    infosBlock = $('#photos_info');
    bulletPointer = $('<div class="bullet_pointer" />');

    swpTitles = new Swiper(titlesBlock[0], {
        loop: false,
        setWrapperSize: true,
        slidesPerView: 1,
        spaceBetween: 0,
        swipeHandler: galleryBlock[0],

        //allowSwipeToPrev: false,
        //allowSwipeToNext: false,

        onImagesReady: function (swp) {
        },
        onSlideChangeStart: function (swp) {


        },
        onInit: function (swp) {

        }
    });

    swpDescriptions = new Swiper(infosBlock[0], {
        loop: false,
        setWrapperSize: true,
        slidesPerView: 1,
        spaceBetween: 0,
        swipeHandler: galleryBlock[0],

        //allowSwipeToPrev: false,
        //allowSwipeToNext: false,

        onImagesReady: function (swp) {
        },
        onSlideChangeStart: function (swp) {


        },
        onInit: function (swp) {

        }
    });

    swpBullets = new Swiper(bulletsBlock[0], {
        loop: false,
        setWrapperSize: true,
        slidesPerView: 5,
        spaceBetween: 0,
        //swipeHandler: galleryBlock[0],
        //centeredSlides: true,
        prevButton: '#bullet_prev',
        nextButton: '#bullet_next',

        pagination: '#bullet_pagination',
        paginationClickable: true,
        //onlyExternal: true,
        //slideToClickedSlide: true,

        //allowSwipeToPrev : false,
        //allowSwipeToNext : false,
        //watchSlidesVisibility: true,
        breakpoints: {
            1200: {
                slidesPerView: 4
            },
            960: {
                slidesPerView: 3
            },
            720: {
                slidesPerView: 1
            }
        },
        onImagesReady: function (swp) {


        },
        onSlideChangeStart: function (swp) {
            bulletsBlock.find('.swiper-slide-active .slide_name').click();
        },
        onInit: function (swp) {

            bulletContainer = $(swp.container);

            bulletContainer.find('.swiper-wrapper').prepend(bulletPointer);

            bulletClick(bulletContainer);

        }
    });

    function moveBullet(ind) {
        var slideSize = swpBullets.virtualSize / swpBullets.slides.length,
            bullets = $('#photos_bullets').find('.swiper-slide');

        //console.log(slideSize, ind);

        bulletPointer.css({
            'width': swpBullets.virtualSize / swpBullets.slides.length,
            'left': slideSize * ind
        });

        bullets.eq(ind).addClass('current').siblings().removeClass('current');

        //setTimeout(function () {
        //    bullets.eq(ind).find('.photo_slider_description').slideDown();
        //}, 600);

    }

    function bulletClick(bulletSlider) {
        bulletSlider.find('.slide_name').on('click', function () {

            $(this).parent().addClass('current').siblings().removeClass('current');

            var activeIndex = parseInt($('#photos_bullets .swiper-slide.current').attr('data-slide-index'));

            //console.log(activeIndex);

            swpGallery.slideTo(activeIndex);

            moveBullet(activeIndex);


            //galleryBlock.find('.gallery_slide').eq(parseInt(firedEl.parent().attr('data-slide-index'))).css('opacity', 1).siblings().css('opacity', 0);
            //
            //swpBullets.slideTo(swp.activeIndex);
            //swpTitles.slideTo(swp.activeIndex);
            //swpDescriptions.slideTo(swp.activeIndex);
            //moveBullet(swpBullets.activeIndex);
            //scroll_f();

            //return false;
        });
    }

    function initMainSlider() {

        galleryWrapper = $('.galleryWrapper');

        galSlide = $('.gallery_slide').eq(0).find('.slide_img img').eq(0);

        //galleryWrapper.css('height', galSlide.height());

        swpGallery = new Swiper(galleryBlock[0], {
            //loop: false,
            //direction: 'vertical',
            //slidesPerView: 1,
            //spaceBetween: 0,            
            wrapperClass: 'gallery_wrapper',
            slideClass: 'gallery_slide',

            //effect: 'fade',


            //effect: 'coverflow',
            setWrapperSize: false,
            shortSwipes: false,
            longSwipes: false,
            touchMoveStopPropagation: false,
            //paginationClickable: true,

            //onlyExternal: true,

            //prevButton: firedEl.nextAll('.swiper-button-prev'),
            //nextButton: firedEl.nextAll('.swiper-button-next'),
            //watchSlidesVisibility: true,
            onImagesReady: function (swp) {
            },

            onSlideChangeStart: function (swp) {
                var slides = swp.slides, act = swp.activeIndex;

                setTimeout(function () {
                    $(slides).not(act).find('.swiper-container').each(function (ind) {
                        this.swiper.slideTo(0);
                    });
                }, 800);

            },

            onSetTranslate: function (swp, translate) {

                if (swp.activeIndex == swp.slides.length - 1 && translate < 0) {
                    moveBullet(swp.activeIndex);
                }

                if (swp.activeIndex == 0 && translate > 0) {
                    moveBullet(swp.activeIndex);
                }

                swpBullets.slideTo(swp.activeIndex);
                swpTitles.slideTo(swp.activeIndex);
                swpDescriptions.slideTo(swp.activeIndex);

            },
            onInit: function (swp) {
                galleryBlock.css('opacity', 1);
                swpBullets.slideTo(swp.activeIndex);
                swpTitles.slideTo(swp.activeIndex);
                swpDescriptions.slideTo(swp.activeIndex);
                moveBullet(swpBullets.activeIndex);
                scroll_f();
            }
        });

        $('.slider_holder').on('mousemove', function () {
            $(this).addClass('move_it');
        });


        $('#gal_prev').on('click', function () {
            var firedEl = $(this),
                curSwiper = $('.gallery_slide.swiper-slide-active .swiper-container')[0].swiper;


            if (curSwiper.activeIndex == 0) {
                var newBullet = $('#photos_bullets .swiper-slide[data-slide-index=' + (swpGallery.activeIndex - 1) + ']');

                if (newBullet.length) {
                    newBullet.find('.slide_name').click();
                }

            } else {
                curSwiper.slidePrev();
            }

            return false;
        });

        $('#gal_next').on('click', function () {
            var firedEl = $(this),
                curSwiper = $('.gallery_slide.swiper-slide-active .swiper-container')[0].swiper;


            if (curSwiper.activeIndex == curSwiper.slides.length - 1) {

                var newBullet = $('#photos_bullets .swiper-slide[data-slide-index=' + (swpGallery.activeIndex + 1) + ']');

                if (newBullet.length) {
                    newBullet.find('.slide_name').click();
                }

            } else {
                curSwiper.slideNext();
            }
            return false;
        });


        $('.galSlider').swipe({
            //excludedElements: "button, input, select, textarea, a:not(.fancybox-nav), .noSwipe",
            threshold: 5,
            allowPageScroll: "vertical",
            tap: function (e, w) {
                var firedEl = $(w);

                if (firedEl.hasClass('swiper-pagination-bullet')) {
                    firedEl.click();
                }
            },
            swipe: function (event, direction) {
                if (direction === 'left') {
                    $('#gal_next').click();
                } else if (direction === 'right') {
                    $('#gal_prev').click();
                }
            }
        });

        $('.photoSliderDescription').swipe({
            //excludedElements: "button, input, select, textarea, a:not(.fancybox-nav), .noSwipe",
            threshold: 5,
            allowPageScroll: "vertical",

            tap: function (e, w) {
                var firedEl = $(w);

                if (firedEl.hasClass('swiper-pagination-bullet')) {
                    bulletsBlock.find('.swiper-slide').eq(firedEl.index()).find('.slide_name').click();
                }
            },

            swipe: function (event, direction) {

                if (direction === 'left') {
                    bulletsBlock.find('.swiper-slide').eq(swpGallery.activeIndex + 1).find('.slide_name').click();
                } else if (direction === 'right') {
                    bulletsBlock.find('.swiper-slide').eq(swpGallery.activeIndex - 1).find('.slide_name').click();
                }
            }
        });

        //initSwipe();

    }

    function initGal() {

        if (swpBullets != void 0 && swpTitles != void 0 && swpDescriptions != void 0) {
            clearInterval(hInterval);

            var sliderCounter = 0, sliders = galleryBlock.find('.swiper-container');

            sliders.each(function (ind) {
                var firedEl = $(this);

                sldr = new Swiper(this, {
                    loop: false,
                    setWrapperSize: true,
                    slidesPerView: 1,
                    spaceBetween: 0,
                    slideActiveClass: 'active_sld',
                    slidePrevClass: 'prev_sld',
                    slideNextClass: 'next_sld',
                    onlyExternal: true,

                    //prevButton: firedEl.nextAll('.swiper-button-prev'),
                    //nextButton: firedEl.nextAll('.swiper-button-next'),
                    pagination: firedEl.nextAll('.swiper-pagination'),
                    paginationClickable: true,
                    //watchSlidesVisibility: true,
                    onImagesReady: function (swp) {
                    },
                    onSetTranslate: function (swp, translate) {
                        //console.log(swp.activeIndex, swp.slides.length, translate);

                        if (swp.activeIndex == swp.slides.length - 1 && translate < 0) {

                            //console.log(swpBullets.activeIndex);

                            //swpBullets.slideNext();
                        }

                        if (swp.activeIndex == 0 && translate > 0) {


                            //console.log(swpBullets.activeIndex);

                            //swpBullets.slidePrev();
                        }


                    },
                    onSlideChangeStart: function (swp) {
                        //console.log(swp);
                        //swpBullets.slideTo(swp.activeIndex);
                        //swpTitles.slideTo(swp.activeIndex);
                        //swpDescriptions.slideTo(swp.activeIndex);
                        //moveBullet(swp.activeIndex);
                    },
                    onInit: function (swp) {
                        sliderCounter++;
                        //swpBullets.slideTo(swp.activeIndex);
                        //swpTitles.slideTo(swp.activeIndex);
                        //swpDescriptions.slideTo(swp.activeIndex);
                        //moveBullet(swpBullets.activeIndex);
                        //scroll_f();

                        if (sliderCounter == sliders.length) {
                            initMainSlider();
                        }

                    }
                });
            });
        }
    }

    hInterval = setInterval(function () {
        initGal();
    }, 100);


    function slidesToMove(bp) {
        //  returns number of slides to move due to screen size
        return (bp == '480' ? 1 : bp == '720' ? 2 : 3);
    }

    function swpGoPrev(swp) {
        swp.slideTo(swp.activeIndex - slidesToMove(swp.currentBreakpoint));
    }

    function swpGoNext(swp) {
        swp.slideTo(swp.activeIndex + slidesToMove(swp.currentBreakpoint));
    }

    $('.tabBtn').on('click', function () {
        var firedEl = $(this), tabHolder = firedEl.closest('.tabHolder');

        tabHolder.find('.selected').removeClass('selected');

        firedEl.parent().addClass('selected').next('.tab_unit').addClass('selected').find('.swiper-container')[0].swiper.update();

        tabHolder.find('.bullet_pointer').css('left', (33 * parseInt(firedEl.attr('data-tab'))) + '%');

        navVisCheck();

        return false;
    });


    $('.designsSlider').each(function (ind) {
        var sliderW = $(this);

        var mySwiper = new Swiper(sliderW.find('.swiper-container')[0], {
            loop: false,
            setWrapperSize: true,
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 0,
            //centeredSlides: true,
            //swipeHandler: galleryBlock[0],
            watchSlidesVisibility: true,
            prevButton: sliderW.find('.swiper-button-prev'),
            nextButton: sliderW.find('.swiper-button-next'),
            pagination: sliderW.find('.swiper-pagination'),
            paginationClickable: true,
            //allowSwipeToPrev : false,
            //allowSwipeToNext : false,
            //watchSlidesVisibility: true,
            breakpoints: {
                1023: {
                    spaceBetween: 0,
                    slidesPerView: 3
                },
                720: {
                    spaceBetween: 20,
                    slidesPerView: 1,
                    slidesPerGroup: 1
                }
            },
            onInit: function (swp) {
            }
        });
    });

    $('.projectsSlider').each(function (ind) {
        var sliderW = $(this);

        var mySwiper = new Swiper(sliderW.find('.swiper-container')[0], {
            loop: false,
            setWrapperSize: true,
            slidesPerView: 1,
            spaceBetween: 40,
            //swipeHandler: galleryBlock[0],
            //centeredSlides: true,
            prevButton: sliderW.find('.swiper-button-prev'),
            nextButton: sliderW.find('.swiper-button-next'),
            pagination: sliderW.find('.swiper-pagination'),
            paginationClickable: true,
            breakpoints: {
                720: {
                    spaceBetween: 20
                }
            }
        });
    }).on('mousemove', function () {
        $(this).addClass('move_it');
    });

    $(".fancybox_open").on('click', function () {
        var firedEl = $(this);

        $.fancybox.open(design_set[parseInt(firedEl.attr('data-design_set'))],
            {
                parent: $('.wrapper'),
                padding: 30,
                openEffect: 'none',
                closeEffect: 'none',
                transitionIn: 'none',
                transitionOut: 'none',
                nextEffect: 'fade',
                prevEffect: 'fade',
                width: 780,
                speedIn: 0,
                speedOut: 0,
                helpers: {
                    overlay: {
                        locked: false,
                        css: {'background': 'rgba(33,33,33,.8)'}

                    },
                    title: {
                        type: 'inside',
                        position: 'top'
                    }
                },
                afterShow: function () {
                    $('.wrapper').swipe({
                        excludedElements: "button, input, select, textarea, a:not(.fancybox-nav), .noSwipe",
                        threshold: 20,
                        allowPageScroll: "vertical",
                        tap: function (e, w) {
                            var firedEl = $(w);

                            if (firedEl.hasClass('fancybox-nav')) firedEl.click();

                        },
                        swipe: function (event, direction) {
                            if (direction === 'left' || direction === 'up') {
                                $.fancybox.next(direction);
                            } else {
                                $.fancybox.prev(direction);
                            }
                        }
                    });

                },
                beforeShow: function (e) {
                    this.title = (this.title ? '' + this.title + '<br />' : '') + 'Изображение ' + (this.index + 1) + ' из ' + this.group.length;
                },
                afterLoad: function (e) {
                    $(".fancybox-wrap").addClass("fancy_diz");
                }
            });

        return false;
    });

    navVisCheck();

});

function navVisCheck() {

    clearTimeout(visTimer);

    visTimer = setTimeout(function () {

        $('.designsSlider').each(function (ind) {
            var sld = $(this), hideNav = !sld.find('.swiper-slide-visible').length || sld.find('.swiper-slide-visible').length >= sld.find('.swiper-slide').length;

            sld.find('.swiper-button-prev').toggleClass('hide', hideNav);
            sld.find('.swiper-button-next').toggleClass('hide', hideNav);

        });
    }, 200);

}

$(window).on('resize', function () {

    //galleryWrapper.css('height', galSlide.height());


    //$('#photos_bullets').find('.swiper-slide:not(.current)').find('.photo_slider_description').hide();

    navVisCheck();

});


function swipeLeftFunc(e, distance) {
    var noSwipe = $(e.target).closest('.noSwipe');

    if (!noSwipe.length) {
        //console.log('left swipe');

        var photoSliderDescription = $(e.target).closest('.photoSliderDescription');

        //console.log(event, direction, distance, duration, fingerCount);

        if (photoSliderDescription.length) {
            swpGallery.slideTo(swpGallery.activeIndex + 1);
        }
    } else {
        //console.log('left swipe skipped');
    }
}

function swipeRightFunc(e, distance) {

    var noSwipe = $(e.target).closest('.noSwipe');

    if (!noSwipe.length) {
        //console.log('right swipe');

        var photoSliderDescription = $(e.target).closest('.photoSliderDescription');

        //console.log(event, direction, distance, duration, fingerCount);

        if (photoSliderDescription.length) {
            swpGallery.slideTo(swpGallery.activeIndex - 1);
        }

    } else {
        //console.log('right swipe skipped');
    }

}

function swipeUpFunc(e) {
    if ($(e.target).hasClass('.wrapper_overlay')) return false;
}

function swipeDownFunc(e) {
    if ($(e.target).hasClass('.wrapper_overlay')) return false;

    var noSwipe = $(e.target).closest('.noSwipe');

    if (!noSwipe.length) {
        /*	var playerQueueBlock = $(e.target).closest('.player_queue_block');

         if(playerQueueBlock.length){
         playerQueueBlock.closest('.hoverHolder').removeClass('btn_hovered hovered');
         }*/
    }
}

function initSwipe() {

    document.addEventListener('touchstart', handleTouchStart, true);
    document.addEventListener('touchmove', handleTouchMove, true);

    var xDown = null;
    var yDown = null;

    function handleTouchStart(evt) {
        xDown = evt.touches[0].clientX;
        yDown = evt.touches[0].clientY;
    }

    function handleTouchMove(evt) {
        if (!xDown || !yDown) {
            return;
        }

        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
            if (xDiff > 0) {
                swipeLeftFunc(evt, Math.abs(xDiff));
                /* left swipe */
            } else {
                swipeRightFunc(evt, Math.abs(xDiff));

                /* right swipe */
            }
        } else {
            if (yDiff > 0) {
                //console.log('up swipe');

                swipeUpFunc(evt);

                /* up swipe */
            } else {
                //console.log('down swipe');

                swipeDownFunc(evt);

                /* down swipe */
            }
        }
        /* reset values */
        xDown = null;
        yDown = null;
    }
}