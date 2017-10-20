var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  /* render first responder */
  res.render('message');
});

module.exports = router;
