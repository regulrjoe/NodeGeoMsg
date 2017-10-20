const mongoClient = require("mongodb").MongoClient;
const url  = 'mongodb://localhost:27017/geomsg';


module.exports = {
    postMessage: function(text, location) {
        insertMessage(text, location);
    }
}


function insertMessage(_text, _location) {
    var message = "";
    var status = null;

    mongoClient.connect(url, function(err, db) {
        if (err)
            throw err;

        var collection = db.collection('Message');

        /* Create message object */
        message = {
            location = {
                lat: _location.lat,
                lng: _location.lng
            },
            text: _text,
        }

        collection.insert(message).then((result) => {
            status = result;
            if (status) {
                console.log("insert message result" + status);
                db.close();
                return status;
            }
        });
    });

    return false;
}
