// dependencies
const bodyParser = require('body-parser');
const express = require('express');
const request = require('request');
require('dotenv').config();

// console.log(process.env.API_KEY);

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

  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const apiKey = process.env.API_KEY;


  const data = {
    members: [
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };

  const jsonData = JSON.stringify(data);

  const options = {
    url: 'https://us4.api.mailchimp.com/3.0/lists/3d26701bea',
    method: 'POST',
    headers: {
      'Authorization': 'hyosung11 apiKey'
    },
    body: jsonData
  };

  request(options, function (error, response, body) {
    if (error) {
      res.send("There was an error with signing up, please try again!")
    } else {
      if (response.statusCode === 200) {
        res.send("Successfully subscribed!")
      } else {
        res.send("There was an error with signing up, please try again!")
      }
    }
  });

});

// listener
app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
