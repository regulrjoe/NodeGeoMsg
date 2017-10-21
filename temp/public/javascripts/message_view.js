var user_location;
var msg_location;
var map;

function initMap() {
	var map = new google.maps.Map(document.getElementById("map"), {
		center: {lat: -10.01, lng: 21.0},
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.HYBRID
	});

	//Click listener: used to set message location
	// google.maps.event.addListener(map, 'click', function(event) {
	//    placeMarker(event.latLng);
	// });
	//localizar();
}

function localizar() {
        navigator.geolocation.getCurrentPosition(function (position) {
        	user_location = {
        		lat: position.coords.latitude,
        		lng: position.coords.longitude
        	}

            map.setCenter(user_location);

            //agregarMarker(miUbicacion);
            //agregarMarker(laSalleBajio);
        }, function(error) {
            alert("Error de localización");
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

			if (data.status) { alert("Posted!"); } //TODO: redirect somewhere
		
			else { console.log("Error registering user..."); }
		},
		error: function(err) {
			console.log("Error connecting to server when trying to post message", err);
		}
	});
}

//getting user_location every .9 secs
// setInterval(function() {
// 	try {
// 		navigator.geolocation.getCurrentPosition(function(position){
// 			user_location = { lng: position.coords.longitude, lat: position.coords.latitude };
// 		});
// 	} catch (e) {
// 		console.log('Without position');
// 	}
// }, 400);


// function placeMarker(location) {
// 	if (message_location) {
// 		message_location.setMap(null);
// 	}
//     var marker = new google.maps.Marker({
//         position: location, 
//         map: map
//     });
//     message_location = marker;
// }
