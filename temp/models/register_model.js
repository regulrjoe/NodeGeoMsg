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

function registerUser(_nick, _email, _password) {
    var user = "";
    mongoClient.connect(url, function(err, db) {

        if (err)
            throw err;

        var collection = db.collection('User');

        user = {
            nick: _nick,
            email: _email,
            password: _password
        };

        collection.insert(user).then((result) => {
            db.close();
            return (result.n > 0) ? nick : false;
        });
    }
}


function emailExists(email) {
    var user_email = null;
    mongoClient.connect(url, function(err, db) {
        if (err)
            throw err;

        var collection = db.collection('User');

        user_email = collection.find({"email": email}).then((result) => {
            db.close();
            return (user_email != null) ? true : false;
        });
    });
}
