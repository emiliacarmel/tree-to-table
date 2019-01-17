const mongoose = require('mongoose');
const Schema = mongoose.Schema;



let entrySchema = new Schema({
  fruitType: String,
  city: String,
  crossStreets: String,
  nearestLandmark: String,
  fruitingSeason: String
});



module.exports = mongoose.model('Entry', entrySchema);