var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'Users', user: {name:'suyono', email:'suyono@example.com', website: 'http://www.suyono.com'} })
});

module.exports = router;
