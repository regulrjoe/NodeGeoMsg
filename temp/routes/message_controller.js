var express = require('express');
var router = express.Router();
var MessageModel = require('../models/message_model');

router.get('/', function(req, res, next) {
  /* render first responder */
  res.render('message');
});

module.exports = router;

router.post('/', function(req, res, next) {
  var message_location = req.body.message_location;
  var current_location = req.body.current_location;
  var message = req.body.message; 

  var insert_result = MessageModel.postMessage(message, message_location);

  console.log(insert_result);
  res.send(JSON.parse(insert_result));
});
