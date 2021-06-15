const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  category: {type: String, unique: true},
  series: {type: String},
  model: {type: String},
  img: {type: String},
  imgTecnica: {type: String},
  pistillo:
  fijo:
  ajustable:
  profunidad:
  ajuste:
  imgTecnicaPestillo: {type: String},
  bobina:
  tapa:
  functionresitenciaDeCierre
  fuerzaDinamicaDeCierre:
  durabilidadGarantizada:
  minTemperaturaDeUso:
  maxTemperaturaDeUso:
  resistenciaAlFuego:
  certificadoSegunNorma:
  proteccionIP:
  apertura:
  ancho:
  largo:
  alto:
  caracteristicasElectricas:
  voltajeAC:
  voltajeDC:
  funcionamientoContinuo:
  tensionNominal:
  protectorDeSobretension:
  precargaMaximaDelPestilloAC:
  precargaMaximaDelPestilloDC:
  consumoDeCorrienteAC:
  consumoDeCorrienteDC:
  imgImpulsoElectrico: {type: String},



}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});


const Product = mongoose.model('Product', productSchema);

module.exports = Product;