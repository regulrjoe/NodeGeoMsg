const mongoClient = require("mongodb").MongoClient;
const url  = 'mongodb://localhost:27017/geomsg';

/* Export functions for modular use */
module.exports = {
    loginUser: function(email, password) {
        login(email, password);
    }
}

/* Check for valid email/password */
function login(p_email, p_password) {
    var user_nick = null;

    mongoClient.connect(url, function(err, db) {
        if (err)
            throw err;

        var collection = db.collection('User');

        /* Find user with email/password combination */
        var user = collection.findOne({email: p_email, password:p_password});

        if (user) {
            console.log("login result: " + user);
            user_nick = user.nick;
            console.log("login nick: " + user_nick);
            db.close();
            return user_nick;
        }
    });

    /* Returns null if no valid user was found */
    console.log("login final: " + user_nick);
    return user_nick;
}
