
var map;

function overheadPasses(latitude, longitude) {
  $.getJSON("/api/overhead?latitude=" + latitude + "&longitude=" + longitude, function(data) {
    data['response'].forEach(function (d) {
      var date = new Date(d["risetime"]*1000);
      $(".overhead .passes").append("<li>" + date.toLocaleString() + "</li>");
    });
  });
}

function drawISSLocation() {
  $.getJSON("/api/location", function(data) {
    var latitude = data["iss_position"]["latitude"];
    var longitude = data["iss_position"]["longitude"];

    // Create a map object and specify the DOM element for display.
    window.map = new google.maps.Map($('.location .map')[0], {
      center: {lat: latitude, lng: longitude},
      mapTypeId: google.maps.MapTypeId.SATELLITE,
      scrollwheel: false,
      zoom: 4
    });
  });
}

function centerISS() {
  $.getJSON("/api/location", function(data) {
    var latitude = data["iss_position"]["latitude"];
    var longitude = data["iss_position"]["longitude"];
    window.map.panTo({lat: latitude, lng: longitude});
  });
}

function drawOverheadPasses() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var latitude  = position.coords.latitude;
      var longitude = position.coords.longitude;

      overheadPasses(latitude, longitude);
    }, function () {
      console.log("geolocating failed", args);
    });
  } else {
    console.log("geolocation not available")
  }
}


