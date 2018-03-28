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

        $('#request').toggleClass('show-modal');

    });

    $('.close').click(function(e) {
        e.preventDefault();

        $('#request').toggleClass('show-modal');
    });

    $('.request-form').submit(function (e) {
        e.preventDefault();

        $('.btn_type_submit').prop('disabled', true);
        $(this).hide();
        $('.request-loader').show();


        $.ajax({
            url: '/mail.php',
            type: "POST",
            data: $('.request-form').serialize(),
            success: function() {
                $('.request-loader').hide();
                $('.request-form').show();
                $('.success-message').show();
                $('input').val('');
            },
            error: function () {

                $('.error-message').show();

                $('.btn_type_submit').prop('disabled', false);
                $('.request-loader').hide();
                $('.request-form').show();
            }
        });
    });

});
