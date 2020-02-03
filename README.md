# furry-goggles

How to Type Emojis
command + control + space

<hr> -> horizontal rule

## CSS
selector {property: value;}

## Display
- block
- inline
- inline-block
- none

- visibility: hidden;

## Common Inline Elements
- Span <span>
- Images <img>
- Anchors <a>

## Positioning
- Relative: to where element should have been
- Absolute: vis-a-vis parent element
- Fixed:

## Font Sizing
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

## Git, Github and Version Control
- commit messages in present tense convention
- git checkout to revert to previous version

- practice with branching

- Forking and Pulling Requests

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

# Databases
## SQL NoSQL
- Structured Query Language
- Not only Structured Query Language

Working with node.js most popular databases
- SQL: Postgres and MySQL
- NoSQL: mongoDB and redis

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

CRUD
Create
Read
Update
Destroy

# mongoDB installation path
export PATH=$PATH:/usr/local/Homebrew/Library/Taps/mongodb/bin

### Install mongoDB with homebrew
Lucas · Lecture 287 · 19 days ago
Hello guys , for those struggling I installing mongodb I found this stackoverflow response very useful :)

install hombrew and run the following commands

sudo chown -R $(whoami) $(brew --prefix)/*

then

brew tap mongodb/brew

then

brew install mongodb-community@4.2

and

brew services start mongodb-community

or

mongod --config /usr/local/etc/mongod.conf

then

ps aux | grep -v grep | grep mongod

and

mongo --version

### [git error fix](https://stackoverflow.com/a/19085954/11626863)

1. press 'i'
2. write merge message
3. press `esc`
4. write ':wq'
5. press `return`