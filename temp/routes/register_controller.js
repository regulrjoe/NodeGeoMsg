var express = require('express');
var router = express.Router();
var RegisterModel = require('../models/register_model');

/* POST register a user */
router.get('/', function(req, res, next) {
  /* render first responder */
  res.render('register');
});

router.get('/insert', function(req, res, next) {
  var nick = req.query.nick;
  var email = req.query.email;
  var password = req.query.password;
  
  /* check if email exists */
  if (!RegisterModel.emailExists(email)) {
    /* register user */
    nick_result = RegisterModel.registerUser(nick, email, password); 

    /* render result page */
    res.send('Registrado');
  }else {
    /* send error message */
    res.send("Hubo un error");
  }
});

module.exports = router;
