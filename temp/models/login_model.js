const mongoClient = require("mongodb").MongoClient;
const url  = 'mongodb://localhost:27017/geomsg';

/* Export functions for modular use */
module.exports = {
    loginUser: function(nick, email, password) {
        login(email, password);
    }
}

/* Check for valid email/password */
function login(email, password) {
    var user_nick = null;

    mongoClient.connect(url, function(err, db) {
        if (err)
            throw err;

        var collection = db.collection('User');

        /* Find user with email/password combination */
        collection.findOne({}, function(err, result) {
            if (err)
                throw err;
            user_nick = result.nick;
            db.close();
        });

        // user = collection.find({ "email": email, "password": password });
        // db.close();

    });

    /* Returns null if no valid user was found */
    return user_nick;
}
