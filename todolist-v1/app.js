// dependencies

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let items = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

// get route

app.get('/', (req, res) => {

  const today = new Date();

  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };

  const day = today.toLocaleDateString('en-US', options);

  res.render('list', {kindOfDay: day, newListItems: items});

});

// post route

app.post('/', (req, res) => {
  item = req.body.newItem;

  items.push(item);

  res.redirect('/');

});



// listener
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
