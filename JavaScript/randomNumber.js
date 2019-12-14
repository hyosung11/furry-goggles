// Random Number Generation

// let num = Math.random();
// num = num * 6;
// num = Math.floor(num) + 1;
// console.log(num);


// Love Calculator

let loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1; // 1-100

if (loveScore > 70) {
  console.log("Your love score is " + loveScore + "%." + " You love each other like Kanye loves Kanye.");
}

if (loveScore > 30 && loveScore <= 70) {
  console.log("Your love score is " + loveScore + "%");
}

if (loveScore <= 30) {
  console.log("Your love score is " + loveScore + "%" + " You go together like oil and water.");
}

// else {
//   console.log("Your love score is " + loveScore + "%.");
// }
console.log(loveScore);
