function initialize(lugar) {
    var centerUn = new google.maps.LatLng(-34.608367,-58.372283);
    var titledo, zoomit;
    var texto = "";
    
        switch(lugar){
            case 'plaza':
                centerUn = new google.maps.LatLng(-34.608367,-58.372283);
                titledo = 'Plaza de mayo';
                zoomit = 17;
                texto = "La Plaza de Mayo, sitio fundacional de la Ciudad de Buenos Aires, Argentina, nació de la unión de las plazas de la Victoria y del Fuerte, al demoler en 1884, una construcción llamada Recova Vieja que las separaba.Se encuentra en el denominado microcentro porteño, rodeada por las calles Hipólito Yrigoyen, Balcarce, Avenida Rivadavia y Bolívar del barrio de Monserrat. Nacen desde su lado oeste tres importantes avenidas: Presidente Julio A. Roca, Presidente Roque Sáenz Peña y Avenida de Mayo. En su entorno se encuentran varios de los principales monumentos y puntos de interés: el Cabildo histórico, la Casa Rosada (donde reside el Poder Ejecutivo de la Nación), la Catedral Metropolitana, el edificio del Gobierno de la Ciudad de Buenos Aires y la casa central del Banco Nación.";
                break;
            case 'telmo': 
                centerUn = new google.maps.LatLng(-34.619990,-58.370966);
                titledo = 'San Telmo';
                zoomit = 12;
                texto="San Telmo es un barrio de la Ciudad Autónoma de Buenos Aires. Está comprendido por las calles Chile, Av. Ingeniero Huergo, Av. Brasil, Av. Paseo Colón, Av. Martín García, Defensa, Av. Caseros y Piedras, aunque zonas aledañas entran en la misma denominación con fines comerciales o inmobiliarios. Limita con los barrios de Monserrat al norte, Puerto Madero al este, Boca al sureste, Barracas al suroeste y Constitución al oeste.Con apenas 1,2 km2, San Telmo es el barrio más pequeño de la Ciudad de Buenos Aires.San Telmo (por San Pedro González Telmo) es uno de los barrios más antiguos de la Ciudad de Buenos Aires. Junto con el cercano Monserrat se lo conoce como"+
                "Barrio Sur"+", en oposición al"+"Barrio Norte" +"de San Nicolás. Todavía pueden escucharse ritmos rioplatenses como el tango en sus calles.";
                break;
            case 'boca':
                centerUn = new google.maps.LatLng(-34.634852,-58.361373);
                titledo = 'La Boca';
                zoomit = 12;
                texto = "La Boca es un barrio de la Ciudad de Buenos Aires (Capital Federal), en Argentina. Está situado en el límite sudeste de la ciudad. Su nombre se debe a que se ubica en la desembocadura del Riachuelo en el Río de la Plata. Entre otras razones, el barrio es conocido por ser el lugar de origen de los clubes River Plate y Boca Juniors y por albergar el estadio del Boca Juniors.";
                break;
            case 'palermo':
                centerUn = new google.maps.LatLng(-34.5888895,-58.4305555);
                titledo = 'Palermo';
                zoomit = 12;
                texto = "Palermo es uno de los barrios de la Ciudad Autónoma de Buenos Aires principalmente residencial aunque con edificios de oficina que fueron incrementándose en la última década. En el 1900 tenía el nombre de Tierra del Fuego dado que por ese entonces era un barrio poco poblado lleno de pajonales y habitado por gente sin oficio y familias pobres. Se destaca el accionar de William C. Morris que comenzó con la urbanización del barrio gracias a su obras filantrópicas. Ubicado al norte de la ciudad, su territorio abarca la totalidad de la Comuna 14. Con 15,6 km2 de superficie, es el de mayor extensión de la ciudad1 y se destaca por sus elegantes viviendas y sus calles arboladas. En esta zona se encuentran las principales productoras audiovisuales del país, como Canal 7 y parte de los estudios de Canal 13.";
                break;   
            case 'recoleta':
                centerUn = new google.maps.LatLng(-34.5862763,-58.3877598);
                titledo = 'Recoleta';
                zoomit = 12;
                texto = "Recoleta es un barrio residencial céntrico de la ciudad de Buenos Aires que integra en su totalidad la Comuna 2. Es una zona de amplio interés histórico y arquitectónico, en especial por el Cementerio de la Recoleta ubicado allí, y un importante foco turístico y cultural dentro de la ciudad. Es un barrio tradicional de sectores acomodados, cuyos inmuebles cotizan entre los más caros de la ciudad. La línea D de subterráneos pasa por el barrio, así como la traza de las futuras líneas F, G y H."
                break;
            case 'plata':
                centerUn = new google.maps.LatLng(-34.754926,-58.039053);
                titledo = 'Rio la Plata';
                zoomit = 9;
                texto = "El Río de la Plata es un río del Cono Sur de América, formado por la unión de los ríos Paraná y Uruguay. Puede ser dividido en dos sectores: el sector interior, compuesto por los tramos superior y medio, el cual es de poca profundidad y se encuentra desprovisto de intrusión salina, y el sector exterior, comprendido entre Montevideo, Punta del Este y la bahía de Samborombón, tramo de mayor profundidad, y con una importante influencia marina al ser ya un estuario del océano Atlántico.1 Tiene una forma triangular de 290 km de largo, sirviendo de frontera en todo su recorrido entre Argentina y Uruguay. ";                
                break;
            case 'belgrano':
                centerUn = new google.maps.LatLng(-34.561301,-58.458768);
                titledo ='Belgrano';
                zoomit = 14;
                texto = "Belgrano es uno de los barrios más tradicionales de la ciudad de Buenos Aires y uno de los centros comerciales más importantes de la ciudad.Un barrio residencial en el norte de Buenos Aires, Belgrano ofrece tanto un oasis de paz, como la energía comercial. La clase media alta le gusta vivir entre las calles tranquilas y frondosas, así como comprar a lo largo de la concurrida Avenida Cabildo con tiendas, boutiques y cafés de esquina." ;
                break;
            case 'madero':
                centerUn = new google.maps.LatLng(-34.608716,-58.362102);
                titledo = 'Puerto Madero';
                zoomit = 12;
                texto = "Este barrio frente a la costa de Buenos Aires es la parte más moderna de la ciudad. Con imponentes rascacielos de cristal, elegantes restaurantes y discotecas de moda, Puerto Madero es disfrutado por ricos y famosos. Es un barrio joven que salió del mayor proyecto de urbanización de la historia de Buenos Aires. En 1993, el gobierno de la ciudad remodeló los viejos muelles que habían formado parte del puerto, dándole paso a oportunidades para un nuevo desarrollo en la ciudad, en una zona segura e ideal para el ocio y la vida de lujo. Puerto Madero es hoy en día considerado como el centro de negocios más importante y además una de las atracciones turísticas que no se pueden perder cuando estén de turismo en Buenos Aires.";
                break;
            case 'ateneo':
                centerUn = new google.maps.LatLng(-34.595983,-58.394228);
                titledo = 'El Ateneo';
                zoomit = 18;
                texto = "El Ateneo Grand Splendid es una librería ubicada en Buenos Aires, Argentina. Destaca por situarse donde lo hiciera el teatro Grand Splendid, habiendo conservado la arquitectura original de dicho teatro, pero estando a su vez readaptado para funcionar como librería. Se encuentra en Avenida Santa Fe 1860, en el barrio de Recoleta. Fue elegida por el periódico británico The Guardian como la segunda librería más hermosa del mundo.";
                break;
            case 'obelisco':
                centerUn = new google.maps.LatLng(-34.603739,-58.38157);
                titledo ='El Obelisco' ;
                zoomit = 18;
                texto = "El Obelisco de Buenos Aires es un monumento considerado un ícono de la ciudad de Buenos Aires, construido en 1936 con motivo del cuarto centenario de la fundación de la ciudad. Está emplazado en la Plaza de la República, en la intersección de las avenidas Corrientes y 9 de Julio. Fue declarado Monumento Histórico Nacional.";
                break;
            case 'monserrat':
                centerUn = new google.maps.LatLng(-34.611667,-58.384622);
                titledo = 'Monserrat';
                zoomit = 14;
                texto = "Monserrat es un barrio ubicado en el casco histórico de la Ciudad Autónoma de Buenos Aires (Argentina)."+
                "Este barrio posee una población de 39.175 habitantes (INDEC, 2001), 21.270 varones y 17.905 mujeres. Está comprendido por las calles Av. "+
                "Rivadavia desde 1799 hasta 1, ramal oeste de la Av. Leandro N. Alem desde 1 hasta 100, Bartolomé Mitre desde 99 a 1, "+
                "Av. Rosales desde 10 hasta 1, Av. La Rábida norte desde 1 hasta 200, Av. Ingeniero Huergo desde 1 hasta 200, Chile desde 1 hasta 799, "+
                "Piedras desde 701 hasta 800, Av. Independencia desde 801 hasta 1799 y Av. Entre Ríos desde 799 hasta 99. "+
                "Limita con los barrios de San Nicolás al norte, Puerto Madero al este, San Telmo y Constitución al sur, y Balvanera al oeste.";
                break;
            case 'retiro':
                centerUn = new google.maps.LatLng(-34.592658,-58.378323);
                titledo = 'Retiro';
                zoomit = 13;
                texto = "Retiro es un barrio del este de la Ciudad de Buenos Aires. Está delimitado por las Avenida Córdoba y las calles Cecilia Grierson, Uruguay, Montevideo y Calle 10, y por el Río de la Plata. Limita con los barrios de Puerto Madero al sureste, San Nicolás al sur, Recoleta al oeste y con la zona portuaria al noreste. Pertenece a la Comuna 1."+
                        "El barrio abarca una zona de oficinas lindera con el área conocida como la City, centro financiero de Buenos Aires, y otra de perfil marcadamente residencial con edificaciones de alta categoría que a menudo es considerada parte del informal Barrio Norte. No obstante, también dentro de los límites formales de Retiro se encuentra la Villa 31, uno de los más grandes asentamientos precarios de Buenos Aires, extendido sobre terrenos ferroviarios y portuarios."+
                        "Retiro se caracteriza asimismo por ser un importante nodo de transporte, con tres estaciones de trenes y otra de subterráneos donde convergen varias líneas ferroviarias metropolitanas, además de numerosas líneas de colectivos y ómnibus de larga distancia. En cercanías del centro de transporte se ubica un área administrativa donde funcionan varias dependencias judiciales. La Plaza San Martín es uno de sus principales espacios verdes y uno de los más tradicionales de Buenos Aires."+
                        "La zona fue en el pasado la puerta de entrada a Buenos Aires de millones de inmigrantes que llegaron al país entre fines del siglo XIX y la Segunda Guerra Mundial, alojándose transitoriamente en el Hotel de Inmigrantes que hoy funciona como museo.";
                break;
            case 'chino':
                centerUn = new google.maps.LatLng(-34.556350,-58.450645);
                titledo = 'Barrio chino';
                zoomit = 15;
                texto = "En la Ciudad de Buenos Aires, Argentina, se conoce como barrio chino a una zona del barrio de Belgrano con eje en tres cuadras de la "+
                        "calle Arribeños, sobre las vías del Ferrocarril Mitre y la estación Belgrano C. "+
                        "A pesar de su nombre, viven allí diferentes comunidades asiáticas, con predominio de la taiwanesa, además de chinos continentales, "+
                        "coreanos, japoneses (que son nikkeis argentinos y peruanos), tailandeses, etc.";
                break;
            case 'parque':
                centerUn = new google.maps.LatLng(-34.671076,-58.450591);
                titledo = 'Parque de la ciudad';
                zoomit = 13;
                texto = "Este es uno de los espacios verdes más grandes de la ciudad, ideal para pasar un día de fin de semana en familia. "+
                        "Posee 75 hectáreas con bosques de árboles nativos (existen más de 200 variedades de especies), "+
                        "lagos con peces y una gran variedad de pájaros (como garzas, patos y gansos) y mariposas. "+
                        "El parque también cuenta con una biblioteca, un anfiteatro que homenajea al arquitecto catalán Antonio Gaudí, un patio andaluz, "+
                        "esculturas y murales.La Torre Espacial es uno de sus atractivos principales: tiene una altura de 208 metros, "+
                        "lo que la convierte en la más alta de la Argentina, con un mirador a 176 metros de altitud (en estos momentos se encuentra cerrada por obras de mantenimiento)."+
                        "Asimismo se desarrollan distintas actividades deportivas,haciendo uso de los caminos y calles internas del parque para realizar caminatas, ciclismo y atletismo, entre otras. ";
                break;
            case 'barolo':
                centerUn = new google.maps.LatLng(-34.609591,-58.385843);
                titledo = 'Palacio Barolo';
                zoomit = 15;
                texto = "El Palacio Barolo (también llamado Pasaje Barolo o Galería Barolo) es un edificio de oficinas ubicado sobre la Avenida de Mayo, en el barrio de Monserrat, en Buenos Aires, Argentina. Cuando fue construido era el edificio más alto de la ciudad y de América del Sur al igual que su hermano 'gemelo' en estilo ecléctico, construido por el mismo arquitecto en Montevideo, el Palacio Salvo."+
                        "El arquitecto italiano Mario Palanti construyó este palacio a pedido del empresario textil Luis Barolo, diseñando incluso los elementos de detalle como picaportes, lámparas y jaulas de los ascensores, en un caso de auténtico concepto integral. Entre el 7 de julio de 1923, fecha de la inauguración,1 y 1935 fue el edificio más alto de la ciudad, habiendo sido desplazado del primer puesto cuando se construyó el Kavanagh. Su altura en metros es equiparable a la de un vigésimocuarto piso actual."+
                        "Su propietario tuvo en mente construirlo para utilizar tres pisos y luego alquilar los demás. Hoy, funciona como un edificio de oficinas (tiene 520 locales), con un partido de plantas libres novedoso para la época y vigente en la actualidad. En la cúspide posee un faro de 300.000 bujías"+ "sistema Salmoiraghi"+" que se encendía en ocasiones especiales. La obra costó m$n 4.500.000, y para ella se utilizaron 650.000 kg. de acero, 3.500.000 ladrillos y 70.000 barricas de cemento Portland;2 por cierto, todos los materiales decorativos fueron importados, como por ejemplo el mármol de Carrara utilizado para los revestimientos."+
                        "Ya que por la zona corre, entubado, el viejo Arroyo Tercero del Medio; fue necesario que las fundaciones del edificio contemplaran el paso del curso de agua. Así, desde el sótano del Barolo es posible acceder, mediante un túnel, al entubado del antiguo arroyo colonial.";
                break;
                default:
            }
            
        
      var mapProp = {
        center:centerUn,
        zoom:zoomit,
        mapTypeId:google.maps.MapTypeId.ROADMAP
      };
      
      var map=new google.maps.Map(document.getElementById("map"), mapProp);
      var marker2 = new google.maps.Marker({
        position: map.getCenter()
        , title:titledo
        , map: map
        , });

           divT = document.getElementById("inBtnContainer");
           divT.style.display = "none";
           divM = document.getElementById("descripcionSite");
           divM.style.display = "";
             divM.style.marginTop= "15px";
             divM.style.marginBottom="50px";
             divM.style.width="85%";
             divM.style.margin="0 auto";
             divM.style.left= "0";
             divM.style.right= "0" ;
            
           divC = document.getElementById("descripcionText");
           divC.innerHTML = '';
           var textPar = document.createElement("p");
           /*texto= "Lorem ipsum dolor sit amet, consectetur adipisicing elit "*/
           textPar.innerHTML = texto;
           divC.appendChild(textPar);
           divC.style.fontSize="5vw";
            divC.style.fontWeight="normal";
            divC.style.color="gray";
            divC.style.textAlign="justify";
            divC.style.fontFamily= "'NewCicle-Fina'";
            
           
           btnVolverMenu = document.getElementById("btnVolverMenu");
            /*btnVolverMenu.style.backgroundColor="white";*/
            btnVolverMenu.style.color="gray";
            btnVolverMenu.style.cursor="pointer";
            btnVolverMenu.style.marginTop= "15px";
            btnVolverMenu.style.marginBottom="40px";
            btnVolverMenu.style.width="100%";
            btnVolverMenu.style.height="50px";
            btnVolverMenu.style.textAlign="center";
            
            volverText = document.getElementById("volverText");
            /*volverText.style.backgroundColor="white";*/
            volverText.style.marginTop= "0px";
            volverText.style.float= "left";
            volverText.style.textAlign="left";
            volverText.style.width="70%";
            volverText.style.height = "40px";
            volverText.style.fontFamily= "'NewCicle-Fina'";
            volverText.style.fontWeight="600";
            volverText.style.fontSize="5vw";
            /*volverText.style.margin= "0px";*/
            volverText.style.color="gray";
            
            imgFlecha = document.getElementById("imgFlechaIzq");
           /* imgFlecha.style.backgroundColor="white";*/
            imgFlecha.style.float= "left";
            imgFlecha.style.marginTop="6%";
            imgFlecha.style.marginRight="10px";
           /* imgFlecha.style.marginLeft= "10px";
            imgFlecha.style.marginRight="10px";*/
            imgFlecha.style.width="3%";
      }
      
function volverMenu(){
        divT = document.getElementById("inBtnContainer");
        divT.style.display = "";

        divC = document.getElementById("descripcionSite");
        divC.style.display = "none";
        
        /*divB = document.getElementById("descripcionText");
        divB.removeChild("");*/
}
          