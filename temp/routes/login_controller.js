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

  if (Login.loginUser(email, password)){
    /* render first responder */
    res.send("hola");
  }
  
});

module.exports = router;
