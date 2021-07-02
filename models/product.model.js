const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const electricosSchema = require('../schemas/electricos.schema')

const productSchema = new Schema({
  category: {type: String},
  series: {type: String},
  model: {type: String, unique: true},
  descripcion: { type: String},
  imgProducto: {type: String},
  imgTecnica: {type: String},
  manualInstructivo: {type: String},
  ancho: {type: Number},
  largo: {type: Number},
  alto: {type: Number},

  fichaTecnica: { type: [ electricosSchema ], required: true }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});


const Product = mongoose.model('Product', productSchema);

module.exports = Product;