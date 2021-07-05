const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const electricosSchema = require('../schemas/electricos.schema')

const productSchema = new Schema({
  category: {type: String},
  

  // fichaTecnica: { type: [ electricosSchema ], required: true }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});


const Product = mongoose.model('Product', productSchema);

module.exports = Product;