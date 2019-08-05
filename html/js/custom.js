jQuery(document).ready(function () {

    'use strict';

    /* Sticky Header */
    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() > 130) {
            jQuery('.header').addClass('sticky');

        }
        else {
            jQuery('.header').removeClass('sticky');

        }
    });

    jQuery(window).width();
    if ($(window).width() < 767) {
        var owl = $('.seo_points .row, .projects .row').owlCarousel({
            loop: false,
            nav: true,
            dots: true,
            items: 1
        });
    }
    /*********************** Mmenu *********************/

    if ($(window).width() < 1001) {
        $("#mobile_menu").mmenu({
            extensions: ["pageshadow", "border-full", "effect-listitems-slide"],
            offCanvas: { position: "right" }
        }, {
                // configuration
                classNames: {
                    fixedElements: {
                        fixed: "abc"
                    }
                }
            });
    }


    /* OWL Carosel */
    $('.owl-dot').click(function () {
        owl.trigger('to.owl.carousel', [$(this).index(), 300]);
    });

    /*****in page****/
    $('.slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            }

        }
    });

    $('.gallery_carousel').owlCarousel({
        loop: true,
        margin: 110,
        nav: true,
        responsive: {
            0: {
                items: 1
            }

        }
    });




    /************************ back to top **************************/
    var winwidth = jQuery(window).width();
    if (winwidth < 768) {
        var first_col_cont = jQuery('.first_col ul').html();
        jQuery('.sec_col ul').html(first_col_cont);
    }

    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 500,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function () {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function (event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, scroll_top_duration
        );
    });

    /************************ smooth scrolling **************************/
    $('a.arrows[href*=#],.interactive_map .msg_btn[href*=#], .hero_project .msg_btn.right[href*=#],.project_list .msg_btn[href*=#]').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            /*var custom_mm = $("#mobile_menu").data( "mmenu" );	
              custom_mm.close();*/
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top - 80;
                $('html,body')
                    .animate({ scrollTop: targetOffset }, 1000);
                return false;
            }
        }
    });



    /************************************ open box *************************************************/
    setTimeout(function () {

    var $el, $ps, totalHeight, $p;
    jQuery(".collaps_box .expand").click(function (e) {
        jQuery(this).parents('.expandermain').addClass("open_box");
        e.preventDefault();
        totalHeight = 0;
        $el = $(this);
        $p = $el.parent();

        $ps = $p.find(".expand_content");
        $ps.each(function () {
            totalHeight += $(this).outerHeight();
        });

        $p.find('.inner_expand').css('max-height', $ps.height() + 100);
        $el.fadeOut();
        $el.next().fadeIn();
        return false;
    });
    }, 3000);



    jQuery(".expand_content  > a.expand_title , .collaps_box a img").click(function (e) {

        if (jQuery(this).parents('.expandermain').is('.open_box')) {

            jQuery(this).parents('.expandermain').removeClass("open_box");
            e.preventDefault();
            totalHeight = 0;
            $el = $(this).parents('.expandermain');

            $el.find('.inner_expand').css('max-height', '320px');
            $el.find('.expand.msg_btn').fadeIn();
            $el.find('.collapse.msg_btn').fadeOut();
            return false;
        }
        else {
            jQuery(this).parents('.expandermain').addClass("open_box");
            e.preventDefault();
            totalHeight = 0;
            $el = $(this).parents('.expandermain');
            $p = $el.parent();

            $ps = $p.find(".expand_content");
            $ps.each(function () {
                totalHeight += $(this).outerHeight();
            });

            $p.find('.inner_expand').css('max-height', $ps.height() + 100);
            $el.find('.expand.msg_btn').fadeOut();
            $el.find('.collapse.msg_btn').fadeIn();

            return false;


        }

    });


    jQuery(".collaps_box .collapse").click(function (e) {
        jQuery(this).parents('.expandermain').removeClass("open_box");
        e.preventDefault();
        totalHeight = 0;
        $el = $(this);
        $p = $el.parent();

        $ps = $p.find(".expand_content");
        $p.find('.inner_expand').css('max-height', '320px');
        $el.fadeOut();
        $el.prev().fadeIn();
        return false;
    });

    /******************* accordion *****************************/

    function close_accordion_section() {
        $('.accordion .accordion-section-title ').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }

    $('.accordion-section-title').click(function (e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');
        if ($(e.target).is('.active')) {
            close_accordion_section();
        } else {
            close_accordion_section();

            // Add active class to section title
            $(this).addClass('active');

            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
        }

        e.preventDefault();

    });

    $('.accordion-section  > a').click(function (e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');

        if ($(this).parent().find('.accordion-section-title').is('.active')) {
            close_accordion_section();
        } else {
            close_accordion_section();

            // Add active class to section title
            $(this).parent().find('.accordion-section-title').addClass('active');

            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');

        }

        e.preventDefault();

    });



});
