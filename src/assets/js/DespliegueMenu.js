import $ from 'jquery';

$(document).ready(function () {
    $(".header__nav__destinos__enlace").mouseover(function () {
        var dpto = $(this).data('mapa');
        console.log(dpto);
        $(".mapa-menu svg#peru #sanmartin, .mapa-menu svg#peru #lambayeque, .mapa-menu svg#peru #lima, .mapa-menu svg#peru #huanuco, .mapa-menu svg#peru #ayacucho, .mapa-menu svg#peru #madredios, .mapa-menu svg#peru #moquega, .mapa-menu svg#peru #tacna, .mapa-menu svg#peru #puno, .mapa-menu svg#peru #apurimac, .mapa-menu svg#peru #ica, .mapa-menu svg#peru #ucayali, .mapa-menu svg#peru #junin, .mapa-menu svg#peru #lalibertad, .mapa-menu svg#peru #amazonas, .mapa-menu svg#peru #piura, .mapa-menu svg#peru #piura, .mapa-menu svg#peru #ancash, .mapa-menu svg#peru #arequipa, .mapa-menu svg#peru #cajamarca, .mapa-menu svg#peru #callao, .mapa-menu svg#peru #cusco, .mapa-menu svg#peru #huancavelica, .mapa-menu svg#peru #loreto, .mapa-menu svg#peru #moquegua, .mapa-menu svg#peru #pasco, .mapa-menu svg#peru #tumbes, .mapa-menu svg#peru #ucayali").removeClass("active");
        $(".mapa-menu svg#peru #" + dpto).addClass("active");
    }).mouseout(function () {
        $(".mapa-menu svg#peru #sanmartin, .mapa-menu svg#peru #lambayeque, .mapa-menu svg#peru #lima, .mapa-menu svg#peru #huanuco, .mapa-menu svg#peru #ayacucho, .mapa-menu svg#peru #madredios, .mapa-menu svg#peru #moquega, .mapa-menu svg#peru #tacna, .mapa-menu svg#peru #puno, .mapa-menu svg#peru #apurimac, .mapa-menu svg#peru #ica, .mapa-menu svg#peru #ucayali, .mapa-menu svg#peru #junin, .mapa-menu svg#peru #lalibertad, .mapa-menu svg#peru #amazonas, .mapa-menu svg#peru #piura, .mapa-menu svg#peru #piura, .mapa-menu svg#peru #ancash, .mapa-menu svg#peru #arequipa, .mapa-menu svg#peru #cajamarca, .mapa-menu svg#peru #callao, .mapa-menu svg#peru #cusco, .mapa-menu svg#peru #huancavelica, .mapa-menu svg#peru #loreto, .mapa-menu svg#peru #moquegua, .mapa-menu svg#peru #pasco, .mapa-menu svg#peru #tumbes, .mapa-menu svg#peru #ucayali").removeClass("active");
    });
});
