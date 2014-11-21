$(document).ready(function(){
  $('.map').each(function() {
    var container = this;  
    var map;
    var geoCoder = new google.maps.Geocoder(); 
    var address = this.id.split("%20").join(" ");       
    var myCenter = new google.maps.LatLng(37.794294, -122.409821);
    var marker = new google.maps.Marker({
        position:myCenter
    });

    var mapStyle = [{"featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","stylers":[{"visibility":"on"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#EBE5E0"}]},{"featureType":"poi.park","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]}]

    function initialize() {

      geoCoder.geocode( { 'address': address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          map.setCenter(results[0].geometry.location);
          var marker = new google.maps.Marker({
              map: map,
              position: results[0].geometry.location
          });
        } else {
          position: myCenter
        }
      });
    
      var mapProp = {
          center: myCenter,
          zoom: 14,
          draggable: false,
          scrollwheel: false,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          styles: mapStyle
      };
      
      map=new google.maps.Map(container,mapProp);
      marker.setMap(map);
    }; //end initialize// 
 
    google.maps.event.addDomListener(window, 'load', initialize);

    google.maps.event.addDomListener(window, "resize", resizingMap());


    $('.picModal').on('show.bs.modal', function() {
       //Must wait until the render of the modal appear, thats why we use the resizeMap and NOT resizingMap!! ;-)
       resizeMap();
    })

    function resizeMap() {
       if(typeof map =="undefined") return;
       setTimeout( function(){resizingMap();} , 400);
    }

    function resizingMap() {
       if(typeof map =="undefined") return;
       var center = map.getCenter();
       google.maps.event.trigger(map, "resize");
       map.setCenter(center); 
    }
  
  });  
});


