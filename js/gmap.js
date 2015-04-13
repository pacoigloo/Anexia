


function initialize(lugar) {
    var centerUn = new google.maps.LatLng(-34.608367,-58.372283);
    
   /* if(lugar == 'sitio')
    {
        centerUn = new google.maps.LatLng(-34.608367,-58.372283);
    }
    else
    {
         if(lugar == 'plaza')
        {
             centerUn = new google.maps.LatLng(-34.608367,-58.372283);
        }
         else
        {
            if(lugar == 'telmo')
            {
                centerUn = new google.maps.LatLng(-34.626753,-58.3726185);
            }
            else
            {
               if(lugar == 'boca')
                {
                    centerUn = new google.maps.LatLng(-34.634852,-58.361373);
                }
                else
                {
                    if(lugar == 'palermo')
                    {
                        centerUn = new google.maps.LatLng(-34.5888895,-58.4305555);
                    }
                    else
                    {
                        if(lugar == 'recoleta')
                        {
                            centerUn = new google.maps.LatLng(-34.5862763,-58.3877598);
                        }
                        else
                        {
                            if(lugar == 'plata')
                            {
                                centerUn = new google.maps.LatLng(-35.1394419,-56.7406742);
                            }
                        } 
                    } 
                } 
            }
        }
    }*/
      var mapProp = {
        center:centerUn,
        zoom:18,
        mapTypeId:google.maps.MapTypeId.ROADMAP
      };
      var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
    }
    google.maps.event.addDomListener(window, 'load', initialize);