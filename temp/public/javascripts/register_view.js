//register_view.js


function register(nick, email, password) {
	$.ajax({
		type: 'POST',
		dataType: 'json',
		url: '/register',
		data: { nick: nick, email: email, password: password },
		success: function(data) {
			
			if (data.result)
				alert("Wohooo! you are now registered!");
				//TODO: redirect to main page...
			else
				console.log("Error registering user...");
		},
		error: function(err) {
			console.log("Error connecting to server when trying to register user", err);
		}
	});
}