const mongoClient = require("mongodb").MongoClient;
const url  = 'mongodb://localhost:27017/geomsg';


module.exports = {
    registerUser: function(nick, email, password) {
        registerUser(nick, email, password);
    },
    emailExists: function(email) {
        emailExists(email);
    }
}

function registerUser(nick, email, password) {
    var user = "";
    mongoClient.connect(url, function(err, db) {

        if (err)
            throw err;

        var collection = db.collection('User');

        user = {
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
    var user_email = null;
    mongoClient.connect(url, function(err, db) {
        if (err)
            throw err;

        var collection = db.collection('User');

        user_email = collection.find({"email": email});

        db.close();
    });

    return (user_email != null) ? true : false;
}
