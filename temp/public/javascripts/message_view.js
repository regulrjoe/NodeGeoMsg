//message_view.js

var user_location;
var msg_location;

var map; 
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: user_location,
		zoom: 15
	});
}

function setMessage() {

	var message = $("#message").val();
	if (message && msg_location && user_location) {
		postMessage(message);
	} else { alert("Porfavor escribe un mensaje"); }
}

function postMessage(message) {

	$.ajax({
		type: 'POST',
		dataType: 'json',
		url: '/message',
		data: { message_location: msg_location, current_location: user_location, message: message },
		success: function(data) {

			if (data.status){ alert("Posted!"); } //TODO: redirect somewhere
		
			else { console.log("Error registering user..."); }
		},
		error: function(err) {
			console.log("Error connecting to server when trying to post message", err);
		}
	});
}

//getting user_location every .9 secs
setInterval(function() {
	try {
		navigator.geolocation.getCurrentPosition(function(position){
			user_location = { lng: position.coords.longitude, lat: position.coords.latitude };
		});
	} catch (e) {
		console.log('Without position');
	}
}, 400);


//Click listener: used to set message location
google.maps.event.addListener(map, 'click', function(event) {
   placeMarker(event.latLng);
});

function placeMarker(location) {
	if (message_location) {
		message_location.setMap(null);
	}
    var marker = new google.maps.Marker({
        position: location, 
        map: map
    });
    message_location = marker;
}
