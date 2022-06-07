var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Global middleware
router.use((req, res, next) => {
  console.log('Runs on all requests to the API');
  next();
})

module.exports = router;
