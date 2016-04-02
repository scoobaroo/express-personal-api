// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

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
  // TODO: Document all your api endpoints below
  res.json({
    woops_i_has_forgot_to_document_all_my_endpoints: true, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/scoobaroo/express_self_api/README.md", // CHANGE ME
    base_url: "https://rhubarb-pie-35184.herokuapp.com/", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about Eric"}, // CHANGE ME
      {method: "POST", path: "/api/campsites", description: "E.g. Create a new campsite"} // CHANGE ME
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

  app.post('/api/pets', function (req, res) {
    // create new book with form data (`req.body`)
    event.preventDefault();
    var newPet = new db.Pet({
      name : req.body.name,
      type : req.body.type,
      breed : req.body.breed,
    });
      newPet.save(function(err, newPet){
        if (err) {
          return console.log("save error: " + err);
        }
        console.log("saved ", pet.name);
        // send back the book!
        res.json(pet);
      });
    });

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
