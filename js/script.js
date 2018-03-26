$(document).ready(function () {


    let resizeFirstScreen = function() {

        // Если размер экрана больше собственной высоты блока, увеличиваем
        let currentHeight = $('.first-page').height();
        let windowHeight = $(window).height();

        if (windowHeight > currentHeight) {
            $('.first-page').height($(window).height());
        }

    };

    resizeFirstScreen();

    $('.nav__link').click(function(e) {

        e.preventDefault();

        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 100 } , 500);

    });

});
