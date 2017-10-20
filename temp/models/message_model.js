const mongoClient = require("mongodb").MongoClient;
const url  = 'mongodb://localhost:27017/geomsg';


module.exports = {
    postMessage: function(text, location) {
        insertMessage(text, location);
    }
}


function insertMessage(msg_text, msg_location) {
    var message = "";
    var status = null;

    mongoClient.connect(url, function(err, db) {
        if (err)
            throw err;

        var collection = db.collection('Message');

        message = {
            location = {
                lat: msg_location.lat,
                lng: msg_location.lng
            },
            text: msg_text,
        }

        collection.insert(message, function(err, result) {
            if (err)
                throw err;
            status = result;
            console.log("insert result: " + result);
            db.close();
        });
    });

    return (status != null) ? true : false;
}
