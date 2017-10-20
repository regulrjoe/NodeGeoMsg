var express = require('express');
var router = express.Router();
var Login = require('../models/login_model');

/* POST login a user */
router.get('/', function(req, res, next) {
  /* render first responder */
  res.render('login');
});

router.post('/', function(req, res, next) {
  var email = req.body.email;
  var password = req.body.password;

  var user_result = Login.loginUser(email, password);
  console.log("controller: " + user_result);

  if (user_result != null){
    /* render first responder */
    res.send({"user_id": user_result.user_id, "nick": user_result.nick});
  }else {
    res.send({"error": true});
  }
  
});

module.exports = router;
