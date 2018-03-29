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

/*    $('.nav__link').click(function(e) {
        e.preventDefault();

        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 100 } , 500);
    });*/

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


    var $tabs = $('.tabs__item');

    $('.tabs__item').click(function () {

        $('.tabs__item').removeClass('active');

        $(this).addClass('active');

        $('.service').removeClass('active');

        $('.service:eq(' + $tabs.index(this) + ')').addClass('active');
    });

    // Cache selectors
    var lastId,
        topMenu = $('.nav'),
        topMenuHeight = topMenu.outerHeight() + 15,
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function() {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });

    menuItems.click(function(e) {
        console.log('lg_scroll');
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top - 50;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 300);
        e.preventDefault();
    });

    $(window).scroll(function() {

        var fromTop = $(this).scrollTop() + topMenuHeight;


        var cur = scrollItems.map(function() {
            if ($(this).offset().top < fromTop)
                return this;
        });
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems
                .parent().removeClass('active-link')
                .end().filter("[href='#" + id + "']").parent().addClass('active-link');
        }
    });

});
