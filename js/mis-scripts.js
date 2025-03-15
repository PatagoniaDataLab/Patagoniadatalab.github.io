$(function () {

    /*-------------------------
    FUNCIONES PARA EL MENU PRINCIPAL
    --- -----------------------*/

    /*Insertar y quitar la clase ".icono-cerrar" al boton del menu"*/

    $('#menu-navegacion .navbar-toggler').click(function () {
        $('.boton-menu').toggleClass('icono-cerrar');
    });

    /*Insertar y quitar la clase ".icono-cerrar" al boton del menu"*/
    $('#menu-navegacion .navbar-nav a').click(function () {

        /*quita la clase ".icono-cerrar"*/
        $('.boton-menu').removeClass('icono-cerrar');

        /*contraemos el menu*/
        $('#menu-navegacion .navbar-collapse').collapse('hide');


    });

    /*-----------------------------------------------------------
     2. INICIANDO SWIPER
     -------------------------------------------------------------*/

    var swiper = new Swiper('.mySwiper ', {

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        speed:3000,
        loop: true,
        autoplay: {
            delay: 5000,
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
       
    });


    /*-----------------------------------------------------------
     2. INICIANDO COUNTERUP
     -------------------------------------------------------------*/
     $('.counter').counterUp();

    /*-----------------------------------------------------------
     2. encabezado fijo en el celu
    -------------------------------------------------------------*/

     $('#menu-navegacion').stickit({
        classname: 'menufijo'
     });

    /*-----------------------------------------------------------
     2. Iniciando "page-scroll-to-id"
    -------------------------------------------------------------*/


     $('#menu-principal a').mPageScroll2id({
        offset:50,
        highlightClass:'active'

     });
})