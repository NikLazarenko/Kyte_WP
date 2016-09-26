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
});