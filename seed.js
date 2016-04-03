var db = require("./models");

var Eric = {
  name: 'Eric',
  age: 30,
  current_city: 'San Francisco',
  ethnicity: 'Taiwanese',
  birthdate: 'February 21st, 1985',
  github_link: 'http://www.github.com/scoobaroo',
  github_profile_image: '<blockquote class="imgur-embed-pub" lang="en" data-id="f296daY"><a href="//imgur.com/f296daY">View post on imgur.com</a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>',
  pets: [{name: 'Snatch', type: 'Cat', breed: 'Stray'}]
};

db.Person.create(Eric, function(err, newPerson){
  if (err){
    return console.log("Error:", err);
  }
  console.log("Created new person", newPerson._id);
});

var Boxing = {
  name : 'Boxing',
  years : '1'
};

db.Hobby.create(Boxing, function(err, hobbies) {
  if(err){
    return console.log("error:",err);
  }
  console.log("Created new hobby", hobbies);
  process.exit();
});
