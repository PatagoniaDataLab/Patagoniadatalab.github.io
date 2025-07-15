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
     3. INICIANDO COUNTERUP
     -------------------------------------------------------------*/
     $('.counter').counterUp();

    /*-----------------------------------------------------------
     4. encabezado fijo en el celu
    -------------------------------------------------------------*/

     $('#menu-navegacion').stickit({
        classname: 'menufijo'
     });

    /*-----------------------------------------------------------
     5. Iniciando "page-scroll-to-id"
    -------------------------------------------------------------*/


     $('#menu-principal a').mPageScroll2id({
        offset:50,
        highlightClass:'active'

     });

     /*-----------------------------------------------------------
     6. Iniciando el formulario de INGRESO
    -------------------------------------------------------------*/

     document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const user = document.getElementById('usuario').value;
  const pass = document.getElementById('contrasena').value;

  if (user === 'admin' && pass === '1234') {
    window.location.href = 'principal.html';  // Cambiá esto al link que quieras
  } else {
    alert('Usuario o contraseña incorrectos');
  }
});
})