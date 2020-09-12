'use strict';

const mongoose = require('mongoose');

// crear un esquema (https://mongoosejs.com/docs/schematypes.html)
const advertisementSchema = mongoose.Schema({
  name: String,  
  description: String,
  price: Number,
  author: String,
  tags: [String],
  selling: Boolean
});

// método estático
advertisementSchema.statics.list = function(filter, limit, skip, sort, fields) { 
  const query = Advertisement.find(filter);
  query.limit(limit);
  query.skip(skip);
  query.sort(sort);
  query.select(fields);
  return query.exec();
}

advertisementSchema.statics.listAll = function() { 
  const query = Advertisement.find();
  return query.exec();
}

// crear el modelo
const Advertisement = mongoose.model('Advertisement', advertisementSchema);

// exportar el modelo
module.exports = Advertisement;
