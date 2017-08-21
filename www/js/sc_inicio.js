// Initialize collapse button
$("#Abre-Menu").sideNav();
$("#Texto").sideNav();
$("#Note").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();$('.button-collapse').sideNav({ 
   
$("#boton1").on("click", function() {
  setTimeout (function(){
    alert("I have a problem");
  }, 10000)
});

$("#boton2").on("click", function() {
  setTimeout (function(){
    alert("I have a problem");
  }, 10000)
});

$("#boton3").on("click", function() {
  setTimeout (function(){
    alert("I have a problem");
  }, 10000)
});



          
var map;

function initialize() {
  var myLatlng1 = new google.maps.LatLng(53.65914, 0.07205);

  var mapOptions = {
    zoom: 15,
    center: myLatlng1,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      initialLocation = new google.maps.LatLng(
        position.coords.latitude,
        position.coords.longitude
      );

      map.setCenter(initialLocation);
      var marker = new google.maps.Marker({
        position: initialLocation,
        title: "Estás aqui",
        map: map
      });
    });
  }
}

initialize();