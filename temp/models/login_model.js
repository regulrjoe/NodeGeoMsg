const mongoClient = require("mongodb").MongoClient;
const url  = 'mongodb://localhost:27017/geomsg';


module.exports = {
    loginUser: function(nick, email, password) {
        login(email, password);
    }
}


function login(email, password) {
    var user_nick = null;

    mongoClient.connect(url, function(err, db) {
        if (err)
            throw err;

        var collection = db.collection('User');


        collection.findOne({}, function(err, result) {
            if (err)
                throw err;
            user_nick = result.nick;
            db.close();
        });

        // user = collection.find({ "email": email, "password": password });
        // db.close();

    });

    return user_nick;
}
