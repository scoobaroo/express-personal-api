var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

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

module.exports = Person;
