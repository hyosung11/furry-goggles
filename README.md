# The Complete 2020 Web Development Bootcamp (aka furry-goggles)

## Section 1: Front-End Web Development

- [Web Development Course Resources List](https://www.appbrewery.co/p/web-development-course-resources/)
How to Type Emojis
command + control + space

<hr> -> horizontal rule

## Section 4: Introduction to CSS

selector {property: value;}

## Display
- block
- inline
- inline-block
- none

- visibility: hidden;

### Common Inline Elements

- Span <span>
- Images <img>
- Anchors <a>

## Positioning

- Relative: to where element should have been
- Absolute: vis-a-vis parent element
- Fixed:

### Font Sizing

16px = 100% = 1em (the width of the capital letter M)
CSS3 - rem (root) - isn't affected by other settings

## CDN - content delivery network
- reduce latency

## Wireframe -> Mockup -> prototype (optional)


## CSS Z-Index and Stacking Order
- children sit on top of their parents
- HTML elements have a natural stacking order
- elements by default are position: static
- position: absolute takes elements out of HTML flow
- Z-Index by default is 0
- z-index: 1; brings the element closest to the user and farthest away from screen.
- z-index: -1; puts the element farthest away from user.
- position must be set to absolute, relative, or fixed to use the Z-Index; can't be the default static position.  
- review stacking order flowchart

## Media Query Breakpoints for Responsive Design
- Mobile First
- @media<type><feature>
- viewport: the size of the screen that image is being displayed on

## ID
- can be used to navigate site

## Code Refactoring
1. Readability
2. Modularity
3. Efficiency
4. Length

## Advanced CSS - Combining Selectors
- Multiple Selectors
h1, h2 {
  color: red;
}

- Hierarchical Selectors
#title .container-fluid {
  padding-top: 3%;
  text-align: left;
}

- Combined Selectors
h1.title {
  color: red;
}

## CSS - Selector Priority
1. #IDs
2. .classes
3. <elements>
- don't use inline style in your HTML

## JavaScript ES6

### keywords
alert("Hello");

### datatypes => typeof()
- strings
- numbers
- Boolean

### Methods
name.slice(x, y)

name.toUpperCase()

name.toLowerCase()

Increment++
Decrement--

### Loops
- while: checking state
- for: iterate

## Document Object Model (DOM)
get property
set property

Properties
- innerHTML
- style
- firstChild

Methods
- click()
- appendChild()
- setAttribute()

Higher Order Function - a function that takes another function as an input

document.addEventListener("keydown", respondToKey(event));

function respondToKey(event) {
  console.log("Key pressed.");
}

Callback Function - the function that gets passed in as an input

## Node.js

### REPL (Read Evaluation Print Loops)

hyosung11@HyoSungs-iMac node % node
Welcome to Node.js v12.13.1.
Type ".help" for more information.
> log
Thrown:
ReferenceError: log is not defined
> console.log("hi there!")
hi there!
undefined
> 3 + 5
8

To Exit
.exit or
control + C

### NPM - Node Package Manager

### Express - a node framework

### Section 19: Git, Github and Version Control

- commit messages in present tense convention
- git checkout to revert to previous version
- practice with branching
- Forking and Pulling Requests

### [git error fix](https://stackoverflow.com/a/19085954/11626863)

1. press 'i'
2. write merge message
3. press `esc`
4. write ':wq'
5. press `return`

## APIs - Application Programming Interface
- a set of commands, functions, protocols, and objects that programmers can use to create software or interact with an external system.
- It provides developers with standard commands for performing common operations so they don't have to write the code from scratch.
- APIs to interact with an external system.

### cURL - 'Client for URLs'

### JSON - data interchange format
- JavaScript Object Notation

### XML
- eXtensible Markup Language format

### API Calls with Parameters

### API Key - Authentication

## How to Remove node_modules
1. Create a .gitignore file in the git repository if it does not contain one
- touch .gitignore

2. Open up the .gitignore and add the following line to the file
- node_modules

3. Remove the node_modules folder from the git repository
- git rm -r --cached node_modules

4. Commit the git repository without the node modules folder
- git commit -m "Remove node_modules folder"

5. Push the repository to github
- git push origin master

6. After all of that, you should also add the gitignore and commit it to the repository

$git add .gitignore

$git commit -m "Updated the .gitignore file

$git push origin master

## EJS To Do List App
### Adding Pre-Made CSS Stylesheets to Your Website

## EJS Challenge Blog
### Express Routing Parameters

### Lodash - utility library

## Section 23: Databases

### Databases Explained: SQL vs. NoSQL

- SQL: Structured Query Language
  - Postgres and MySQL

- NoSQL: Not only Structured Query Language
  - mongoDB and redis

Working with node.js most popular databases


Structure
SQL: data in a table
- square off fields with 'null'
- structured
- relational (group related pieces of data into individual tables and link tables via IDs)

NoSQL: data represented as JSON objects
- data records don't have to be same shape or structure
- flexible
- non-relational (use references, can get repetitive and clumsy and not as efficient or fast as a SQL db)
- e.g., one to many relationship

Scalability
- NoSQL
- can be distributed

![database comparison chart](images/databaseComparisonTable.png)

## Section 24: SQL

CRUD
Create
Read
Update
Destroy

## Section 25: MongoDB

### Installing MongoDB on Mac - [x]

- `/Users/hyosung11/data/db` location of database

#### Terminal Commands

- `brew services start mongodb-community`
- `brew services stop mongodb-community`
- `ps aux | grep -v grep | grep mongod`
- `ps -A | grep mongod` stops mongodb processes
- `sudo pkill -f mongod`

### [MongoDB CRUD Operations in the Shell](https://docs.mongodb.com/manual/crud/)

#### Create

```bash
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
> use shopDB
switched to db shopDB
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
> db
shopDB
> db.products.insertOne({_id:1, name: "Pen", price: 1.20})
{ "acknowledged" : true, "insertedId" : 1 }
> show collections
products
> db
shopDB
> db.products.insertOne({_id:2, name: "Pencil", price: 0.80})
{ "acknowledged" : true, "insertedId" : 2 }
>
```

#### Reading & Queries

```bash
> db.products.find()
{ "_id" : 1, "name" : "Pen", "price" : 1.2 }
{ "_id" : 2, "name" : "Pencil", "price" : 0.8 }
> db.products.find({name: "Pencil"})
{ "_id" : 2, "name" : "Pencil", "price" : 0.8 }
> db.products.find({price: {$gt: 1}})
{ "_id" : 1, "name" : "Pen", "price" : 1.2 }
> db.products.find({_id: 1}, {name: 1})
{ "_id" : 1, "name" : "Pen" }
> db.products.find({_id: 1}, {name: 1, _id: 0})
{ "name" : "Pen" }
>
```

#### Update

```bash
> db.products.updateOne({_id: 1}, {$set: {stock: 32}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.products.find()
{ "_id" : 1, "name" : "Pen", "price" : 1.2, "stock" : 32 }
{ "_id" : 2, "name" : "Pencil", "price" : 0.8 }
> db.products.updateOne({_id: 2}, {$set: {stock: 12}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.products.find()
{ "_id" : 1, "name" : "Pen", "price" : 1.2, "stock" : 32 }
{ "_id" : 2, "name" : "Pencil", "price" : 0.8, "stock" : 12 }
>
```
#### Delete

```bash
> db.products.deleteOne({_id: 2})
{ "acknowledged" : true, "deletedCount" : 1 }
> db.products.find()
{ "_id" : 1, "name" : "Pen", "price" : 1.2, "stock" : 32 }
>
```

### Relationships in MongoDB

```bash
> db.products.insert(
...   {
...     _id: 3,
...     name: "Rubber",
...     price: 1.30,
...     stock: 43,
...     reviews: [
...       {
...         authorName: "Sally",
...         rating: 5,
...         review: "Best rubber ever"
...       },
...       {
...         authorName: "John",
...         rating: 5,
...         review: "Awesome rubber"
...       }
...     ]
...   }
... )
WriteResult({ "nInserted" : 1 })
> db.products.find()
{ "_id" : 1, "name" : "Pen", "price" : 1.2, "stock" : 32 }
{ "_id" : 3, "name" : "Rubber", "price" : 1.3, "stock" : 43, "reviews" : [ { "authorName" : "Sally", "rating" : 5, "review" : "Best rubber ever" }, { "authorName" : "John", "rating" : 5, "review" : "Awesome rubber" } ] }
> db.products.insertOne(
...   {
...     _id: 2,
...     name: "Pencil",
...     price: 0.8,
...     stock: 12,
...     reviews: [
...       {
...         authorName: "Omi",
...         rating: 4,
...         review: "Nice smooth feel in my hand"
...       },
...       {
...         authorName: "SungOh",
...         rating: 2,
...         review: "I didn't like the taste of the point."
...       }
...     ]
...   }
... )
WriteResult({ "nInserted" : 1 })
> db.products.find()
{ "_id" : 1, "name" : "Pen", "price" : 1.2, "stock" : 32 }
{ "_id" : 3, "name" : "Rubber", "price" : 1.3, "stock" : 43, "reviews" : [ { "authorName" : "Sally", "rating" : 5, "review" : "Best rubber ever" }, { "authorName" : "John", "rating" : 5, "review" : "Awesome rubber" } ] }
{ "_id" : 2, "name" : "Pencil", "price" : 0.8, "stock" : 12, "reviews" : [ { "authorName" : "Omi", "rating" : 4, "review" : "Nice smooth feel in my hand" }, { "authorName" : "SungOh", "rating" : 2, "review" : "I didn't like the taste of the point." } ] }
>
```

#### Relating Products to an Order

```bash
{
  _id : 1,
  name: "Pen",
  price: 1.20,
  stock: 32
}

{
  _id : 2,
  name: "Pencil",
  price: 0.80,
  stock: 12
}

{
  orderNumber: 3243,
  productsOrdered: [1, 2]
}
```

### Working with the Native MongoDB Driver

- Use the MongoDB native driver
- Use ODM (Object Document Mapper) called mongoose

## Section 26: Mongoose

### Introduction to [Mongoose](https://mongoosejs.com/)

- elegant mongodb object modeling for node.js

### Reading from Your Database with Mongoose

### Data Validation with Mongoose

### Updating and Deleting Data Using Mongoose

### Establishing Relationships and Embedding Documents Using Mongoose

## Section 27: Putting Everything Together

### Rendering Database Items in the ToDoList App

### Adding New Items to Our ToDoList Database

### Deleting Items from Our ToDoList Database

### Creating Custom Lists Using Express Route Parameters

### Adding New Items to the Custom ToDoLists

### Revisiting Lodash and Deleting Items from Custom ToDoLists

## Section 28: Deploying Your Web Application

### How to Deploy Web Apps with a Database

### How to Setup MongoDB Atlas

### Deploying an App with a Database to Heroku

## Section 29: Boss Level Challenge 4 - Blog Website Upgrade

## Section 30: Build Your Own RESTful API from Scratch

### What is REST?

- REpresentational State Transfer (REST)
- Client <- API -> Server
- REST is an architectural style for designing APIs (others include SOAP, GraphQL, and Falcor)
- Rules of REST
  - Use HTTP Request Verbs (CRUD equivalents)
    - GET (aka READ)
    - POST (aka CREATE)
    - PUT / PATCH (UPDATE)
      - PUT: sending entire entry
      - PATCH: sending only a piece of data
    - DELETE(aka DELETE)
  - Use specific pattern of routes/endpoint URLs

### Creating a Database with Robo 3T (GUI)

### Set Up Server

### GET, POST, DELETE Routes

### Chained Route Handling Using Express

### GET, PUT, PATCH, DELETE a Specific Article

## Section 31: Authentication & Security

### Introduction to Authentication

### Getting Set Up

### Level 1 Security - Register Users with Username and Password

### How to Review the Source Code

### Level 2 Authentication - Database Encryption

- Caesar Cipher: letter substitution cycle
- [Cryptii](https://cryptii.com/): Modular conversion, encoding and encryption online
- mongoose-encryption

### Using Environmental Variables to Keep Secrets Safe

### Level 3 - Hashing Passwords

- The Code Book by Simon Singh

### Hacking 101

- [Plain Text Offenders](https://plaintextoffenders.com/)
- Dictionary Attack (using a Hash Table)
- [Password Checker Online](http://password-checker.online-domain-tools.com/)

### Level 4 - Salting and Hashing Passwords with bcrypt

- bcrypt: one of the industry standard hashing algorithms used to keep user passwords
- salt rounds: number of times the password is hashed

### Level 5 - Cookies and Sessions

- Cookies: small pieces of information websites store on your computer.
- Session: A session can be defined as a server-side storage of information that is desired to persist throughout the user's interaction with the web site or web application.

### Using Passport.js to Add Cookies and Sessions

### Level 6 - OAuth 2.0 & How to Implement Sign In with Google

- Third Party Open Authorization
  - Granular Access Levels
  - Read/Read + Write Access
  - Revoke Access

### [Secrets Github Repo](https://github.com/londonappbrewery/Authentication-Secrets)

## Section 32: React

### Code Sandbox

### JSX Code Practice

### JavaScript Expression in JSX & ES6 Template Literals

### JSX Attributes & Styling React

### Inline Styling for React Elements

### React Components

### JavaScript ES6 - Import, Export and Modules

- [Node require() vs ES6 import/export](https://stackoverflow.com/questions/31354559/using-node-js-require-vs-es6-import-export)

### Keeper App Project

### React Props

### React DevTools

### Mapping Data to Components (emojipedai project)

- [EmojiMeanings](https://www.emojimeanings.net/list-smileys-people-whatsapp)
- [Description List element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)

### Javascript ES6 Map/Filter/Reduce/Find/FindIndex

### JavaScript ES6 Arrow functions

- [Arrow Functions](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/)

### Keeper App Project Part 2

### React Conditional Rendering with the Ternary Operator & AND Operator

- [Single Responsibility Principle](https://en.wikipedia.org/wiki/Single_responsibility_principle)

### State in React - Declarative vs Imperative Programming

- UI - f(State)
- Declarative programming is a programming paradigm … that expresses the logic of a computation without describing its control flow.
- Imperative programming is a programming paradigm that uses statements that change a program’s state

### [React Hooks](https://reactjs.org/docs/hooks-overview.html)

- Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
- [useState](https://reactjs.org/docs/hooks-reference.html#usestate)
- must use a hook inside a functional component
- Destructuring: e.g., `const [count, setCount] = useState(0);`

### JavaScript ES6 Object & Array Destructuring

- [Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- e.g., `const {name, sound, feedingRequirements: {food, water}} = cat;

### Event Handling in React

### React Forms

- [Controlled Components](https://reactjs.org/docs/forms.html#controlled-components)
- React state as the "single source of truth"

### Class Components vs Functional Components

- [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
- [Introducing Hooks](https://reactjs.org/docs/hooks-intro.html)
- [Hooks FAQ](https://reactjs.org/docs/hooks-faq.html#should-i-use-hooks-classes-or-a-mix-of-both)

### Changing Complex State

- [SyntheticEvent](https://reactjs.org/docs/events.html)

### JavaScript ES6 Spread Operator

- [Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [JavaScript set object key by variable [duplicate]
](https://stackoverflow.com/questions/11508463/javascript-set-object-key-by-variable?noredirect=1&lq=1)

### Managing a Component Tree

- [CSS text-decoration Propert](https://www.w3schools.com/cssref/pr_text_text-decoration.asp)
- [uuid](https://www.npmjs.com/package/uuid)

### Keeper App Project Part 3

### React Dependencies & Styling the Keeper App

- [material-ui/icons](https://www.npmjs.com/package/@material-ui/icons)
- [material-ui/core](https://www.npmjs.com/package/@material-ui/core)
- [Material Icons](https://material-ui.com/components/material-icons/#material-icons)
- [Material Button](https://material-ui.com/components/buttons/#floating-action-buttons)
- [Zoom API](https://material-ui.com/api/zoom/)
- [Transparent Textures](https://www.transparenttextures.com/)

## Section 33: Bonus Module: Design School 101

### Designer vs Non-Designer Thinking

### Understanding the Mood of Your Color Palette

- Red: love, energy, intensity, excitement
- Yellow: joy, intellect, attention
- Green: freshness, safety, growth
- Blue: stability, trust, serenity
- Purple: royalty, wealth, feminity

### How to Combine Colors to Create Color Palettes

- Analogous: harmonious
- Complementary: clashy
- Split Colors (three colors): less clashy and easier to look at
- Triadic Colors (three different parts of color wheel): dated from 1990s
- Monochromatic: combine a color with various amounts of white or black

### Tools for Designing with Color

- [Color Hunt](https://colorhunt.co/)
- [Flat UI Colors](https://flatuicolors.com/)
- [Material Palettes](https://www.materialpalette.com/)
- [ColorZilla](https://www.colorzilla.com/)

### Introduction to Typography

- The Serif Type Family
  - Old Style: Adobe Jenson
  - Transitional: Baskerville
  - Modern: Didot
  - Slab-Serif: American Typewriter

- The Sans-Serif Type Family
  - Grotesque: News Gothic
  - Neo-Grotesque: Helvetica
  - Humanist: Gill Sans
  - Geometric: Futura

### How Typography Determines Readability

- Open Shapes
- Ample intercharacter spacing
- Unambiguous forms
- Varying propoortions

### How to Combine Fonts Like a Pro

- combine serif and sans-serif: e.g., heading serif and sans-serif body
- two different fonts usually good typography
- appreciate the mood of the typeface and keep the era similar (don't mix different moods)
- [WhatFont](chrome extension installed)
- [Font Squirrel](https://www.fontsquirrel.com/)
- [Sky Fonts](https://www.fonts.com/browse/font-tools/skyfonts)

### User Interface (UI) Design

1. If an App was a Journey
2. How to Pretend You Have a Designer
   1. Edge Alignment
   2. Center Alignment
3. How to get more clickthrough
   1. give user reminder of the real world experience
   2. function comes before form
4. How to design if you know nothing about design
   1. start simply and then go upwards
5. Make text visible on images
   1. contrast overlay
   2. graded opacity
6. How to become an attention wizard
   1. guide the user's attention

## Section 34: AMA
