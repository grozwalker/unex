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

    $('a.docs-fancy').fancybox();

    $("#phone").mask("+7 (999) 99-99-999");

    $('.nav__link').click(function(e) {
        e.preventDefault();

        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 100 } , 500);
    });

    $('.btn_type_consultation').click(function(e) {
        e.preventDefault();

        $('#request').toggle('500');

    });

    $('.close').click(function(e) {
        e.preventDefault();

        $('#request').toggle('500');
    });

});
