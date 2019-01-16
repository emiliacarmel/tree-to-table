const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let connectedToDB = false;

mongoose.connect("mongodb://emiliacarmel:hellocode1@ds157654.mlab.com:57654/emilia-codesmith", { useNewUrlParser: true }, () => {
  connectedToDB = true;
  console.log('Connected to MongoDB')
});

let entrySchema = new Schema({
  fruitType: String,
  city: String,
  crossStreets: String,
  nearestLandmark: String,
  fruitingSeason: String
})

module.exports = mongoose.model('Entry', entrySchema);