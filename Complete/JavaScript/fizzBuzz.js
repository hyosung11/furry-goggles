// push() - adds to the end
// pop() - off the end of the array

// let output = [];
// let count = 1;
//
// function fizzBuzz() {
//
//   while (count <= 100) {
//
//   if (count % 3 === 0 && count % 5 === 0) {
//     output.push("FizzBuzz")
//   }
//
//   else if (count % 3 === 0) {
//     output.push("Fizz")
//   }
//
//   else if (count % 5 === 0) {
//     output.push("Buzz")
//   }
//
//   else {
//     output.push(count);
//   }
//
//   count++;
//
//   }
//
//   console.log(output);
// }
//
// fizzBuzz()

// function fizzBuzz(num) {
//
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }
//
// fizzBuzz(55)


// Eloquent JavaScript Version

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    let output = '';
    if (i % 3 === 0) output+= "Fizz";
    if (i % 5 === 0) output+= "Buzz";
    console.log(output || i);
  }
}

fizzBuzz(75)
