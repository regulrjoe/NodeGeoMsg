const mongoClient = require("mongodb").MongoClient;
const url  = 'mongodb://localhost:27017/geomsg';

/* Export functions for modular use */
module.exports = {
    loginUser: function(email, password) {
        login(email, password);
    }
}

/* Check for valid email/password */
function login(_email, _password) {
    var user_nick = null;

    mongoClient.connect(url, function(err, db) {
        if (err)
            throw err;

        var collection = db.collection('User');

        /* Find user with email/password combination */
        var user = collection.findOne({email: _email, password: _password})
          .then((result) => {
              if (user) {
                  console.log("login result: " + user);
                  user_nick = user.nick;
                  console.log("login nick: " + user_nick);
                  db.close();
                  return user_nick;
              }
          });
    });
}
