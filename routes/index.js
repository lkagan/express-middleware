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

// Route-specific middleware
router.use('/test$', (req, res, next) => {
  console.log('Runs only at /test');
  next();
})

module.exports = router;
