var express = require('express');
var router = express.Router();

/* POST register a user */
router.get('/', function(req, res, next) {
  /* render first responder */
  res.render('register');
});

module.exports = router;
