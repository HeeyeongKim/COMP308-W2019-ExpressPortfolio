let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Home' });
});

router.get('/about', (req, res, next) => {
  res.render('about/index', { title: 'About' });
});

router.get('/contact', (req, res, next) => {
  res.render('contact/index', { title: 'Contact' });
});

router.get('/projects', (req, res, next) => {
  res.render('projects/index', { title: 'Projects' });
});

router.get('/services', (req, res, next) => {
  res.render('services/index', { title: 'Services' });
});

module.exports = router;
