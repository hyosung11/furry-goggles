// dependencies

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let items = ['Buy Food', 'Cook Food', 'Eat Food'];
let workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

// get route

app.get('/', (req, res) => {

  const today = new Date();

  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };

  const day = today.toLocaleDateString('en-US', options);

  res.render('list', {listTitle: day, newListItems: items});

});

// post route

app.post('/', (req, res) => {

  let item = req.body.newItem;

  if (req.body.list === 'Work') {
    workItems.push(item);
    res.redirect('/work')
  } else {
    items.push(item);
    res.redirect('/');
  }

});

// work routes

app.get('/work', (req, res) => {
  res.render('list', {listTitle: 'Work List', newListItems: workItems});
})

app.post('/work', (req, res) => {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect('/work')
})

// about

app.get('/about', (req, res) => {
  res.render('about');
})


// listener
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
