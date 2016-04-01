var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var PetSchema = new Schema({
  name: String,
  type: String,
  breed: String
});

var PersonSchema = new Schema({
  name: String,
  age: Number,
  current_city: String,
  ethnicity: String,
  birthdate: String,
  github_link: String,
  github_profile_image: String,
  pets: [PetSchema]
});

var Person = mongoose.model('Person', PersonSchema);
var Pet = mongoose.model('PetSchema', PetSchema);

module.exports.Person = require("./pet.js");
module.exports.Person = require("./person.js");
module.exports = Person;
