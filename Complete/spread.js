const citrus = ["Lime", "Lemon", "Orange"];
const fruits = ["Apple", ...citrus, "Banana", "Coconut",]

console.log(fruits);

const fullName = {
    fName: "James",
    lName: "Bond"
};

const user = {
    ...fullName,
    id: 1,
    username: "007"
}

console.log(user);