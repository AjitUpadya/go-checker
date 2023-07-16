var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('API working as expected');
});

module.exports = router;