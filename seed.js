// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var Eric = {
  name: 'Eric',
  age: 30,
  current_city: 'San Francisco',
  ethnicity: 'Taiwanese',
  birthdate: 'February 21st, 1985',
  github_link: 'www.github.com/scoobaroo',
  github_profile_image: 'www.github.com/scoobaroo',
  pets: [{name: 'Snatch', type: 'Cat', breed: 'Stray'}]
};

db.Person.create(Eric, function(err, newPerson){
  if (err){
    return console.log("Error:", err);
  }
  console.log("Created new person", newPerson._id);
  process.exit(); // we're all done! Exit the program.
});

var Boxing = {
  name : 'Boxing',
  years: '1'
};

db.Hobby.create(Boxing, function(err, newPet){
  if(err){
    return console.log("error:",err);
  }
  console.log("Created new hobby", newPet._id);
  process.exit();
});
