var express = require('express');
var router = express.Router();
const multer = require('multer');
const Advertisement = require('../../models/Advertisement');


const storage = multer.diskStorage({
  destination: function( req, file, cb) {
    cb(null, 'public/images/');
  },
  filename: function(req, file, cb) {
    const myFilename = `ad_${file.fieldname}_${Date.now()}_${file.originalname}`;
    cb(null, myFilename);
  }
});
const upload = multer({ storage: storage });

// Subir imagen
router.post('/upload',  (req, res) => {
  
  let upload = multer({ storage: storage }).single('image');

  upload(req, res, function(err) {

      if (req.fileValidationError) {
          return res.send(req.fileValidationError);
      }
      else if (!req.file) {
          return res.send('Please select an image to upload');
      }
      else if (err instanceof multer.MulterError) {
          return res.send(err);
      }
      else if (err) {
          return res.send(err);
      }

      // Display uploaded image for user validation
      res.send(`You have uploaded this image: <br> <img src="${req.file.path}" width="500">`);
  });
});

// Crear Anuncio
router.post('/create', async (req, res, next) => {
  try {
    const adData = req.body;    
    // creamos el ad en memoria
    const ad = new Advertisement(adData);
    // lo guardamos en BD
    const savedAd = await ad.save();

    res.json({ result: savedAd });

  } catch (err) {
    next(err);
  }
});

/* GET Advertisements quering fields */
router.get('/', async function(req, res, next) {
  try {
    const filter = {};

    //Extract values from Request and add them to Filter
    const name = req.query.name;
    var minPrice = 0;
    var maxPrice = 9999999999; 
    for(var key in req.query){     
      if(key!='limit' && key!='skip' && key!='sort' && key!='fields'){
        filter[key] = req.query[key]
        // price: { $lte: maxPrice || 1000000000, $gte: minPrice || 0 }
        console.log(req.query[key]);
        console.log(key);
        if(key=='price' && filter[key].indexOf('-')>=0){
          console.log(req.query[key]);
          const params = filter[key].split('-');  
          var minPrice = params[0];
          var maxPrice = params[1];          
        }
        filter[key] = { $lte: maxPrice, $gte: minPrice}
      }
    }    
    // http://localhost:3000/api/ads?limit=2
    const limit = parseInt(req.query.limit || 10);
    // http://localhost:3000/api/ads?skip=20&limit=10
    const skip = parseInt(req.query.skip || 0);
    const sort = 'name';
     
    const fields = req.query.fields;
    
    const advertisements = await Advertisement.list(filter, limit, skip, sort, fields);
    res.json(advertisements);
  } catch (err) {
    next(err);
  }

});

router.get('/tags', async function(req, res, next) {
  try {
    const filter = {};

    //Extract values from Request
    const name = req.query.name;
    var tags = []
    for(var key in req.query){
      console.log(key + " : " + req.query[key]);
      filter[key] = req.query[key]
    }    
    // http://localhost:3000/api/ads?limit=2
    const limit = parseInt(req.query.limit || 10);
    // http://localhost:3000/api/ads?skip=20&limit=10
    const skip = parseInt(req.query.skip || 0);
    const sort = 'name';
     
    const fields = req.query.fields;
    
    const advertisements = await Advertisement.list(filter, limit, skip, sort, fields);
    
    advertisements.forEach(ad => {
      ad.tags.forEach(tag => {
        tags.push(tag)
      })       
    });
    
    tags = tags.filter(onlyUnique)
    
    res.json(tags);

  } catch (err) {
    next(err);
  }

});

function onlyUnique(value, index, self) { 
  return self.indexOf(value) === index;
}

module.exports = router;
