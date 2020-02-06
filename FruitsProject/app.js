// Dependencies
const mongoose = require('mongoose')

// Connection URL
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

// Fruit Schema
const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check your data entry, no name specified!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const mango = new Fruit({
    name: "Mango",
    rating: 9,
    review: "Sohee likes it!"
});

mango.save();

// Person Schema
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

Person.updateOne({ name: "SungOh" }, { favoriteFruit: mango }, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully updated the document.");
    }
});

// const person = new Person({
//     name: "Omi",
//     age: 8,
//     favoriteFruit: pineapple
// });

// person.save();

// const pineapple = new Fruit({
//   name: "Pineapple",
//   score: 9,
//   review: "Great fruit."
// });

// pineapple.save();

// const kiwi = new Fruit({
//     name: "Kiwi",
//     rating: 10,
//     review: "The best fruit ever!"
// });

// const orange = new Fruit({
//     name: "Orange",
//     rating: 5,
//     review: "Good choice sometimes."
// });

// const banana = new Fruit({
//     name: "Banana",
//     rating: 8,
//     review: "Omi's favorite."
// });

// Fruit.insertMany([kiwi, orange, banana], function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully saved all the fruits to fruitsDB");
//     }
// });

Fruit.find(function(err, fruits) {
    if (err) {
        console.log(err);
    } else {

        mongoose.connection.close();

        fruits.forEach(function(fruit) {
            console.log(fruit.name);
        });
    }
});

// Fruit.updateOne({ _id: "5e3b4b2df396688ca80cf010" }, { name: "Peach" }, function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully updated the document.")
//     }
// });

// Fruit.deleteOne({ _id: "5e3b4b12e02e968c57e9b617" }, function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully deleted the document");
//     }
// });


// Person.deleteMany({ name: "SungOh" }, function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully deleted all documents!");
//     }
// });