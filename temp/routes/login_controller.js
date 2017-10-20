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

  var nick_result = Login.loginUser(email, password);
  console.log("controller: " + nick_result);

  if (nick_result != null){
    /* render first responder */
    res.send("hola");
  }else {
    res.send("nel");
  }
  
});

module.exports = router;
