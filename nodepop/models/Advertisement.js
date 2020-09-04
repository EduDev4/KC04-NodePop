'use strict';

const mongoose = require('mongoose');

// crear un esquema (https://mongoosejs.com/docs/schematypes.html)
const advertisementSchema = mongoose.Schema({
  title: String,  
  description: String,
  price: Number,
  author: String
});

// crear el modelo
const Advertisement = mongoose.model('Advertisement', advertisementSchema);

// exportar el modelo
module.exports = Advertisement;
