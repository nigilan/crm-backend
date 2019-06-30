var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({status:200});
});


router.post('/n', function(req, res, next) {
  res.send({status:200});
});


module.exports = router;
