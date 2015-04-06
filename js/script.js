/*  google-map */

function initialize() {
  var mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(59.9360427,30.322952)
  }
  var map = new google.maps.Map(document.getElementById("map-canvas"),
                                mapOptions);
  var image = "..img/icon-pin.png";

  var myLatLng = new google.maps.LatLng(59.9360427,30.322952);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
