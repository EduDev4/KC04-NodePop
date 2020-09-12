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
advertisementSchema.statics.lista = function(filtro, limit, skip, sort, fields) {
  const query = Agente.find(filtro);
  query.limit(limit);
  query.skip(skip);
  query.sort(sort);
  query.select(fields);
  return query.exec();
}

// crear el modelo
const Advertisement = mongoose.model('Advertisement', advertisementSchema);

// exportar el modelo
module.exports = Advertisement;
