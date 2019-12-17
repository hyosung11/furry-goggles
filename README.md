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

### REPL ( Read Evaluation Print Loops)

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
