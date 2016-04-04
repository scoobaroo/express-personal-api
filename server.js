// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();
});
/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  res.json({
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/scoobaroo/express-personal-api/blob/master/README.md", // CHANGE ME
    base_url: "https://rhubarb-pie-35184.herokuapp.com/", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about Eric"},
      {method: "GET", path: "/api/hobbies", description: "List of Eric's hobbies!"},
      {method: "POST", path: "/api/hobbies", description: "List of hobbies or create one for me!"},
      {method: "DELETE", path: "/api/hobbies/:id", description: "delete a hobby for me!"}
    ]
  });
});

app.get('/api/profile', function(req,res){
  db.Person.find()
    .exec(function(err, person) {
      if (err) { return console.log("index error: " + err); }
      res.json(person);
    });
  });

app.get('/api/hobbies', function(req,res){
  db.Hobby.find()
    .exec(function(err, hobby) {
      if (err) { return console.log("index error: " + err); }
      res.json(hobby);
    });
  });

app.post('/api/hobbies', function (req, res) {
  // create new book with form data (`req.body`)
  console.log(req.body.name,req.body.years);
  var newHobby = new db.Hobby({
    name : req.body.name,
    years : req.body.years
  });
    newHobby.save(function(err, newHobby){
      if (err) {
        return console.log("save error: " + err);
      }
      console.log("saved ", newHobby.name);
      // send back the book!
      res.json(newHobby);
    });
  });

app.delete('/api/hobbies/:id', function (req, res) {
  // get book id from url params (`req.params`)
  console.log('books delete', req.params);
  var hobbyId = req.params.id;
  // find the index of the book we want to remove
  db.Hobby.findOneAndRemove({ _id: hobbyId }, function (err, deletedHobby) {
    res.json(deletedHobby);
  });
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
