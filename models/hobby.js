var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var HobbySchema = new Schema({
  name: String,
  years: String
});


var Hobby = mongoose.model('Hobby', HobbySchema);

// module.exports.Person = require("./person.js");
module.exports = Hobby;
