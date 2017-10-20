var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next){
  var nick = req.query.nick;
  var email = req.query.email;
  var password = req.query.password;

});

module.exports = router;
