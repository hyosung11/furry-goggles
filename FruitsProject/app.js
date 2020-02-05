// Dependencies
const mongoose = require('mongoose')

// Connection URL
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

// Schema
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

const fruit = new Fruit({
    rating: 10,
    review: "Peaches are so yummy!"
});

fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "SungOh",
    age: 4
});

// person.save();

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