var express = require('express');
var router = express.Router();
const Advertisement = require('../../models/Advertisement');

/* GET /Advertisement */
router.get('/', async function(req, res, next) {
  try {
    const filter = {};
    
    

    //Extract values from Request
    const name = req.query.name;
    for(var key in req.query){
      console.log(key + " : " + req.query[key]);
    }
    filter.name=name;
    // http://localhost:3000/api/agentes?limit=2
    const limit = parseInt(req.query.limit || 10);
    // http://localhost:3000/api/agentes?skip=20&limit=10
    const skip = parseInt(req.query.skip || 0);
    const sort = 'name';
     
    const fields = req.query.fields;
    
    const advertisements = await Advertisement.list(filter, limit, skip, sort, fields);
    res.json(advertisements);
  } catch (err) {
    next(err);
  }

});

module.exports = router;
