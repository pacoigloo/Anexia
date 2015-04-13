var app=angular.module('single-page-app',['ngRoute']);

app.config(function($routeProvider){
      $routeProvider
          .when('/',{
                templateUrl: 'home.html'
          })
          .when('/agenda',{
                templateUrl: 'agenda.html'
          })
          .when('/sitios',{
                templateUrl: 'sitios.html'
          })
          .when('/conferencista',{
                templateUrl: 'conferencista.html'
          })
          .when('/detalle-medico',{
                templateUrl: 'detalle-medico.html'
          })
          .when('/networking',{
                templateUrl: 'networking.html'
          });
});
app.controller('cfgController',function($scope){
    
});

$( "#menucito" ).click(function() {
    $( "#menu-flotante" ).animate({ "left": "0" }, "slow" );
    $("#cover-menu").show();
});

$( "#menu-flotante a" ).click(function(){
    ocultar();
});

$("#cover-menu").click(function(){
    ocultar();
});

function click1(){
    $(window).attr('location',$(window).attr('location').origin+'#/detalle-medico'); 
}

function ocultar() {
    $( "#menu-flotante" ).animate({ "left": -ancho }, "slow" );
    $("#cover-menu").hide();
}

var ancho = $(window).width()*0.8;
var resizeId;

$(document).ready(function(){
    $( "#menu-flotante" ).css("left",-ancho);
    $( "#menu-flotante" ).css("display","block");
});

$(window).resize(function(){
    clearTimeout(resizeId);
    resizeId = setTimeout(onEndResize, 500);
});

window.onload = function(){
    imgMedicoNet();
};

function onEndResize(){
    ancho = $(window).width()*0.8;
    ocultar();
    imgMedicoNet();
}

function imgMedicoNet(valor){
    var miAlto = $(".net-imagen").outerHeight(true) + $(".net-especialidad").outerHeight(true) + $(".net-pais").outerHeight(true);
    $(".net-medico").css("height",miAlto);
    $(".net-foto").css("height",miAlto);
}
//Funcion para mostrar horarios de la agenda.
function MostrarHorarios(dia){
    //
    var dia1 = document.getElementById("dia1");
    var dia2 = document.getElementById("dia2");
    var dia3 = document.getElementById("dia3");
    var dia4 = document.getElementById("dia4");
    var dia5 = document.getElementById("dia5");
    dia2.style.display="none";
    dia3.style.display="none";
    dia4.style.display="none";
    dia5.style.display="none";
    //Verificamos que boton estan presionado y mostramos la vista.
    switch (dia) {
        case '1':
            // code
            dia1.style.display="block";
            dia2.style.display="none";
            dia3.style.display="none";
            dia4.style.display="none";
            dia5.style.display="none";
            break;
        case '2':
            // code
            dia1.style.display="none";
            dia2.style.display="block";
            dia3.style.display="none";
            dia4.style.display="none";
            dia5.style.display="none";
            break;
        case '3':
            // code
            dia1.style.display="none";
            dia2.style.display="none";
            dia3.style.display="block";
            dia4.style.display="none";
            dia5.style.display="none";
            break;
        case '4':
            // code
            dia1.style.display="none";
            dia2.style.display="none";
            dia3.style.display="none";
            dia4.style.display="block";
            dia5.style.display="none";
            break;
        case '5':
            // code
            dia1.style.display="none";
            dia2.style.display="none";
            dia3.style.display="none";
            dia4.style.display="none";
            dia5.style.display="block";
            break;
        default:
            // code
    }
}