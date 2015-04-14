function initialize(lugar) {
    var centerUn = new google.maps.LatLng(-34.608367,-58.372283);
    var titledo, zoomit;
    
         if(lugar == 'plaza')
        {
             centerUn = new google.maps.LatLng(-34.608367,-58.372283);
            titledo = 'Plaza de mayo';
            zoomit = 17;
        }
         else
        {
            if(lugar == 'telmo')
            {
                centerUn = new google.maps.LatLng(-34.619990,-58.370966);
                titledo = 'San Telmo';
                zoomit = 12;
            }
            else
            {
               if(lugar == 'boca')
                {
                    centerUn = new google.maps.LatLng(-34.634852,-58.361373);
                    titledo = 'La Boca';
                    zoomit = 12;
                }
                else
                {
                    if(lugar == 'palermo')
                    {
                        centerUn = new google.maps.LatLng(-34.5888895,-58.4305555);
                         titledo = 'Palermo';
                         zoomit = 12;
                    }
                    else
                    {
                        if(lugar == 'recoleta')
                        {
                            centerUn = new google.maps.LatLng(-34.5862763,-58.3877598);
                             titledo = 'Recoleta';
                             zoomit = 12;
                        }
                        else
                        {
                            if(lugar == 'plata')
                            {
                                centerUn = new google.maps.LatLng(-34.754926,-58.039053);
                                 titledo = 'Rio la Plata';
                                 zoomit = 9;
                            }
                        } 
                    } 
                } 
            }
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
    }