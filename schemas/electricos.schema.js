const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const electricosSchema = new Schema({
  

  pestillo: {type: String},
  fijo: {type: Boolean, default: false}
  ajustable: {type: Boolean, default: false}
  profunidad: {type: Number},
  ajuste:
  imgTecnicaPestillo: {type: String},
  
  bobina:
  
  tapa:
  
  resistenteAlFuego: {type: Boolean, default: false};

  funcion:
  
  
  resitenciaDeCierre:
  fuerzaDinamicaDeCierre: {type: Number},
  durabilidadGarantizada: {type: Number},
  minTemperaturaDeUso: {type: Number},
  maxTemperaturaDeUso: {type: Number},
  resistenciaAlFuego: {type: Number},
  certificadoSegunNorma:
  proteccionIP:
  apertura:
  caracteristicasElectricas:
  voltajeAC: {type: Number},
  voltajeDC: {type: Number},
  funcionamientoContinuo: {type: Number},
  tensionNominal: {type: Number},
  protectorDeSobretension: {type: Number},
  precargaMaximaDelPestilloAC: {type: Number},
  precargaMaximaDelPestilloDC: {type: Number},
  consumoDeCorrienteAC: {type: Number},
  consumoDeCorrienteDC: {type: Number},
  imgImpulsoElectrico: {type: String},



}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});


const Electricos = mongoose.model('Electricos', electricosSchema);

module.exports = electricosSchema;