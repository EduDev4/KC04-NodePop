var express = require('express');
var router = express.Router();
const Advertisement = require('../../models/Advertisement');

/* GET /Advertisement */
router.get('/', async function(req, res, next) {
  try {
    const filter = {};
    
    console.log(req.query);

    //Extract values from Request
    const name = req.query.name;

    
    const advertisements = await Advertisement.find();
    res.json(advertisements);
  } catch (err) {
    next(err);
  }

});

module.exports = router;
