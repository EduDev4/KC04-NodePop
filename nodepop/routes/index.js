var express = require('express');
var router = express.Router();
const Advertisement = require('../models/Advertisement');

/* GET home page. */
router.get('/', async function(req, res, next) {
  
  const advertisements = await Advertisement.find().exec();
  res.locals.advertisements = advertisements;
  console.log(advertisements);
  res.render('index', { title: 'NodePop' });
});

router.get('/author/:author', async function(req, res, next) {
  const author = req.params.author
  const advertisements = await Advertisement.find({author : author}).exec();
  res.locals.advertisements = advertisements;
  console.log(advertisements);
  res.render('index', { title: 'NodePop' });
});

module.exports = router;
