var mongoCliente = require("mongodb").MongoClient;
var url  = 'mongodb://localhost:27017/geomsg';


module.exports = {
    registerUser: function(nick, email, password) {
        registerUser(nick, email, password);
    }

    emailExists: function(email) {
        emailExists(email);
    } 
}

function registerUser(nick, email, password) {
    mongoClient.connect(url, function(err, db) {

        if (err)
            throw err;

        var collection = db.collection('User');

        var user = {
            user_nick: nick,
            user_email: email,
            user_password: password
        };

        collection.insert(user, function(err, result) {
            if (err)
                throw err;

            db.close();
        });
    });

    return user.user_nick;
}


function emailExists(email) {
    mongoClient.connect(url, function(err, db) {
        if (err)
            throw err;

        var collection = db.collection('User');

        var user_email = collection.find({"email": email});

        db.close();
    });

    return (user_email != null) ? true : false;
}
