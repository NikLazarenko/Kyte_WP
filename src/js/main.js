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

    $('.header__menu a, .about__button').click(function(){
        $(this).mPageScroll2id({offset: 60});
    });

});