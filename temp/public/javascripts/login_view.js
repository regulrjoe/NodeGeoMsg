function login(email, password) {
	$.ajax({
		type: 'POST',
		dataType: 'json',
		url: '/login',
		data: { email: email, password: password },
		success: function(data) {

			if (data.result){ 
        console.log("Success logging in..."); 
        alert("Wohooo! you are logged in!"); 
      }else { 
        console.log("Error logging in..."); 
      }
		},
		error: function(err) {
			console.log("Error connecting to server when trying to register user: " + err);
		}
	});
}

function loginClick() {
	var email = $("#email").val();
	var password = $("#password").val();

	if (!(email && password)) {
		alert("Porfavor complete todos los campos.");
		return;
	}
	login(email, password);	
}
