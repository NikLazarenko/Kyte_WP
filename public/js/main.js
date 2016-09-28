$(document).ready(function() {

    //  fixed header
    $(window).scroll(function() {
        var scrollHeight = $(this).scrollTop();
        if (scrollHeight > 700) {
            $(".header").addClass('header--fixed');
        } else {
            $(".header").removeClass('header--fixed');
        }
    });

    $('.header__menu a, .about__button, .header__mobile-link').click(function(){
        $(this).mPageScroll2id({offset: 60});
    });

    $('.portfolio__items').slick({
        autoplay: true,
        autoplaySpeed: 1500,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    autoplaySpeed: 2000,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    autoplaySpeed: 2000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
    ]
    });

    var clicked = 0;
    //hamburger handler
    $('.hamburger').click(function () {
        $(this).toggleClass('is-active');
        if (clicked == 0) {
            $('.header__mobile-menu').removeClass('animated fadeOutRight').addClass('animated fadeInRight header__mobile-menu--is-visible');
            clicked = 1;
        } else if (clicked == 1) {
            $('.header__mobile-menu').removeClass('animated fadeInRight').addClass('animated fadeOutRight');
            clicked = 0;
        }
    });

    $('.header__mobile-link').click(function () {
        $('.header__mobile-menu').removeClass('animated fadeInRight').addClass('animated fadeOutRight');
        clicked = 0;
        $('.hamburger').toggleClass('is-active');
    });


    $(window).resize(function(){
        if($(this).width() > 768){
            $('.header__mobile-menu').removeClass('header__mobile-menu--is-visible animated-menu fadeOutRight fadeInRight');
            $('.hamburger').removeClass('is-active');
            clicked = 0;
        }
    });

});