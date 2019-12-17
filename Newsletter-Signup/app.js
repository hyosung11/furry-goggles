// dependencies
const bodyParser = require('body-parser');
const express = require('express');
const request = require('request')

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));



// ROUTES

// get route
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/signup.html');
});

// post route
app.post('/', function(req, res) {

  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let email = req.body.email;

  console.log(firstName, lastName, email);

});

// listener
app.listen(3000, function() {
  console.log("Server is running on port 3000");
});


// MailChimp API Key 
// f3a6e100fc80643fb137e29c13e7693a-us4
