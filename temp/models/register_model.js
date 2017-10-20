const mongoClient = require("mongodb").MongoClient;
const url  = 'mongodb://localhost:27017/geomsg';


/* Export functions for modular use */
module.exports = {
    registerUser: function(nick, email, password) {
        insertUser(nick, email, password);
    },
    emailExists: function(email) {
        emailExists(email);
    }
}

/* Insert User into mongodb */
function insertUser(nick, email, password) {
    var user = "";

    mongoClient.connect(url, function(err, db) {
        if (err)
            throw err;
        var collection = db.collection('User');
        user = {
            nick: nick,
            email: email,
            password: password
        };

        /* Make insertion */
        collection.insert(user, function(err, result) {
            if (err)
                throw err;
            db.close();
        });
    });

    return user.nick;
}


/* Check if email is already registered */
function emailExists(email) {
    var result = null;

    mongoClient.connect(url, function(err, db) {
        if (err)
            throw err;
        var collection = db.collection('User');
        /* Find email */
        result = collection.find({"email": email});
        db.close();
    });

    /* Return true if email exists, false otherwise  */
    return (result != null) ? true : false;
}
