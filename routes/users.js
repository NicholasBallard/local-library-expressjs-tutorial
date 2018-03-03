var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Create a new route in /routes/users.js that will display the text "You're so cool" at URL /users/cool/. */
router.get('/cool/', function(req, res, next){
  res.send('You\'re so cool');
});

module.exports = router;
