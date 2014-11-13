function initialize() {
  var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(-34.397, 150.644)
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  $('.picModal').on('show.bs.modal', function () {
    map.setCenter(new google.maps.LatLng(42.3605336, -72.6362989));
    google.maps.event.trigger(map, 'resize');
  });

}

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +
      'callback=initialize';
  document.body.appendChild(script);
}

window.onload = loadScript;

