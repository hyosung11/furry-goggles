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
