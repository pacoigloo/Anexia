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

app.controller('mapa', function ($scope) {
    var mapOptions = {
        zoom: 10,
        center: new google.maps.LatLng(-34.594905,-58.390226),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
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
    var f = new Date();
    //document.write(f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");
    var btn4 = document.getElementById("btn4");
    var btn5 = document.getElementById("btn5");
    
    var dia1 = document.getElementById("dia1");
    var dia2 = document.getElementById("dia2");
    var dia3 = document.getElementById("dia3");
    var dia4 = document.getElementById("dia4");
    var dia5 = document.getElementById("dia5");
    
    dia2.style.display="none";
    dia3.style.display="none";
    dia4.style.display="none";
    dia5.style.display="none";
    
    switch (f.getDate()){
        case 29:
            // code
            btn1.style.backgroundColor="#2FA1F1";
            btn1.style.color="white";
            btn2.style.backgroundColor="#3F3F3F";
            btn3.style.backgroundColor="#3F3F3F";
            btn4.style.backgroundColor="#3F3F3F";
            btn5.style.backgroundColor="#3F3F3F";
            break;
        case 30:
            // code
            btn1.style.backgroundColor="#3F3F3F";
            btn2.style.backgroundColor="#2FA1F1";
            btn1.style.color="white";
            btn3.style.backgroundColor="#3F3F3F";
            btn4.style.backgroundColor="#3F3F3F";
            btn5.style.backgroundColor="#3F3F3F";
            break;
        case 1:
            // code
            btn1.style.backgroundColor="#3F3F3F";
            btn2.style.backgroundColor="#3F3F3F";
            btn3.style.backgroundColor="#2FA1F1";
            btn1.style.color="white";
            btn4.style.backgroundColor="#3F3F3F";
            btn5.style.backgroundColor="#3F3F3F";
            break;
        case 2:
            // code
            btn1.style.backgroundColor="#3F3F3F";
            btn2.style.backgroundColor="#3F3F3F";
            btn3.style.backgroundColor="#3F3F3F";
            btn4.style.backgroundColor="#2FA1F1";
            btn1.style.color="white";
            btn5.style.backgroundColor="#3F3F3F";
            break;
        case 3:
            // code
            btn1.style.backgroundColor="#3F3F3F";
            btn2.style.backgroundColor="#3F3F3F";
            btn3.style.backgroundColor="#3F3F3F";
            btn4.style.backgroundColor="#3F3F3F";
            btn1.style.color="white";
            btn5.style.backgroundColor="#2FA1F1";
            break;
        default:
            // code
    }
    //Verificamos que boton estan presionado y mostramos la vista.
    switch (dia){
        case '1':
            // code
            btn1.style.backgroundColor="#2FA1F1";
            btn2.style.backgroundColor="#3F3F3F";
            btn3.style.backgroundColor="#3F3F3F";
            btn4.style.backgroundColor="#3F3F3F";
            btn5.style.backgroundColor="#3F3F3F";
            
            dia1.style.display="block";
            dia2.style.display="none";
            dia3.style.display="none";
            dia4.style.display="none";
            dia5.style.display="none";
            break;
        case '2':
            // code
            btn1.style.backgroundColor="#3F3F3F";
            btn2.style.backgroundColor="#2FA1F1";
            btn3.style.backgroundColor="#3F3F3F";
            btn4.style.backgroundColor="#3F3F3F";
            btn5.style.backgroundColor="#3F3F3F";
            
            dia1.style.display="none";
            dia2.style.display="block";
            dia3.style.display="none";
            dia4.style.display="none";
            dia5.style.display="none";
            break;
        case '3':
            // code
            btn1.style.backgroundColor="#3F3F3F";
            btn2.style.backgroundColor="#3F3F3F";
            btn3.style.backgroundColor="#2FA1F1";
            btn4.style.backgroundColor="#3F3F3F";
            btn5.style.backgroundColor="#3F3F3F";
            
            dia1.style.display="none";
            dia2.style.display="none";
            dia3.style.display="block";
            dia4.style.display="none";
            dia5.style.display="none";
            break;
        case '4':
            // code
            btn1.style.backgroundColor="#3F3F3F";
            btn2.style.backgroundColor="#3F3F3F";
            btn3.style.backgroundColor="#3F3F3F";
            btn4.style.backgroundColor="#2FA1F1";
            btn5.style.backgroundColor="#3F3F3F";
            
            dia1.style.display="none";
            dia2.style.display="none";
            dia3.style.display="none";
            dia4.style.display="block";
            dia5.style.display="none";
            break;
        case '5':
            // code
            btn1.style.backgroundColor="#3F3F3F";
            btn2.style.backgroundColor="#3F3F3F";
            btn3.style.backgroundColor="#3F3F3F";
            btn4.style.backgroundColor="#3F3F3F";
            btn5.style.backgroundColor="#2FA1F1";
            
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