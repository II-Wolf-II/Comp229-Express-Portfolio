/*Aaron Ainsworth */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home Page'});
});

/* GET Form results page. */
router.get('/form', function(req, res, next) {
  res.render('form', { 
    title: 'Last Submitted Form Results',
    });
});




/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { 
    title: 'About', 
    });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { 
    title: 'Projects',
    });
});

/*Get Contact Page */

router.get('/contact', function(req, res, next) {
  res.render('contact', { 
    title: 'Contact',
    });
});


/* GET home page. */
router.get('/services', function(req, res, next) {
  res.render('services', { 
    title: 'Services',
     });
});

module.exports = router;
